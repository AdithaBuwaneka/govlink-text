// src/components/agent/analytics/AnalyticsLayout.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';

// Types
type Language = 'en' | 'si' | 'ta';

interface Translation {
  analytics: string;
  agentPortal: string;
  backToDashboard: string;
  logout: string;
  profile: string;
  settings: string;
  help: string;
  notifications: string;
}

// Translation data
const translations: Record<Language, Translation> = {
  en: {
    analytics: 'Analytics',
    agentPortal: 'Agent Portal',
    backToDashboard: '← Back to Dashboard',
    logout: 'Logout',
    profile: 'Profile',
    settings: 'Settings',
    help: 'Help',
    notifications: 'Notifications'
  },
  si: {
    analytics: 'විශ්ලේෂණ',
    agentPortal: 'නිලධාරි පෝට්ලය',
    backToDashboard: '← පාලනයට ආපසු',
    logout: 'ඉවත්වන්න',
    profile: 'පැතිකඩ',
    settings: 'සැකසුම්',
    help: 'උදව්',
    notifications: 'දැනුම්දීම්'
  },
  ta: {
    analytics: 'பகுப்பாய்வு',
    agentPortal: 'அதிகாரி போர்டல்',
    backToDashboard: '← டாஷ்போர்டுக்கு திரும்பு',
    logout: 'வெளியேறு',
    profile: 'சுயவிவரம்',
    settings: 'அமைப்புகள்',
    help: 'உதவி',
    notifications: 'அறிவிப்புகள்'
  }
};

// Language options
const languageOptions = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'si', label: 'Sinhala', nativeLabel: 'සිංහල' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' }
];

// Analytics Lotus Flower with Chart Elements
const AnalyticsLotusIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

    {/* Center with chart elements */}
    <circle cx="50" cy="50" r="8" fill="#ffd54f"/>
    
    {/* Mini chart bars in center */}
    <rect x="46" y="48" width="1.5" height="4" fill="#ff8f00"/>
    <rect x="48" y="46" width="1.5" height="6" fill="#ff8f00"/>
    <rect x="50" y="44" width="1.5" height="8" fill="#ff8f00"/>
    <rect x="52" y="47" width="1.5" height="5" fill="#ff8f00"/>
    
    {/* Trend line */}
    <path d="M46 49 L48 47 L50 45 L52 47.5" stroke="#ff8f00" strokeWidth="0.8" fill="none"/>
  </svg>
);

interface AnalyticsLayoutProps {
  children: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  language?: Language;
  onLanguageChange?: (language: Language) => void;
}

const AnalyticsLayout: React.FC<AnalyticsLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  language = 'en',
  onLanguageChange
}) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const t = translations[language];

  const handleLanguageChange = (newLanguage: Language) => {
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    router.push('/agent/login');
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden theme-transition-slow">
      {/* EXACT SAME Background as Other Pages */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
        
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.02] sm:dark:opacity-[0.025] md:dark:opacity-[0.03]">
          <Image 
            src="/flag-of-sri-lanka-1.gif" 
            alt="Sri Lankan Flag Background" 
            fill
            className="object-cover object-center animate-pulse-move scale-110 sm:scale-105 md:scale-100"
            style={{animationDelay: '0s'}}
            unoptimized={true}
            priority={false}
          />
        </div>
        
        <div className="absolute inset-0 opacity-[0.08] sm:opacity-[0.12] md:opacity-[0.15] dark:opacity-0">
          <div className="w-full h-full bg-gradient-to-br from-[#8D153A]/30 via-transparent to-[#FF5722]/30 animate-pulse-move"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFC72C]/25 via-transparent to-[#8D153A]/25 animate-float"></div>
        </div>

        {/* Particles */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-6 md:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[#8D153A]/15 sm:bg-[#8D153A]/18 md:bg-[#8D153A]/20 dark:bg-[#FFC72C]/8 dark:sm:bg-[#FFC72C]/9 dark:md:bg-[#FFC72C]/10 rounded-full blur-lg sm:blur-xl animate-drift"></div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-12 md:right-20 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-[#FF5722]/20 sm:bg-[#FF5722]/23 md:bg-[#FF5722]/25 dark:bg-[#FF5722]/8 dark:sm:bg-[#FF5722]/9 dark:md:bg-[#FF5722]/10 rounded-full blur-lg sm:blur-xl animate-drift-reverse"></div>
        <div className="absolute top-1/4 left-8 sm:left-12 md:left-20 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 bg-[#8D153A]/10 sm:bg-[#8D153A]/13 md:bg-[#8D153A]/15 dark:bg-[#8D153A]/5 dark:sm:bg-[#8D153A]/7 dark:md:bg-[#8D153A]/8 rounded-full blur-xl sm:blur-2xl animate-pulse-move"></div>
        <div className="absolute bottom-12 sm:bottom-20 right-1/4 sm:right-1/3 w-14 sm:w-21 md:w-28 h-14 sm:h-21 md:h-28 bg-[#FF5722]/20 sm:bg-[#FF5722]/23 md:bg-[#FF5722]/25 dark:bg-[#FF5722]/10 dark:sm:bg-[#FF5722]/11 dark:md:bg-[#FF5722]/12 rounded-full blur-lg sm:blur-xl animate-drift-reverse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="fixed inset-0 gradient-mesh opacity-30 pointer-events-none z-[5]"></div>
      
      {/* Header */}
      <header className="glass-morphism backdrop-blur-xl border-b border-border/50 sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 animate-fade-in-up">
              <Link href="/agent/dashboard" className="text-left hover:scale-105 transition-all duration-300">
                <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-gradient">GovLink</h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">{t.agentPortal}</p>
              </Link>
              <div className="h-8 w-px bg-border/50"></div>
              <div className="text-left">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground">{t.analytics}</h2>
                <p className="text-xs text-muted-foreground">Reports & Insights</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Back to Dashboard Link */}
              <Link 
                href="/agent/dashboard" 
                className="hidden md:flex text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105 font-medium"
              >
                {t.backToDashboard}
              </Link>

              {/* Notification Bell */}
              <div className="relative">
                <button 
                  className="p-2 rounded-xl bg-card/30 border border-border/50 text-foreground hover:bg-card/50 transition-all duration-300 hover:scale-105"
                  aria-label={t.notifications}
                  title={t.notifications}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#FF5722] to-[#8D153A] text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                    5
                  </span>
                </button>
              </div>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/30 border border-border/50 text-sm font-medium text-foreground hover:bg-card/50 transition-all duration-300"
                >
                  <span>{languageOptions.find(lang => lang.code === language)?.nativeLabel}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

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
              
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-card/30 border border-border/50 text-sm font-medium text-foreground hover:bg-card/50 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">D</span>
                  </div>
                  <span className="hidden sm:block">DEMO1234</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 glass-morphism border border-border/50 rounded-xl shadow-glow overflow-hidden animate-fade-in-up">
                    <div className="px-4 py-3 border-b border-border/30">
                      <div className="font-medium text-foreground">DEMO1234</div>
                      <div className="text-xs text-muted-foreground">Immigration & Emigration</div>
                    </div>
                    <Link href="/agent/profile" className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-card/30 transition-all duration-200 flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {t.profile}
                    </Link>
                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-card/30 transition-all duration-200 flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                      </svg>
                      {t.settings}
                    </button>
                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-card/30 transition-all duration-200 flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                      {t.help}
                    </button>
                    <div className="border-t border-border/30">
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-sm font-medium text-[#FF5722] hover:bg-[#FF5722]/10 transition-all duration-200 flex items-center gap-3"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        {t.logout}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="mb-4">
            <AnalyticsLotusIcon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto animate-glow" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </main>

      {/* Click outside to close dropdowns */}
      {(isDropdownOpen || isProfileDropdownOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsDropdownOpen(false);
            setIsProfileDropdownOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default AnalyticsLayout;