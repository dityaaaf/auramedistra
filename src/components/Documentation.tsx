import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Footer from "./Footer";

// Placeholder images for Documentation
const doc1 = "/galeri.png";
const doc2 = "/galeri2.png";
const doc3 = "/galeri3.png";

export default function Documentation() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const documentations = [
    {
      src: doc1,
      title: "Kegiatan Pelatihan",
      desc: "Dokumentasi kegiatan pelatihan rutin staf.",
    },
    {
      src: doc2,
      title: "Kunjungan Industri",
      desc: "Kunjungan ke pabrik rekanan alat kesehatan.",
    },
    {
      src: doc3,
      title: "Seminar Kesehatan",
      desc: "Partisipasi dalam seminar kesehatan nasional.",
    },
  ];

  return (
    <>
      <section
        id="documentation"
        className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#F4F4FF] to-[#EAEAFF] py-20 px-4 md:py-24 md:px-6"
      >
        <div className="max-w-7xl w-full">
            
          {/* Section: Dokumentasi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-white rounded-3xl shadow-2xl border border-[#dcdcff] p-10 md:p-16 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-extrabold text-[#4B4AEF] mb-6 tracking-tight"
            >
              Galeri Dokumentasi
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed text-base md:text-lg"
            >
                Kumpulan momen dan kegiatan penting dari <span className="font-semibold text-[#4B4AEF]">PT Aura Medistra Indonesia</span> dalam memberikan pelayanan terbaik.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {documentations.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.2 + index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                    }}
                    whileHover={{
                    scale: 1.05,
                    opacity: 0.95,
                    transition: { duration: 0.3 },
                    }}
                    onClick={() => setSelectedImage(item.src)}
                    className="cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 bg-white group flex flex-col"
                >
                    <div className="overflow-hidden h-48">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={item.src}
                        alt={item.title}
                        className={`w-full h-full transition-transform duration-300 ${
                          item.src === doc2 ? "object-contain bg-gray-50" : "object-cover"
                        }`}
                    />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1 text-left">
                    <h3 className="text-md font-semibold text-[#4B4AEF] mb-1">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-snug">
                        {item.desc}
                    </p>
                    </div>
                </motion.div>
                ))}
            </div>

             {/* Tombol kembali */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-16"
            >
                <a
                href="/"
                className="inline-block px-10 py-3 bg-[#6C63FF] text-white font-medium rounded-xl shadow-md hover:bg-[#4B4AEF] hover:shadow-lg transition-all duration-300"
                >
                ← Kembali ke Beranda
                </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Modal Pop-up */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-4xl h-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-full w-auto h-auto rounded-xl shadow-2xl object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-50"
              >
                <X size={24} className="text-gray-800" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </section>

      <Footer />
    </>
  );
}
