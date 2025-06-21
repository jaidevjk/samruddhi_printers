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

import React from 'react';
import { motion } from 'framer-motion';
import offsetPrinting from '../assets/images/service-offset.png';
import digitalPrinting from '../assets/images/service-digital.jpg';
import businessCard from '../assets/images/service-businesscard.jpg';
import flyerBrochure from '../assets/images/service-flyers.png';
import poster from '../assets/images/service-poster.jpg';
import billbook from '../assets/images/service-billbook.jpg';


const services = [
    {
        title: 'Offset Printing',
        description: 'High-volume printing with consistent quality and vibrant colors for large-scale needs.',
        image: offsetPrinting,
    },
    {
        title: 'Digital Printing',
        description: 'Fast turnaround with sharp resolution, perfect for short-run and urgent jobs.',
        image: digitalPrinting,
    },
    {
        title: 'Business Cards',
        description: 'Custom-designed cards that leave a lasting impression. Matte, glossy, or textured.',
        image: businessCard,
    },
    {
        title: 'Flyers & Brochures',
        description: 'Promotional materials to showcase your business effectively.',
        image: flyerBrochure,
    },
    {
        title: 'Posters & Banners',
        description: 'Large format prints for events, promotions, and advertising.',
        image: poster,
    },
    {
        title: 'Bill Books',
        description: 'Custom printed bill books for businesses, ensuring professional invoicing.',
        image: billbook,
    },
];

export default function Services() {
    return (
        <main className="py-16 px-4 max-w-7xl mx-auto">
            {/* <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-center mb-12"
            >
                Our Printing Services
            </motion.h2> */}

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-blue-700 mb-12"
            >
                Our Printing Services
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
                    >
                        <img src={service.image} alt={service.title} className="h-40 w-full object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}


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

