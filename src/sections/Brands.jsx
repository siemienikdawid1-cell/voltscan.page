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
    'CUMMINS',
  ];

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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
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
