import { MessageSquare, Mail, Shield, Clock, CreditCard } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { useState } from 'react';
import { LegalDialog } from '../legal/LegalDialog';

const footerLinks = {
  services: [
    { name: 'Boost de rang', href: '#calculator' },
    { name: 'Placement', href: '#calculator' },
    { name: 'Coaching', href: '#calculator' },
    { name: 'Tournois', href: '#calculator' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Politique de confidentialité', href: '#', dialog: 'privacy' },
    { name: 'Conditions d\'utilisation', href: '#', dialog: 'terms' },
  ],
};

const features = [
  { icon: Shield, text: 'Paiement 100% sécurisé' },
  { icon: Clock, text: 'Service 24/7' },
  { icon: CreditCard, text: 'Garantie satisfait ou remboursé' },
];

export function Footer() {
  const [legalDialog, setLegalDialog] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#0A0B14]/80 backdrop-blur-lg border-t border-[#1E2130]">
      {/* Features section */}
      <div className="border-b border-[#1E2130]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <feature.icon className="w-5 h-5 text-[#31D7F4]" />
                <span className="text-white/70">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <Logo />
            <p className="text-white/70 text-sm">
              Service de boost Rocket League professionnel. Atteignez le rang que vous méritez avec nos boosters expérimentés.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  {'dialog' in link ? (
                    <button
                      onClick={() => setLegalDialog(link.dialog as 'privacy' | 'terms')}
                      className="text-white/70 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="https://discord.gg/8s8SHvzuc9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] transition-colors px-4 py-2 rounded-lg w-fit"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">Discord</span>
              </a>
              <a
                href="mailto:contact@turbohaven.com"
                className="flex items-center gap-2 bg-[#1E2130] hover:bg-[#1E2130]/80 transition-colors px-4 py-2 rounded-lg w-fit"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1E2130] mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} TurboHaven. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Legal Dialogs */}
      <LegalDialog
        open={legalDialog !== null}
        onOpenChange={(open) => !open && setLegalDialog(null)}
        type={legalDialog || 'privacy'}
      />
    </footer>
  );
}