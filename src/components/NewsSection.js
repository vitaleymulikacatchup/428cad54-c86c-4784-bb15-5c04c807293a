import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      category: 'ОСТАННІ НОВИНИ',
      title: '06 ЛИСТОПАДА ПО ЗАПОРІЗЬКІЙ ОБЛАСТІ ДІЯТИМУТЬ ГТВ',
      date: '5 листопада 2023',
      content: 'Відповідно до команди НЕК «Укренерго», з метою стабілізації ситуації в ОЕС України енергосистеми, 06 листопада по Запорізькій області будуть застосовані графіки погодинних відключень (ГПВ). Орієнтовно вимикатимуться з 08:00 до 10:00 - 0,5 черги, з 14:00 до 16:00 - 1 черга, з 20:00 до 22:00 - 1,5 черги...'
    },
    {
      id: 2,
      category: 'АКТУАЛЬНІ НОВИНИ',
      title: 'Реєстр електропостачальників',
      content: 'Реєстр електропостачальників, які присвоїлися до умов публічного договору електропостачальника про надання послуг у розподілу електроенергії...'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Navigation tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-8 border-b">
            <a href="#" className="nav-link text-brand-blue border-b-2 border-brand-blue">Населенню</a>
            <a href="#" className="nav-link text-brand-red flex items-center">
              <img src="/images/calendar-icon.png" alt="" className="w-5 h-5 mr-2" />
              Графіки відключень
            </a>
            <a href="#" className="nav-link text-brand-yellow">Підприємствам</a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main news */}
          <div className="lg:col-span-2">
            <div className="news-card">
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                <span className="news-date">{newsItems[0].category}</span>
              </div>
              <h2 className="news-title text-xl">{newsItems[0].title}</h2>
              <div className="flex items-center mb-3">
                <Clock className="w-4 h-4 text-gray-500 mr-2" />
                <span className="news-date">{newsItems[0].date}</span>
              </div>
              <p className="news-content">{newsItems[0].content}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Schedule widget */}
            <div className="news-card">
              <img src="/images/schedule-widget.png" alt="Діяти графік погодинних відключень" className="w-full mb-4" />
            </div>

            {/* Additional news */}
            <div className="news-card">
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                <span className="news-date">{newsItems[1].category}</span>
              </div>
              <h3 className="news-title">{newsItems[1].title}</h3>
              <p className="news-content">{newsItems[1].content}</p>
              <a href="#" className="text-brand-blue text-sm hover:underline">Читати далі</a>
            </div>

            {/* More news items */}
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="text-sm font-medium text-gray-800 mb-1">
                  Перелік типів лічильників, рекомендованих до встановлення ПАТ «Запоріжжяобленерго», та їх технічні характеристики
                </h4>
                <p className="text-xs text-gray-600">У відповідності до вимог Кодексу комерційного обліку електричної енергії, затвердженого Постановою НКРЕКП від 14.03.2018 № 311...</p>
                <a href="#" className="text-brand-blue text-xs hover:underline">Читати далі</a>
              </div>

              <div className="border-b pb-3">
                <h4 className="text-sm font-medium text-gray-800 mb-1">
                  До уваги споживачів за об'єктами, розташованими на території, де ведуться бойові дії, або тимчасово окупованих російською федерацією
                </h4>
                <p className="text-xs text-gray-600">З 24.02.2022 групи України здійснюється військова агресія російської федерації, у зв'язку з чим з 24.02.2022 Україна...</p>
                <a href="#" className="text-brand-blue text-xs hover:underline">Читати далі</a>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-800 mb-1">
                  ПАТ «Запоріжжяобленерго» інформує щодо розгляду звернень (листів) споживачів (заявників) з метою врегулювання договірних відносин в період дії правового режиму воєнного стану
                </h4>
                <p className="text-xs text-gray-600">З 24.02.2022 групи України здійснюється військова агресія російської федерації, у зв'язку з чим з 24.02.2022 Україна...</p>
                <a href="#" className="text-brand-blue text-xs hover:underline">Читати далі</a>
              </div>
            </div>
          </div>
        </div>

        {/* Load more button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
            Переглянути всі новини
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;