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
import Link from "next/link";
import HeroMotion from "./Hero.client";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#fdfeff] py-16 lg:py-0">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/40 to-blue-50/30 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-right order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-[900] text-[#0f172a] leading-tight mb-8">
              جریان هوشمند
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                قدرت و پایداری
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-xl font-medium mb-12">
              تجربه مهندسی برتر در تامین سیستم‌های پمپاژ سیالات.
              <span className="text-slate-900 font-bold"> آپیکا</span>
            </p>

            <div className="flex gap-6">
              <Link
                href="/Productss"
                className="px-10 py-5 bg-slate-900 text-white font-extrabold rounded-2xl"
              >
                کاتالوگ محصولات →
              </Link>

              <Link
                href="/contact"
                className="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-bold"
              >
                مشاوره فنی
              </Link>
            </div>

            <div className="flex gap-12 mt-16 pt-10 border-t border-slate-100">
              <Stat value="۱۵" label="سال سابقه" />
              <Stat value="۲۴" label="پشتیبانی" />
              <Stat value="۱۰۰٪" label="ضمانت" />
            </div>
          </div>

          <HeroMotion />
        </div>
      </div>
    </section>
  );
}

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-3xl font-black">{value}</div>
    <div className="text-xs text-slate-400">{label}</div>
  </div>
);
