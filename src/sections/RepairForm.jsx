import { useState } from 'react';

const RepairForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    machineType: '',
    machineBrand: '',
    machineModel: '',
    machineYear: '',
    problemDescription: '',
    urgency: 'normal',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Dziękujemy za zgłoszenie! Skontaktujemy się z Tobą wkrótce.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    'Inna',
  ];

  const machineTypes = [
    'Koparka',
    'Ładowarka',
    'Walec drogowy',
    'Grader',
    'Spycharka',
    'Frezarka',
    'Rozkładarka',
    'Rozściełacz',
    'Kruszarka',
    'Jednostka pływająca',
    'Inne',
  ];

  return (
    <section id="formularz" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-dark">
            Zgłoś <span className="text-primary">Naprawę</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Dane kontaktowe
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="company">
                    Firma
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Nazwa firmy"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="jan@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>
            </div>

            {/* Machine Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Informacje o maszynie
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="machineType">
                    Typ maszyny *
                  </label>
                  <select
                    id="machineType"
                    name="machineType"
                    required
                    value={formData.machineType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Wybierz typ</option>
                    {machineTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="machineBrand">
                    Marka *
                  </label>
                  <select
                    id="machineBrand"
                    name="machineBrand"
                    required
                    value={formData.machineBrand}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Wybierz markę</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="machineModel">
                    Model *
                  </label>
                  <input
                    type="text"
                    id="machineModel"
                    name="machineModel"
                    required
                    value={formData.machineModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="np. 320D"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="machineYear">
                    Rok produkcji
                  </label>
                  <input
                    type="text"
                    id="machineYear"
                    name="machineYear"
                    value={formData.machineYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="2020"
                  />
                </div>
              </div>
            </div>

            {/* Problem Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Opis problemu
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="urgency">
                  Pilność naprawy *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <label className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.urgency === 'low' ? 'border-primary bg-primary/5' : 'border-gray-300'}`}>
                    <input
                      type="radio"
                      name="urgency"
                      value="low"
                      checked={formData.urgency === 'low'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="font-medium">Niska</span>
                  </label>
                  <label className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.urgency === 'normal' ? 'border-primary bg-primary/5' : 'border-gray-300'}`}>
                    <input
                      type="radio"
                      name="urgency"
                      value="normal"
                      checked={formData.urgency === 'normal'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="font-medium">Normalna</span>
                  </label>
                  <label className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.urgency === 'high' ? 'border-primary bg-primary/5' : 'border-gray-300'}`}>
                    <input
                      type="radio"
                      name="urgency"
                      value="high"
                      checked={formData.urgency === 'high'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="font-medium">Wysoka</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="problemDescription">
                  Szczegółowy opis usterki *
                </label>
                <textarea
                  id="problemDescription"
                  name="problemDescription"
                  required
                  value={formData.problemDescription}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Opisz szczegółowo problem z maszyną, objawy usterki, ewentualne kody błędów..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 btn-primary text-lg py-4"
              >
                <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Wyślij zgłoszenie
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6 text-center">
              * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RepairForm;
