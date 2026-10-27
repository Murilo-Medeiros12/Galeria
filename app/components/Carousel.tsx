"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slideImages } from "../data/dataCarousel";

export default function Carousel() {
  return (
    <div className="w-1/2 mx-auto py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} // Mostra apenas 1 slide por vez
        spaceBetween={30}
        centeredSlides={true} // Centraliza o slide ativo
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="rounded-2xl"
      >
        {slideImages.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              width={1000} // Largura original da imagem para otimização
              height={600} // Altura original da imagem para otimização
              className="block w-full h-auto rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}