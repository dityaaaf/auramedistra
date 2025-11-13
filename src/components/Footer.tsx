import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0F2C] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2">
              <span className="text-[#6C63FF]">Aura</span> Medistra Indonesia
            </div>
            <p className="text-white/70 text-sm max-w-md">
              Distributor Alat Kesehatan & Produk Konsumen
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-[#6C63FF] transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Facebook className="text-white group-hover:scale-110 transition-transform" size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-[#6C63FF] transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="text-white group-hover:scale-110 transition-transform" size={20} />
            </a>
            <a
              href="https://wa.me/6285799657088"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-[#6C63FF] transition-all duration-300 group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="text-white group-hover:scale-110 transition-transform" size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2025 PT. Aura Medistra Indonesia — Distributor Alat Kesehatan & Produk Konsumen.
          </p>
        </div>
      </div>
    </footer>
  );
}
