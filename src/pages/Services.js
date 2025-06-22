// // import React from "react";
// // import { motion } from "framer-motion";
// // import service1 from "../assets/images/service-businesscard.jpg";
// // import service2 from "../assets/images/service-flyers.jpg";
// // import service3 from "../assets/images/service-poster.jpg";
// // import service4 from "../assets/images/service-offset.jpg";

// // const services = [
// //     {
// //         title: "Business Cards",
// //         img: service1,
// //         desc: "Custom, professional business cards to promote your brand.",
// //     },
// //     {
// //         title: "Flyers & Brochures",
// //         img: service2,
// //         desc: "Eye-catching marketing materials for your promotions.",
// //     },
// //     {
// //         title: "Posters & Banners",
// //         img: service3,
// //         desc: "Large format prints for impactful visibility.",
// //     },
// //     {
// //         title: "Offset Printing",
// //         img: service4,
// //         desc: "High-volume printing with exceptional quality.",
// //     },
// // ];

// // export default function Services() {
// //     return (
// //         <main className="py-16 px-4 max-w-6xl mx-auto">
// //             <motion.h2
// //                 initial={{ opacity: 0, y: -20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6 }}
// //                 className="text-3xl font-semibold mb-10 text-center"
// //             >
// //                 Explore Our Services
// //             </motion.h2>
// //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //                 {services.map((item, i) => (
// //                     <motion.div
// //                         key={i}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         initial={{ opacity: 0, y: 40 }}
// //                         transition={{ duration: 0.5, delay: i * 0.2 }}
// //                         className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow"
// //                     >
// //                         <img
// //                             src={item.img}
// //                             alt={item.title}
// //                             className="w-full h-48 object-cover"
// //                         />
// //                         <div className="p-6">
// //                             <h3 className="text-xl font-bold mb-2 text-blue-700">{item.title}</h3>
// //                             <p className="text-gray-600">{item.desc}</p>
// //                         </div>
// //                     </motion.div>
// //                 ))}
// //             </div>
// //         </main>
// //     );
// // }


// import React from 'react';
// import { motion } from 'framer-motion';
// import offsetPrinting from '../assets/images/service-offset.png';
// import digitalPrinting from '../assets/images/service-digital.jpg';
// import businessCard from '../assets/images/service-businesscard.jpg';
// import flyerBrochure from '../assets/images/service-flyers.png';
// import poster from '../assets/images/service-poster.jpg';
// import billbook from '../assets/images/service-billbook.jpg';

// const services = [
//     {
//         title: 'Offset Printing',
//         description: 'High-volume printing with consistent quality and vibrant colors for large-scale needs.',
//         image: offsetPrinting,
//     },
//     {
//         title: 'Digital Printing',
//         description: 'Fast turnaround with sharp resolution, perfect for short-run and urgent jobs.',
//         image: digitalPrinting,
//     },
//     {
//         title: 'Business Cards',
//         description: 'Custom-designed cards that leave a lasting impression. Matte, glossy, or textured.',
//         image: businessCard,
//     },
//     {
//         title: 'Flyers & Brochures',
//         description: 'Promotional materials to showcase your business effectively.',
//         image: flyerBrochure,
//     },
//     {
//         title: 'Posters & Banners',
//         description: 'Large format prints for events, promotions, and advertising.',
//         image: poster,
//     },
//     {
//         title: 'Bill Books',
//         description: 'Custom printed bill books for businesses, ensuring professional invoicing.',
//         image: billbook,
//     },
// ];

// export default function Services() {
//     return (
//         <main className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-3xl md:text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12"
//             >
//                 Our Printing Services
//             </motion.h2>

//             <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//                 {services.map((service, i) => (
//                     <motion.div
//                         key={i}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         initial={{ opacity: 0, y: 40 }}
//                         transition={{ duration: 0.5, delay: i * 0.2 }}
//                         className="bg-white dark:bg-gray-800/60 backdrop-blur rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
//                     >
//                         <img
//                             src={service.image}
//                             alt={service.title}
//                             className="h-48 w-full object-cover rounded-t-2xl"
//                         />
//                         <div className="p-6">
//                             <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                                 {service.title}
//                             </h3>
//                             <p className="text-gray-600 dark:text-gray-300 text-sm">
//                                 {service.description}
//                             </p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </main>
//     );
// }



// import React from 'react';
// import { motion } from 'framer-motion';
// import offsetPrinting from '../assets/images/service-offset.png';
// import digitalPrinting from '../assets/images/service-digital.jpg';
// import businessCard from '../assets/images/service-businesscard.jpg';
// import flyerBrochure from '../assets/images/service-flyers.png';
// import poster from '../assets/images/service-poster.jpg';
// import billbook from '../assets/images/service-billbook.jpg';


// const services = [
//     {
//         title: 'Offset Printing',
//         description: 'High-volume printing with consistent quality and vibrant colors for large-scale needs.',
//         image: offsetPrinting,
//     },
//     {
//         title: 'Digital Printing',
//         description: 'Fast turnaround with sharp resolution, perfect for short-run and urgent jobs.',
//         image: digitalPrinting,
//     },
//     {
//         title: 'Business Cards',
//         description: 'Custom-designed cards that leave a lasting impression. Matte, glossy, or textured.',
//         image: businessCard,
//     },
//     {
//         title: 'Flyers & Brochures',
//         description: 'Promotional materials to showcase your business effectively.',
//         image: flyerBrochure,
//     },
//     {
//         title: 'Posters & Banners',
//         description: 'Large format prints for events, promotions, and advertising.',
//         image: poster,
//     },
//     {
//         title: 'Bill Books',
//         description: 'Custom printed bill books for businesses, ensuring professional invoicing.',
//         image: billbook,
//     },
// ];

// export default function Services() {
//     return (
//         <main className="py-16 px-4 max-w-7xl mx-auto">
//             {/* <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-3xl font-semibold text-center mb-12"
//             >
//                 Our Printing Services
//             </motion.h2> */}

//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold text-center text-blue-700 mb-12"
//             >
//                 Our Printing Services
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {services.map((service, i) => (
//                     <motion.div
//                         key={i}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         initial={{ opacity: 0, y: 40 }}
//                         transition={{ duration: 0.5, delay: i * 0.2 }}
//                         className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
//                     >
//                         <img src={service.image} alt={service.title} className="h-40 w-full object-cover" />
//                         <div className="p-5">
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
//                             <p className="text-gray-600 text-sm">{service.description}</p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import offsetPrinting from '../assets/images/service-offset.png';
// import digitalPrinting from '../assets/images/service-digital.jpg';
// import businessCard from '../assets/images/service-businesscard.jpg';
// import flyerBrochure from '../assets/images/service-flyers.png';
// import poster from '../assets/images/service-poster.jpg';
// import billbook from '../assets/images/service-billbook.jpg';

// const services = [
//     {
//         title: 'Offset Printing',
//         description: 'Ideal for large volumes and sharp-quality results. Best for magazines, brochures, and catalogs.',
//         image: offsetPrinting,
//     },
//     {
//         title: 'Digital Printing',
//         description: 'Quick and efficient printing solution for flyers, business cards, and personalized jobs.',
//         image: digitalPrinting,
//     },
//     {
//         title: 'Business Cards',
//         description: 'High-quality custom-designed cards — glossy, matte, textured, or embossed finishes available.',
//         image: businessCard,
//     },
//     {
//         title: 'Flyers & Brochures',
//         description: 'Vibrant promotional materials for marketing, events, and business awareness.',
//         image: flyerBrochure,
//     },
//     {
//         title: 'Posters & Banners',
//         description: 'Large-format visuals ideal for advertising, events, or retail spaces, indoor or outdoor.',
//         image: poster,
//     },
//     {
//         title: 'Bill Books',
//         description: 'Custom-branded invoice books with numbering, carbon copy, and your business details.',
//         image: billbook,
//     },
//     {
//         title: 'Letterheads & Envelopes',
//         description: 'Professional letterheads and branded envelopes to give your business a corporate edge.',
//         image: digitalPrinting, // Use a different image if available
//     },
//     {
//         title: 'Stickers & Labels',
//         description: 'Custom die-cut stickers and product labels — glossy, transparent, or waterproof.',
//         image: poster, // Replace with appropriate image
//     }
// ];

// export default function Services() {
//     return (
//         <main className="py-16 px-4 max-w-7xl mx-auto">
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold text-center text-blue-700 mb-6"
//             >
//                 Our Printing Services
//             </motion.h2>

//             <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-center max-w-3xl mx-auto text-gray-600 mb-12 text-lg"
//             >
//                 At <span className="font-semibold text-blue-700">Samruddhi Printers</span>, we provide end-to-end printing solutions for all your business and personal needs. Whether you're a startup, retail brand, or event organizer — we’ve got the tools, experience, and creativity to bring your ideas to life.
//             </motion.p>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {services.map((service, i) => (
//                     <motion.div
//                         key={i}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         initial={{ opacity: 0, y: 40 }}
//                         transition={{ duration: 0.5, delay: i * 0.2 }}
//                         className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
//                     >
//                         <img src={service.image} alt={service.title} className="h-44 w-full object-cover" />
//                         <div className="p-5">
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
//                             <p className="text-gray-600 text-sm">{service.description}</p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="mt-16 text-center"
//             >
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">Not sure which service fits your needs?</h3>
//                 <p className="text-gray-600 mb-6">Reach out to us for free consultation and samples.</p>
//                 <a
//                     href="/contact"
//                     className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition"
//                 >
//                     Contact Us
//                 </a>
//             </motion.div>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';

// import offsetPrinting from '../assets/images/service-offset.png';
// import digitalPrinting from '../assets/images/service-digital.jpg';
// import businessCard from '../assets/images/service-businesscard.jpg';
// import flyerBrochure from '../assets/images/service-flyers.png';
// import poster from '../assets/images/service-poster.jpg';
// import billbook from '../assets/images/service-billbook.jpg';
// // import invitation from '../assets/images/service-invitation.jpg';
// // import label from '../assets/images/service-label.jpg';
// // import tshirt from '../assets/images/service-tshirt.jpg';
// // import letterhead from '../assets/images/service-letterhead.jpg';
// // import envelope from '../assets/images/service-envelope.jpg';
// import invitation from '../assets/images/service-digital.jpg';
// import label from '../assets/images/service-businesscard.jpg';
// import tshirt from '../assets/images/service-flyers.png';
// import letterhead from '../assets/images/service-poster.jpg';
// import envelope from '../assets/images/service-billbook.jpg';

// const services = [
//     {
//         title: 'Offset Printing',
//         description: 'High-volume, vibrant printing perfect for books, catalogs, and magazines.',
//         image: offsetPrinting,
//     },
//     {
//         title: 'Digital Printing',
//         description: 'Quick and flexible printing, ideal for small-scale and urgent jobs.',
//         image: digitalPrinting,
//     },
//     {
//         title: 'Business Cards',
//         description: 'Sleek, personalized cards to give your brand a strong identity.',
//         image: businessCard,
//     },
//     {
//         title: 'Flyers & Brochures',
//         description: 'Informative and attractive promotional tools for your business.',
//         image: flyerBrochure,
//     },
//     {
//         title: 'Posters & Banners',
//         description: 'Eye-catching large-format prints for events, sales, and announcements.',
//         image: poster,
//     },
//     {
//         title: 'Bill Books',
//         description: 'Customized bill books with carbon or NCR for efficient documentation.',
//         image: billbook,
//     },
//     {
//         title: 'Invitation Cards',
//         description: 'Elegant wedding and event invitations tailored to your style.',
//         image: invitation,
//     },
//     {
//         title: 'Product Labels & Stickers',
//         description: 'Durable, branded labels for bottles, jars, or packages.',
//         image: label,
//     },
//     {
//         title: 'T-shirt Printing',
//         description: 'Vibrant custom T-shirt printing for promotions and events.',
//         image: tshirt,
//     },
//     {
//         title: 'Letterheads',
//         description: 'Professional letterheads for business correspondence and documentation.',
//         image: letterhead,
//     },
//     {
//         title: 'Envelopes',
//         description: 'Branded envelopes that complement your identity and make a great first impression.',
//         image: envelope,
//     },
// ];

// export default function Services() {
//     return (
//         <main className="py-16 px-4 max-w-7xl mx-auto">
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold text-center text-blue-700 mb-12"
//             >
//                 Our Printing Services
//             </motion.h2>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {services.map((service, i) => (
//                     <motion.div
//                         key={i}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         initial={{ opacity: 0, y: 40 }}
//                         transition={{ duration: 0.4, delay: i * 0.1 }}
//                         className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
//                     >
//                         <div className="overflow-hidden">
//                             <img
//                                 src={service.image}
//                                 alt={service.title}
//                                 className="h-48 w-full object-cover transform group-hover:scale-105 transition duration-300"
//                             />
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition">
//                                 {service.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm">{service.description}</p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="mt-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-6 rounded-3xl shadow-inner border border-blue-100"
//             >
//                 <div className="max-w-4xl mx-auto text-center">
//                     <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
//                         Why Choose Samruddhi Printers?
//                     </h3>

//                     <p className="text-lg text-gray-700 mb-4">
//                         At <strong>Samruddhi Printers</strong>, we’re committed to delivering precision-crafted printing solutions for every occasion —
//                         from corporate collateral and event materials to customized personal designs.
//                     </p>

//                     <p className="text-md text-gray-600 mb-8">
//                         Didn’t find a specific service? We specialize in custom jobs — offering premium materials, unique finishes, and expert guidance to bring your ideas to life.
//                     </p>

//                     <a
//                         href="/contact"
//                         className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-800 transition"
//                     >
//                         <i className="fa fa-comments-o text-white text-xl"></i>
//                         Talk to Our Print Experts
//                     </a>
//                 </div>
//             </motion.div>


//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';

// import offsetPrinting from '../assets/images/service-offset.png';
// import digitalPrinting from '../assets/images/service-digital.jpg';
// import businessCard from '../assets/images/service-businesscard.jpg';
// import flyerBrochure from '../assets/images/service-flyers.png';
// import poster from '../assets/images/service-poster.jpg';
// import billbook from '../assets/images/service-billbook.jpg';
// import invitation from '../assets/images/service-digital.jpg';
// import label from '../assets/images/service-businesscard.jpg';
// import tshirt from '../assets/images/service-flyers.png';
// import letterhead from '../assets/images/service-poster.jpg';
// import envelope from '../assets/images/service-billbook.jpg';

// const services = [
//     {
//         title: 'Offset Printing',
//         description: 'High-volume, vibrant printing perfect for books, catalogs, and magazines.',
//         image: offsetPrinting,
//     },
//     {
//         title: 'Digital Printing',
//         description: 'Quick and flexible printing, ideal for small-scale and urgent jobs.',
//         image: digitalPrinting,
//     },
//     {
//         title: 'Business Cards',
//         description: 'Sleek, personalized cards to give your brand a strong identity.',
//         image: businessCard,
//     },
//     {
//         title: 'Flyers & Brochures',
//         description: 'Informative and attractive promotional tools for your business.',
//         image: flyerBrochure,
//     },
//     {
//         title: 'Posters & Banners',
//         description: 'Eye-catching large-format prints for events, sales, and announcements.',
//         image: poster,
//     },
//     {
//         title: 'Bill Books',
//         description: 'Customized bill books with carbon or NCR for efficient documentation.',
//         image: billbook,
//     },
//     {
//         title: 'Invitation Cards',
//         description: 'Elegant wedding and event invitations tailored to your style.',
//         image: invitation,
//     },
//     {
//         title: 'Product Labels & Stickers',
//         description: 'Durable, branded labels for bottles, jars, or packages.',
//         image: label,
//     },
//     {
//         title: 'T-shirt Printing',
//         description: 'Vibrant custom T-shirt printing for promotions and events.',
//         image: tshirt,
//     },
//     {
//         title: 'Letterheads',
//         description: 'Professional letterheads for business correspondence and documentation.',
//         image: letterhead,
//     },
//     {
//         title: 'Envelopes',
//         description: 'Branded envelopes that complement your identity and make a great first impression.',
//         image: envelope,
//     },
// ];

// export default function Services() {
//     return (
//         <main className="py-16 px-4 max-w-7xl mx-auto">
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold text-center text-blue-700 mb-12"
//             >
//                 Our Printing Services
//             </motion.h2>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {services.map((service, i) => (
//                     <motion.div
//                         key={i}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         initial={{ opacity: 0, y: 40 }}
//                         transition={{ duration: 0.4, delay: i * 0.1 }}
//                         className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
//                     >
//                         <div className="overflow-hidden">
//                             <img
//                                 src={service.image}
//                                 alt={service.title}
//                                 className="h-48 w-full object-cover transform group-hover:scale-105 transition duration-300"
//                             />
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition">
//                                 {service.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm">{service.description}</p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Wave Divider */}
//             <div className="-mt-20">
//                 <svg viewBox="0 0 1440 320">
//                     <path fill="#eff6ff" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,160C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V0H0Z"></path>
//                 </svg>
//             </div>

//             {/* Enhanced CTA Section */}
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="mt-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-6 rounded-3xl shadow-inner border border-blue-100"
//             >
//                 <div className="max-w-4xl mx-auto text-center">
//                     <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
//                         Why Choose Samruddhi Printers?
//                     </h3>
//                     <p className="text-lg text-gray-700 mb-4">
//                         At <strong>Samruddhi Printers</strong>, we’re committed to delivering precision-crafted printing solutions for every occasion —
//                         from corporate collateral and event materials to customized personal designs.
//                     </p>
//                     <p className="text-md text-gray-600 mb-8">
//                         Didn’t find a specific service? We specialize in custom jobs — offering premium materials, unique finishes, and expert guidance to bring your ideas to life.
//                     </p>
//                     <a
//                         href="/contact"
//                         className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-800 transition"
//                     >
//                         <i className="fa fa-comments-o text-white text-xl"></i>
//                         Talk to Our Print Experts
//                     </a>
//                 </div>
//             </motion.div>

//             {/* Testimonials Carousel */}
//             <Swiper
//                 modules={[Autoplay]}
//                 autoplay={{ delay: 3000 }}
//                 loop={true}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 breakpoints={{
//                     768: { slidesPerView: 2 },
//                     1024: { slidesPerView: 3 },
//                 }}
//                 className="mt-20 px-4"
//             >
//                 {[{
//                     name: "Ramesh K.",
//                     content: "Outstanding print quality and exceptional service! My business cards turned out exactly as I wanted.",
//                 }, {
//                     name: "Preeti M.",
//                     content: "Their team was quick, responsive, and the bill books were delivered ahead of schedule. Highly recommend!",
//                 }, {
//                     name: "Ramesh K.",
//                     content: "Outstanding print quality and exceptional service! My business cards turned out exactly as I wanted.",
//                 },
//                 {
//                     name: "Ramesh K.",
//                     content: "Outstanding print quality and exceptional service! My business cards turned out exactly as I wanted.",
//                 },
//                 {
//                     name: "Amit S.",
//                     content: "We needed urgent flyers — Samruddhi Printers handled it professionally and with great quality!",
//                 }].map((testimonial, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 h-full flex flex-col justify-between">
//                             <p className="text-gray-600 mb-4">“{testimonial.content}”</p>
//                             <h4 className="text-blue-800 font-semibold">{testimonial.name}</h4>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </main>
//     );
// }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/print-animation.json';
import TestimonialSlider from '../components/Testimonials';

import offsetPrinting from '../assets/images/service-offset.png';
import digitalPrinting from '../assets/images/service-digital.jpg';
import businessCard from '../assets/images/service-businesscard.jpg';
import flyerBrochure from '../assets/images/service-flyers.png';
import poster from '../assets/images/service-poster.jpg';
import billbook from '../assets/images/service-billbook.jpg';
import invitation from '../assets/images/service-digital.jpg';
import label from '../assets/images/service-businesscard.jpg';
import tshirt from '../assets/images/service-flyers.png';
import letterhead from '../assets/images/service-poster.jpg';
import envelope from '../assets/images/service-billbook.jpg';

const services = [
    { title: 'Offset Printing', category: 'Business', description: 'High-volume printing perfect for books, catalogs, and magazines.', image: offsetPrinting },
    { title: 'Digital Printing', category: 'Business', description: 'Quick and flexible printing, ideal for small jobs.', image: digitalPrinting },
    { title: 'Business Cards', category: 'Business', description: 'Personalized cards to give your brand a strong identity.', image: businessCard },
    { title: 'Flyers & Brochures', category: 'Business', description: 'Attractive promotional tools for your business.', image: flyerBrochure },
    { title: 'Posters & Banners', category: 'Event', description: 'Large-format prints for events, sales, and announcements.', image: poster },
    { title: 'Bill Books', category: 'Business', description: 'Customized bill books for efficient documentation.', image: billbook },
    { title: 'Invitation Cards', category: 'Personal', description: 'Elegant invitations tailored to your style.', image: invitation },
    { title: 'Product Labels & Stickers', category: 'Custom', description: 'Durable, branded labels for packaging.', image: label },
    { title: 'T-shirt Printing', category: 'Custom', description: 'Vibrant custom T-shirt printing.', image: tshirt },
    { title: 'Letterheads', category: 'Business', description: 'Professional letterheads for official documents.', image: letterhead },
    { title: 'Envelopes', category: 'Business', description: 'Branded envelopes to complement your identity.', image: envelope },
];

const categories = ['All', 'Business', 'Event', 'Personal', 'Custom'];

const testimonials = [
    { name: 'Ravi Kumar', feedback: 'Excellent service and fast delivery!', rating: 5 },
    { name: 'Meena S', feedback: 'Loved the quality of the invitation cards.', rating: 4 },
    { name: 'Ajay Verma', feedback: 'Great value and support team!', rating: 5 },

];

export default function Services() {
    const [filter, setFilter] = useState('All');
    const filteredServices = filter === 'All' ? services : services.filter(s => s.category === filter);

    return (
        <main className="py-8 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-center text-blue-700 mb-4"
            >
                Our Printing Services
            </motion.h2>

            <div className="mb-8 flex flex-wrap justify-center gap-4">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full border ${filter === cat ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} hover:bg-blue-100`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, i) => (
                    <motion.div
                        key={i}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-6 rounded-3xl shadow-inner border border-blue-100"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6 w-32 mx-auto">
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
                        Why Choose Samruddhi Printers?
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                        At <strong>Samruddhi Printers</strong>, we’re committed to delivering precision-crafted printing solutions for every occasion —
                        from corporate collateral and event materials to customized personal designs.
                    </p>
                    <p className="text-md text-gray-600 mb-8">
                        Didn’t find a specific service? We specialize in custom jobs — offering premium materials, unique finishes, and expert guidance to bring your ideas to life.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-800 transition"
                    >
                        <i className="fa fa-comments-o text-white text-xl"></i>
                        Talk to Our Print Experts
                    </a>
                </div>
            </motion.div>

            <div className="mt-20 max-w-4xl mx-auto text-center">
                {/*                 <h4 className="text-2xl font-bold text-blue-700 mb-6">What Our Clients Say</h4>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <p className="text-gray-600 italic">“{t.feedback}”</p>
                            <p className="mt-3 font-semibold text-blue-800">— {t.name}</p>
                            <p className="text-yellow-400">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</p>
                        </div>
                    ))}
                </div> */}
                <TestimonialSlider />
            </div>
        </main>
    );
}
