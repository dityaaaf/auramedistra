import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-[#0A0F2C] via-[#1a1f4d] to-[#6C63FF] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[#6C63FF] transition-colors">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Alamat</h3>
                  <p className="text-white/80 leading-relaxed">
                    JL. TAMAN BOROBUDUR UTARA III NO. 10,<br />
                    SEMARANG BARAT, KOTA SEMARANG
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[#6C63FF] transition-colors">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telepon</h3>
                  <p className="text-white/80">+62 857 9965 7088</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[#6C63FF] transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-white/80">amedistraindonesia@gmail.com</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2537856826626!2d110.3751!3d-6.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnNTkuOSJTIDExMMKwMjInMzAuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form action="https://formspree.io/f/xrbrblga"
  method="POST" className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#6C63FF] transition-colors"
                  placeholder="Nama Anda"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#6C63FF] transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#6C63FF] transition-colors resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#6C63FF] text-white rounded-lg font-semibold hover:bg-[#5850e6] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Mengirim...'
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-center text-white bg-green-500/30 py-2 rounded-lg">
                  Pesan berhasil dikirim!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
