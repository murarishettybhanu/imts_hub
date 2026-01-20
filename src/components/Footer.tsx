import { ArrowUp, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getImagePath } from '@/lib/imagePath';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/IMTS.pdf';
    link.download = 'IMTS-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { name: 'Home', href: '#home', isSection: true },
      { name: 'About Us', href: '#about', isSection: true },
      { name: 'Services', href: '#services', isSection: true },
      { name: 'Why Choose Us', href: '#why-choose-us', isSection: true },
      { name: 'Testimonials', href: '#testimonials', isSection: true },
      { name: 'Contact', href: '#contact', isSection: true },
    ],
    services: [
      { name: 'PCB Design & Fabrication', href: '#services', isSection: true },
      { name: 'SI, PI & Thermal Analysis', href: '#services', isSection: true },
      { name: 'Components Procurement & PCB Assembly', href: '#services', isSection: true },
      { name: 'Cable Harness & Unit Integration', href: '#services', isSection: true },
      { name: 'Electronic Systems & Sub Systems', href: '#services', isSection: true },
      { name: 'Turnkey Solutions', href: '#services', isSection: true },
      { name: 'Sheet Metal Boxes Design & Fabrication', href: '#services', isSection: true },
      { name: 'Patch Antennas Design & Testing', href: '#services', isSection: true },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img
                src={getImagePath('/logo.png')}
                alt="IMTS HUB Logo"
                className="h-8 w-auto"
              />
            </a>
            <p className="text-muted-foreground mb-6">
              A trusted partner in electronic systems and sub-system development and manufacturing, committed to quality and innovation since 2019.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSectionClick(link.href.substring(1))}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.isSection ? (
                    <button
                      onClick={() => handleSectionClick(link.href.substring(1))}
                      className="text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
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
          <button
            onClick={downloadBrochure}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
          >
            <Download size={18} />
            Download Brochure
          </button>
        </div>
      </div>
    </footer>
  );
};
