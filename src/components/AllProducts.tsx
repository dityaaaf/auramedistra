import infus from "../../public/INFUSION+SET+DEWASA.jpeg";
import oxygen from "../../public/NASAL+OXYGEN+CANUL+BAYI+.jpeg";
import oxygenkid from "../../public/NASAL+OXYGEN+CANUL+ANAK.jpeg";
import transfusion from "../../public/BLOOD+TRANSFUSION+SET.jpeg";
import oxygenadult from "../../public/NASAL+OXYGEN+CANUL+DEWASA.jpeg";
import tube from "../../public/SCT+STANDARD.jpeg";
import tubeyankeur from "../../public/SCT+WITH+YANKEUER.jpeg";
import oxygenmask from "../../public/OXYGEN+MASK+NRM+BAYI.jpeg";
import oxygenmaskid from "../../public/OXYGEN+MASK+NRM+ANAK.jpeg";
import oxygenmaskadults from "../../public/OXYGEN+MASK+NRM+DEWASA.jpeg";
import oksigenbayi from "../../public/OKSIGEN+MASK+BAYI.jpeg";
import oksigenanak from "../../public/OKSIGEN+MASK+ANAK.jpeg";
import oksigendewasa from "../../public/OKSIGEN+MASK+DEWASA.jpeg";
import nebulizerbayi from "../../public/NEBULIZER+MASK+BAYI.jpeg";
import nebulizeranak from "../../public/NEBULIZER+MASK+ANAK.jpeg";
import nebulizerdewasa from "../../public/NEBULIZER+MASK+DEWASA.jpeg";
import alkohokswab from "../../public/ALKOHOL+SWAB+FM.jpeg";
import bloodlancet from "../../public/BLOOD+LANCET.jpeg";
import poturine from "../../public/POT+URINE+NON+STERIL.jpeg";
import poturinesteril from "../../public/POT+URINE+STERIL.jpeg";
import potsputum from "../../public/POT+DAHAK+STERIL.jpeg";
import tvmedis from "../../public/PATIENT+MONITOR.jpeg";
import medicalvideo from "../../public/VIDEO+LARYNGOSCOPE.jpeg";
import ecg12 from "../../public/ECG+12+C+BROSUR.jpeg";
import tensimeter from "../../public/PULSEWAVE+DESKTOP.jpeg";
import intravaneous from "../../public/Intravenous Catheter Non Port & Non Wings 18G.jpeg";
import intravenous from "../../public/intravenous.jpeg";

export default function AllProducts() {

  const prices = {
    nonPort: [
      { size: "18G", price: "Rp 6.600" },
      { size: "20G", price: "Rp 6.600" },
      { size: "22G", price: "Rp 6.600" },
      { size: "24G", price: "Rp 6.600" },
    ],
    withPort: [
      { size: "18G", price: "Rp 7.700" },
      { size: "20G", price: "Rp 7.700" },
      { size: "22G", price: "Rp 7.700" },
      { size: "24G", price: "Rp 7.700" },
    ],
  };
      
  const bayi = [
    {
      title: "Nasal Oxygen Bayi",
      image: oxygen,
      price: "Rp 8.327",
      description: "Kanul oksigen lembut khusus untuk bayi, fleksibel dan aman digunakan.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-oxygen-nassal-cannula-bayi",
    },
    {
      title: "Non Rebreathing Mask (NRM) Bayi",
      image: oxygenmask,
      price: "Rp 19.425",
      description: "Masker oksigen dengan kantung reservoir untuk konsentrasi oksigen tinggi.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-non-rebreathing-mask-nrm-bayi",
    },
    {
      title: "Masker Oksigen Bayi",
      image: oksigenbayi,
      price: "Rp 14.985",
      description: "Masker oksigen mini yang nyaman dan aman untuk kulit bayi.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-masker-oksigen-bayi",
    },
    {
      title: "Masker Nebulizer Bayi Type Elongated",
      image: nebulizerbayi,
      price: "Rp 23.310",
      description: "Masker nebulizer tipe elongated dengan distribusi obat optimal.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-masker-nebulizer-bayi-type-elongated",
    },
  ];

  const anak = [
    {
      title: "Nasal Oxygen Anak",
      image: oxygenkid,
      price: "Rp 8.327",
      description: "Kanul oksigen untuk anak-anak dengan kenyamanan tinggi.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-oxygen-nassal-cannula-anak",
    },
    {
      title: "Non Rebreathing Mask (NRM) Anak",
      image: oxygenmaskid,
      price: "Rp 19.425",
      description: "Masker oksigen anak dengan sirkulasi udara merata.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-non-rebreathing-mask-nrm-anak",
    },
    {
      title: "Masker Oksigen Anak",
      image: oksigenanak,
      price: "Rp 14.985",
      description: "Masker oksigen ringan untuk anak-anak dengan tali elastis.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-masker-oksigen-anak",
    },
    {
      title: "Masker Nebulizer Anak Type Elongated",
      image: nebulizeranak,
      price: "Rp 23.310",
      description: "Masker nebulizer anak dengan bahan ramah kulit.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-masker-nebulizer-anak-type-elongated",
    },
  ];

  const dewasa = [
    {
      title: "Infusion Set Dewasa",
      image: infus,
      price: "Rp 7.326",
      description: "Selang infus steril untuk pasien dewasa dengan aliran stabil.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-disposable-infusion-set",
    },
    {
      title: "Nasal Oxygen Dewasa",
      image: oxygenadult,
      price: "Rp 8.327",
      description: "Kanul oksigen dewasa yang nyaman digunakan jangka panjang.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-oxygen-nassal-cannula-dewasa",
    },
    {
      title: "Non Rebreathing Mask (NRM) Dewasa",
      image: oxygenmaskadults,
      price: "Rp 19.425",
      description: "Masker oksigen efisien dengan sirkulasi udara tinggi.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-non-rebreathing-mask-nrm-dewasa",
    },
    {
      title: "Masker Oksigen Dewasa",
      image: oksigendewasa,
      price: "Rp 14.985",
      description: "Desain ergonomis untuk kenyamanan pasien dewasa.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-masker-oksigen-dewasa",
    },
    {
      title: "Masker Nebulizer Dewasa Type Elongated",
      image: nebulizerdewasa,
      price: "Rp 23.310",
      description: "Masker nebulizer efisien untuk terapi pernapasan.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-masker-nebulizer-dewasa-type-elongated",
    },
  ];

  const alat = [
    {
      title: "Blood Transfusion Set",
      image: transfusion,
      price: "Rp12.760",
      description: "Alat transfusi darah steril dengan filter mikro.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-blood-transfusion-set",
    },
    {
      title: "Suction Connecting Tube Standard",
      image: tube,
      price: "Rp 24.420",
      description: "Selang hisap medis dengan konektor standar.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-suction-connecting-tube-standard-non-yankeur",
    },
    {
      title: "Suction Connecting Tube With Yankeur",
      image: tubeyankeur,
      price: "Rp 29.970",
      description: "Dilengkapi pegangan Yankeur untuk kontrol presisi.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-suction-connecting-tube-with-yankeur",
    },
    {
      title: "Alkohol Swab 2 Ply",
      image: alkohokswab,
      price: "Rp 16.500",
      description: "Tisu alkohol 70% untuk desinfeksi kulit sebelum injeksi.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-alkohol-swab-2-ply",
    },
    {
      title: "Blood Lancet",
      image: bloodlancet,
      price: "Rp 17.600",
      description: "Jarum kecil sekali pakai untuk pengambilan sampel darah.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-blood-lancet",
    },
    {
      title: "Pot Urine Non Steril",
      image: poturine,
      price: "Rp 2.200",
      description: "Wadah urin tanpa sterilisasi kapasitas 60 ml.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-pot-urine-container-non-steril-60-ml",
    },
    {
      title: "Pot Urine Steril",
      image: poturinesteril,
      price: "Rp 2.775",
      description: "Wadah urin steril dengan segel rapat untuk laboratorium.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-pot-urine-container-steril-60-ml",
    },
    {
      title: "Pot Dahak Steril",
      image: potsputum,
      price: "Rp 3.300",
      description: "Wadah dahak steril untuk pemeriksaan mikrobiologi.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-pot-sputum-container-steril",
    },
    {
      title: "Patient Monitor 5 Parameter",
      image: tvmedis,
      price: "Rp 95.460.000",
      description: "Pemantau pasien dengan 5 parameter utama.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-patient-monitor-5-paremeter",
    },
    {
      title: "Video Laryngoscope 4,5 Inc",
      image: medicalvideo,
      price: "Rp 75.480.000",
      description: "Laringoskop video portabel dengan layar 4,5 inci.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-medical-video-laryngoscope-4-5-inc",
    },
    {
      title: "ECG 12 Channel",
      image: ecg12,
      price: "Rp 84.000.000",
      description: "Mesin ECG 12 channel untuk hasil presisi tinggi.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-ecg-12-channel",
    },
    {
      title: "Tensimeter Digital Meja",
      image: tensimeter,
      price: "Rp 83.250.000",
      description: "Alat pengukur tekanan darah otomatis dengan LED.",
      link: "https://katalog.inaproc.id/sinergi-persada-medica/fastmedic-healthcare-tensimeter-digital-otomatis-meja-pulsewave-blood-pressure-monitor",
    },
    {
      title: "Intravenous Catheter Non Port & Non Wings (18G-24G)",
      image: intravaneous,
      price: "Rp 6.600",
      description: "Kateter infus ukuran bervariasi tanpa port dan sayap.",
      link: "https://katalog.inaproc.id/bhineka-industri-nusantara/nusacare-intravenous-catheter-non-port-and-non-wings-24g",
    },
    {
      title: "Intravenous Catheter With Port & With Wings",
      image: intravenous,
      price: "Rp 7.700",
      description: "Kateter infus dengan port injeksi dan sayap fleksibel.",
      link: "https://katalog.inaproc.id/bhineka-industri-nusantara/nusacare-intravenous-catheter-with-port-and-with-wings-18g",
    },
  ];

  const renderCategory = (title: string, products: any[]) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-[#0A0F2C] mb-6 border-b-4 border-[#6C63FF] inline-block pb-2">
        {title}
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {products.map((p, i) => (
          <a href={p.link}>
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-[#0A0F2C] mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{p.description}</p>
                <p className="font-bold text-[#6C63FF]">{p.price}</p>
              </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0A0F2C] mb-10">
          Semua Produk PT. Aura Medistra Indonesia
        </h2>
        {renderCategory(" Produk Bayi", bayi)}
        {renderCategory(" Produk Anak-anak", anak)}
        {renderCategory(" Produk Dewasa", dewasa)}
        {renderCategory(" Alat Medis & Umum", alat)}
        <a
          href="/"
          className="inline-block mt-10 px-6 py-3 shadow-black bg-[#6C63FF] text-white rounded-xl hover:bg-[#4A42CC] transition-all"
        >
          Kembali ke Beranda
        </a>
      </div>
    </section>
  );
}
