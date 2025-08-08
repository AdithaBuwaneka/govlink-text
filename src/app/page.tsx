// app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
// --- ELEGANT SRI LANKAN BACKGROUND COMPONENT ---
const SriLankanBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main background image */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
        <div 
          className="absolute inset-0 opacity-55 dark:opacity-15 bg-center bg-no-repeat bg-cover transition-opacity duration-1000"
          style={{
            backgroundImage: 'url("/2.png")',
            backgroundPosition: 'center 20%',
            filter: 'saturate(1.2) brightness(1.1)',
          }}
        ></div>
        {/* Overlay gradients for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 dark:from-background/40 dark:via-transparent dark:to-background/60"></div>
      </div>
      
      {/* Enhanced lotus-inspired accent patterns */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FFC72C]/8 dark:bg-[#FFC72C]/4 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#8D153A]/8 dark:bg-[#8D153A]/4 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5722]/6 dark:bg-[#FF5722]/3 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        {/* Additional subtle accents */}
        <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-[#FFA726]/6 dark:bg-[#FFA726]/3 rounded-full blur-2xl animate-pulse" style={{animationDuration: '14s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/6 left-1/5 w-56 h-56 bg-[#FF9800]/5 dark:bg-[#FF9800]/2 rounded-full blur-3xl animate-pulse" style={{animationDuration: '16s', animationDelay: '6s'}}></div>
      </div>
    </div>
  );
};
// --- BEAUTIFUL SRI LANKAN ICON COMPONENTS ---
// Beautiful Detailed Lotus Flower Icon
const LotusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100">
    {/* Outer layer petals */}
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(36 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(72 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(108 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(144 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(180 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(216 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(252 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(288 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(324 50 50)"/>

    {/* Middle layer petals */}
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(18 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(54 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(90 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(126 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(162 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(198 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(234 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(270 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(306 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(342 50 50)"/>

    {/* Inner petals */}
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(45 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(90 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(135 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(180 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(225 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(270 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(315 50 50)"/>

    {/* Center */}
    <circle cx="50" cy="50" r="7" fill="#FFC72C"/>
    <circle cx="50" cy="50" r="3" fill="#FF8F00"/>
  </svg>
);

// --- OTHER ICON COMPONENTS ---
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DocumentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// Duplicate LotusIcon removed - using the one defined above

// Header component imported from components/Header.tsx

// --- STUNNING HERO SECTION ---
const Hero = () => {
  const [searchText, setSearchText] = useState('');

  const placeholderTexts = [
    "How do I renew my passport?",
    "Where can I register my business?",
    "How to apply for a driving license?",
    "What documents do I need for marriage registration?"
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholderTexts.length]);

  // Allow Shift+Enter to insert newline, Enter (without Shift) will submit the form
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {
      // Insert newline without submitting the form
      e.stopPropagation();
      // Let the default newline behavior happen
      return;
    }
    if (e.key === 'Enter') {
      // Prevent adding a newline so the form can submit cleanly
      e.preventDefault();
      // Find the closest form and submit it
      const form = (e.currentTarget as HTMLTextAreaElement).closest('form') as HTMLFormElement | null;
      if (form) form.requestSubmit();
    }
  };

  return (
    <section className="relative h-screen flex items-start justify-center overflow-hidden pt-2 sm:pt-3 md:pt-4">
      <div className="container mx-auto px-4 sm:px-6 py-0 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Compact Hero Content */}
          <div className="mb-2 sm:mb-3 animate-fade-in-up">
            <div className="flex flex-col items-center mb-2">
              <div className="relative mb-1">
                <LotusIcon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4">
              <span className="block text-foreground mb-1">Simplifying Government</span>
              <span className="block text-gradient animate-title-wave">for Every Sri Lankan</span>
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-[#FFC72C] via-[#FF5722] to-[#8D153A] mx-auto rounded-full shadow-lg"></div>
          </div>
          
          {/* Compact Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light px-4 sm:px-0" style={{animationDelay: '0.2s'}}>
            Ask questions, find services, and access government information instantly.<br className="hidden sm:block" />
            <span className="text-foreground/80 font-medium">Your direct link to public services in Sri Lanka.</span>
          </p>
          
          {/* Compact Search Interface */}
          <div className="max-w-3xl mx-auto animate-fade-in-up px-4 sm:px-0" style={{animationDelay: '0.4s'}}>
            <form action="/chat" method="GET" className="relative group mb-4">
              <div className="relative bg-card/90 dark:bg-card/95 backdrop-blur-md border-2 border-border/50 hover:border-[#FFC72C]/70 rounded-xl p-1.5 transition-all duration-500 hover:shadow-2xl shadow-lg modern-card">
                <textarea
                  name="q"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-foreground placeholder-muted-foreground p-4 pr-16 rounded-lg resize-none focus:outline-none text-base sm:text-lg leading-relaxed border-none font-medium"
                  placeholder={placeholderTexts[currentPlaceholder]}
                  rows={1}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = `${Math.max(target.scrollHeight, 50)}px`;
                  }}
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-[#FFC72C] via-[#FF5722] to-[#8D153A] hover:from-[#FF5722] hover:via-[#8D153A] hover:to-[#FFC72C] rounded-lg transition-all duration-300 hover:scale-110 shadow-xl group hover:shadow-2xl"
                >
                  <ArrowRightIcon className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Compact Suggestions */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {["🛂 Passport Renewal", "🏢 Business Registration", "💍 Marriage Certificate", "🚗 Driving License"].map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSearchText(suggestion.split(' ').slice(1).join(' '))}
                    className="px-4 py-2 bg-card/80 hover:bg-accent/80 border border-border/50 hover:border-[#FFC72C]/60 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg backdrop-blur-sm modern-card"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </form>
            
            {/* Compact Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>Trusted by 50K+ Citizens</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                <span>Government Endorsed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

// --- PREMIUM FEATURES SECTION ---
const Features = () => {
  const featuresList = [
    { 
      icon: <DocumentIcon />, 
      title: "Access Forms & Documents", 
      description: "Instantly find and download official government forms for passports, licenses, and more.",
      color: "#FF5722",
      benefits: ["📥 Instant Downloads", "🕒 24/7 Availability", "📁 Multiple Formats"]
    },
    { 
      icon: <InfoIcon />, 
      title: "Get Instant Information", 
      description: "Ask any question about public services and get clear, step-by-step guidance.",
      color: "#008060",
      benefits: ["⚡ Real-time Answers", "📋 Step-by-step Guides", "🌐 Multi-language Support"]
    },
    { 
      icon: <CalendarIcon />, 
      title: "Schedule Appointments", 
      description: "Find available slots and book appointments with government departments online.",
      color: "#FFC72C",
      benefits: ["📅 Online Booking", "📱 SMS Reminders", "🔄 Easy Rescheduling"]
    },
  ];
  
  return (
    <section id="services" className="py-12 sm:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Compact Section Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-card/90 dark:bg-card/95 backdrop-blur-md px-4 py-2 rounded-full border border-border/50 mb-4 modern-card">
            <LotusIcon className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            <span className="block text-foreground mb-1">Everything You Need,</span>
            <span className="block text-gradient">All in One Place</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            GovLink is designed to make your interaction with government services seamless and efficient.
          </p>
        </div>        
        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-card/90 dark:bg-card/95 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-border/50 hover:border-[#FFC72C]/70 hover:shadow-2xl transition-all duration-500 animate-fade-in-up modern-card hover-lift"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Enhanced Icon Container */}
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                   style={{
                     background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                     border: `2px solid ${feature.color}30`
                   }}>
                <div className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110" style={{color: feature.color}}>
                  {feature.icon}
                </div>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{background: `radial-gradient(circle, ${feature.color}15, transparent 70%)`}}>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-[#FFC72C] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>

              {/* Enhanced Benefits */}
              <div className="space-y-2 sm:space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3 text-xs sm:text-sm group/benefit hover:translate-x-1 transition-transform duration-200">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FFC72C] to-[#FF5722] flex items-center justify-center text-white text-xs font-bold shadow-md">
                      ✓
                    </div>
                    <span className="text-muted-foreground group-hover/benefit:text-foreground transition-colors duration-200">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC72C]/5 via-transparent to-[#FF5722]/5 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ABOUT SECTION ---
const About = () => (
  <section id="about" className="py-16 sm:py-20 relative">
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      {/* Centered Section Header */}
      <div className="text-center mb-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-card/90 dark:bg-card/95 backdrop-blur-md px-4 py-2 rounded-full border border-border/50 mb-4 modern-card">
          <LotusIcon className="w-4 h-4" />
          <span className="text-xs sm:text-sm font-medium text-foreground">About GovLink</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Streamlined Left Content */}
        <div className="animate-fade-in-up">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="block text-foreground">Bridging the Gap Between</span>
            <span className="block text-gradient">Citizens & Government</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            Making government services accessible, transparent, and efficient for every Sri Lankan citizen.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <div>
                <span className="font-semibold text-sm">Simplified Access</span>
                <p className="text-muted-foreground text-sm">One platform for all services</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-r from-[#008060] to-[#FFC72C] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <div>
                <span className="font-semibold text-sm">24/7 Availability</span>
                <p className="text-muted-foreground text-sm">Access anytime, anywhere</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-r from-[#FF5722] to-[#8D153A] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <div>
                <span className="font-semibold text-sm">Transparent Process</span>
                <p className="text-muted-foreground text-sm">Clear step-by-step guidance</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-gradient-to-r from-[#FFC72C] via-[#FF5722] to-[#8D153A] hover:from-[#FF5722] hover:via-[#8D153A] hover:to-[#FFC72C] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg">
              Learn More
            </button>
            <button className="border-2 border-[#008060] text-[#008060] hover:bg-[#008060] hover:text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105">
              Our Mission
            </button>
          </div>
        </div>
        
        {/* Enhanced Right Side with Image and Stats */}
        <div className="animate-fade-in-up space-y-0" style={{animationDelay: '0.2s'}}>
          {/* Hero Image */}
          <img 
            src="/4.png" 
            alt="GovLink Support Team" 
            className="w-full h-auto opacity-100 dark:opacity-60 max-w-md mx-auto lg:max-w-full block"
            style={{
              filter: 'saturate(1.1) brightness(1.05)',
              marginBottom: '0px'
            }}
          />
          
          {/* Horizontal Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3" style={{marginTop: '0px'}}>
            <div className="text-center p-2 bg-card/90 dark:bg-card/95 backdrop-blur-md rounded-lg border border-border/50 modern-card">
              <div className="text-lg font-bold text-gradient mb-0.5">50K+</div>
              <div className="text-muted-foreground text-xs leading-tight">Citizens Served</div>
            </div>
            
            <div className="text-center p-2 bg-card/90 dark:bg-card/95 backdrop-blur-md rounded-lg border border-border/50 modern-card">
              <div className="text-lg font-bold text-gradient mb-0.5">200+</div>
              <div className="text-muted-foreground text-xs leading-tight">Government Forms</div>
            </div>
            
            <div className="text-center p-2 bg-card/90 dark:bg-card/95 backdrop-blur-md rounded-lg border border-border/50 modern-card">
              <div className="text-lg font-bold text-gradient mb-0.5">25</div>
              <div className="text-muted-foreground text-xs leading-tight">Departments</div>
            </div>
            
            <div className="text-center p-2 bg-card/90 dark:bg-card/95 backdrop-blur-md rounded-lg border border-border/50 modern-card">
              <div className="text-lg font-bold text-gradient mb-0.5">99.8%</div>
              <div className="text-muted-foreground text-xs leading-tight">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- CONTACT SECTION ---
const Contact = () => (
  <section id="contact" className="py-16 sm:py-20 relative">
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-card/90 dark:bg-card/95 backdrop-blur-md px-4 py-2 rounded-full border border-border/50 mb-4 modern-card">
            <LotusIcon className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Get in Touch</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block text-foreground mb-1">Need Help?</span>
            <span className="block text-gradient">We're Here for You</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about government services? Our support team is ready to assist you.
          </p>
        </div>
        
        {/* Enhanced Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {/* Phone */}
          <div className="group text-center p-6 sm:p-8 bg-card/90 dark:bg-card/95 backdrop-blur-md rounded-xl border border-border/50 hover:border-[#FFC72C]/70 hover:shadow-2xl transition-all duration-500 modern-card hover-lift">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FFC72C] via-[#FF5722] to-[#8D153A] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-[#FFC72C] transition-colors duration-300">📞 Call Us</h3>
            <p className="text-muted-foreground mb-2 font-mono text-sm sm:text-base">+94 11 234 5678</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Mon - Fri, 8AM - 6PM</p>
          </div>
          
          {/* Email */}
          <div className="group text-center p-6 sm:p-8 bg-card/90 dark:bg-card/95 backdrop-blur-md rounded-xl border border-border/50 hover:border-[#008060]/70 hover:shadow-2xl transition-all duration-500 modern-card hover-lift">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#008060] via-[#FFC72C] to-[#FF5722] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-[#008060] transition-colors duration-300">📧 Email Us</h3>
            <p className="text-muted-foreground mb-2 font-mono text-sm sm:text-base">support@govlink.lk</p>
            <p className="text-xs sm:text-sm text-muted-foreground">24/7 Support</p>
          </div>
          
          {/* Location */}
          <div className="group text-center p-6 sm:p-8 bg-card/90 dark:bg-card/95 backdrop-blur-md rounded-xl border border-border/50 hover:border-[#FF5722]/70 hover:shadow-2xl transition-all duration-500 modern-card hover-lift">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FF5722] via-[#8D153A] to-[#FFC72C] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-[#FF5722] transition-colors duration-300">📍 Visit Us</h3>
            <p className="text-muted-foreground mb-2 text-sm sm:text-base">Colombo, Sri Lanka</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Government Services Hub</p>
          </div>
        </div>
        
        {/* Enhanced FAQ Section */}
        <div className="bg-card/90 dark:bg-card/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border/50 modern-card">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC72C]/10 via-[#FF5722]/10 to-[#8D153A]/10 px-4 py-2 rounded-full border border-border/30 mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5722]">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-foreground">FAQ</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gradient">Frequently Asked Questions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group p-4 sm:p-6 bg-background/50 dark:bg-background/30 rounded-xl border border-border/30 hover:border-[#FFC72C]/50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">Q</span>
                </div>
                <h4 className="font-semibold text-sm sm:text-base group-hover:text-[#FFC72C] transition-colors duration-300">How do I access government forms?</h4>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#008060] to-[#FFC72C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">Simply search for the form you need or browse our services section. All forms are available for instant download.</p>
              </div>
            </div>
            
            <div className="group p-4 sm:p-6 bg-background/50 dark:bg-background/30 rounded-xl border border-border/30 hover:border-[#008060]/50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">Q</span>
                </div>
                <h4 className="font-semibold text-sm sm:text-base group-hover:text-[#008060] transition-colors duration-300">Is GovLink an official platform?</h4>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#008060] to-[#FFC72C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">Yes, GovLink is officially endorsed by the Government of Sri Lanka for digital service delivery.</p>
              </div>
            </div>
            
            <div className="group p-4 sm:p-6 bg-background/50 dark:bg-background/30 rounded-xl border border-border/30 hover:border-[#FF5722]/50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">Q</span>
                </div>
                <h4 className="font-semibold text-sm sm:text-base group-hover:text-[#FF5722] transition-colors duration-300">Can I track my application status?</h4>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#008060] to-[#FFC72C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">Absolutely! Use your application reference number to track the progress of your submissions.</p>
              </div>
            </div>
            
            <div className="group p-4 sm:p-6 bg-background/50 dark:bg-background/30 rounded-xl border border-border/30 hover:border-[#8D153A]/50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">Q</span>
                </div>
                <h4 className="font-semibold text-sm sm:text-base group-hover:text-[#8D153A] transition-colors duration-300">What if I need technical support?</h4>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#008060] to-[#FFC72C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">Our technical support team is available 24/7 via phone, email, or live chat to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- ENHANCED PREMIUM FOOTER ---
const Footer = () => (
  <footer className="relative py-16 sm:py-20 mt-20">
    <div className="absolute inset-0 bg-gradient-to-t from-[#FFC72C]/8 via-[#FF5722]/4 to-transparent dark:from-[#8D153A]/12 dark:via-[#FF5722]/6 dark:to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-[#008060]/8 via-transparent to-[#FFC72C]/6 dark:from-[#008060]/5 dark:via-transparent dark:to-[#FFC72C]/4"></div>
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
        {/* Enhanced Brand Section */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <LotusIcon className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFC72C]/20 to-[#FF5722]/20 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s'}}></div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-1">GovLink</h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Sri Lanka • ශ්‍රී ලංකා • இலங்கை</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 dark:text-green-400">Online & Serving</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm sm:text-base">
            🇱🇰 Simplifying government services for every Sri Lankan. Access information, download forms, 
            and complete procedures with ease through our modern digital platform.
          </p>
          
          {/* Enhanced Social Links */}
          <div className="flex gap-3 mb-6">
            <button className="group w-11 h-11 rounded-xl bg-card/80 dark:bg-card/60 border border-border/50 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 modern-card" aria-label="Follow on Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground group-hover:text-[#1877F2] transition-colors duration-300">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22C18.34 21.21 22 17.08 22 12.06z"/>
              </svg>
            </button>
            <button className="group w-11 h-11 rounded-xl bg-card/80 dark:bg-card/60 border border-border/50 hover:border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 modern-card" aria-label="Follow on X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground group-hover:text-[#1DA1F2] transition-colors duration-300">
                <path d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-4.78-6.24L4.8 22H2l7.02-8.02L2 2h6.914l4.33 5.77L18.244 2Zm-1.196 18h1.884L7.07 4H5.092l11.956 16Z"/>
              </svg>
            </button>
            <button className="group w-11 h-11 rounded-xl bg-card/80 dark:bg-card/60 border border-border/50 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 modern-card" aria-label="Connect on LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground group-hover:text-[#0A66C2] transition-colors duration-300">
                <path d="M20.447 20.452H17.2v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.445-2.136 2.94v5.665H9.07V9h3.116v1.561h.045c.435-.824 1.498-1.692 3.083-1.692 3.298 0 3.906 2.171 3.906 4.995v6.588zM5.337 7.433a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62zM6.96 20.452H3.71V9h3.25v11.452z"/>
              </svg>
            </button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-card/50 dark:bg-card/30 rounded-lg border border-border/30">
              <div className="text-lg font-bold text-gradient">50K+</div>
              <div className="text-xs text-muted-foreground">Users</div>
            </div>
            <div className="text-center p-3 bg-card/50 dark:bg-card/30 rounded-lg border border-border/30">
              <div className="text-lg font-bold text-gradient">99.8%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center p-3 bg-card/50 dark:bg-card/30 rounded-lg border border-border/30">
              <div className="text-lg font-bold text-gradient">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-[#FFC72C] to-[#FF5722] rounded-full"></div>
            Quick Links
          </h4>
          <div className="space-y-2">
            <a href="#services" className="group flex items-center gap-2 text-muted-foreground hover:text-[#FFC72C] transition-all duration-300 text-sm py-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>🛡️ Services</span>
            </a>
            <a href="#about" className="group flex items-center gap-2 text-muted-foreground hover:text-[#008060] transition-all duration-300 text-sm py-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>🏛️ About Us</span>
            </a>
            <a href="#contact" className="group flex items-center gap-2 text-muted-foreground hover:text-[#FF5722] transition-all duration-300 text-sm py-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>📞 Contact</span>
            </a>
            <a href="#" className="group flex items-center gap-2 text-muted-foreground hover:text-[#8D153A] transition-all duration-300 text-sm py-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>❓ Help Center</span>
            </a>
          </div>
        </div>

        {/* Enhanced Legal Links */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-[#008060] to-[#FFC72C] rounded-full"></div>
            Legal & Policy
          </h4>
          <div className="space-y-2">
            <a href="#" className="group flex items-center gap-2 text-muted-foreground hover:text-[#FFC72C] transition-all duration-300 text-sm py-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>🔒 Privacy Policy</span>
            </a>
            <a href="#" className="group flex items-center gap-2 text-muted-foreground hover:text-[#008060] transition-all duration-300 text-sm py-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>📋 Terms of Service</span>
            </a>
            <a href="#" className="group flex items-center gap-2 text-muted-foreground hover:text-[#FF5722] transition-all duration-300 text-sm py-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>🍪 Cookie Policy</span>
            </a>
            <a href="#" className="group flex items-center gap-2 text-muted-foreground hover:text-[#8D153A] transition-all duration-300 text-sm py-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>♿ Accessibility</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Footer Bottom */}
      <div className="pt-8 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} GovLink Sri Lanka. An initiative to streamline public services.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                All systems operational
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-muted-foreground">Crafted with</span>
            <span className="text-red-500 animate-pulse text-base">♥</span>
            <span className="text-muted-foreground">for</span>
            <span className="font-semibold text-gradient">🇱🇰 Sri Lanka</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen relative theme-transition-slow">
      {/* Sri Lankan Background */}
      <SriLankanBackground />
      
      {/* Content */}
      <div className="relative z-10 theme-transition-fast">
        <Header />
        <main className="theme-transition-fast">
          <Hero />
          <Features />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}