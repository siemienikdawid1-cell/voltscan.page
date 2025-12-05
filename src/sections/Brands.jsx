const Brands = () => {
  return (
    <section id="brands" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            Obsługiwane <span className="text-secondary">Marki</span>
          </h2>
        </div>

        {/* Content layout: Image left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30">
              <img
                src="/images/person-working.jpg"
                alt="Diagnostyka maszyn budowlanych"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                Serwisujemy wszystkie rodzaje maszyn
              </p>

              <div className="space-y-4 text-lg md:text-xl text-gray-300">
                <p className="leading-relaxed">
                  Nasza specjalizacja obejmuje szeroki zakres sprzętu:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Maszyny budowlane i drogowe</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Maszyny leśne i rolnicze</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Napędy instalowane na jednostkach pływających</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Specjalistyczne pojazdy i urządzenia</span>
                  </li>
                </ul>

                <p className="leading-relaxed pt-4">
                  Niezależnie od marki czy typu maszyny, zapewniamy profesjonalny
                  serwis i kompleksową diagnostykę. Nasze doświadczenie obejmuje
                  szeroki zakres producentów i modeli.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    const element = document.getElementById('kontakt');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Skontaktuj się z nami
                  <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
