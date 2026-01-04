// 'use client';

// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useRef, useState } from 'react';

// const slides = [
//   {
//     src: 'https://rahabsanat.ir/wp-content/uploads/2025/03/motor-cooler.webp',
//     alt: 'موتور کولر',
//   },
//   {
//     src: 'https://rahabsanat.ir/wp-content/uploads/2025/03/gearbox.webp',
//     alt: 'گیربکس',
//   },
//   {
//     src: 'https://rahabsanat.ir/wp-content/uploads/2025/03/pump_1.webp',
//     alt: 'پمپ',
//   },
// ];

// const HeroSection = () => {
//   const timer = useRef<NodeJS.Timeout | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: { perView: 1 },
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//     },
//   });

//   // autoplay with pause on hover
//   useEffect(() => {
//     const slider = instanceRef.current;
//     if (!slider) return;

//     const startAutoPlay = () => {
//       timer.current = setInterval(() => {
//         slider.next();
//       }, 4000);
//     };

//     const stopAutoPlay = () => {
//       if (timer.current) clearInterval(timer.current);
//     };

//     startAutoPlay();

//     const sliderEl = slider.container;
//     sliderEl.addEventListener('mouseover', stopAutoPlay);
//     sliderEl.addEventListener('mouseout', startAutoPlay);

//     return () => {
//       stopAutoPlay();
//       sliderEl.removeEventListener('mouseover', stopAutoPlay);
//       sliderEl.removeEventListener('mouseout', startAutoPlay);
//     };
//   }, [instanceRef]);

//   return (
//     <div className="w-[95%] mx-auto mt-8 relative">
//       <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">

//         {slides.map((slide, index) => (
//           <div key={index} className="keen-slider__slide">
//             <Link href="/">
//               <Image
//                 width={1000}
//                 height={600}
//                 alt={slide.alt}
//                 src={slide.src}
//                 className="w-full h-auto object-cover rounded-xl"
//                 priority
//               />
//             </Link>
//           </div>
//         ))}

//       </div>

//       {/* دات‌های پایین */}
//       {loaded && (
//         <div className="flex justify-center mt-4 gap-2">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === idx ? 'bg-blue-800' : 'bg-gray-300'
//               }`}
//               aria-label={`رفتن به اسلاید ${idx + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroSection;
'use client';

import { ArrowLeft, CheckCircle2, Star, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Hero = () => {
  // افکت پارالاکس برای تصویر با حرکت ماوس
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <section 
      onMouseMove={handleMouse}
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#fdfeff] py-16 lg:py-0"
    >
      {/* لایه‌های نوری پس‌زمینه (Ambient Light) */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full filter blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/40 to-blue-50/30 rounded-full filter blur-[100px] -z-10 opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* محتوای متنی */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-right order-2 lg:order-1"
          >
            {/* Badge مدرن */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-slate-800 mb-8 overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="flex -space-x-1 rtl:space-x-reverse">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <span className="text-[13px] font-bold text-slate-600">اعتماد بیش از ۵۰۰ واحد صنعتی</span>
            </div>

            <h1 className="text-4xl lg:text-6xl md:text-[84px] font-[900] text-[#0f172a] leading-[1.1] tracking-tight mb-8">
              جریان هوشمند
              <span className="relative block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  قدرت و پایداری
                </span>
                <svg className="absolute -bottom-2 right-0 w-64 h-3 text-blue-100 -z-10" viewBox="0 0 250 12" fill="none"><path d="M3 9C30 3.5 120 3.5 247 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/></svg>
              </span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium mb-12">
              تجربه مهندسی برتر در تامین سیستم‌های پمپاژ سیالات. 
              <span className="text-slate-900 font-bold"> آپیکا</span>، تلاقی کیفیت جهانی و خدمات تخصصی.
            </p>

            <div className="flex flex-wrap gap-6">
              {/* دکمه اصلی با Glow داینامیک */}
              <Link href='/Productss' className="group relative">
                <div className="absolute inset-0 bg-blue-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-2xl"></div>
                <div className="relative px-10 py-5 bg-slate-900 text-white font-extrabold rounded-2xl flex items-center gap-3 transition-transform active:scale-95 group-hover:-translate-y-1">
                  کاتالوگ محصولات
                  <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-300 text-blue-400" />
                </div>
              </Link>

              <Link href='/contact' className="px-10 py-5 bg-white text-slate-700 font-extrabold rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 shadow-sm">
                مشاوره فنی
              </Link>
            </div>

            {/* آمارها با دیزاین جدید */}
            <div className="flex gap-12 lg:mt-16 pt-10 border-t border-slate-100">
              <StatItem value="۱۵" label="سال سابقه" />
              <div className="w-px h-12 bg-slate-100"></div>
              <StatItem value="۲۴" label="ساعت پشتیبانی" />
              <div className="w-px h-12 bg-slate-100"></div>
              <StatItem value="۱۰۰٪" label="ضمانت کالا" />
            </div>
          </motion.div>

          {/* تصویر با کنترلر پارالاکس */}
          <motion.div 
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative order-1 lg:order-2"
          >
            {/* کارت معلق پولی (Floating Glass Card) */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-21 md:-bottom-10 -right-0 md:-right-10 z-30 bg-white/70 backdrop-blur-2xl p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 xl:block"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-400">راندمان انرژی</p>
                    <p className="text-lg font-black text-slate-800">سری ++A</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>
            </motion.div>

            {/* بدنه اصلی تصویر */}
            <div className="relative group cursor-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[3rem] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden rounded-[3rem] border-[8px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src='https://apika.ir/images/pumpbanner.jpg'
                  alt="Premium Industrial Pump" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay گرادینت روی عکس */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>

              {/* المان‌های هندسی انتزاعی */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="text-right">
    <div className="text-3xl font-[1000] text-slate-900 tracking-tighter mb-1">{value}</div>
    <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

export default Hero;