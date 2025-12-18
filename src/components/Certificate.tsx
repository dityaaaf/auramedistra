import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Footer from "./Footer";

const oldCertificate = "/prestasi2.png";
const newCertificate = "/unisula2.png";
const licenseCertificate = "/sertifikat22.png";
const extraCertificate = "/unisulacertificate.png";

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const certificates = [
    {
      src: oldCertificate,
      title: "Sertifikat Pelatihan Kemenkes",
      desc: "Bukti pelatihan resmi bidang distribusi alat kesehatan yang diakui oleh Kemenkes RI.",
    },
    {
      src: newCertificate,
      title: "Ijazah Universitas Islam Sultan Agung",
      desc: "Bukti kelulusan resmi program studi Sarjana Farmasi (S.Farm).",
    },
    {
      src: licenseCertificate,
      title: "Sertifikat Perizinan Usaha",
      desc: "Surat izin resmi usaha distribusi alat kesehatan dari Pemerintah Republik Indonesia.",
    },
    {
      src: extraCertificate,
      title: "Sertifikat Kompetensi Tambahan",
      desc: "Dokumen resmi tambahan yang mendukung kompetensi profesional dalam bidang farmasi dan distribusi alat kesehatan.",
    },
  ];

  return (
    <>
      <section
        id="certificate"
        className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#F4F4FF] to-[#EAEAFF] py-20 px-4 md:py-24 md:px-6"
      >
        <div className="max-w-7xl w-full">
          {/* Section: Sertifikat */}
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
              Sertifikat & Ijazah Resmi
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed text-base md:text-lg"
            >
              Berikut adalah dokumen resmi yang dimiliki oleh{" "}
              <span className="font-semibold text-[#4B4AEF]">
                PT Aura Medistra Indonesia
              </span>
              , meliputi sertifikat pelatihan, ijazah akademik, dan perizinan usaha
              yang diakui secara nasional oleh{" "}
              <span className="font-semibold text-[#4B4AEF]">
                Kementerian Kesehatan Republik Indonesia
              </span>{" "}
              dan lembaga terkait.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {certificates.map((item, index) => (
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
                    rotate: 0.5,
                    transition: { duration: 0.3 },
                  }}
                  onClick={() => setSelectedImage(item.src)}
                  className="cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl active:scale-95 transition-all duration-300 border border-gray-200 bg-white group flex flex-col"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={item.src}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1 text-left">
                    <h3 className="text-lg font-semibold text-[#4B4AEF] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-snug">
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
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-300"
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
