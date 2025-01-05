import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface FAQItemProps {
  question: string;
  answer: string;
  ctaText?: string;
  ctaLink?: string;
}

export function FAQItem({ question, answer, ctaText, ctaLink }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCTAClick = () => {
    // If we're already on the home page, just scroll to calculator
    if (window.location.pathname === '/') {
      document.getElementById(ctaLink)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on another page, navigate to home and then scroll to calculator
      navigate('/?scrollTo=calculator');
    }
  };

  return (
    <div className="border border-[#1E2130] rounded-xl overflow-hidden bg-[#0B0B1E]/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-[#1E2130]/20 transition-colors"
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-[#31D7F4] transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      
      {isOpen && (
        <div className="p-6 pt-0">
          <p className="text-white/70 mb-4">{answer}</p>
          {ctaText && ctaLink && (
            <Button 
              onClick={handleCTAClick}
              className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white"
            >
              {ctaText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}