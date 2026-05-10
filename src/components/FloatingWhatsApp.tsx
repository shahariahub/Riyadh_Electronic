import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => (
  <a 
    href="https://wa.me/8801726725236" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
  >
    <MessageCircle size={28} className="text-white" />
  </a>
);

export default FloatingWhatsApp;
