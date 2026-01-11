import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      // { name: 'Products', href: '#products' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'PCB Design & Fabrication', href: '#services' },
      { name: 'SI, PI & Thermal Analysis', href: '#services' },
      { name: 'Components Procurement & PCB Assembly', href: '#services' },
      { name: 'Cable Harness & Unit Integration', href: '#services' },
      { name: 'Electronic Systems & Sub Systems', href: '#services' },
      { name: 'Turnkey Solutions', href: '#services' },
      { name: 'Sheet Metal Boxes Design & Fabrication', href: '#services' },
      { name: 'Patch Antennas Design & Testing', href: '#services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="IMTS HUB Logo" 
                className="h-8 w-auto"
              />
            </a>
            <p className="text-muted-foreground mb-6">
              Your trusted partner in electronics hardware design and fabrication.
              Transforming ideas into reality since 2019.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} IMTS HUB Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
