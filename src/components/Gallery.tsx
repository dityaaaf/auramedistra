import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import oldCertificate from "../../public/prestasi2.png";
import newCertificate from "../../public/unisula2.png";
import licenseCertificate from "../../public/sertifikat22.png";
import extraCertificate from "../../public/unisulacertificate.png";
import Footer from "./Footer";

// Placeholder images for Documentation
import doc1 from "../../public/prestasi2.png"; // Using placeholders as requested
import doc2 from "../../public/unisula2.png";
import doc3 from "../../public/sertifikat22.png";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Combined data for Gallery
  const galleryItems = [
    {
      type: "Sertifikat",
      src: oldCertificate,
      title: "Sertifikat Pelatihan Kemenkes",
      desc: "Bukti pelatihan resmi bidang distribusi alat kesehatan.",
    },
    {
      type: "Ijazah",
      src: newCertificate,
      title: "Ijazah Universitas Islam Sultan Agung",
      desc: "Bukti kelulusan resmi program studi Sarjana Farmasi.",
    },
    {
      type: "Perizinan",
      src: licenseCertificate,
      title: "Sertifikat Perizinan Usaha",
      desc: "Surat izin resmi usaha distribusi alat kesehatan.",
    },
    {
       type: "Sertifikat",
      src: extraCertificate,
      title: "Sertifikat Kompetensi Tambahan",
      desc: "Dokumen mendukung kompetensi profesional.",
    },
    {
      type: "Dokumentasi",
      src: doc1,
      title: "Kegiatan Pelatihan",
      desc: "Dokumentasi kegiatan pelatihan rutin staf.",
    },
    {
      type: "Dokumentasi",
      src: doc2,
      title: "Kunjungan Industri",
      desc: "Kunjungan ke pabrik rekanan alat kesehatan.",
    },
    {
      type: "Dokumentasi",
      src: doc3,
      title: "Seminar Kesehatan",
      desc: "Partisipasi dalam seminar kesehatan nasional.",
    },
     {
      type: "Dokumentasi",
      src: doc1,
      title: "Rapat Koordinasi",
      desc: "Rapat koordinasi bulanan tim Aura Medistra.",
    },
  ];

  return (
    <>
      <section
        id="gallery"
        className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#F4F4FF] to-[#EAEAFF] py-24 px-6"
      >
        <div className="max-w-7xl w-full">
            
          {/* Main Gallery Container */}
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
              Galeri
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed text-base md:text-lg"
            >
                Kumpulan sertifikat resmi, ijazah, serta dokumentasi kegiatan penting dari <span className="font-semibold text-[#4B4AEF]">PT Aura Medistra Indonesia</span>.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {galleryItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                    }}
                    whileHover={{
                    scale: 1.05,
                    opacity: 0.95,
                    border: "1px solid #4B4AEF",
                    transition: { duration: 0.3 },
                    }}
                    onClick={() => setSelectedImage(item.src)}
                    className="cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white group flex flex-col relative"
                >   
                    <div className="overflow-hidden h-52">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                    />
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1 text-left">
                    <h3 className="text-md font-bold text-gray-800 mb-2 group-hover:text-[#4B4AEF] transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
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
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </section>

      <Footer />
    </>
  );
}
