// src/components/agent/appointments/AppointmentFilters.tsx
"use client";
import React, { useState, useEffect } from 'react';

// Types
type Language = 'en' | 'si' | 'ta';
type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
type ServiceType = 'passport' | 'license' | 'certificate' | 'registration' | 'visa';

interface Appointment {
  id: string;
  citizenName: string;
  citizenId: string;
  serviceType: ServiceType;
  date: string;
  time: string;
  status: AppointmentStatus;
  priority: 'normal' | 'urgent';
  notes?: string;
  contactEmail: string;
  contactPhone: string;
  submittedDate: string;
}

interface FilterState {
  search: string;
  status: AppointmentStatus | 'all';
  serviceType: ServiceType | 'all';
  dateFrom: string;
  dateTo: string;
  priority: 'normal' | 'urgent' | 'all';
}

interface AppointmentFiltersProps {
  appointments: Appointment[];
  onFilterChange: (filteredAppointments: Appointment[]) => void;
  language?: Language;
}

// Filter translations
const filterTranslations: Record<Language, {
  searchPlaceholder: string;
  status: string;
  serviceType: string;
  dateRange: string;
  priority: string;
  allStatuses: string;
  allServices: string;
  allPriorities: string;
  from: string;
  to: string;
  clearFilters: string;
  export: string;
  statuses: Record<AppointmentStatus, string>;
  services: Record<ServiceType, string>;
  priorities: Record<'normal' | 'urgent', string>;
}> = {
  en: {
    searchPlaceholder: 'Search by name, ID, or email...',
    status: 'Status',
    serviceType: 'Service Type',
    dateRange: 'Date Range',
    priority: 'Priority',
    allStatuses: 'All Statuses',
    allServices: 'All Services',
    allPriorities: 'All Priorities',
    from: 'From',
    to: 'To',
    clearFilters: 'Clear Filters',
    export: 'Export',
    statuses: {
      pending: 'Pending',
      confirmed: 'Confirmed',
      cancelled: 'Cancelled',
      completed: 'Completed'
    },
    services: {
      passport: 'Passport',
      license: 'Driving License',
      certificate: 'Certificate',
      registration: 'Registration',
      visa: 'Visa'
    },
    priorities: {
      normal: 'Normal',
      urgent: 'Urgent'
    }
  },
  si: {
    searchPlaceholder: 'නම, හැඳුනුම්පත හෝ විද්‍යුත් ලිපිනයෙන් සොයන්න...',
    status: 'තත්ත්වය',
    serviceType: 'සේවාවේ වර්ගය',
    dateRange: 'දින පරාසය',
    priority: 'ප්‍රමුඛතාව',
    allStatuses: 'සියලුම තත්ත්වයන්',
    allServices: 'සියලුම සේවාවන්',
    allPriorities: 'සියලුම ප්‍රමුඛතාවන්',
    from: 'සිට',
    to: 'දක්වා',
    clearFilters: 'පෙරහන් මකන්න',
    export: 'නිර්යාත කරන්න',
    statuses: {
      pending: 'අපේක්ෂිත',
      confirmed: 'තහවුරු කළ',
      cancelled: 'අවලංගු කළ',
      completed: 'සම්පූර්ණ කළ'
    },
    services: {
      passport: 'ගමන් බලපත්‍රය',
      license: 'රියදුරු බලපත්‍රය',
      certificate: 'සහතිකය',
      registration: 'ලියාපදිංචිය',
      visa: 'වීසා'
    },
    priorities: {
      normal: 'සාමාන්‍ය',
      urgent: 'ගඩු'
    }
  },
  ta: {
    searchPlaceholder: 'பெயர், அடையாள எண் அல்லது மின்னஞ்சல் மூலம் தேடுங்கள்...',
    status: 'நிலை',
    serviceType: 'சேவை வகை',
    dateRange: 'தேதி வரம்பு',
    priority: 'முன்னுரிமை',
    allStatuses: 'அனைத்து நிலைகள்',
    allServices: 'அனைத்து சேவைகள்',
    allPriorities: 'அனைத்து முன்னுரிமைகள்',
    from: 'இருந்து',
    to: 'வரை',
    clearFilters: 'வடிகட்டிகளை அழிக்கவும்',
    export: 'ஏற்றுமதி',
    statuses: {
      pending: 'நிலுவையில்',
      confirmed: 'உறுதிப்படுத்தப்பட்டது',
      cancelled: 'ரத்துசெய்யப்பட்டது',
      completed: 'முடிந்தது'
    },
    services: {
      passport: 'பாஸ்போர்ட்',
      license: 'ஓட்டுநர் உரிமம்',
      certificate: 'சான்றிதழ்',
      registration: 'பதிவு',
      visa: 'விசா'
    },
    priorities: {
      normal: 'சாதாரண',
      urgent: 'அவசர'
    }
  }
};

const AppointmentFilters: React.FC<AppointmentFiltersProps> = ({
  appointments,
  onFilterChange,
  language = 'en'
}) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    status: 'all',
    serviceType: 'all',
    dateFrom: '',
    dateTo: '',
    priority: 'all'
  });

  const t = filterTranslations[language];

  // Apply filters whenever filters change
  useEffect(() => {
    let filtered = [...appointments];

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(apt => 
        apt.citizenName.toLowerCase().includes(searchTerm) ||
        apt.citizenId.toLowerCase().includes(searchTerm) ||
        apt.contactEmail.toLowerCase().includes(searchTerm)
      );
    }

    // Status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(apt => apt.status === filters.status);
    }

    // Service type filter
    if (filters.serviceType !== 'all') {
      filtered = filtered.filter(apt => apt.serviceType === filters.serviceType);
    }

    // Priority filter
    if (filters.priority !== 'all') {
      filtered = filtered.filter(apt => apt.priority === filters.priority);
    }

    // Date range filter
    if (filters.dateFrom) {
      filtered = filtered.filter(apt => apt.date >= filters.dateFrom);
    }
    if (filters.dateTo) {
      filtered = filtered.filter(apt => apt.date <= filters.dateTo);
    }

    onFilterChange(filtered);
  }, [filters, appointments, onFilterChange]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      status: 'all',
      serviceType: 'all',
      dateFrom: '',
      dateTo: '',
      priority: 'all'
    });
  };

  const handleExport = () => {
    // Mock export functionality
    console.log('Exporting appointments...');
    // In real implementation, this would generate CSV/PDF
  };

  return (
    <div className="glass-morphism p-6 rounded-2xl border border-border/50 shadow-glow mb-8 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Search */}
        <div className="lg:col-span-4">
          <div className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card/30 border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300"
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="lg:col-span-2">
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full py-3 px-4 bg-card/30 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300 appearance-none cursor-pointer"
          >
            <option value="all">{t.allStatuses}</option>
            {Object.entries(t.statuses).map(([value, label]) => (
              <option key={value} value={value} className="bg-card text-foreground">
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Service Type Filter */}
        <div className="lg:col-span-2">
          <select
            value={filters.serviceType}
            onChange={(e) => handleFilterChange('serviceType', e.target.value)}
            className="w-full py-3 px-4 bg-card/30 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300 appearance-none cursor-pointer"
          >
            <option value="all">{t.allServices}</option>
            {Object.entries(t.services).map(([value, label]) => (
              <option key={value} value={value} className="bg-card text-foreground">
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Priority Filter */}
        <div className="lg:col-span-2">
          <select
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
            className="w-full py-3 px-4 bg-card/30 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300 appearance-none cursor-pointer"
          >
            <option value="all">{t.allPriorities}</option>
            {Object.entries(t.priorities).map(([value, label]) => (
              <option key={value} value={value} className="bg-card text-foreground">
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="lg:col-span-2 flex gap-2">
          <button
            onClick={clearFilters}
            className="flex-1 px-4 py-3 bg-card/30 border border-border/50 rounded-xl text-muted-foreground hover:text-foreground hover:bg-card/50 transition-all duration-300 text-sm font-medium"
          >
            {t.clearFilters}
          </button>
          <button
            onClick={handleExport}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-[#008060] to-[#FFC72C] text-white rounded-xl hover:from-[#FFC72C] hover:to-[#FF5722] transition-all duration-300 text-sm font-medium hover:scale-105"
          >
            {t.export}
          </button>
        </div>
      </div>

      {/* Date Range - Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{t.from}</label>
          <input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
            className="w-full py-3 px-4 bg-card/30 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{t.to}</label>
          <input
            type="date"
            value={filters.dateTo}
            onChange={(e) => handleFilterChange('dateTo', e.target.value)}
            className="w-full py-3 px-4 bg-card/30 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300"
          />
        </div>
      </div>

      {/* Active Filters Summary */}
      {(filters.search || filters.status !== 'all' || filters.serviceType !== 'all' || filters.priority !== 'all' || filters.dateFrom || filters.dateTo) && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {filters.search && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FFC72C]/20 text-[#FFC72C] rounded-full text-xs font-medium">
                Search: &quot;{filters.search}&quot;
                <button 
                  onClick={() => handleFilterChange('search', '')}
                  className="text-[#FFC72C] hover:text-[#FF5722] transition-colors duration-200"
                >
                  ×
                </button>
              </span>
            )}
            {filters.status !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF5722]/20 text-[#FF5722] rounded-full text-xs font-medium">
                Status: {t.statuses[filters.status as AppointmentStatus]}
                <button 
                  onClick={() => handleFilterChange('status', 'all')}
                  className="text-[#FF5722] hover:text-[#8D153A] transition-colors duration-200"
                >
                  ×
                </button>
              </span>
            )}
            {filters.serviceType !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#008060]/20 text-[#008060] rounded-full text-xs font-medium">
                Service: {t.services[filters.serviceType as ServiceType]}
                <button 
                  onClick={() => handleFilterChange('serviceType', 'all')}
                  className="text-[#008060] hover:text-[#FFC72C] transition-colors duration-200"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentFilters;
