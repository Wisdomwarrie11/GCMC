import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Language } from '../types';

interface ChatWidgetProps {
  language: Language;
  locationContext?: string; // Optional context if chat is triggered from a specific location page
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ language, locationContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      const greeting = language === 'pidgin' 
        ? "How far! I be GCMC assistant. Wetin dey do you? I fit help you know who to see."
        : "Hello! I am the GCMC virtual assistant. How can I help you today?";
      setMessages([{ role: 'model', text: greeting }]);
    }
  }, [isOpen, language, messages.length]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      // Filter out error messages from history before sending to API
      const apiHistory = newHistory.filter(m => !m.isError);
      
      const response = await sendMessageToGemini(
        userMsg, 
        apiHistory, 
        language, 
        locationContext
      );
      
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Network error. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-primary-600 p-4 flex justify-between items-center text-white">
            <div>
              <h3 className="font-bold text-lg">GCMC Assistant</h3>
              <p className="text-xs text-primary-100">
                {language === 'pidgin' ? 'We dey answer 24/7' : 'Online 24/7'}
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-primary-700 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 scrollbar-hide space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg rounded-tl-none border border-gray-200 shadow-sm">
                  <Loader2 className="animate-spin text-primary-600" size={20} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={language === 'pidgin' ? "Type your wahala here..." : "Type your message..."}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;