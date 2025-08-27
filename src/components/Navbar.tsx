import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">She&Soul</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['HOME', 'About', 'Problem', 'Solution'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Join Waitlist Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('newsletter')}
              className="btn-primary"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-card rounded-lg mt-2">
              {['HOME', 'About', 'Problem', 'Solution'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary block px-3 py-2 font-medium w-full text-left transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('newsletter')}
                className="btn-primary w-full mt-4"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;