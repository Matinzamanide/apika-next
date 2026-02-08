'use client';

import { IProduct } from '@/Types/Types';
import ProductCard from '../ProductCard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  data: IProduct[];
}

export default function NewestProductSlider({ data }: Props) {
  if (data.length === 0) return null;

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={600}
        navigation
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 12 },
          640: { slidesPerView: 2.5, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="pb-8"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <ProductCard {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background: white;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          color: #222;
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          transform: scale(1.1);
          opacity: 1;
        }
        .swiper-button-prev {
          left: -18px;
        }
        .swiper-button-next {
          right: -18px;
        }
        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
