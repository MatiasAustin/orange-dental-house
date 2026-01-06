import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GenerateContentResponse } from "@google/genai";
import { createChatSession } from '../services/geminiService';
import { Message } from '../types';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Halo! 👋 Saya asisten virtual Orange Dental. Ada yang bisa saya bantu seputar perawatan gigi atau ingin reservasi?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef(createChatSession());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await chatSession.current.sendMessageStream({ message: userMessage.text });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]); // Placeholder

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
            fullResponse += c.text;
            setMessages(prev => {
                const newHistory = [...prev];
                newHistory[newHistory.length - 1] = { role: 'model', text: fullResponse };
                return newHistory;
            });
        }
      }

    } catch (error) {
      console.error("Error generating response:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Maaf, saya sedang mengalami gangguan. Silakan hubungi admin via WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`group fixed bottom-6 right-6 z-40 p-4 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Tanya AI"
      >
        <Sparkles size={24} className="text-orange-400 flex-shrink-0" />
        <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:pl-2 transition-all duration-300 overflow-hidden whitespace-nowrap font-medium">
          Tanya AI
        </span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[500px] max-h-[80vh] glass-card rounded-3xl flex flex-col transition-all duration-500 origin-bottom-right shadow-2xl overflow-hidden border border-white/80 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 bg-orange-500/10 border-b border-orange-500/10 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
                <Sparkles size={20} className="text-white" />
             </div>
             <div>
                <h3 className="font-bold text-slate-800">Dr. Orange AI</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </p>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-black/5 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/30">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-br-sm' 
                    : 'bg-white text-slate-700 shadow-sm border border-white/60 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border border-white/60 flex items-center gap-2 text-slate-400 text-xs">
                 <Loader2 size={14} className="animate-spin" /> Mengetik...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white/60 border-t border-white/50 backdrop-blur-md">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Tanya tentang behel, harga..."
              className="w-full pl-4 pr-12 py-3.5 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-sm shadow-inner"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-1.5 top-1.5 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:hover:bg-orange-500 transition-all shadow-md"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};