// src/components/Footer/Footer.tsx
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    { href: "/HouseholdPump", label: "پمپ‌های خانگی" },
    { href: "/product-category/gearbox/", label: "گیربکس صنعتی" },
    { href: "/Cooler", label: "الکتروموتور" },
    { href: "/ExpansionSource", label: "منابع انبساط" },
  ];

  const quickLinks = [
    { href: "/about", label: "درباره برند آپیکا" },
    { href: "/contact", label: "تماس با واحد فروش" },
    { href: "/faq", label: "سوالات متداول" },
    { href: "/blog", label: "مقالات تخصصی" },
  ];

  const contacts = [
    { title: "تلفن پشتیبانی", value: "۰۳۱-۳۴۲۵۸۰۷۰" },
    { title: "پست الکترونیک", value: "matinzamanide@gmail.com" },
    { title: "محل دفتر", value: "اصفهان، بهرام‌آباد" },
  ];

  const socialLinks = [
    { href: "#", label: "Instagram" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#0a0f1a] text-slate-300 font-[vazirmatn] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px] -z-0"></div>

      {/* Call-to-Action */}
      <div className="border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-right">
            <h3 className="text-2xl font-black text-white mb-2">آماده شروع پروژه خود هستید؟</h3>
            <p className="text-slate-400 font-medium">همین حالا با متخصصان فنی آپیکا تماس بگیرید.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
              مشاوره رایگان
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* About */}
          <div className="lg:col-span-4 space-y-8 text-right">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <img src="/apika2.svg" alt="APIKA" className="h-12 brightness-0 invert" />
            </Link>
            <p className="text-slate-400 leading-[1.8] text-sm font-medium pl-10">
              مجموعه آپیکا با تکیه بر دانش فنی پیشرو در تامین تجهیزات انتقال سیالات و پمپ های صنعتی در ایران است. ما متعهد به پایداری جریان صنعت شما هستیم.
            </p>
            <div className="flex justify-end gap-4">
              {socialLinks.map((item, idx) => (
                <a key={idx} href={item.href} className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white hover:-translate-y-1 border border-white/5">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2 text-right">
            <h4 className="text-white font-black text-lg mb-8 relative inline-block">
              محصولات
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {products.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-slate-500 hover:text-blue-500 flex items-center gap-2 transition-all duration-300">
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 text-right">
            <h4 className="text-white font-black text-lg mb-8 relative inline-block">
              دسترسی سریع
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-slate-500 hover:text-blue-500 flex items-center gap-2 transition-all duration-300">
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 text-right">
            <h4 className="text-white font-black text-lg mb-8 relative inline-block">
              پل‌های ارتباطی
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <div className="space-y-6 bg-white/5 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
              {contacts.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 flex-row-reverse">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                    {item.title[0]}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.title}</p>
                    <p className="text-sm font-bold text-slate-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/40 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-xs font-bold tracking-wide">
              © {currentYear} تمامی حقوق مادی و معنوی این وب‌سایت متعلق به آپیکا می‌باشد.
            </p>
          </div>

          {/* Enamad logo */}
          <div className="flex items-center gap-6">
            <div className="bg-white/90 p-2 rounded-2xl hover:bg-white transition-colors duration-300">
              <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=695520&Code=8dzuQxgCXx9VbE6qzisy2HbNnhjmVzhG">
                <img src="https://trustseal.enamad.ir/logo.aspx?id=695520&Code=8dzuQxgCXx9VbE6qzisy2HbNnhjmVzhG" className="h-14 w-auto grayscale hover:grayscale-0 transition-all" alt="Enamad" />
              </a>
            </div>

            {/* Scroll to Top Button */}
            {/* <ScrollTopButton /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

// // ScrollTopButton now a separate Client Component
// import dynamic from "next/dynamic";
// const ScrollTopButton = dynamic(() => import("./ScrollTopButton"), { ssr: false });

export default Footer;
