// src/app/agent/chat/page.tsx
"use client";
import { useState } from 'react';
import ChatLayout from '@/components/agent/chat/ChatLayout';
import ChatQueue from '@/components/agent/chat/ChatQueue';
import ChatSession from '@/components/agent/chat/ChatSession';
import ChatSidebar from '@/components/agent/chat/ChatSidebar';
import ChatTransfer from '@/components/agent/chat/ChatTransfer';
import ChatNotes from '@/components/agent/chat/ChatNotes';

// Types
type Language = 'en' | 'si' | 'ta';
type ChatStatus = 'pending' | 'active' | 'transferred' | 'completed';
type Priority = 'normal' | 'urgent';

interface ChatRequest {
  id: string;
  citizenName: string;
  citizenId: string;
  topic: string;
  priority: Priority;
  waitTime: number; // minutes
  avatar?: string;
  lastMessage: string;
  timestamp: string;
}

interface ActiveChat {
  id: string;
  citizenName: string;
  citizenId: string;
  topic: string;
  startTime: string;
  messages: ChatMessage[];
  status: ChatStatus;
  avatar?: string;
}

interface ChatMessage {
  id: string;
  // FIX: Added 'system' to the sender type to allow for system messages.
  sender: 'agent' | 'citizen' | 'system';
  content: string;
  timestamp: string;
  type: 'text' | 'file' | 'system';
  fileName?: string;
  fileUrl?: string;
}

// Mock data
const mockChatQueue: ChatRequest[] = [
  {
    id: 'CHT001',
    citizenName: 'Nimal Perera',
    citizenId: '199012345678V',
    topic: 'Passport Application Status',
    priority: 'urgent',
    waitTime: 12,
    lastMessage: 'I need to check my passport application urgently for travel',
    timestamp: '2025-08-07T14:30:00Z'
  },
  {
    id: 'CHT002',
    citizenName: 'Kamala Silva',
    citizenId: '198567891234V',
    topic: 'Driving License Renewal',
    priority: 'normal',
    waitTime: 8,
    lastMessage: 'How can I renew my driving license online?',
    timestamp: '2025-08-07T14:22:00Z'
  },
  {
    id: 'CHT003',
    citizenName: 'Sunil Fernando',
    citizenId: '197734567890V',
    topic: 'Birth Certificate Request',
    priority: 'normal',
    waitTime: 5,
    lastMessage: 'I need a certified copy of my birth certificate',
    timestamp: '2025-08-07T14:25:00Z'
  }
];

// Page translations
const pageTranslations: Record<Language, {
  title: string;
  subtitle: string;
  activeChats: string;
  pendingQueue: string;
  avgResponseTime: string;
  satisfaction: string;
  noActiveChat: string;
  selectFromQueue: string;
}> = {
  en: {
    title: 'Live Chat Support',
    subtitle: 'Provide real-time assistance to citizens',
    activeChats: 'Active Chats',
    pendingQueue: 'Queue Waiting',
    avgResponseTime: 'Avg Response',
    satisfaction: 'Satisfaction',
    noActiveChat: 'No Active Chat',
    selectFromQueue: 'Select a chat from the queue to start helping citizens'
  },
  si: {
    title: 'සජීවී කතාබස් සහාය',
    subtitle: 'පුරවැසියන්ට තත්‍ය කාලීන සහාය ලබා දීම',
    activeChats: 'ක්‍රියාකාරී කතාබස්',
    pendingQueue: 'පොරොත්තු පෙළ',
    avgResponseTime: 'සාමාන්‍ය ප්‍රතිචාර',
    satisfaction: 'තෘප්තිය',
    noActiveChat: 'ක්‍රියාකාරී කතාබසක් නැත',
    selectFromQueue: 'පුරවැසියන්ට උදව් කිරීම ආරම්භ කිරීමට පෙළෙන් කතාබසක් තෝරන්න'
  },
  ta: {
    title: 'நேரடி அரட்டை ஆதரவு',
    subtitle: 'குடிமக்களுக்கு நிகழ்நேர உதவி வழங்கவும்',
    activeChats: 'செயலில் உள்ள அரட்டைகள்',
    pendingQueue: 'காத்திருப்பு வரிசை',
    avgResponseTime: 'சராசரி பதில்',
    satisfaction: 'திருப்தி',
    noActiveChat: 'செயலில் அரட்டை இல்லை',
    selectFromQueue: 'குடிமக்களுக்கு உதவ தொடங்க வரிசையிலிருந்து ஒரு அரட்டையைத் தேர்ந்தெடுக்கவும்'
  }
};

export default function ChatPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [chatQueue, setChatQueue] = useState<ChatRequest[]>(mockChatQueue);
  const [activeChat, setActiveChat] = useState<ActiveChat | null>(null);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [agentStatus, setAgentStatus] = useState<'online' | 'busy' | 'away'>('online');

  const t = pageTranslations[currentLanguage];

  const handleLanguageChange = (newLanguage: Language) => {
    setCurrentLanguage(newLanguage);
  };

  const handleAcceptChat = (chatRequest: ChatRequest) => {
    // Convert chat request to active chat
    const newActiveChat: ActiveChat = {
      id: chatRequest.id,
      citizenName: chatRequest.citizenName,
      citizenId: chatRequest.citizenId,
      topic: chatRequest.topic,
      startTime: new Date().toISOString(),
      messages: [
        {
          id: 'msg1',
          sender: 'citizen',
          content: chatRequest.lastMessage,
          timestamp: chatRequest.timestamp,
          type: 'text'
        },
        {
          id: 'msg2',
          sender: 'system',
          content: `Agent DEMO1234 has joined the chat`,
          timestamp: new Date().toISOString(),
          type: 'system'
        }
      ],
      status: 'active',
      avatar: chatRequest.avatar
    };

    setActiveChat(newActiveChat);
    
    // Remove from queue
    setChatQueue(prev => prev.filter(chat => chat.id !== chatRequest.id));
    
    // Set status to busy
    setAgentStatus('busy');
  };

  const handleDeclineChat = (chatId: string) => {
    // Remove from queue (in real app, would transfer to another agent)
    setChatQueue(prev => prev.filter(chat => chat.id !== chatId));
  };

  const handleSendMessage = (content: string, type: 'text' | 'file' = 'text', fileName?: string, fileUrl?: string) => {
    if (!activeChat) return;

    const newMessage: ChatMessage = {
      id: `msg${Date.now()}`,
      sender: 'agent',
      content,
      timestamp: new Date().toISOString(),
      type,
      fileName,
      fileUrl
    };

    setActiveChat(prev => prev ? {
      ...prev,
      messages: [...prev.messages, newMessage]
    } : null);
  };

  const handleTransferChat = (targetAgent: string, reason: string) => {
    if (!activeChat) return;
    
    console.log(`Transferring chat ${activeChat.id} to ${targetAgent}: ${reason}`);
    
    // Add system message
    const transferMessage: ChatMessage = {
      id: `msg${Date.now()}`,
      sender: 'system',
      content: `Chat transferred to ${targetAgent}`,
      timestamp: new Date().toISOString(),
      type: 'system'
    };

    setActiveChat(prev => prev ? {
      ...prev,
      messages: [...prev.messages, transferMessage],
      status: 'transferred'
    } : null);

    setIsTransferModalOpen(false);
    
    // Clear active chat after a delay
    setTimeout(() => {
      setActiveChat(null);
      setAgentStatus('online');
    }, 2000);
  };

  const handleEndChat = (notes: string, followUpRequired: boolean) => {
    if (!activeChat) return;

    console.log(`Ending chat ${activeChat.id}. Notes: ${notes}. Follow-up: ${followUpRequired}`);
    
    // Add system message
    const endMessage: ChatMessage = {
      id: `msg${Date.now()}`,
      sender: 'system',
      content: 'Chat session ended by agent',
      timestamp: new Date().toISOString(),
      type: 'system'
    };

    setActiveChat(prev => prev ? {
      ...prev,
      messages: [...prev.messages, endMessage],
      status: 'completed'
    } : null);

    setIsNotesModalOpen(false);
    
    // Clear active chat after a delay
    setTimeout(() => {
      setActiveChat(null);
      setAgentStatus('online');
    }, 2000);
  };

  // Mock stats data
  const stats = {
    activeChats: activeChat ? 1 : 0,
    pendingQueue: chatQueue.length,
    avgResponseTime: '2m 15s',
    satisfaction: '94%'
  };

  return (
    <ChatLayout
      title={
        <>
          <span>{t.title.split(' ')[0]}</span>{' '}
          <span>{t.title.split(' ')[1]}</span>{' '}
          <span className="text-gradient">{t.title.split(' ')[2] || ''}</span>
        </>
      }
      subtitle={t.subtitle}
      language={currentLanguage}
      onLanguageChange={handleLanguageChange}
      agentStatus={agentStatus}
      onStatusChange={setAgentStatus}
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="glass-morphism p-4 sm:p-6 rounded-2xl border border-border/50 shadow-glow animate-fade-in-up">
          <div className="text-2xl sm:text-3xl font-bold text-[#008060] mb-2">{stats.activeChats}</div>
          <div className="text-xs sm:text-sm text-muted-foreground">{t.activeChats}</div>
        </div>
        <div className="glass-morphism p-4 sm:p-6 rounded-2xl border border-border/50 shadow-glow animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="text-2xl sm:text-3xl font-bold text-[#FFC72C] mb-2">{stats.pendingQueue}</div>
          <div className="text-xs sm:text-sm text-muted-foreground">{t.pendingQueue}</div>
        </div>
        <div className="glass-morphism p-4 sm:p-6 rounded-2xl border border-border/50 shadow-glow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="text-2xl sm:text-3xl font-bold text-[#FF5722] mb-2">{stats.avgResponseTime}</div>
          <div className="text-xs sm:text-sm text-muted-foreground">{t.avgResponseTime}</div>
        </div>
        <div className="glass-morphism p-4 sm:p-6 rounded-2xl border border-border/50 shadow-glow animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="text-2xl sm:text-3xl font-bold text-[#8D153A] mb-2">{stats.satisfaction}</div>
          <div className="text-xs sm:text-sm text-muted-foreground">{t.satisfaction}</div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chat Queue - Left Side */}
        <div className="lg:col-span-4">
          <ChatQueue
            chatQueue={chatQueue}
            onAcceptChat={handleAcceptChat}
            onDeclineChat={handleDeclineChat}
            language={currentLanguage}
          />
        </div>

        {/* Active Chat - Center */}
        <div className="lg:col-span-5">
          {activeChat ? (
            <ChatSession
              activeChat={activeChat}
              onSendMessage={handleSendMessage}
              onTransferChat={() => setIsTransferModalOpen(true)}
              onEndChat={() => setIsNotesModalOpen(true)}
              language={currentLanguage}
            />
          ) : (
            <div className="glass-morphism p-8 rounded-2xl border border-border/50 shadow-glow h-[600px] flex items-center justify-center animate-fade-in-up">
              <div className="text-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-muted-foreground">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="11" r="1"/>
                  <circle cx="8" cy="11" r="1"/>
                  <circle cx="16" cy="11" r="1"/>
                </svg>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t.noActiveChat}</h3>
                <p className="text-muted-foreground max-w-md">{t.selectFromQueue}</p>
              </div>
            </div>
          )}
        </div>

        {/* Chat Sidebar - Right Side */}
        <div className="lg:col-span-3">
          <ChatSidebar
            activeChat={activeChat}
            language={currentLanguage}
          />
        </div>
      </div>

      {/* Transfer Modal */}
      {isTransferModalOpen && activeChat && (
        <ChatTransfer
          isOpen={isTransferModalOpen}
          onClose={() => setIsTransferModalOpen(false)}
          onTransfer={handleTransferChat}
          chatId={activeChat.id}
          citizenName={activeChat.citizenName}
          language={currentLanguage}
        />
      )}

      {/* Notes Modal */}
      {isNotesModalOpen && activeChat && (
        <ChatNotes
          isOpen={isNotesModalOpen}
          onClose={() => setIsNotesModalOpen(false)}
          onSaveNotes={handleEndChat}
          chatId={activeChat.id}
          citizenName={activeChat.citizenName}
          language={currentLanguage}
        />
      )}
    </ChatLayout>
  );
}
