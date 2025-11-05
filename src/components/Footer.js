import React from 'react';
import { Phone, Mail, MapPin, Facebook, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer-bg py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Контакти</h3>
            <div className="footer-text space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2" />
                <span>Телефон: прийом показів (для побутових споживачів): (061)228-51-09, (061)702-05-50, (093)168-01-01; (050)19-91-69; (093)170-28-35</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Адреса: вул. Славгавір, 14, м. Запоріжжя, 69035</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2" />
                <span>e-mail: kanc@zoe.com.ua</span>
              </div>
              <a href="#" className="text-brand-blue hover:underline block">
                Особистий кабінет замовника послуг комерційного обліку
              </a>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="footer-section">
            <p className="footer-text mb-4">
              Споживачі можуть подати скаргу до АТ "Запоріжжяобленерго" щодо якості послуг через мобільний додаток "Енергетика Онлайн"
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              <a href="#" className="app-store-btn">
                <img src="/images/google-play.png" alt="Google Play" className="h-10" />
              </a>
              <a href="#" className="app-store-btn">
                <img src="/images/app-store.png" alt="App Store" className="h-10" />
              </a>
            </div>
            <div className="flex justify-center space-x-2 mb-4">
              <img src="/images/partner-logos.png" alt="Partner logos" className="h-8" />
            </div>
            <div className="text-center">
              <img src="/images/qr-code.png" alt="QR Code" className="h-20 mx-auto" />
            </div>
          </div>

          {/* Anti-corruption */}
          <div className="footer-section">
            <h3 className="footer-title">Антикорупційна діяльність</h3>
            <div className="footer-text space-y-2">
              <p>Шановні споживачі!</p>
              <p>В АТ "Запоріжжяобленерго" працює Лінія довіри з питань запобігання та протидії корупції</p>
              <div className="text-brand-blue font-semibold">
                <p>ТЕЛЕФОН: (050) 322-64-26</p>
                <p>E-mail: stopcorrupt@zoe.com.ua</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-600 pt-8">
          <div className="text-center mb-4">
            <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Facebook className="w-5 h-5 mr-2" />
              слідкуйте за нами на facebook
            </a>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="text-white mr-2">Передати показ:</span>
              <Send className="w-5 h-5 text-brand-blue" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;