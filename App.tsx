import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { Layout } from './components/Layout';
import ChatWidget from './components/ChatWidget';
import { SERVICES, SYMPTOM_CATEGORIES, LOCATIONS, TESTIMONIALS, BLOG_POSTS } from './constants';
import { Language, ServiceData } from './types';

// Minimal Link Component
const Link: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({ to, className, children }) => {
  return <a href={`#${to}`} className={className}>{children}</a>;
};

// --- Page Components ---

// 1. Home Page
const HomePage: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Hospital Interior" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_20s_infinite_ease-in-out] transform transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-1.5 text-sm font-semibold text-primary-200 mb-8 backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {language === 'en' ? 'Serving Warri & Asaba Since 2002' : 'We don dey since 2002 for Warri & Asaba'}
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              {language === 'en' ? 'World-Class Healthcare,' : 'Better Healthcare,'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">{language === 'en' ? 'Right Where You Are.' : 'For Your Backyard.'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              {language === 'en' 
                ? 'Experience compassionate care, cutting-edge technology, and expert specialists working 24/7 to ensure your family’s well-being.' 
                : 'We get correct doctors and latest machines wey dey work 24/7 to make sure say you and your family dey okay properly.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/symptoms" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-900/50 transition-all transform hover:-translate-y-1 hover:shadow-primary-600/50 flex items-center justify-center gap-2">
                <Icons.Activity size={20} />
                {language === 'en' ? 'Check Symptoms' : 'Check Wetin Do You'}
              </Link>
              <Link to="/contact" className="bg-white hover:bg-gray-50 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <Icons.Calendar size={20} />
                {language === 'en' ? 'Book Appointment' : 'Book Doctor'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{language === 'en' ? 'Why Choose GCMC?' : 'Why You Suppose Choose Us?'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{language === 'en' ? 'We combine medical expertise with spiritual compassion.' : 'We join better doctor work with God hand.'}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Icons.Clock, title: { en: '24/7 Availability', pidgin: 'We No Dey Close' }, desc: { en: 'Our doors never close. Doctors and emergency services are available round the clock.', pidgin: 'Whether day or night, doctor dey seat wait for you.' } },
              { icon: Icons.ShieldCheck, title: { en: 'Certified Specialists', pidgin: 'Correct Doctors' }, desc: { en: 'Qualified and trained doctors and medical personnels across various medical fields.', pidgin: 'We better doctors and medical people for different different sickness.' } },
              { icon: Icons.HeartPulse, title: { en: 'Modern Equipment', pidgin: 'New Machines' }, desc: { en: 'Advanced diagnostic and surgical technology for precise treatment.', pidgin: 'We get machine wey dey see inside body clear.' } }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:bg-primary-50 transition-colors group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title[language]}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">{language === 'en' ? 'Departments' : 'Wetin We De Do'}</span>
              <h2 className="text-4xl font-bold text-slate-900">
                {language === 'en' ? 'Comprehensive Care' : 'Complete Body Care'}
              </h2>
            </div>
            <Link to="/services" className="text-primary-600 font-bold hover:text-primary-700 flex items-center gap-2 group">
              {language === 'en' ? 'View All Services' : 'See Everything'} <Icons.ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => {
               const IconComponent = (Icons as any)[service.iconName] || Icons.Activity;
               return (
                <div key={service.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title.en} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                       <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg inline-flex items-center justify-center mb-2">
                          <IconComponent size={20} />
                       </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">{service.title[language]}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">{service.description[language]}</p>
                    <Link to="/contact" className="inline-block text-sm font-bold text-slate-900 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600 transition-all">
                      {language === 'en' ? 'Book Appointment' : 'Book Appointment'}
                    </Link>
                  </div>
                </div>
               )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            {language === 'en' ? 'Trusted by Families' : 'People Trust Us Well'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-10 rounded-3xl relative hover:shadow-lg transition-shadow">
                <Icons.Quote className="text-primary-200 mb-6" size={48} />
                <p className="text-lg text-slate-700 mb-8 italic leading-relaxed">"{t.text[language]}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">{t.name}</div>
                    <div className="text-sm text-primary-600 font-medium">{t.role[language]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// 2. About Page
const AboutPage: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="animate-fade-in">
      {/* About Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516574187841-693083f69382?auto=format&fit=crop&q=80&w=2000" 
          alt="Medical Team" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight animate-fade-in-up">
            {language === 'en' ? 'About GCMC' : 'About Us'}
          </h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {language === 'en' ? 'Excellence in Healthcare, Rooted in Faith.' : 'Better Healthcare with God Hand.'}
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-white -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 animate-slide-in-left">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                <Icons.Target size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{language === 'en' ? 'Our Mission' : 'Our Mission'}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {language === 'en' 
                  ? 'To provide holistic, compassionate, and world-class healthcare services that enhance the quality of life for our community, driven by Christian values.' 
                  : 'To give complete and kind healthcare wey be world-class to make life better for our people, as God want am.'}
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-primary-900 p-10 rounded-3xl shadow-xl text-white animate-slide-in-right">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-primary-300 mb-6">
                <Icons.Eye size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{language === 'en' ? 'Our Vision' : 'Our Vision'}</h3>
              <p className="text-primary-100 text-lg leading-relaxed">
                {language === 'en'
                  ? 'To be the premier medical centre in the Niger Delta region, recognized for excellence in patient care, advanced medical practices, and community service.'
                  : 'To be the number one hospital for Niger Delta, wey everybody know say dem sabi care for person well well.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
             <div className="lg:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hospital History" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
             </div>
             <div className="lg:w-1/2">
                <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">{language === 'en' ? 'Our History' : 'Our Story'}</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">{language === 'en' ? 'A Legacy of Care' : 'Since 2002 We Don Dey'}</h2>
                <div className="prose prose-lg text-gray-600 space-y-6">
                  <p>
                    {language === 'en'
                      ? 'Founded in 2002, Group Christian Medical Centre (GCMC) started with a singular vision: to bridge the gap between faith-based compassion and modern medical science. Located in the heart of Effurun, Warri, inside the serene Mosheshe Estate, we established a sanctuary for healing.'
                      : 'We start for 2002 with one mind: to join God work and hospital work together. We dey inside Mosheshe Estate for Warri, place wey quiet well well for person to recover.'}
                  </p>
                  <p>
                    {language === 'en'
                      ? 'Over the decades, we have expanded to Asaba and grown our team to include over 50 specialists. From our humble beginnings, we have evolved into a multi-specialty hospital known for successful surgeries, advanced neonatal care, and 24/7 emergency readiness.'
                      : 'As time dey go, we don expand go Asaba and we get pass 50 big doctors now. From small beginning, we don turn big hospital wey sabi do surgery well and care for small pikin.'}
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">{language === 'en' ? 'Our Core Values' : 'Wetin We Stand On'}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Icons.Heart, title: 'Compassion', color: 'bg-red-50 text-red-500' },
              { icon: Icons.Award, title: 'Excellence', color: 'bg-blue-50 text-blue-500' },
              { icon: Icons.Shield, title: 'Integrity', color: 'bg-green-50 text-green-500' },
              { icon: Icons.Users, title: 'Teamwork', color: 'bg-purple-50 text-purple-500' },
            ].map((val, idx) => (
               <div key={idx} className={`${val.color} p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105`}>
                 <val.icon size={32} />
                 <span className="font-bold text-lg text-slate-800">{val.title}</span>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// 3. Services Page
const ServicesPage: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">{language === 'en' ? 'Our Services' : 'Wetin We Dey Do'}</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
        {language === 'en' ? 'Comprehensive healthcare solutions tailored to your needs.' : 'Correct treatment for any kind body pain or wahala.'}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
        {SERVICES.map((service) => {
          const IconComponent = (Icons as any)[service.iconName] || Icons.Activity;
          return (
            <div key={service.id} className="bg-white rounded-xl shadow border border-gray-100 flex flex-col overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-48 overflow-hidden relative">
                 <img src={service.image} alt={service.title.en} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="text-white flex items-center gap-2">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                            <IconComponent size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold">{service.title[language]}</h3>
                    </div>
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6 flex-grow">{service.description[language]}</p>
                <Link to="/contact" className="text-center bg-slate-100 hover:bg-primary-600 hover:text-white text-slate-800 py-2 rounded-lg font-semibold transition-colors">
                  {language === 'en' ? 'Book Appointment' : 'Book Appointment'}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 4. Symptoms Checker Page
const SymptomCheckerPage: React.FC<{ language: Language }> = ({ language }) => {
  const [activeTab, setActiveTab] = useState(SYMPTOM_CATEGORIES[0].id);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Symptom Checker' : 'Check Wetin Do You'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Select a category to see common symptoms and the services we provide to treat them.'
              : 'Pick whether na Man, Woman or Pikin, make we show you wetin fit dey worry you and who go treat you.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[500px] animate-fade-in-up">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-64 bg-slate-100 p-4 border-r border-slate-200">
            <h3 className="font-bold text-gray-500 uppercase text-xs mb-4 tracking-wider pl-3">
              {language === 'en' ? 'Categories' : 'Select Person'}
            </h3>
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {SYMPTOM_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
                    activeTab === cat.id 
                      ? 'bg-primary-600 text-white shadow-md' 
                      : 'hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.id === 'women' && <Icons.User className="w-4 h-4" />}
                  {cat.id === 'men' && <Icons.UserCheck className="w-4 h-4" />}
                  {cat.id === 'children' && <Icons.Baby className="w-4 h-4" />}
                  {cat.id === 'general' && <Icons.Activity className="w-4 h-4" />}
                  {cat.id === 'lab' && <Icons.TestTube className="w-4 h-4" />}
                  {cat.label[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8">
            {SYMPTOM_CATEGORIES.map((cat) => {
              if (cat.id !== activeTab) return null;
              return (
                <div key={cat.id} className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-primary-600">{cat.label[language]}</span> 
                    <span className="text-gray-400 font-light">/ {language === 'en' ? 'Common Issues' : 'Wahala'}</span>
                  </h2>
                  
                  <div className="grid gap-4">
                    {cat.symptoms.map((symptom, idx) => {
                      const service = SERVICES.find(s => s.id === symptom.recommendedService);
                      return (
                        <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:border-primary-400 transition-colors bg-slate-50/50">
                          <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                            <div>
                              <h4 className="font-bold text-lg text-slate-800">{symptom.name[language]}</h4>
                              <p className="text-sm text-gray-500 mt-1">
                                {language === 'en' ? 'Recommended Specialist:' : 'Doctor to see:'} <span className="text-primary-700 font-medium">{service?.title[language]}</span>
                              </p>
                            </div>
                            <Link 
                              to="/contact" 
                              className="bg-white border border-gray-300 text-gray-700 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                            >
                              {language === 'en' ? 'Book Appointment' : 'Book Appointment'}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-100 flex gap-3">
                    <Icons.AlertTriangle className="flex-shrink-0" />
                    <p>
                      {language === 'en' 
                        ? 'Disclaimer: This is for informational purposes only. Please visit the hospital for a proper diagnosis.'
                        : 'Abeg note: Na just information be this. Come hospital make doctor check you well well.'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. LocationsPage
const LocationsPage: React.FC<{ language: Language, setLocationContext: (ctx: string) => void }> = ({ language, setLocationContext }) => {
  const [expandedLoc, setExpandedLoc] = useState<string | null>(null);
  
  const navigate = (path: string) => {
      window.location.hash = path;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">{language === 'en' ? 'Our Locations' : 'Where We Dey'}</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {LOCATIONS.map((loc) => {
           const locationServices = SERVICES.filter(s => loc.availableServices.includes(s.id));

           return (
            <div key={loc.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col animate-fade-in-up">
              <div className="h-48 bg-gray-200 relative">
                 <img 
                   src={loc.id === 'warri-main' ? "https://images.unsplash.com/photo-1587351021759-3e566b9af923?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&q=80&w=800"} 
                   alt={loc.name} 
                   className="w-full h-full object-cover" 
                 />
                 <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary-700 backdrop-blur-sm shadow">
                   Open 24/7
                 </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{loc.name}</h3>
                <p className="text-gray-600 mb-4 flex items-start gap-2">
                  <Icons.MapPin size={18} className="mt-1 text-primary-500 flex-shrink-0" />
                  {loc.address}
                </p>
                <p className="text-gray-600 mb-6 flex items-center gap-2">
                  <Icons.Phone size={18} className="text-primary-500 flex-shrink-0" />
                  {loc.phone}
                </p>
                
                <div className="mt-auto space-y-3">
                   {/* Expand Services Button */}
                   <button 
                     onClick={() => setExpandedLoc(expandedLoc === loc.id ? null : loc.id)}
                     className="w-full py-2 px-4 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center justify-between group transition-colors"
                   >
                     {language === 'en' ? 'View Services Provided' : 'See Wetin Dey Here'}
                     <Icons.ChevronDown className={`transform transition-transform ${expandedLoc === loc.id ? 'rotate-180' : ''}`} size={16} />
                   </button>

                   {/* Expanded List */}
                   {expandedLoc === loc.id && (
                     <div className="bg-slate-50 p-4 rounded-lg border border-gray-100 text-sm animate-in slide-in-from-top-2">
                       <h4 className="font-bold mb-2 text-primary-700">{language === 'en' ? 'Available Services:' : 'Wetin We Get:'}</h4>
                       <div className="flex flex-wrap gap-2">
                         {locationServices.map(s => (
                           <span key={s.id} className="bg-white border border-gray-200 px-2 py-1 rounded text-xs text-gray-700">
                             {s.title[language]}
                           </span>
                         ))}
                       </div>
                     </div>
                   )}

                   <div className="flex gap-3 pt-2">
                      <button 
                        onClick={() => {
                           navigate('/contact');
                        }}
                        className="flex-1 bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <Icons.Calendar size={18} />
                        {language === 'en' ? 'Book' : 'Book'}
                      </button>

                      <button 
                        onClick={() => {
                           setLocationContext(loc.name);
                           alert(language === 'en' ? `Opening chat for ${loc.name}. (Check bottom right)` : `We don open chat for ${loc.name}. (Check under)`);
                        }}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <Icons.MessageSquare size={18} />
                        {language === 'en' ? 'Chat' : 'Chat'}
                      </button>
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 6. Blog Page
const BlogPage: React.FC<{ language: Language }> = ({ language }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Show first 3 posts initially, all if expanded
  const visiblePosts = expanded ? BLOG_POSTS : BLOG_POSTS.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{language === 'en' ? 'Health Blog' : 'Health Gist'}</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          {language === 'en' 
            ? 'Latest health tips and news from our medical experts.' 
            : 'Latest gist about how to take care of your body from our doctors.'}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post, idx) => (
          <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="h-48 overflow-hidden">
               <img src={post.image} alt="Blog" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <span className="text-xs text-primary-600 font-bold uppercase tracking-wider mb-2 block">{post.date}</span>
              <h2 className="text-xl font-bold mb-3 hover:text-primary-700 line-clamp-2">{post.title[language]}</h2>
              <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{post.summary[language]}</p>
              <button className="text-primary-600 font-bold text-sm flex items-center gap-1 group mt-auto">
                {language === 'en' ? 'Read More' : 'Read Full Gist'} 
                <Icons.ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {BLOG_POSTS.length > 3 && (
        <div className="mt-12 text-center">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="bg-white border border-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto"
          >
            {expanded 
              ? (language === 'en' ? 'Show Less' : 'Hide Some') 
              : (language === 'en' ? 'Load More Articles' : 'Show More Gist')
            }
            {expanded ? <Icons.ChevronUp size={20} /> : <Icons.ChevronDown size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

// 7. Contact Page
const ContactPage: React.FC<{ language: Language }> = ({ language }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icons.Check size={40} />
        </div>
        <h2 className="text-3xl font-bold mb-4">{language === 'en' ? 'Request Sent!' : 'We don hear you!'}</h2>
        <p className="text-gray-600 mb-8">
          {language === 'en' ? 'We will get back to you shortly.' : 'We go call you sharp sharp.'}
        </p>
        <button onClick={() => setStatus('idle')} className="text-primary-600 hover:underline">
          {language === 'en' ? 'Send another request' : 'Send another one'}
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up">
        
        {/* Contact Info */}
        <div className="bg-primary-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6">{language === 'en' ? 'Contact Information' : 'How to Reach Us'}</h2>
            <p className="text-primary-200 mb-8">
              {language === 'en' ? 'Fill up the form and our team will get back to you within 24 hours.' : 'Fill the form, we go reply you before day break.'}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icons.Phone className="text-primary-400 mt-1" />
                <span>+234 800 123 4567</span>
              </div>
              <div className="flex items-start gap-4">
                <Icons.Mail className="text-primary-400 mt-1" />
                <span>info@gcmcwarri.com</span>
              </div>
              <div className="flex items-start gap-4">
                <Icons.MapPin className="text-primary-400 mt-1" />
                <span>Inside Mosheshe Estate, Airport Road, Effurun - Warri</span>
              </div>
              <div className="flex items-start gap-4">
                <Icons.MapPin className="text-primary-400 mt-1" />
                <span>45 Nnebisi Road, Asaba</span>
              </div>
            </div>
          </div>
          <div className="mt-12 flex gap-4">
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer"><Icons.Facebook size={20} /></div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer"><Icons.Twitter size={20} /></div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer"><Icons.Instagram size={20} /></div>
          </div>
        </div>

        {/* Form */}
        <div className="p-10 md:w-3/5">
           <h2 className="text-2xl font-bold text-gray-800 mb-6">{language === 'en' ? 'Send us a Message' : 'Send Message'}</h2>
           <form onSubmit={handleSubmit} className="space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-700">{language === 'en' ? 'First Name' : 'First Name'}</label>
                 <input required type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-700">{language === 'en' ? 'Last Name' : 'Last Name'}</label>
                 <input required type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow" />
               </div>
             </div>
             
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-700">{language === 'en' ? 'Email' : 'Email Address'}</label>
               <input required type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow" />
             </div>

             <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{language === 'en' ? 'Service Interested In' : 'Wetin You Need?'}</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white transition-shadow">
                  <option value="">Select Service...</option>
                  <option value="General">General Inquiry</option>
                  <option value="Surgery">Surgery</option>
                  <option value="OBGYN">Obsetrics</option>
                  <option value="Lab">Laboratory</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                </select>
             </div>

             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-700">{language === 'en' ? 'Message' : 'Your Message'}</label>
               <textarea required rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow"></textarea>
             </div>

             <button 
               type="submit" 
               disabled={status === 'submitting'}
               className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg shadow-primary-600/30"
             >
               {status === 'submitting' ? <Icons.Loader2 className="animate-spin" /> : <Icons.Send size={18} />}
               {language === 'en' ? 'Submit Request' : 'Send Am'}
             </button>
           </form>
        </div>
      </div>
    </div>
  );
};


// Main App Component
const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [locationContext, setLocationContext] = useState<string>('');
  const [currentPath, setCurrentPath] = useState<string>(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.slice(1) || '/';
      setCurrentPath(path);
      window.scrollTo(0, 0); // Reset scroll on route change
    };

    // Ensure initial path
    if (!window.location.hash) {
      window.location.hash = '/';
    } else {
      // Sync state with current hash if it exists
      setCurrentPath(window.location.hash.slice(1));
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/': return <HomePage language={language} />;
      case '/about': return <AboutPage language={language} />;
      case '/services': return <ServicesPage language={language} />;
      case '/symptoms': return <SymptomCheckerPage language={language} />;
      case '/locations': return <LocationsPage language={language} setLocationContext={setLocationContext} />;
      case '/blog': return <BlogPage language={language} />;
      case '/contact': return <ContactPage language={language} />;
      case '/terms': return <div className="p-20 text-center">Terms of Service Placeholder</div>;
      default: return <HomePage language={language} />;
    }
  };

  return (
    <>
      <Layout language={language} setLanguage={setLanguage} currentPath={currentPath}>
        {renderPage()}
      </Layout>
      <ChatWidget language={language} locationContext={locationContext} />
    </>
  );
};

export default App;