import { useState } from 'react';
import { 
  Code2, BookOpen, Award, Users, CheckCircle2, ArrowRight, Shield, 
  MapPin, Phone, Mail, ChevronDown, Sparkles, ExternalLink, Menu, X, 
  Terminal, Laptop, Cpu, HeartHandshake, Compass, Layers, Globe
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      icon: BookOpen,
      title: "Tauhid & Adab Islami",
      desc: "Menempa kepribadian santri dengan aqidah lurus, akhlak karimah, dan hafalan Al-Qur'an mutqin sebagai fondasi utama."
    },
    {
      icon: Terminal,
      title: "Masteri Software Engineering",
      desc: "Kurikulum industri mutakhir: Fullstack Web (Laravel, React, Node), Mobile App, Cloud DevOps, hingga AI Agentics."
    },
    {
      icon: Compass,
      title: "Mental Mandiri & Problem Solving",
      desc: "Membiasakan santri memecahkan studi kasus riil, manajemen waktu terukur (Time Tracking), dan budaya kerja profesional."
    },
    {
      icon: Globe,
      title: "Kemandirian Ekonomi Umat",
      desc: "Mencetak teknopreneur dan talenta digital yang siap bekerja remote di tech company global maupun merintis startup mandiri."
    }
  ];

  const curriculum = [
    {
      category: "Teknologi & Coding",
      badge: "Fullstack & AI",
      items: [
        "Modern Frontend: React, Next.js, TypeScript, Tailwind CSS",
        "Robust Backend: Laravel, Node.js, Go, REST & GraphQL API",
        "Database Architecture: PostgreSQL, MySQL, Redis Caching",
        "Mobile Development: Flutter & Cross-Platform Architecture",
        "DevOps & Deployment: Docker, Linux VPS, Nginx, CI/CD, Coolify",
        "AI & Automation: LLM Integration, Gemini/OpenAI API, Agentic Coding"
      ]
    },
    {
      category: "Diniyah & Tahfidz",
      badge: "Target 30 Juz",
      items: [
        "Halaqah Tahfidz Al-Qur'an harian ber-sanad & talaqqi",
        "Kajian Kitab Adab Penuntut Ilmu (Ta'lim Muta'allim)",
        "Aqidah Shahihah & Fiqih Ibadah Praktis Harian",
        "Bahasa Arab Komunikatif & Pemahaman Kosakata Al-Qur'an",
        "Tarbiyah Ruhiyah & Qiyamul Lail Terbimbing",
        "Pelatihan Khutbah, Dakwah Digital & Etika Muamalah"
      ]
    }
  ];

  const stats = [
    { value: "100%", label: "Beasiswa Penuh Santri Dhuafa & Berprestasi" },
    { value: "100%", label: "Tingkat Penyerapan Kerja Lulusan di Industri" },
    { value: "30 Juz", label: "Target Mutqin Al-Qur'an Santri" },
    { value: "12+ Jam", label: "Durasi Belajar & Praktik Coding Terarah / Hari" }
  ];

  const faqs = [
    {
      q: "Berapa biaya pendidikan di Pondok Informatika?",
      a: "Pendidikan santri mukim di Pondok Informatika dibiayai 100% GRATIS (Beasiswa Penuh) bagi santri dhuafa, yatim, dan yang lolos seleksi beasiswa. Biaya operasional disokong melalui program wakaf, CSR mitra perusahaan teknologi, dan donatur yayasan."
    },
    {
      q: "Siapa saja yang bisa mendaftar sebagai santri?",
      a: "Pemuda muslim lulusan SMA/SMK/MA sederajat atau usia 17–23 tahun yang memiliki tekad kuat menghafal Al-Qur'an, memiliki minat tinggi di bidang teknologi/logika, dan siap mukim asrama selama 1–2 tahun masa pendidikan intensif."
    },
    {
      q: "Bagaimana prospek kerja lulusan Pondok Informatika?",
      a: "Seluruh alumni kami terserap bekerja di software house, startup, perusahaan IT nasional, instansi pemerintah, atau bekerja mandiri (freelance & remote worker global) dengan penghasilan yang layak."
    },
    {
      q: "Apakah santri diwajibkan punya laptop sendiri sebelum masuk?",
      a: "Bagi santri yang memiliki laptop dipersilakan membawa. Namun bagi yang belum mampu, pondok menyediakan fasilitas Lab Komputer dengan PC dual-monitor dan internet dedicated untuk menunjang proses belajar harian."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Pondok Informatika" className="w-10 h-10 object-contain drop-shadow" />
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white block leading-none">
                Pondok<span className="text-blue-500">Informatika</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Tahfidz &amp; Technology Center
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#tentang" className="hover:text-blue-400 transition-colors">Tentang</a>
            <a href="#kurikulum" className="hover:text-blue-400 transition-colors">Kurikulum</a>
            <a href="#fasilitas" className="hover:text-blue-400 transition-colors">Fasilitas</a>
            <a href="#prestasi" className="hover:text-blue-400 transition-colors">Prestasi</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#kontak" className="hover:text-blue-400 transition-colors">Kontak</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://pondokinformatika.id/santri/daily"
              className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              Portal Santri
            </a>
            <a
              href="https://donasi.pondokinformatika.id"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all"
            >
              Dukung Kami
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300">Tentang</a>
            <a href="#kurikulum" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300">Kurikulum</a>
            <a href="#fasilitas" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300">Fasilitas</a>
            <a href="#prestasi" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300">Prestasi</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300">FAQ</a>
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-300">Kontak</a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://donasi.pondokinformatika.id"
                className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white"
              >
                Dukung Kami
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        {/* Glow gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 backdrop-blur-sm animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Pencetak Generasi Hafizh Qur'an &amp; IT Engineer Masa Depan
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
            Membentuk Karakter <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">Qur'ani</span>, Menguasai <span className="underline decoration-blue-500 decoration-wavy underline-offset-8">Teknologi Terdepan</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Pondok pesantren teknologi mukim intensif yang mengintegrasikan adab, hafalan Al-Qur'an 30 juz mutqin, dan kurikulum rekayasa perangkat lunak modern untuk kemandirian generasi muda Islam.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://pondokinformatika.id"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Jelajahi Ekosistem Santri</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://katalog.pondokinformatika.id"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Lihat Portofolio Karya</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {s.value}
                </div>
                <p className="text-xs text-slate-400 font-semibold mt-1.5 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 PILARS SECTION */}
      <section id="tentang" className="py-20 bg-slate-900/50 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Fondasi Pendidikan</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">4 Pilar Pondok Informatika</h2>
            <p className="text-sm text-slate-400 mt-3">
              Keseimbangan antara spiritualitas ruhani dan keunggulan intelektual teknologi untuk melahirkan generasi yang bertauhid dan berdaya saing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div 
                  key={i} 
                  className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section id="kurikulum" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Sistematis &amp; Teruji</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">Sintesis Kurikulum IT &amp; Diniyah</h2>
            <p className="text-sm text-slate-400 mt-3">
              Didukung kurikulum industri berbasis proyek nyata yang dikawal langsung oleh mentor profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {curriculum.map((c, i) => (
              <div key={i} className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-white">{c.category}</h3>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {c.badge}
                  </span>
                </div>
                <ul className="space-y-3">
                  {c.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="fasilitas" className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Lingkungan Belajar Kondusif</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">Fasilitas Pesantren</h2>
            <p className="text-sm text-slate-400 mt-3">
              Menghadirkan kenyamanan bagi santri untuk beribadah dan berkarya sepanjang hari.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Lab Komputer Dedicated", desc: "Workstation PC dual monitor dengan koneksi fiber optic 100 Mbps simetris.", icon: Laptop },
              { title: "Masjid & Halaqah Qur'an", desc: "Tempat ibadah berjamaah, setoran hafalan, dan kajian kitab tauhid & fiqih.", icon: BookOpen },
              { title: "Asrama Mukim Nyaman", desc: "Lingkungan bersih, beradab, berdisiplin tinggi, dan terpantau 24 jam.", icon: Users },
              { title: "Server & Cloud Lab", desc: "Akses sandbox cloud (VPS Linux, Docker, Database) untuk uji coba arsitektur software.", icon: Cpu }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Pertanyaan Umum</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Sering Ditanyakan</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-blue-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontak" className="mt-auto bg-slate-950 border-t border-slate-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Logo Pondok Informatika" className="w-9 h-9 object-contain" />
                <span className="font-extrabold text-lg text-white">
                  Pondok<span className="text-blue-500">Informatika</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
                Yayasan Pondok Informatika Al-Bashirah. Membina pemuda muslim menjadi programmer tangguh dan hafizh Al-Qur'an siap kerja.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Pondok Informatika, Sulawesi Tenggara, Indonesia</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Ekosistem Subdomain</h4>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li><a href="https://katalog.pondokinformatika.id" className="hover:text-blue-400 transition-colors flex items-center gap-1">Katalog Karya Santri <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://produk.pondokinformatika.id" className="hover:text-blue-400 transition-colors flex items-center gap-1">Produk &amp; Software <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://proposal.pondokinformatika.id" className="hover:text-blue-400 transition-colors flex items-center gap-1">Proposal &amp; Kemitraan CSR <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://donasi.pondokinformatika.id" className="hover:text-blue-400 transition-colors flex items-center gap-1">Donasi &amp; Wakaf Pendidikan <ExternalLink className="w-3 h-3" /></a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Kontak Resmi</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+62 822-9382-7200</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>kontak@pondokinformatika.id</span>
                </li>
                <li className="pt-2">
                  <a
                    href="https://wa.me/6282293827200"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all"
                  >
                    <span>Hubungi Pengurus WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Pondok Informatika. Seluruh hak cipta dilindungi.</p>
            <p>Designed with excellence for Vercel &amp; Cloudflare deployment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
