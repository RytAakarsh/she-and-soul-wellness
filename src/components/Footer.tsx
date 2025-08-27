import { Instagram, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">She&Soul</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Empowering women through digital-first wellness solutions. 
              A safe, stigma-free space for mental, emotional, and reproductive health.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>for women's wellness</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Problem', id: 'problem' },
                { name: 'Solution', id: 'solution' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="https://instagram.com/shes.ouls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                @shes.ouls
              </a>
              
              <a
                href="mailto:angel.founder@sheandsoul.co.in"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                angel.founder@sheandsoul.co.in
              </a>
              
              <a
                href="tel:+918882509991"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                +91 8882509991
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-card">
          <div className="text-center">
            <h4 className="text-xl font-bold text-foreground mb-2">
              Join the She&Soul Community
            </h4>
            <p className="text-muted-foreground mb-6">
              Be part of the movement transforming women's healthcare
            </p>
            <button
              onClick={() => scrollToSection('newsletter')}
              className="btn-primary"
            >
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} She&Soul. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;