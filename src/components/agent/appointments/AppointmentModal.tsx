// src/components/agent/appointments/AppointmentModal.tsx
"use client";
import React, { useState } from 'react';

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

interface AppointmentModalProps {
  appointment: Appointment;
  isOpen: boolean;
  onClose: () => void;
  onStatusUpdate: (appointmentId: string, newStatus: AppointmentStatus) => void;
  language?: Language;
}

// Modal translations
const modalTranslations: Record<Language, {
  appointmentDetails: string;
  citizenInformation: string;
  serviceDetails: string;
  contactInformation: string;
  statusHistory: string;
  actions: string;
  close: string;
  updateStatus: string;
  reschedule: string;
  sendNotification: string;
  viewHistory: string;
  addNotes: string;
  saveChanges: string;
  name: string;
  citizenId: string;
  email: string;
  phone: string;
  serviceType: string;
  appointmentDate: string;
  appointmentTime: string;
  submittedDate: string;
  priority: string;
  currentStatus: string;
  notes: string;
  notificationSent: string;
  notificationTypes: {
    sms: string;
    email: string;
    both: string;
  };
  statuses: Record<AppointmentStatus, string>;
  services: Record<ServiceType, string>;
  priorities: Record<'normal' | 'urgent', string>;
}> = {
  en: {
    appointmentDetails: 'Appointment Details',
    citizenInformation: 'Citizen Information',
    serviceDetails: 'Service Details',
    contactInformation: 'Contact Information',
    statusHistory: 'Status History',
    actions: 'Actions',
    close: 'Close',
    updateStatus: 'Update Status',
    reschedule: 'Reschedule',
    sendNotification: 'Send Notification',
    viewHistory: 'View Citizen History',
    addNotes: 'Add Notes',
    saveChanges: 'Save Changes',
    name: 'Full Name',
    citizenId: 'Citizen ID',
    email: 'Email Address',
    phone: 'Phone Number',
    serviceType: 'Service Type',
    appointmentDate: 'Appointment Date',
    appointmentTime: 'Appointment Time',
    submittedDate: 'Submitted Date',
    priority: 'Priority Level',
    currentStatus: 'Current Status',
    notes: 'Notes',
    notificationSent: 'Notification sent successfully!',
    notificationTypes: {
      sms: 'SMS Only',
      email: 'Email Only',
      both: 'SMS & Email'
    },
    statuses: {
      pending: 'Pending Review',
      confirmed: 'Confirmed',
      cancelled: 'Cancelled',
      completed: 'Completed'
    },
    services: {
      passport: 'Passport Application',
      license: 'Driving License',
      certificate: 'Birth Certificate',
      registration: 'Business Registration',
      visa: 'Visa Application'
    },
    priorities: {
      normal: 'Normal',
      urgent: 'Urgent'
    }
  },
  si: {
    appointmentDetails: 'නියමයන් විස්තර',
    citizenInformation: 'පුරවැසි තොරතුරු',
    serviceDetails: 'සේවා විස්තර',
    contactInformation: 'සම්බන්ධතා තොරතුරු',
    statusHistory: 'තත්ත්ව ඉතිහාසය',
    actions: 'ක්‍රියාමාර්ග',
    close: 'වසන්න',
    updateStatus: 'තත්ත්වය යාවත්කාලීන කරන්න',
    reschedule: 'නව කාලය නියම කරන්න',
    sendNotification: 'දැනුම්දීම යවන්න',
    viewHistory: 'පුරවැසි ඉතිහාසය බලන්න',
    addNotes: 'සටහන් එක් කරන්න',
    saveChanges: 'වෙනස්කම් සුරකින්න',
    name: 'සම්පූර්ණ නම',
    citizenId: 'පුරවැසි හැඳුනුම්පත',
    email: 'විද්‍යුත් ලිපිනය',
    phone: 'දුරකථන අංකය',
    serviceType: 'සේවාවේ වර්ගය',
    appointmentDate: 'නියමයන් දිනය',
    appointmentTime: 'නියමයන් වේලාව',
    submittedDate: 'ගොනු කළ දිනය',
    priority: 'ප්‍රමුඛතා මට්ටම',
    currentStatus: 'වර්තමාන තත්ත්වය',
    notes: 'සටහන්',
    notificationSent: 'දැනුම්දීම සාර්ථකව යවන ලදී!',
    notificationTypes: {
      sms: 'SMS පමණක්',
      email: 'ඊමේල් පමණක්',
      both: 'SMS සහ ඊමේල්'
    },
    statuses: {
      pending: 'සමාලෝචනය අපේක්ෂිත',
      confirmed: 'තහවුරු කළ',
      cancelled: 'අවලංගු කළ',
      completed: 'සම්පූර්ණ කළ'
    },
    services: {
      passport: 'ගමන් බලපත්‍ර අයදුම්පත',
      license: 'රියදුරු බලපත්‍රය',
      certificate: 'උප්පැන්න සහතිකය',
      registration: 'ව්‍යාපාර ලියාපදිංචිය',
      visa: 'වීසා අයදුම්පත'
    },
    priorities: {
      normal: 'සාමාන්‍ය',
      urgent: 'ගඩු'
    }
  },
  ta: {
    appointmentDetails: 'சந்திப்பு விவரங்கள்',
    citizenInformation: 'குடிமக்கள் தகவல்',
    serviceDetails: 'சேவை விவரங்கள்',
    contactInformation: 'தொடர்பு தகவல்',
    statusHistory: 'நிலை வரலாறு',
    actions: 'நடவடிக்கைகள்',
    close: 'மூடு',
    updateStatus: 'நிலையை புதுப்பிக்கவும்',
    reschedule: 'மீண்டும் நேரம் நிர்ணயிக்கவும்',
    sendNotification: 'அறிவிப்பு அனுப்பவும்',
    viewHistory: 'குடிமக்கள் வரலாறைப் பார்க்கவும்',
    addNotes: 'குறிப்புகளைச் சேர்க்கவும்',
    saveChanges: 'மாற்றங்களைச் சேமிக்கவும்',
    name: 'முழு பெயர்',
    citizenId: 'குடிமக்கள் அடையாள எண்',
    email: 'மின்னஞ்சல் முகவரி',
    phone: 'தொலைபேசி எண்',
    serviceType: 'சேவை வகை',
    appointmentDate: 'சந்திப்பு தேதி',
    appointmentTime: 'சந்திப்பு நேரம்',
    submittedDate: 'சமர்ப்பித்த தேதி',
    priority: 'முன்னுரிமை நிலை',
    currentStatus: 'தற்போதைய நிலை',
    notes: 'குறிப்புகள்',
    notificationSent: 'அறிவிப்பு வெற்றிகரமாக அனுப்பப்பட்டது!',
    notificationTypes: {
      sms: 'SMS மட்டும்',
      email: 'மின்னஞ்சல் மட்டும்',
      both: 'SMS மற்றும் மின்னஞ்சல்'
    },
    statuses: {
      pending: 'மதிப்பாய்வு நிலுவையில்',
      confirmed: 'உறுதிப்படுத்தப்பட்டது',
      cancelled: 'ரத்துசெய்யப்பட்டது',
      completed: 'முடிக்கப்பட்டது'
    },
    services: {
      passport: 'பாஸ்போர்ட் விண்ணப்பம்',
      license: 'ஓட்டுநர் உரிமம்',
      certificate: 'பிறப்பு சான்றிதழ்',
      registration: 'வணிக பதிவு',
      visa: 'விசா விண்ணப்பம்'
    },
    priorities: {
      normal: 'சாதாரண',
      urgent: 'அவசர'
    }
  }
};

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  appointment,
  isOpen,
  onClose,
  onStatusUpdate,
  language = 'en'
}) => {
  const [newStatus, setNewStatus] = useState<AppointmentStatus>(appointment.status);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [notificationType, setNotificationType] = useState<'sms' | 'email' | 'both'>('email');
  const [showNotificationSuccess, setShowNotificationSuccess] = useState(false);

  const t = modalTranslations[language];

  if (!isOpen) return null;

  const handleStatusUpdate = () => {
    onStatusUpdate(appointment.id, newStatus);
  };

  const handleSendNotification = () => {
    // Mock notification sending
    console.log(`Sending ${notificationType} notification to ${appointment.citizenName}`);
    setShowNotificationSuccess(true);
    setTimeout(() => setShowNotificationSuccess(false), 3000);
  };

  const handleViewHistory = () => {
    // Mock view history functionality
    console.log(`Viewing history for citizen ${appointment.citizenId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : language === 'si' ? 'si-LK' : 'ta-LK', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusColor = (status: AppointmentStatus) => {
    switch (status) {
      case 'pending':
        return 'text-[#FFC72C]';
      case 'confirmed':
        return 'text-[#008060]';
      case 'cancelled':
        return 'text-[#FF5722]';
      case 'completed':
        return 'text-[#8D153A]';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in-up">
      <div className="glass-morphism max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-border/50 shadow-glow">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/30">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t.appointmentDetails}</h2>
            <p className="text-sm text-muted-foreground">ID: {appointment.id}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-card/30 border border-border/50 text-foreground hover:bg-card/50 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Success Message */}
          {showNotificationSuccess && (
            <div className="bg-[#008060]/20 border border-[#008060]/30 text-[#008060] p-4 rounded-xl animate-fade-in-up">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="font-medium">{t.notificationSent}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Citizen Information */}
              <div className="glass-morphism p-6 rounded-xl border border-border/30">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {t.citizenInformation}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">{t.name}:</span>
                    <p className="font-medium text-foreground">{appointment.citizenName}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.citizenId}:</span>
                    <p className="font-medium text-foreground font-mono">{appointment.citizenId}</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="glass-morphism p-6 rounded-xl border border-border/30">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {t.contactInformation}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">{t.email}:</span>
                    <p className="font-medium text-foreground">{appointment.contactEmail}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.phone}:</span>
                    <p className="font-medium text-foreground">{appointment.contactPhone}</p>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="glass-morphism p-6 rounded-xl border border-border/30">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  {t.serviceDetails}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">{t.serviceType}:</span>
                    <p className="font-medium text-foreground">{t.services[appointment.serviceType]}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.appointmentDate}:</span>
                    <p className="font-medium text-foreground">{formatDate(appointment.date)}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.appointmentTime}:</span>
                    <p className="font-medium text-foreground">{formatTime(appointment.time)}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.submittedDate}:</span>
                    <p className="font-medium text-foreground">{formatDate(appointment.submittedDate)}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.priority}:</span>
                    <span className={`font-medium ${appointment.priority === 'urgent' ? 'text-[#FF5722]' : 'text-foreground'}`}>
                      {t.priorities[appointment.priority]}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.currentStatus}:</span>
                    <span className={`font-medium ${getStatusColor(appointment.status)}`}>
                      {t.statuses[appointment.status]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Notes */}
              {appointment.notes && (
                <div className="glass-morphism p-6 rounded-xl border border-border/30">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.notes}</h3>
                  <p className="text-muted-foreground italic">&quot;{appointment.notes}&quot;</p>
                </div>
              )}

              {/* Actions */}
              <div className="glass-morphism p-6 rounded-xl border border-border/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t.actions}</h3>
                
                {/* Status Update */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t.updateStatus}</label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as AppointmentStatus)}
                      className="w-full py-3 px-4 bg-card/30 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300"
                    >
                      {Object.entries(t.statuses).map(([value, label]) => (
                        <option key={value} value={value} className="bg-card text-foreground">
                          {label}
                        </option>
                      ))}
                    </select>
                    {newStatus !== appointment.status && (
                      <button
                        onClick={handleStatusUpdate}
                        className="mt-2 w-full px-4 py-2 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] text-white rounded-xl hover:from-[#FF5722] hover:to-[#8D153A] transition-all duration-300"
                      >
                        {t.updateStatus}
                      </button>
                    )}
                  </div>

                  {/* Send Notification */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t.sendNotification}</label>
                    <select
                      value={notificationType}
                      onChange={(e) => setNotificationType(e.target.value as 'sms' | 'email' | 'both')}
                      className="w-full py-3 px-4 bg-card/30 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300 mb-2"
                    >
                      {Object.entries(t.notificationTypes).map(([value, label]) => (
                        <option key={value} value={value} className="bg-card text-foreground">
                          {label}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={handleSendNotification}
                      className="w-full px-4 py-2 bg-gradient-to-r from-[#008060] to-[#FFC72C] text-white rounded-xl hover:from-[#FFC72C] hover:to-[#FF5722] transition-all duration-300"
                    >
                      {t.sendNotification}
                    </button>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t.addNotes}</label>
                    <textarea
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="w-full py-3 px-4 bg-card/30 border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#FFC72C] transition-all duration-300 resize-none"
                      rows={3}
                      placeholder="Add internal notes about this appointment..."
                    />
                  </div>

                  {/* Other Actions */}
                  <div className="space-y-2">
                    <button
                      onClick={handleViewHistory}
                      className="w-full px-4 py-2 bg-card/30 border border-border/50 rounded-xl text-foreground hover:bg-card/50 hover:border-[#FFC72C] transition-all duration-300"
                    >
                      {t.viewHistory}
                    </button>
                    <button className="w-full px-4 py-2 bg-card/30 border border-border/50 rounded-xl text-foreground hover:bg-card/50 hover:border-[#FFC72C] transition-all duration-300">
                      {t.reschedule}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 p-6 border-t border-border/30">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-card/30 border border-border/50 rounded-xl text-foreground hover:bg-card/50 transition-all duration-300"
          >
            {t.close}
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-[#FFC72C] to-[#FF5722] text-white rounded-xl hover:from-[#FF5722] hover:to-[#8D153A] transition-all duration-300">
            {t.saveChanges}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
