const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            <span className="text-secondary">Kontakt</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            Skontaktuj się z nami już dziś i umów się na konsultację
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Dane kontaktowe</h3>

            {/* Phone */}
            <div className="mb-8 flex items-start space-x-4">
              <div className="bg-primary p-4 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Telefon</div>
                <a href="tel:+48123456789" className="text-xl font-semibold hover:text-secondary transition-colors">
                  +48 123 456 789
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8 flex items-start space-x-4">
              <div className="bg-primary p-4 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Email</div>
                <a href="mailto:kontakt@serwis.pl" className="text-xl font-semibold hover:text-secondary transition-colors break-all">
                  kontakt@serwis.pl
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="mb-8 flex items-start space-x-4">
              <div className="bg-primary p-4 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Adres</div>
                <div className="text-xl font-semibold">
                  ul. Przykładowa 123<br />
                  00-000 Miasto
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-dark-lighter rounded-xl p-6 border border-gray-800">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Godziny otwarcia
              </h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek:</span>
                  <span className="font-semibold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota:</span>
                  <span className="font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela:</span>
                  <span className="font-semibold text-red-400">Zamknięte</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-dark-lighter rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Szybki kontakt</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                  placeholder="Opisz swoje potrzeby..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
