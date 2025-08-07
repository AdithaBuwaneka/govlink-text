// src/components/agent/dashboard/DashboardCard.tsx
"use client";
import React from 'react';
import Link from 'next/link';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  badge?: string;
  badgeColor?: 'primary' | 'success' | 'warning' | 'info';
  animationDelay?: string;
  disabled?: boolean;
  comingSoon?: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon,
  href,
  onClick,
  badge,
  badgeColor = 'primary',
  animationDelay = '0s',
  disabled = false,
  comingSoon = false
}) => {
  const getBadgeColors = (color: string) => {
    switch (color) {
      case 'success':
        return 'bg-[#008060]/20 text-[#008060] border-[#008060]/30';
      case 'warning':
        return 'bg-[#FFC72C]/20 text-[#FFC72C] border-[#FFC72C]/30';
      case 'info':
        return 'bg-[#FF5722]/20 text-[#FF5722] border-[#FF5722]/30';
      default:
        return 'bg-[#FFC72C]/20 text-[#FFC72C] border-[#FFC72C]/30';
    }
  };

  const cardContent = (
    <div 
      className={`
        group relative glass-morphism p-6 sm:p-8 rounded-3xl border border-border/50 shadow-glow transition-all duration-500 animate-fade-in-up
        ${disabled || comingSoon
          ? 'opacity-60 cursor-not-allowed' 
          : 'hover:border-[#FFC72C] hover-lift hover:shadow-2xl cursor-pointer'
        }
      `}
      style={{animationDelay}}
      onClick={!disabled && !comingSoon ? onClick : undefined}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-2 -right-2 z-10">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeColors(badgeColor)} animate-pulse`}>
            {badge}
          </span>
        </div>
      )}

      {/* Coming Soon Badge */}
      {comingSoon && (
        <div className="absolute -top-2 -right-2 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-muted/50 text-muted-foreground border-border animate-pulse">
            Coming Soon
          </span>
        </div>
      )}

      {/* Icon Container */}
      <div className={`
        relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl mb-6 transition-all duration-300
        ${disabled || comingSoon 
          ? 'bg-muted/30' 
          : 'bg-gradient-to-r from-[#FFC72C]/10 to-[#FF5722]/10 group-hover:from-[#FFC72C]/20 group-hover:to-[#FF5722]/20 group-hover:scale-110'
        }
      `}>
        <div className={`text-4xl ${disabled || comingSoon ? 'text-muted-foreground' : 'text-[#FFC72C] group-hover:text-[#FF5722]'} transition-colors duration-300`}>
          {icon}
        </div>
        
        {/* Floating Badge for interactive cards */}
        {!disabled && !comingSoon && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className={`text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300 ${
        disabled || comingSoon 
          ? 'text-muted-foreground' 
          : 'text-foreground group-hover:text-[#FFC72C]'
      }`}>
        {title}
      </h3>
      
      <p className={`leading-relaxed mb-6 ${
        disabled || comingSoon 
          ? 'text-muted-foreground/60' 
          : 'text-muted-foreground'
      }`}>
        {description}
      </p>

      {/* Action Indicator */}
      {!disabled && !comingSoon && (
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground group-hover:text-[#FFC72C] transition-colors duration-300">
          <span>Open</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M5 12h14"/>
            <path d="M12 5l7 7-7 7"/>
          </svg>
        </div>
      )}

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFC72C]/5 via-transparent to-[#FF5722]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
      
      {/* Animated border glow */}
      <div className={`
        absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none
        ${!disabled && !comingSoon ? 'group-hover:shadow-[0_0_30px_rgba(255,199,44,0.3)]' : ''}
      `}></div>
    </div>
  );

  if (href && !disabled && !comingSoon) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
};

export default DashboardCard;