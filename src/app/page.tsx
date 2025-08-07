// app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
// --- ELEGANT SRI LANKAN BACKGROUND COMPONENT ---
const SriLankanBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle lotus-inspired accent patterns */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FFC72C]/6 dark:bg-[#FFC72C]/3 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#8D153A]/6 dark:bg-[#8D153A]/3 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5722]/4 dark:bg-[#FF5722]/2 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
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
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-2 sm:pt-3 md:pt-4">
      <div className="container mx-auto px-4 sm:px-6 py-0 sm:py-1 md:py-2 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Balanced Hero Content */}
          <div className="mb-5 sm:mb-6 animate-fade-in-up">
            <div className="flex flex-col items-center mb-3">
              <LotusIcon className="w-22 h-22 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-2 animate-pulse" style={{animationDuration: '3s'}} />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
              <span className="text-foreground">Simplifying Government for</span>{' '}
              <span className="text-gradient">Every Sri Lankan</span>
            </h1>
            <div className="w-18 sm:w-22 md:w-26 h-0.5 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] mx-auto rounded-full"></div>
          </div>
          
          {/* Balanced Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-7 sm:mb-9 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4 sm:px-0" style={{animationDelay: '0.2s'}}>
            Ask questions, find services, and access government information instantly. Your direct link to public services in Sri Lanka.
          </p>
          
          {/* Balanced Search Interface */}
          <div className="max-w-2xl mx-auto animate-fade-in-up px-4 sm:px-0" style={{animationDelay: '0.4s'}}>
            <form action="/chat" method="GET" className="relative group">
              <div className="relative bg-card/80 backdrop-blur-sm border-2 border-border hover:border-[#FFC72C]/50 rounded-xl p-1.5 transition-all duration-300 hover:shadow-xl">
                <textarea
                  name="q"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-foreground placeholder-muted-foreground p-4 pr-16 rounded-lg resize-none focus:outline-none text-base leading-relaxed border-none"
                  placeholder={placeholderTexts[currentPlaceholder]}
                  rows={1}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = `${Math.max(target.scrollHeight, 45)}px`;
                  }}
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] hover:from-[#FF5722] hover:to-[#8D153A] rounded-lg transition-all duration-300 hover:scale-105 shadow-lg group"
                >
                  <ArrowRightIcon className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Balanced Suggestions */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {["Passport Renewal", "Business Registration", "Marriage Certificate", "Driving License"].map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSearchText(suggestion)}
                    className="px-3 py-1.5 bg-card hover:bg-accent border border-border hover:border-[#FFC72C] rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Clean Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
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
      benefits: ["Instant Downloads", "24/7 Availability", "Multiple Formats"]
    },
    { 
      icon: <InfoIcon />, 
      title: "Get Instant Information", 
      description: "Ask any question about public services and get clear, step-by-step guidance.",
      color: "#008060",
      benefits: ["Real-time Answers", "Step-by-step Guides", "Multi-language Support"]
    },
    { 
      icon: <CalendarIcon />, 
      title: "Schedule Appointments", 
      description: "Find available slots and book appointments with government departments online.",
      color: "#FFC72C",
      benefits: ["Online Booking", "SMS Reminders", "Easy Rescheduling"]
    },
  ];
  
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Lotus */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-card/80 px-4 py-2 rounded-full border border-border mb-6">
            <LotusIcon className="w-5 h-5" />
            <span className="text-sm font-medium text-foreground">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Everything You Need,</span>{' '}
            <span className="text-gradient">All in One Place</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GovLink is designed to make your interaction with government services seamless and efficient.
          </p>
        </div>        
        {/* Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-[#FFC72C]/50 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Clean Icon Container */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                   style={{background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`}}>
                <div className="text-3xl" style={{color: feature.color}}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#FFC72C] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Clean Benefits */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FFC72C] to-[#FF5722]"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
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
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-card/80 px-4 py-2 rounded-full border border-border mb-6">
            <LotusIcon className="w-5 h-5" />
            <span className="text-sm font-medium text-foreground">About GovLink</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Bridging the Gap Between</span>{' '}
            <span className="text-gradient">Citizens & Government</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            GovLink was born from a simple vision: making government services accessible, transparent, and efficient for every Sri Lankan citizen.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Simplified Access</h3>
                <p className="text-muted-foreground">One platform for all government services, forms, and information.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-gradient-to-r from-[#008060] to-[#FFC72C] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">24/7 Availability</h3>
                <p className="text-muted-foreground">Access services anytime, anywhere, without queuing or waiting.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-gradient-to-r from-[#FF5722] to-[#8D153A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Transparent Process</h3>
                <p className="text-muted-foreground">Clear step-by-step guidance for every government procedure.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-[#FFC72C] to-[#FF5722] hover:from-[#FF5722] hover:to-[#8D153A] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Learn More
            </button>
            <button className="border-2 border-[#008060] text-[#008060] hover:bg-[#008060] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Our Mission
            </button>
          </div>
        </div>
        
        {/* Clean Stats */}
        <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-muted-foreground">Citizens Served</div>
          </div>
          
          <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-4xl font-bold text-gradient mb-2">200+</div>
            <div className="text-muted-foreground">Government Forms</div>
          </div>
          
          <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-4xl font-bold text-gradient mb-2">25</div>
            <div className="text-muted-foreground">Departments</div>
          </div>
          
          <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border">
            <div className="text-4xl font-bold text-gradient mb-2">99.8%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- CONTACT SECTION ---
const Contact = () => (
  <section id="contact" className="py-24 relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Clean Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-card/80 px-4 py-2 rounded-full border border-border mb-6">
            <LotusIcon className="w-5 h-5" />
            <span className="text-sm font-medium text-foreground">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Need Help?</span>{' '}
            <span className="text-gradient">We're Here for You</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about government services? Our support team is ready to assist you.
          </p>
        </div>
        
        {/* Clean Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="text-center p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-2">+94 11 234 5678</p>
            <p className="text-sm text-muted-foreground">Mon - Fri, 8AM - 6PM</p>
          </div>
          
          {/* Email */}
          <div className="text-center p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#008060] to-[#FFC72C] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-2">support@govlink.lk</p>
            <p className="text-sm text-muted-foreground">24/7 Support</p>
          </div>
          
          {/* Location */}
          <div className="text-center p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF5722] to-[#8D153A] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-muted-foreground mb-2">Colombo, Sri Lanka</p>
            <p className="text-sm text-muted-foreground">Government Services Hub</p>
          </div>
        </div>
        
        {/* Clean FAQ Section */}
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">How do I access government forms?</h4>
              <p className="text-muted-foreground">Simply search for the form you need or browse our services section. All forms are available for instant download.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Is GovLink an official platform?</h4>
              <p className="text-muted-foreground">Yes, GovLink is officially endorsed by the Government of Sri Lanka for digital service delivery.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Can I track my application status?</h4>
              <p className="text-muted-foreground">Absolutely! Use your application reference number to track the progress of your submissions.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">What if I need technical support?</h4>
              <p className="text-muted-foreground">Our technical support team is available 24/7 via phone, email, or live chat to assist you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- PREMIUM FOOTER ---
const Footer = () => (
  <footer className="relative py-20 mt-32">
    <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <LotusIcon className="w-16 h-16" />
            <div>
              <h3 className="text-2xl font-bold text-gradient">GovLink</h3>
              <p className="text-sm text-muted-foreground">Sri Lanka • ශ්‍රී ලංකා • இலங்கை</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
            Simplifying government services for every Sri Lankan. Access information, download forms, 
            and complete procedures with ease through our modern digital platform.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-card border border-border hover:border-[#FFC72C] flex items-center justify-center transition-colors duration-300" aria-label="Follow on Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22C18.34 21.21 22 17.08 22 12.06z"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-card border border-border hover:border-[#FFC72C] flex items-center justify-center transition-colors duration-300" aria-label="Follow on X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
                <path d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-4.78-6.24L4.8 22H2l7.02-8.02L2 2h6.914l4.33 5.77L18.244 2Zm-1.196 18h1.884L7.07 4H5.092l11.956 16Z"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-card border border-border hover:border-[#FFC72C] flex items-center justify-center transition-colors duration-300" aria-label="Connect on LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
                <path d="M20.447 20.452H17.2v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.445-2.136 2.94v5.665H9.07V9h3.116v1.561h.045c.435-.824 1.498-1.692 3.083-1.692 3.298 0 3.906 2.171 3.906 4.995v6.588zM5.337 7.433a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62zM6.96 20.452H3.71V9h3.25v11.452z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <div className="space-y-3">
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">Services</a>
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">About Us</a>
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</a>
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">Help Center</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-6">Legal</h4>
          <div className="space-y-3">
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">Terms of Service</a>
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">Cookie Policy</a>
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} GovLink Sri Lanka. An initiative to streamline public services.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>for Sri Lanka</span>
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