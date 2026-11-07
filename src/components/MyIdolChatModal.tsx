import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Flame, 
  Trophy, 
  Gamepad2, 
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface MyIdolChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IDOL_OPTIONS = [
  {
    id: 'default',
    name: 'My Idol (Ананд & Шүтээн)',
    desc: 'Зорилго, сахилга бат, амжилтын зөвлөгч',
    icon: Flame,
    color: '#F0A24C',
    greeting: 'Сайн уу! Би чиний шүтээн байна. Хичээл зүтгэл, зорилго, спортын талаар ярилцахад би бэлэн байна. Чамд ямар асуулт эсвэл хуваалцах бодол байна?'
  },
  {
    id: 'cooper_flagg',
    name: 'Cooper Flagg',
    desc: 'NBA #1 Prospect · Duke · Сагсан бөмбөг',
    icon: Trophy,
    color: '#3B82F6',
    greeting: 'Yo! Cooper Flagg байна. Талбай дээр 100% эрч хүчээ зориулахад бэлэн үү? Сагсан бөмбөг, бэлтгэл сургуулилалт, өрсөлдөөний тухай асуугаарай!'
  },
  {
    id: 'messi',
    name: 'Lionel Messi',
    desc: 'Хөлбөмбөгийн домог · 8x Ballon d\'Or',
    icon: Sparkles,
    color: '#10B981',
    greeting: 'Hola! Leo Messi байна. Амжилт гэдэг нэг л өдрийн дотор ирдэггүй, олон жилийн даруу хичээл зүтгэлийн үр дүн юм. Надтай хүссэн зүйлээ ярилцаарай.'
  },
  {
    id: 'm0nesy',
    name: 'm0NESY (CS2)',
    desc: 'AWP мэргэн буудагч · Esports шилдэг од',
    icon: Gamepad2,
    color: '#EC4899',
    greeting: 'Сайн уу! m0NESY байна. Хурд, өндөр төвлөрөл, рефлекс болон Esports-ийн өндөр түвшинд хэрхэн тоглох тухай ярилцъя!'
  }
];

export const MyIdolChatModal: React.FC<MyIdolChatModalProps> = ({ isOpen, onClose }) => {
  const [selectedIdol, setSelectedIdol] = useState<string>('default');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'model',
      text: IDOL_OPTIONS[0].greeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Advanced: Custom system instruction override
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [customInstruction, setCustomInstruction] = useState<string>('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentIdolData = IDOL_OPTIONS.find((i) => i.id === selectedIdol) || IDOL_OPTIONS[0];

  const handleSelectIdol = (idolId: string) => {
    setSelectedIdol(idolId);
    const idol = IDOL_OPTIONS.find((i) => i.id === idolId) || IDOL_OPTIONS[0];
    setMessages([
      {
        id: `switch-${Date.now()}`,
        role: 'model',
        text: idol.greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
    setErrorMessage(null);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);
    setErrorMessage(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            text: m.text,
          })),
          idolRole: selectedIdol,
          customInstruction: customInstruction.trim() || undefined,
        }),
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Хариулт авахад алдаа гарлаа.');
      }

      const botMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      const error = err as Error;
      if (error.name === 'AbortError') {
        setErrorMessage('Хариулт авахад хугацаа хэтэрлээ (Timeout). Дахин оролдоно уу.');
      } else {
        setErrorMessage(error.message || 'Холболт амжилтгүй боллоо.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        role: 'model',
        text: currentIdolData.greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
    setErrorMessage(null);
  };

  const quickQuestions = [
    'Өдөр бүр 1% хэрхэн урагшлах вэ?',
    'Сагсан бөмбөгийн өндөр ур чадварыг яаж хөгжүүлэх вэ?',
    'Хүнд үед сэтгэл зүйгээ хэрхэн хүчтэй барих вэ?',
    'Зорилгодоо хүрэх хамгийн чухал нууц юу вэ?'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Dialog Frame */}
      <div 
        className="w-full max-w-2xl h-[90vh] max-h-[720px] bg-[#111111] border border-[#F0A24C]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#E0E0E0] selection:bg-[#F0A24C]/30"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Top Header */}
        <div className="px-4 py-3 sm:px-6 bg-[#181818] border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all"
              style={{ 
                backgroundColor: `${currentIdolData.color}15`,
                borderColor: `${currentIdolData.color}50`,
                color: currentIdolData.color
              }}
            >
              <currentIdolData.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base tracking-tight">
                  {currentIdolData.name}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F0A24C]/15 text-[#F0A24C] border border-[#F0A24C]/30 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  Gemini AI
                </span>
              </div>
              <p className="text-xs text-[#8E8E8E] hidden sm:block">
                {currentIdolData.desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleResetChat}
              className="p-2 text-[#888] hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              title="Харилцааг шинээр эхлүүлэх"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setShowConfig(!showConfig)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                showConfig ? 'text-[#F0A24C] bg-[#F0A24C]/10' : 'text-[#888] hover:text-white hover:bg-white/5'
              }`}
              title="System Instruction тохиргоо"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#888] hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Хаах"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Idol Selector Pills */}
        <div className="px-4 py-2 bg-[#141414] border-b border-white/5 flex items-center gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
          {IDOL_OPTIONS.map((idol) => {
            const isSelected = selectedIdol === idol.id;
            return (
              <button
                key={idol.id}
                type="button"
                onClick={() => handleSelectIdol(idol.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#221C16] text-[#F0A24C] border border-[#F0A24C]/40 shadow-sm'
                    : 'text-[#888] hover:text-white hover:bg-white/5'
                }`}
              >
                <idol.icon className="w-3.5 h-3.5" />
                <span>{idol.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Custom System Instruction Collapsible */}
        {showConfig && (
          <div className="px-4 py-3 bg-[#161616] border-b border-[#F0A24C]/20 text-xs shrink-0 animate-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#F0A24C]" />
                System Instruction тохируулах (AI-ийн суурь заавар)
              </span>
              <span className="text-[11px] text-[#777]">Хоосон орхивол үндсэн тохиргоогоор хариулна</span>
            </div>
            <textarea
              value={customInstruction}
              onChange={(e) => setCustomInstruction(e.target.value)}
              placeholder="Жишээ: Та бол сагсан бөмбөгийн дасгалжуулагч. Анандад өдөр тутмын бэлтгэлийн тактик зөвлөнө үү..."
              className="w-full bg-[#0D0D0D] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#F0A24C] resize-none h-18"
            />
          </div>
        )}

        {/* Chat History Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((message) => {
            const isModel = message.role === 'model';
            return (
              <div
                key={message.id}
                className={`flex gap-3 ${isModel ? 'items-start' : 'items-start flex-row-reverse'}`}
              >
                {/* Avatar Icon */}
                <div
                  className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center border ${
                    isModel
                      ? 'bg-[#1C1611] border-[#F0A24C]/40 text-[#F0A24C]'
                      : 'bg-[#1E1E1E] border-white/15 text-white'
                  }`}
                >
                  {isModel ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-[80%] sm:max-w-[75%] space-y-1 ${isModel ? 'text-left' : 'text-right'}`}>
                  <div
                    className={`inline-block p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed text-left whitespace-pre-wrap ${
                      isModel
                        ? 'bg-[#181818] text-[#E0E0E0] border border-white/5 rounded-tl-sm'
                        : 'bg-[#F0A24C] text-black font-medium rounded-tr-sm shadow-md'
                    }`}
                  >
                    {message.text}
                  </div>
                  <div className="text-[10px] text-[#666] px-1 font-mono">
                    {message.timestamp}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex gap-3 items-center text-[#888] text-xs">
              <div className="w-8 h-8 rounded-xl bg-[#1C1611] border border-[#F0A24C]/40 text-[#F0A24C] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-[#181818] border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F0A24C] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#F0A24C] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#F0A24C] animate-bounce [animation-delay:0.4s]" />
                <span className="ml-2 text-xs text-[#999]">Хариулт бичиж байна...</span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-red-200 text-xs">
              <p className="font-semibold">Алдаа:</p>
              <p>{errorMessage}</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 bg-[#141414] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
            <span className="text-[11px] text-[#666] shrink-0">Санал болгох:</span>
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded-full bg-[#1F1F1F] hover:bg-[#F0A24C]/20 hover:text-[#F0A24C] text-[11px] text-[#AAA] whitespace-nowrap transition-colors border border-white/5 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar Area */}
        <div className="p-3 sm:p-4 bg-[#181818] border-t border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder={`${currentIdolData.name}-оос асуух мессежээ бичнэ үү...`}
              className="flex-1 bg-[#0E0E0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#F0A24C] transition-colors disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              className="px-4 py-3 rounded-xl bg-[#F0A24C] hover:bg-[#FFAF5E] text-black font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer active:scale-95 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Илгээх</span>
            </button>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-[#666]">
            <span>Powered by Gemini AI · Server-Side API</span>
            <span>Enter дарж илгээнэ</span>
          </div>
        </div>

      </div>
    </div>
  );
};
