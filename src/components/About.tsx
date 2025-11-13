import { Building2, Users, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F2C] mb-4">
            Tentang Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#0A0F2C] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-[#6C63FF]/10 to-[#0A0F2C]/10 rounded-2xl p-8 md:p-12">
              <div className="space-y-6 text-[#0A0F2C]">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-[#6C63FF]">PT. AURA MEDISTRA INDONESIA</span> adalah
                  perusahaan distributor alat kesehatan dan produk konsumer.
                </p>
                <p className="text-lg leading-relaxed">
                  Perusahaan kami berdiri tahun 2024, didukung sumber daya manusia yang berkualitas
                  dan sistem manajemen yang baik dalam memberikan pelayanan.
                </p>
                <p className="text-lg leading-relaxed">
                  PT. Aura Medistra Indonesia adalah mitra bisnis yang unggul dan dapat dipercaya,
                  dengan sistem budaya kerja yang berorientasi bisnis dan profesional.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#6C63FF]/20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#6C63FF] to-[#4A42CC] rounded-lg">
                    <Building2 className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0F2C] mb-1">Profesional</h3>
                    <p className="text-gray-600">Sistem manajemen terpadu</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#6C63FF]/20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#6C63FF] to-[#4A42CC] rounded-lg">
                    <Users className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0F2C] mb-1">Berkualitas</h3>
                    <p className="text-gray-600">SDM berpengalaman & terlatih</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#6C63FF]/20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#6C63FF] to-[#4A42CC] rounded-lg">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0F2C] mb-1">Terpercaya</h3>
                    <p className="text-gray-600">Mitra bisnis yang unggul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
