// src/app/agent/dashboard/page.tsx
"use client";
import { useState } from 'react';
import DashboardLayout from '@/components/agent/dashboard/DashboardLayout';
import StatsOverview from '@/components/agent/dashboard/StatsOverview';
import QuickActions from '@/components/agent/dashboard/QuickActions';

// Types
type Language = 'en' | 'si' | 'ta';

// Dashboard translations
const dashboardTranslations: Record<Language, {
  welcome: string;
  subtitle: string;
  overview: string;
}> = {
  en: {
    welcome: 'Agent Dashboard',
    subtitle: 'Manage citizen services and government operations',
    overview: 'System Overview'
  },
  si: {
    welcome: 'නිලධාරි පාලනය',
    subtitle: 'පුරවැසි සේවා සහ රාජ්‍ය මෙහෙයුම් කළමනාකරණය',
    overview: 'පද්ධති දළ විශ්ලේෂණය'
  },
  ta: {
    welcome: 'அதிகாரி டாஷ்போர்டு',
    subtitle: 'குடிமக்கள் சேவைகள் மற்றும் அரசாங்க நடவடிக்கைகளை நிர்வகிக்கவும்',
    overview: 'கணினி கண்ணோட்டம்'
  }
};

export default function AgentDashboardPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  
  const t = dashboardTranslations[currentLanguage];

  const handleLanguageChange = (newLanguage: Language) => {
    setCurrentLanguage(newLanguage);
  };

  return (
    <DashboardLayout
      title={
        <>
          <span>{t.welcome.split(' ')[0]}</span>{' '}
          <span className="text-gradient">
            {t.welcome.split(' ')[1] || ''}
          </span>
        </>
      }
      subtitle={t.subtitle}
      language={currentLanguage}
      onLanguageChange={handleLanguageChange}
    >
      <div className="space-y-8">
        {/* Quick Stats Overview */}
        <section>
          <div className="mb-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC72C]/20 to-[#FF5722]/20 px-4 py-2 rounded-full border border-[#FFC72C]/30 mb-4">
              <span className="w-2 h-2 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#FFC72C]">{t.overview}</span>
            </div>
          </div>
          <StatsOverview language={currentLanguage} />
        </section>

        {/* Main Actions Grid */}
        <section>
          <QuickActions language={currentLanguage} />
        </section>

        {/* Welcome Message */}
        <section className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="glass-morphism p-6 sm:p-8 rounded-3xl shadow-glow border border-border/50">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                Welcome, Agent DEMO1234
              </h3>
              <p className="text-sm text-muted-foreground">
                Department of Immigration & Emigration
              </p>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
