import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    { name: "Ravi K.", feedback: "Excellent quality and fast service,Excellent quality and fast service,Excellent quality and fast service,Excellent quality and fast service,Excellent quality and fast service.", rating: 5 },
    { name: "Priya S.", feedback: "They handled my urgent order perfectly.", rating: 4 },
    { name: "Kiran M.", feedback: "Great design suggestions and timely delivery.", rating: 5 },
    { name: "Anusha R.", feedback: "Very professional and affordable rates!", rating: 5 },
    { name: "Rahul T.", feedback: "Loved the quality of invitation cards.", rating: 4 },
];

export default function TestimonialSlider() {
    return (
        // <div className="mt-20 max-w-4xl mx-auto text-center px-4">
        //     <h4 className="text-2xl font-bold text-blue-700 mb-6">What Our Clients Say</h4>

        //     <Swiper
        //         modules={[Autoplay, Pagination]}
        //         slidesPerView={1}
        //         spaceBetween={30}
        //         autoplay={{ delay: 3000, disableOnInteraction: false }}
        //         pagination={{ clickable: true }}
        //         breakpoints={{
        //             768: { slidesPerView: 1 },
        //             1024: { slidesPerView: 2 },
        //         }}
        //         className="pb-10"
        //     >
        //         {testimonials.map((t, i) => (
        //             <SwiperSlide key={i}>
        //                 <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition h-full">
        //                     <p className="text-gray-600 italic">“{t.feedback}”</p>
        //                     <p className="mt-3 font-semibold text-blue-800">— {t.name}</p>
        //                     <p className="text-yellow-400 text-xl">
        //                         {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
        //                     </p>
        //                 </div>
        //             </SwiperSlide>
        //         ))}
        //     </Swiper>
        // </div>
        <div className="mt-20 max-w-4xl mx-auto text-center px-4 bg-gradient-to-br from-white to-blue-50 rounded-3xl py-12 shadow-lg">
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
                        <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                            <p className="text-gray-600 italic">“{t.feedback}”</p>
                            <p className="mt-3 font-semibold text-blue-800">— {t.name}</p>
                            <p className="text-yellow-400 text-xl">
                                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        // <div className="mt-20 max-w-6xl mx-auto text-center px-4 py-12 rounded-3xl shadow-2xl bg-white">
        //     <h4 className="text-3xl font-bold text-blue-700 mb-10">What Our Clients Say</h4>

        //     <Swiper
        //         modules={[Autoplay, Pagination]}
        //         slidesPerView={1}
        //         spaceBetween={30}
        //         autoplay={{ delay: 3000, disableOnInteraction: false }}
        //         pagination={{ clickable: true }}
        //         breakpoints={{
        //             768: { slidesPerView: 1 },
        //             1024: { slidesPerView: 2 },
        //         }}
        //         className="pb-10"
        //     >
        //         {testimonials.map((t, i) => (
        //             <SwiperSlide key={i}>
        //                 <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full text-left">
        //                     <p className="text-gray-700 text-base leading-relaxed italic max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        //                         “{t.feedback}”
        //                     </p>
        //                     <div className="mt-4">
        //                         <p className="font-semibold text-blue-800">— {t.name}</p>
        //                         <p className="text-yellow-400 text-xl">
        //                             {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
        //                         </p>
        //                     </div>
        //                 </div>
        //             </SwiperSlide>
        //         ))}
        //     </Swiper>
        // </div>

    );
}
