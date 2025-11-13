import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../public/logoptopt.png";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Scroll ke section dengan deteksi halaman
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Kalau bukan di halaman utama → pindah dulu ke "/"
      navigate("/");
      // Tunggu sedikit agar halaman utama termuat
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const goToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-3 md:px-6 md:py-2">
        <div className="flex items-center justify-between">
          {/* Logo dan Nama */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-black flex items-center gap-2">
              <div>
                <img src={logo} alt="logo" className="w-24 h-16 md:w-44 md:h-24" />
              </div>
              <span className="hidden md:inline">
                <span className="text-[#6C63FF]">Aura</span> Medistra Indonesia
              </span>
              <div className="block md:hidden leading-tight text-center text-sm">
                <p className="text-[#6C63FF]">Aura Medistra</p>
                <p>Indonesia</p>
              </div>
            </div>
          </div>

          {/* 🖥️ Navigation (desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-black hover:text-[#6C63FF] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-black hover:text-[#6C63FF] transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-black hover:text-[#6C63FF] transition-colors duration-300 font-medium"
            >
              Products
            </button>
            <button
              onClick={() => goToPage("/certificate")}
              className="text-black hover:text-[#6C63FF] transition-colors duration-300 font-medium"
            >
              Certificate
            </button>
            <button
              onClick={() => goToPage("/profile")}
              className="text-black hover:text-[#6C63FF] transition-colors duration-300 font-medium"
            >
              Profile
            </button>

            {/* 🆕 Tombol Location */}
            <button
              onClick={() => goToPage("/location")}
              className="text-black hover:text-[#6C63FF] transition-colors duration-300 font-medium"
            >
              Location
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-[#6C63FF] transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* 📱 Tombol Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 📱 Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col border-t border-gray-300">
            <button
              onClick={() => scrollToSection("home")}
              className="py-2 text-black hover:text-[#6C63FF] transition-colors duration-300 text-left font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-black hover:text-[#6C63FF] transition-colors duration-300 text-left font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="py-2 text-black hover:text-[#6C63FF] transition-colors duration-300 text-left font-medium"
            >
              Products
            </button>
            <button
              onClick={() => goToPage("/certificate")}
              className="py-2 text-black hover:text-[#6C63FF] transition-colors duration-300 text-left font-medium"
            >
              Certificate
            </button>
            <button
              onClick={() => goToPage("/profile")}
              className="py-2 text-black hover:text-[#6C63FF] transition-colors duration-300 text-left font-medium"
            >
              Profile
            </button>

            {/* 🆕 Tombol Location (Mobile) */}
            <button
              onClick={() => goToPage("/location")}
              className="py-2 text-black hover:text-[#6C63FF] transition-colors duration-300 text-left font-medium"
            >
              Location
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 text-black hover:text-[#6C63FF] transition-colors duration-300 text-left font-medium"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
