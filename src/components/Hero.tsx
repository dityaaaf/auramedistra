import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6C63FF] via-[#4A42CC] to-[#0A0F2C] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Distributor Alat Kesehatan &<br />
          Produk Konsumen Terpercaya
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Solusi inovatif dan terpercaya untuk kebutuhan medis Anda.
        </p>
        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#6C63FF] rounded-full font-semibold text-lg hover:bg-[#6C63FF] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
        >
          Pelajari Lebih Lanjut
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M0,64 C320,100 420,20 740,64 C1080,110 1200,40 1440,64 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
