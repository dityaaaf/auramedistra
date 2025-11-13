import { motion } from "framer-motion";
import Footer from "./Footer";

export default function Location() {
  return (
    <div>
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-bold text-[#6C63FF] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our Location
        </motion.h1>

        <motion.p
          className="text-gray-700 mb-2 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          PT. Aura Medistra Indonesia
        </motion.p>

        <motion.p
          className="text-gray-600 mb-6 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          JL. TAMAN BOROBUDUR UTARA III NO. 10,
          SEMARANG BARAT, KOTA SEMARANG
          <br />
          📞 Telp: +62 857 9965 7088 | ✉️ Email: amedistraindonesia@gmail.com
        </motion.p>

        <motion.div
          className="w-4/5 border-4 border-[#cccbcb] rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.075560786536!2d110.37646907531798!3d-7.000383993000834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b00020a339d%3A0x71882062ff2ecbb7!2sPT.%20AURA%20MEDISTRA%20INDONESIA!5e0!3m2!1sen!2sus!4v1763014378136!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}
