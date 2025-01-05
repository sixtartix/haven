import { Shield, Users } from 'lucide-react';
import { FAQItem } from '@/components/faq/FAQItem';
import { faqItems } from '@/components/faq/FAQData';

export function FAQ() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#31D7F4]">Questions</span> Fréquentes
          </h1>
          <p className="text-white/70 text-lg">
            Tout ce que vous devez savoir sur notre service de boost Rocket League
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 bg-[#1E2130] px-4 py-2 rounded-lg">
            <Shield className="text-[#31D7F4]" size={20} />
            <span className="font-medium">100% Sécurisé</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1E2130] px-4 py-2 rounded-lg">
            <Users className="text-[#31D7F4]" size={20} />
            <span className="font-medium">Support 24/7</span>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              ctaText={item.ctaText}
              ctaLink={item.ctaLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}