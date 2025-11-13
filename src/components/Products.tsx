import { useEffect, useRef, useState } from "react";
import infus from "../../public/INFUSION+SET+DEWASA.jpeg";
import oxygen from "../../public/NASAL+OXYGEN+CANUL+BAYI+.jpeg";
import oxygenkid from "../../public/NASAL+OXYGEN+CANUL+ANAK.jpeg";
import transfusion from "../../public/BLOOD+TRANSFUSION+SET.jpeg";
import oxygenadult from "../../public/NASAL+OXYGEN+CANUL+DEWASA.jpeg";
import tube from "../../public/SCT+STANDARD.jpeg";

const products = [
  {
    title: "Infusion Set Dewasa",
    description:
      "Type Y with Airvent Luer Slip. TKDN 57.63%. Diproduksi oleh PT. Sinergi Persada Medica.",
    image: infus,
  },
  {
    title: "Nasal Oxygen Bayi",
    description:
      "Selang oksigen bayi dengan bahan lembut dan fleksibel, memberikan kenyamanan serta suplai oksigen optimal untuk bayi.",
    image: oxygen,
  },
  {
    title: "Nasal Oxygen Anak",
    description:
      "Selang oksigen yang dirancang khusus untuk anak-anak, mudah digunakan dan tidak menyebabkan iritasi.",
    image: oxygenkid,
  },
  {
    title: "Blood Transfusion Set",
    description:
      "Peralatan transfusi darah steril dengan filter anti-koagulasi, memastikan aliran darah yang aman dan bersih.",
    image: transfusion,
  },
  {
    title: "Nasal Oxygen Dewasa",
    description:
      "Selang oksigen medis untuk pasien dewasa dengan konektor universal, nyaman dan aman digunakan.",
    image: oxygenadult,
  },
  {
    title: "Suction Connecting Tube Standard / Non Yankeur",
    description:
      "Tabung penghubung suction medis dengan daya tahan tinggi, kompatibel dengan berbagai alat suction rumah sakit.",
    image: tube,
  },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        {/* Judul */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F2C] mb-4">
            Produk Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#0A0F2C] mx-auto"></div>
        </div>

        {/* Daftar produk */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#6C63FF]/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain rounded-xl mb-4 shadow-md"
              />

              <h3 className="text-xl font-bold text-[#0A0F2C] mb-3 group-hover:text-[#6C63FF] transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed line-clamp-3">
                {product.description}
              </p>

              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#4A42CC] text-white rounded-lg hover:opacity-90 transition-all"
              >
                Baca Selengkapnya
              </button>
            </div>
          ))}
        </div>

        {/* Tombol lihat semua produk */}
        <div className="text-center mt-16">
          <a
            href="/all-products"
            className="inline-block px-6 py-3 bg-[#0A0F2C] text-white rounded-xl font-medium hover:bg-[#6C63FF] transition-all duration-300"
          >
            Lihat Semua Produk
          </a>
        </div>
      </div>

      {/* Modal Produk */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-[#6C63FF]"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-[#0A0F2C] mb-2">
              {selectedProduct.title}
            </h3>
            <p className="text-gray-700">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
