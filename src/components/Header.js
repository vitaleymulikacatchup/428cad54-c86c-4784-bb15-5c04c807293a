import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Передати показ</span>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-brand-blue" />
              <span className="font-semibold">0-800-304-502</span>
              <span className="text-gray-600">call-center</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/images/payment-icons.png" alt="Payment methods" className="h-6" />
            <img src="/images/discount-card.png" alt="Discount card" className="h-6" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Запорізька обленерго" className="h-12" />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="nav-link text-brand-blue">Населенню</a>
            <a href="#" className="nav-link text-brand-red flex items-center">
              <img src="/images/calendar-icon.png" alt="" className="w-5 h-5 mr-2" />
              Графіки відключень
            </a>
            <a href="#" className="nav-link text-brand-yellow">Підприємствам</a>
          </nav>

          {/* Contact info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <span className="text-gray-600">Передати показ</span>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-brand-blue" />
              <span className="font-semibold">0-800-304-502</span>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <a href="#" className="block nav-link text-brand-blue">Населенню</a>
            <a href="#" className="block nav-link text-brand-red">Графіки відключень</a>
            <a href="#" className="block nav-link text-brand-yellow">Підприємствам</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;