import { useState } from 'react';

const Realizations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder for gallery images - user will add their own
  const galleryImages = [
    {
      src: '/images/gallery/1.jpg',
      title: 'Naprawa hydrauliki',
      description: 'Kompleksowa naprawa układu hydraulicznego koparki',
    },
    {
      src: '/images/gallery/2.jpg',
      title: 'Diagnostyka silnika',
      description: 'Diagnostyka i naprawa silnika spalinowego',
    },
    {
      src: '/images/gallery/3.jpg',
      title: 'Modernizacja sterownika',
      description: 'Programowanie i modernizacja sterownika ECM',
    },
    {
      src: '/images/gallery/4.jpg',
      title: 'Serwis maszyny drogowej',
      description: 'Pełen serwis maszyny drogowej Wirtgen',
    },
    {
      src: '/images/gallery/5.jpg',
      title: 'Naprawa instalacji',
      description: 'Naprawa instalacji elektrycznej w koparce',
    },
    {
      src: '/images/gallery/6.jpg',
      title: 'Przegląd techniczny',
      description: 'Kompleksowy przegląd techniczny jednostki',
    },
  ];

  return (
    <section id="realizacje" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-dark">
            Nasze <span className="text-primary">Realizacje</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Zobacz przykłady naszych prac i przekonaj się o jakości naszych usług
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="card overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback for missing images */}
                <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-white mt-4 text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Realizations;
