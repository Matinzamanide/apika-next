'use client';

import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Clock, Instagram, 
  Linkedin, Youtube, ArrowUp, Send, ChevronLeft 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0f1a] text-slate-300 font-[vazirmatn] overflow-hidden">
      {/* المان‌های نوری پس‌زمینه */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px] -z-0"></div>

      {/* بخش خبرنامه یا CTA قبل از فوتر */}
      <div className="border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-right">
            <h3 className="text-2xl font-black text-white mb-2">آماده شروع پروژه خود هستید؟</h3>
            <p className="text-slate-400 font-medium">همین حالا با متخصصان فنی آپیکا تماس بگیرید.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
              مشاوره رایگان <Send size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* محتوای اصلی */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* ستون ۱: برندینگ */}
          <div className="lg:col-span-4 space-y-8 text-right">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <img src="/apika2.svg" alt="APIKA" className="h-12 brightness-0 invert" />
            </Link>
            <p className="text-slate-400 leading-[1.8] text-sm font-medium pl-10">
              مجموعه آپیکا با تکیه بر دانش فنی  پیشرو در تامین تجهیزات انتقال سیالات و پمپ های صنعتی در ایران است. ما متعهد به پایداری جریان صنعت شما هستیم.
            </p>
            <div className="flex justify-end gap-4">
              <SocialIcon icon={<Instagram size={20} />} href="#" color="hover:bg-pink-600" />
              <SocialIcon icon={<Linkedin size={20} />} href="#" color="hover:bg-blue-700" />
              <SocialIcon icon={<Youtube size={20} />} href="#" color="hover:bg-red-600" />
            </div>
          </div>

          {/* ستون ۲: دسته‌بندی‌ها */}
          <div className="lg:col-span-2 text-right">
            <h4 className="text-white font-black text-lg mb-8 relative inline-block">
              محصولات
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/HouseholdPump" label="پمپ‌های خانگی" />
              <FooterLink href="/product-category/gearbox/" label="گیربکس صنعتی" />
              <FooterLink href="/Cooler" label="الکتروموتور" />
              <FooterLink href="/ExpansionSource" label="منابع انبساط" />
            </ul>
          </div>

          {/* ستون ۳: لینک‌های سریع */}
          <div className="lg:col-span-2 text-right">
            <h4 className="text-white font-black text-lg mb-8 relative inline-block">
              دسترسی سریع
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/about" label="درباره برند آپیکا" />
              <FooterLink href="/contact" label="تماس با واحد فروش" />
              <FooterLink href="/faq" label="سوالات متداول" />
              <FooterLink href="/blog" label="مقالات تخصصی" />
            </ul>
          </div>

          {/* ستون ۴: اطلاعات تماس */}
          <div className="lg:col-span-4 text-right">
            <h4 className="text-white font-black text-lg mb-8 relative inline-block">
              پل‌های ارتباطی
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <div className="space-y-6 bg-white/5 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
              <ContactInfo icon={<Phone size={20} />} title="تلفن پشتیبانی" value="۰۳۱-۳۴۲۵۸۰۷۰" />
              <ContactInfo icon={<Mail size={20} />} title="پست الکترونیک" value="matinzamanide@gmail.com" />
              <ContactInfo icon={<MapPin size={20} />} title="محل دفتر" value="اصفهان، بهرام‌آباد" />
            </div>
          </div>
        </div>
      </div>

      {/* بخش اینماد و کپی‌رایت */}
      <div className="bg-black/40 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="order-2 md:order-1 text-center md:text-right">
            <p className="text-slate-500 text-xs font-bold tracking-wide">
              © {new Date().getFullYear()} تمامی حقوق مادی و معنوی این وب‌سایت متعلق به آپیکا می‌باشد.
            </p>
          </div>

          <div className="order-1 md:order-2 flex items-center gap-6">
            <div className="bg-white/90 p-2 rounded-2xl hover:bg-white transition-colors duration-300">
               <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=695520&Code=8dzuQxgCXx9VbE6qzisy2HbNnhjmVzhG">
                  <img src="https://trustseal.enamad.ir/logo.aspx?id=695520&Code=8dzuQxgCXx9VbE6qzisy2HbNnhjmVzhG" className="h-14 w-auto grayscale hover:grayscale-0 transition-all" alt="Enamad" />
               </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-blue-900/40"
            >
              <ArrowUp size={24} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

// کامپوننت لینک‌های فوتر
const FooterLink = ({ href, label }: { href: string, label: string }) => (
  <li>
    <Link href={href} className="text-slate-500 hover:text-blue-500 flex items-center gap-2 group transition-all duration-300">
      <ChevronLeft size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      <span className="font-medium text-sm">{label}</span>
    </Link>
  </li>
);

// کامپوننت اطلاعات تماس
const ContactInfo = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
  <div className="flex items-center gap-4 flex-row-reverse group">
    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div className="text-right">
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{title}</p>
      <p className="text-sm font-bold text-slate-200">{value}</p>
    </div>
  </div>
);

// کامپوننت آیکون شبکه‌های اجتماعی
const SocialIcon = ({ icon, href, color }: { icon: React.ReactNode, href: string, color: string }) => (
  <a 
    href={href} 
    className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 ${color} hover:text-white hover:-translate-y-1 border border-white/5`}
  >
    {icon}
  </a>
);

export default Footer;