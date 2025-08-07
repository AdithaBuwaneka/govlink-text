// src/components/agent/auth/AgentAuthLayout.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

// Types for translations
type Language = 'en' | 'si' | 'ta';

interface Translation {
  governmentAccess: string;
  agentPortal: string;
  subtitle: string;
  backToHome: string;
  technicalAssistance: string;
  contactItSupport: string;
  copyright: string;
}

// Translation data
const translations: Record<Language, Translation> = {
  en: {
    governmentAccess: 'Government Access',
    agentPortal: 'Agent Portal',
    subtitle: 'Secure access for authorized government personnel',
    backToHome: '← Back to Home',
    technicalAssistance: 'Need technical assistance?',
    contactItSupport: 'Contact IT Support',
    copyright: '© 2025 Government of Sri Lanka • Authorized Personnel Only'
  },
  si: {
    governmentAccess: 'රාජ්‍ය ප්‍රවේශය',
    agentPortal: 'නිලධාරි පෝට්ලය',
    subtitle: 'බලයලත් රාජ්‍ය නිලධාරීන් සඳහා ආරක්ෂිත ප්‍රවේශය',
    backToHome: '← මුල් පිටුවට',
    technicalAssistance: 'තාක්ෂණික සහායක අවශ්‍යද?',
    contactItSupport: 'තාක්ෂණික සහාය අමතන්න',
    copyright: '© 2025 ශ්‍රී ලංකා රජය • බලයලත් කර්මිකයන් පමණි'
  },
  ta: {
    governmentAccess: 'அரசு அணுகல்',
    agentPortal: 'அதிகாரி போர்டல்',
    subtitle: 'அங்கீகரிக்கப்பட்ட அரசு ஊழியர்களுக்கான பாதுகாப்பான அணுகல்',
    backToHome: '← முகப்புக்கு திரும்பு',
    technicalAssistance: 'தொழில்நுட்ப உதவி தேவையா?',
    contactItSupport: 'IT ஆதரவை தொடர்பு கொள்ளுங்கள்',
    copyright: '© 2025 இலங்கை அரசாங்கம் • அங்கீகரிக்கப்பட்ட ஊழியர்கள் மட்டுமே'
  }
};

// Language options
const languageOptions = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'si', label: 'Sinhala', nativeLabel: 'සිංහල' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' }
];

// Detailed Lotus Flower with Original Pink/Red Colors
const LotusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100">
    {/* Outer layer petals */}
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(36 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(72 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(108 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(144 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(180 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(216 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(252 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(288 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(324 50 50)"/>

    {/* Middle layer petals */}
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(18 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(54 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(90 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(126 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(162 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(198 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(234 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(270 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(306 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(342 50 50)"/>

    {/* Inner petals */}
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(45 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(90 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(135 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(180 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(225 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(270 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(315 50 50)"/>

    {/* Center */}
    <circle cx="50" cy="50" r="7" fill="#ffd54f"/>
    <circle cx="50" cy="50" r="3" fill="#ff8f00"/>
  </svg>
);

interface AgentAuthLayoutProps {
  children: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  language?: Language;
  onLanguageChange?: (language: Language) => void;
}

const AgentAuthLayout: React.FC<AgentAuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  language = 'en',
  onLanguageChange
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = translations[language];

  const handleLanguageChange = (newLanguage: Language) => {
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden theme-transition-slow">
      {/* EXACT SAME Background as Landing Page */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Light Mode Enhanced Flag Background - Mobile First Responsive */}
        <div className="absolute inset-0 opacity-[0.25] sm:opacity-[0.30] md:opacity-[0.35] dark:opacity-0">
          <Image 
            src="/flag-of-sri-lanka-1.gif" 
            alt="Sri Lankan Flag Background" 
            fill
            className="object-cover object-center animate-pulse-move scale-110 sm:scale-105 md:scale-100"
            style={{
              animationDelay: '0s',
              filter: 'contrast(2.2) brightness(0.45) saturate(2.2) sepia(0.25) hue-rotate(8deg)',
              mixBlendMode: 'multiply'
            }}
            unoptimized={true}
            priority={false}
          />
        </div>
        
        {/* Dark Mode Flag Background - Mobile First Responsive */}
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.02] sm:dark:opacity-[0.025] md:dark:opacity-[0.03]">
          <Image 
            src="/flag-of-sri-lanka-1.gif" 
            alt="Sri Lankan Flag Background" 
            fill
            className="object-cover object-center animate-pulse-move scale-110 sm:scale-105 md:scale-100"
            style={{
              animationDelay: '0s'
            }}
            unoptimized={true}
            priority={false}
          />
        </div>
        
        {/* Light Mode Secondary Flag Layer - Responsive Scaling */}
        <div className="absolute inset-0 opacity-[0.15] sm:opacity-[0.20] md:opacity-[0.25] dark:opacity-0 scale-125 sm:scale-130 md:scale-150">
          <Image 
            src="/flag-of-sri-lanka-1.gif" 
            alt="Sri Lankan Flag Background Large" 
            fill
            className="object-cover object-center animate-pulse-move"
            style={{
              animationDelay: '5s',
              filter: 'contrast(2.5) brightness(0.35) saturate(2.8) sepia(0.35) hue-rotate(12deg)',
              mixBlendMode: 'overlay'
            }}
            unoptimized={true}
            priority={false}
          />
        </div>
        
        {/* Dark Mode Secondary Flag Layer - Responsive Scaling */}
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.015] sm:dark:opacity-[0.018] md:dark:opacity-[0.02] scale-125 sm:scale-130 md:scale-150">
          <Image 
            src="/flag-of-sri-lanka-1.gif" 
            alt="Sri Lankan Flag Background Large" 
            fill
            className="object-cover object-center animate-pulse-move"
            style={{
              animationDelay: '5s'
            }}
            unoptimized={true}
            priority={false}
          />
        </div>
        
        {/* Light Mode Tertiary Flag Layer - Mobile Optimized */}
        <div className="absolute inset-0 opacity-[0.20] sm:opacity-[0.25] md:opacity-[0.30] dark:opacity-0 scale-115 sm:scale-118 md:scale-110">
          <Image 
            src="/flag-of-sri-lanka-1.gif" 
            alt="Sri Lankan Flag Background Scaled" 
            fill
            className="object-cover object-center animate-float"
            style={{
              animationDelay: '10s',
              filter: 'contrast(2.8) brightness(0.3) saturate(3.2) sepia(0.45) hue-rotate(6deg)',
              mixBlendMode: 'darken'
            }}
            unoptimized={true}
            priority={false}
          />
        </div>
        
        {/* Dark Mode Tertiary Flag Layer - Mobile Optimized */}
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.018] sm:dark:opacity-[0.022] md:dark:opacity-[0.025] scale-115 sm:scale-118 md:scale-110">
          <Image 
            src="/flag-of-sri-lanka-1.gif" 
            alt="Sri Lankan Flag Background Scaled" 
            fill
            className="object-cover object-center animate-float"
            style={{
              animationDelay: '10s'
            }}
            unoptimized={true}
            priority={false}
          />
        </div>
        
        {/* Enhanced Light Mode Color Overlay - Mobile Responsive */}
        <div className="absolute inset-0 opacity-[0.08] sm:opacity-[0.12] md:opacity-[0.15] dark:opacity-0">
          <div className="w-full h-full bg-gradient-to-br from-[#8D153A]/30 via-transparent to-[#FF5722]/30 animate-pulse-move"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFC72C]/25 via-transparent to-[#8D153A]/25 animate-float"></div>
        </div>

        {/* EXACT SAME Mobile-First Responsive Particles as Landing Page */}
        {/* Top Section Particles - Mobile Optimized */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-6 md:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[#8D153A]/15 sm:bg-[#8D153A]/18 md:bg-[#8D153A]/20 dark:bg-[#FFC72C]/8 dark:sm:bg-[#FFC72C]/9 dark:md:bg-[#FFC72C]/10 rounded-full blur-lg sm:blur-xl animate-drift"></div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-12 md:right-20 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-[#FF5722]/20 sm:bg-[#FF5722]/23 md:bg-[#FF5722]/25 dark:bg-[#FF5722]/8 dark:sm:bg-[#FF5722]/9 dark:md:bg-[#FF5722]/10 rounded-full blur-lg sm:blur-xl animate-drift-reverse"></div>
        <div className="absolute top-48 sm:top-60 left-1/4 sm:left-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-[#008060]/25 sm:bg-[#008060]/28 md:bg-[#008060]/30 dark:bg-[#008060]/12 dark:sm:bg-[#008060]/14 dark:md:bg-[#008060]/15 rounded-full blur-md sm:blur-lg animate-orbit"></div>
        <div className="absolute top-4 sm:top-10 right-4 sm:right-6 md:right-10 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-[#FFC72C]/30 sm:bg-[#FFC72C]/33 md:bg-[#FFC72C]/35 dark:bg-[#FFC72C]/15 dark:sm:bg-[#FFC72C]/18 dark:md:bg-[#FFC72C]/20 rounded-full blur-sm animate-float" style={{animationDelay: '1.5s'}}></div>
        
        {/* Upper Middle Particles - Mobile Responsive */}
        <div className="absolute top-1/4 left-8 sm:left-12 md:left-20 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 bg-[#8D153A]/10 sm:bg-[#8D153A]/13 md:bg-[#8D153A]/15 dark:bg-[#8D153A]/5 dark:sm:bg-[#8D153A]/7 dark:md:bg-[#8D153A]/8 rounded-full blur-xl sm:blur-2xl animate-pulse-move"></div>
        <div className="absolute top-1/3 right-1/4 w-18 sm:w-28 md:w-36 h-18 sm:h-28 md:h-36 bg-[#FFC72C]/20 sm:bg-[#FFC72C]/23 md:bg-[#FFC72C]/25 dark:bg-[#FFC72C]/10 dark:sm:bg-[#FFC72C]/11 dark:md:bg-[#FFC72C]/12 rounded-full blur-lg sm:blur-xl animate-spiral"></div>
        <div className="absolute top-1/4 left-1/2 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-[#FF5722]/25 sm:bg-[#FF5722]/28 md:bg-[#FF5722]/30 dark:bg-[#FF5722]/12 dark:sm:bg-[#FF5722]/14 dark:md:bg-[#FF5722]/15 rounded-full blur-sm animate-spiral" style={{animationDelay: '2s'}}></div>
        
        {/* Center Section Particles - Mobile Responsive */}
        <div className="absolute top-1/2 left-1/6 sm:left-1/4 w-14 sm:w-21 md:w-28 h-14 sm:h-21 md:h-28 bg-[#008060]/20 sm:bg-[#008060]/23 md:bg-[#008060]/25 dark:bg-[#008060]/10 dark:sm:bg-[#008060]/11 dark:md:bg-[#008060]/12 rounded-full blur-md sm:blur-lg animate-drift" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[#FF5722]/15 sm:bg-[#FF5722]/18 md:bg-[#FF5722]/20 dark:bg-[#FF5722]/8 dark:sm:bg-[#FF5722]/9 dark:md:bg-[#FF5722]/10 rounded-full blur-lg sm:blur-xl animate-drift-reverse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-4 sm:left-6 md:left-10 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-[#8D153A]/20 sm:bg-[#8D153A]/23 md:bg-[#8D153A]/25 dark:bg-[#8D153A]/10 dark:sm:bg-[#8D153A]/11 dark:md:bg-[#8D153A]/12 rounded-full blur-md animate-orbit" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-1/2 right-4 sm:right-6 md:right-10 w-10 sm:w-15 md:w-20 h-10 sm:h-15 md:h-20 bg-[#FFC72C]/25 sm:bg-[#FFC72C]/28 md:bg-[#FFC72C]/30 dark:bg-[#FFC72C]/12 dark:sm:bg-[#FFC72C]/14 dark:md:bg-[#FFC72C]/15 rounded-full blur-md sm:blur-lg animate-pulse-move" style={{animationDelay: '4s'}}></div>
        
        {/* Bottom Section Particles */}
        <div className="absolute bottom-12 sm:bottom-20 right-1/4 sm:right-1/3 w-14 sm:w-21 md:w-28 h-14 sm:h-21 md:h-28 bg-[#FF5722]/20 sm:bg-[#FF5722]/23 md:bg-[#FF5722]/25 dark:bg-[#FF5722]/10 dark:sm:bg-[#FF5722]/11 dark:md:bg-[#FF5722]/12 rounded-full blur-lg sm:blur-xl animate-drift-reverse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 sm:bottom-40 left-1/3 sm:left-1/2 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-[#FFC72C]/25 sm:bg-[#FFC72C]/28 md:bg-[#FFC72C]/30 dark:bg-[#FFC72C]/12 dark:sm:bg-[#FFC72C]/14 dark:md:bg-[#FFC72C]/15 rounded-full blur-md sm:blur-lg animate-spiral" style={{animationDelay: '6s'}}></div>
      </div>

      {/* EXACT SAME Unified Gradient Mesh Overlay */}
      <div className="fixed inset-0 gradient-mesh opacity-30 pointer-events-none z-[5]"></div>
      
      {/* Header */}
      <header className="glass-morphism backdrop-blur-xl border-b border-border/50 sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 animate-fade-in-up hover:scale-105 transition-all duration-300 cursor-pointer bg-transparent border-none p-1 rounded-lg hover:bg-card/30">
              <div className="text-left">
                <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-gradient">GovLink</h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">{t.agentPortal}</p>
              </div>
            </Link>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link 
                href="/" 
                className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105 font-medium"
              >
                {t.backToHome}
              </Link>
              
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/30 border border-border/50 text-sm font-medium text-foreground hover:bg-card/50 transition-all duration-300"
                >
                  <span>{languageOptions.find(lang => lang.code === language)?.nativeLabel}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 glass-morphism border border-border/50 rounded-xl shadow-glow overflow-hidden animate-fade-in-up">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code as Language)}
                        className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-card/30 ${
                          language === lang.code 
                            ? 'bg-[#FFC72C]/10 text-[#FFC72C] border-l-2 border-l-[#FFC72C]' 
                            : 'text-foreground'
                        }`}
                      >
                        <div>
                          <div className="font-medium">{lang.nativeLabel}</div>
                          <div className="text-xs text-muted-foreground">{lang.label}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="w-full max-w-md">
          {/* Title Section */}
          <div className="text-center mb-8 sm:mb-10 animate-fade-in-up">
            {/* Single Beautiful Lotus - Centered Above Everything */}
            <div className="mb-3 sm:mb-4">
              <LotusIcon className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto animate-glow" />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC72C]/20 to-[#FF5722]/20 px-4 py-2 rounded-full border border-[#FFC72C]/30 mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium text-[#FFC72C]">{t.governmentAccess}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              {title}
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              {subtitle || t.subtitle}
            </p>
          </div>

          {/* Form Container */}
          <div className="glass-morphism p-6 sm:p-8 rounded-3xl shadow-glow hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-border/50" style={{animationDelay: '0.2s'}}>
            {children}
          </div>

          {/* Support Information */}
          <div className="text-center mt-6 sm:mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t.technicalAssistance}{' '}
              <button className="text-[#FFC72C] hover:text-[#FF5722] transition-colors duration-300 underline font-medium">
                {t.contactItSupport}
              </button>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default AgentAuthLayout;