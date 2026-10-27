"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slideCards } from "../data/dataCard";

import "./card.css"

export default function Card() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3} // Mostra apenas 1 slide por vez
            spaceBetween={80}
            centeredSlides={true} // Centraliza o slide ativo
            loop={true}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="card-swiper"
        >
            {slideCards.map((card: any) => (
                <SwiperSlide key={card.id}>

                    <div className="card">
                        <img src={card.imageSrc} alt={card.title} />
                        <div className="card-text">
                            <p className="card-title">{card.title}</p>
                            <h3>{card.descripton}</h3>
                            <p>🗓️{card.data} ● 💬{card.comments}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}