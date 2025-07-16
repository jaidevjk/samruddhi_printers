import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import defaultAvatar from '../assets/images/logo-client1.jpg';

const testimonials = [
    { name: "Ravi K.", feedback: "Excellent quality and fast service,Excellent quality and fast service,Excellent quality and fast service,Excellent quality and fast service,Excellent quality and fast service.", rating: 5, avatar: defaultAvatar },
    { name: "Priya S.", feedback: "They handled my urgent order perfectly.", rating: 4, avatar: defaultAvatar },
    { name: "Kiran M.", feedback: "Great design suggestions and timely delivery.", rating: 5, avatar: defaultAvatar },
    { name: "Anusha R.", feedback: "Very professional and affordable rates!", rating: 5, avatar: defaultAvatar },
    { name: "Rahul T.", feedback: "Loved the quality of invitation cards.", rating: 4, avatar: defaultAvatar },
];

function FeedbackText({ text, maxLength = 120 }) {
    const [expanded, setExpanded] = useState(false);
    if (text.length <= maxLength) return <span>{text}</span>;
    return (
        <>
            {expanded ? text : text.slice(0, maxLength) + '...'}
            <button className="text-blue-600 ml-2 underline text-xs" onClick={() => setExpanded(e => !e)}>
                {expanded ? 'Show less' : 'Read more'}
            </button>
        </>
    );
}

export default function TestimonialSlider() {
    return (
        <div className="mt-10 max-w-4xl mx-auto text-center px-2 sm:px-4 bg-gradient-to-br from-white to-blue-50 rounded-3xl py-8 sm:py-12 shadow-lg">
            <h4 className="text-2xl font-bold text-blue-700 mb-6">What Our Clients Say</h4>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}
                className="pb-10"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-between min-h-[260px]">
                            {/* <img src={t.avatar || defaultAvatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#F57C00] mb-3" /> */}
                            <p className="text-gray-600 italic text-base mb-2"><FeedbackText text={t.feedback} /></p>
                            <p className="mt-1 font-semibold text-blue-800">— {t.name}</p>
                            <p className="text-yellow-400 text-xl">
                                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
