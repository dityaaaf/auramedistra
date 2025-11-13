import { FileText, Award } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./Footer";

export default function CompanyProfile() {
  return (
    <div>
      <section
        id="company-profile"
        className="min-h-screen bg-gradient-to-b from-[#6C63FF] to-[#1E1B4B] text-white py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12 mt-10 md:mt-16">
          {/* Judul */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              PT. Aura Medistra Indonesia
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              PT. Aura Medistra Indonesia adalah perusahaan yang bergerak di bidang
              distribusi alat kesehatan dan peralatan medis berkualitas tinggi.
              Kami berkomitmen untuk menyediakan solusi terbaik bagi rumah sakit,
              klinik, dan penyedia layanan kesehatan di seluruh Indonesia.
            </p>
          </motion.div>
          {/* Motto Perusahaan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#C8BFFF]">
              Motto Perusahaan
            </h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="italic text-gray-100 text-lg"
            >
              “Meningkatkan kualitas hidup melalui inovasi dan kepercayaan.”
            </motion.p>
          </motion.div>
          {/* Ruang Sertifikat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-8 shadow-lg max-w-5xl mx-auto backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-[#C8BFFF]">
              <Award className="w-6 h-6" />
              Sertifikat Perusahaan
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {[
                {
                  title: "ISO 9001:2015",
                  desc: "Sertifikasi Manajemen Mutu",
                },
                {
                  title: "KEMENKES RI",
                  desc: "Izin Distribusi Alat Kesehatan",
                },
                {
                  title: "BPOM Registered",
                  desc: "Produk Terdaftar Resmi",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                  }}
                  className="bg-white/5 rounded-xl p-4 w-full md:w-1/3 text-center border border-white/20 transition-all duration-300"
                >
                  <p className="font-medium text-gray-100 mb-2">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Link Google Drive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 12px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/18YBEJXHEXOOp0oyvG8hYu7lhy-De4gEl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1E1B4B] hover:bg-[#C8BFFF] hover:text-[#1E1B4B] transition-colors px-6 py-3 rounded-full font-semibold shadow-md"
            >
              <FileText className="w-5 h-5" />
              Lihat Company Profile Lengkap
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
