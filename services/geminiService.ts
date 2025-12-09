import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey: apiKey });
} else {
  console.warn("API_KEY is missing. Chat functionality will be disabled.");
}

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[],
  language: 'en' | 'pidgin',
  locationContext?: string
): Promise<string> => {
  if (!ai) {
    return "Chat service is currently unavailable. Please check configuration.";
  }

  const systemInstruction = `
    You are a friendly, professional, and helpful medical support assistant for Group Christian Medical Centre (GCMC), specifically the Warri Branch inside Mosheshe Estate.
    
    Current User Language: ${language === 'pidgin' ? 'Nigerian Pidgin English' : 'English'}.
    Location Context: ${locationContext || 'General Hospital Inquiry'}.
    
    Your goal is to assist users with:
    1. Identifying which hospital department they should visit based on symptoms.
    2. Providing information about hospital services (Surgery, OB/GYN, ENT, 24/7 Ambulance, Pharmacy, etc.).
    3. General inquiries about the hospital (Established 2002, 24/7 operation).
    
    CRITICAL RULES:
    - DO NOT provide medical diagnoses. Always advise the user to come to the hospital to see a doctor.
    - If the user speaks Pidgin, reply in Nigerian Pidgin. If English, reply in English.
    - Be empathetic and reassuring.
    - If asked about emergency, tell them to call the ambulance line immediately (+234 800 123 4567) or come to the hospital.
  `;

  try {
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: chatHistory
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "I'm having trouble understanding. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I am currently experiencing technical difficulties. Please try again later.";
  }
};