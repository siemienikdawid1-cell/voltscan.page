const Brands = () => {
  const brands = [
    'WIRTGEN',
    'HAMM',
    'VOGELE',
    'KLEEMANN',
    'CATERPILLAR',
    'VOLVO',
    'KOMATSU',
    'DOOSAN',
    'JCB',
    'CASE',
    'SENNEBOGEN',
    'TEREX',
    'POWERSCREEN',
    'DEUTZ',
    'PERKINS',
    'MERCEDES',
  ];

  const additionalInfo = {
    title: 'STACJONARNE ZABUDOWY CUMMINS',
    description: 'Specjalizujemy się również w naprawie i serwisie stacjonarnych zabudów silników Cummins',
  };

  return (
    <section id="brands" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            Obsługiwane <span className="text-secondary">Marki</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            Świadczymy kompleksowe usługi serwisowe dla najpopularniejszych marek maszyn budowlanych i drogowych
          </p>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-dark-lighter hover:bg-dark-light rounded-xl p-8 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800 hover:border-primary group"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                  {brand}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional specialty */}
        <div className="mt-16 bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 md:p-12 shadow-2xl border border-primary/30">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
              <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              {additionalInfo.title}
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              {additionalInfo.description}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            Nie widzisz swojej marki? Skontaktuj się z nami!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('kontakt');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
