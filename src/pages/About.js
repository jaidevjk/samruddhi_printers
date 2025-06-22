
// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/about-press.jpg';
// import services from '../data/services'; // Assuming you have a services data file
// import reasons from '../data/reasons'; // Assuming you have a reasons data file
//
// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
//             <section className="mb-16">


//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl font-bold text-center text-blue-700 mb-12"
//                 >
//                     About Samruddhi Printers
//                 </motion.h2>
//                 <div className="grid md:grid-cols-2 gap-12 items-center">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-2xl shadow-xl w-full object-cover"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p className="text-gray-700 text-lg mb-5 leading-relaxed">
//                             <strong>Samruddhi Printers</strong> is your trusted partner for high-quality print solutions. With over a decade of industry expertise, we specialize in transforming ideas into stunning printed products.
//                         </p>
//                         <p className="text-gray-700 text-lg mb-5 leading-relaxed
//                         ">
//                             From elegant business cards and marketing brochures to large-format banners and customized prints, we provide comprehensive services tailored to individuals and businesses alike.
//                         </p>
//                         <p className="text-gray-700 text-lg leading-relaxed">
//                             Our state-of-the-art equipment, creative team, and commitment to excellence ensure every project
//                             meets the highest standards. Experience top-notch customer service, timely delivery, and results that exceed expectations.
//                         </p>
//                         <p className="text-gray-700 text-lg leading-relaxed">
//                             Join us at Samruddhi Printers, where your vision comes to life with precision and quality.
//                         </p>
//                         <p className="text-gray-700 text-lg leading-relaxed">
//                             Whether you're a small business looking to make a big impression or an individual seeking personalized prints, we are here to help you succeed.
//                         </p>
//                         <p className="text-gray-700 text-lg leading-relaxed">
//                             Contact us today to discuss your printing needs and discover how we can bring your ideas to reality.
//                         </p>
//                     </motion.div>




//                 </div>
//             </section>
//             <section className="bg-blue-50 py-16 px-4">
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className="max-w-4xl mx-auto text-center"
//                 >
//                     <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Samruddhi Printers?</h2>
//                     <ul className="space-y-4 text-gray-700 text-lg text-left md:text-center">
//                         {reasons.map((reason, i) => (
//                             <motion.li
//                                 key={i}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2
//                                 }}
//                                 className="flex items-center justify-center gap-3"
//                             >
//                                 <span className="text-blue-600 text-xl">✔</span>
//                                 <span>{reason}</span>
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </motion.div>
//             </section>
//         </main>

//     );
// }
// import React from 'react';
// import { motion } from 'framer-motion';

// import aboutImg from '../assets/images/about-press.jpg';
// import services from '../data/services'; // Assuming you have a services data file


//below is to switch the theme to dark mode

// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/about-press.jpg';

// export default function About() {
//     return (
//         <main className="bg-gray-50 dark:bg-gray-900 py-20 px-4 md:px-6 lg:px-8">
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12"
//             >
//                 About Samruddhi Printers
//             </motion.h2>

//             <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//                 <motion.div
//                     className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     <img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-2xl object-cover w-full h-full"
//                     />
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="bg-white/70 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-md"
//                 >
//                     <p className="text-gray-700 dark:text-gray-300 text-lg mb-5 leading-relaxed">
//                         <strong className="text-blue-700 dark:text-blue-400">Samruddhi Printers</strong> is your trusted partner for high-quality print solutions. With over a decade of industry expertise, we specialize in transforming ideas into stunning printed products.
//                     </p>
//                     <p className="text-gray-700 dark:text-gray-300 text-lg mb-5 leading-relaxed">
//                         From elegant business cards and marketing brochures to large-format banners and customized prints, we provide comprehensive services tailored to individuals and businesses alike.
//                     </p>
//                     <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
//                         Our state-of-the-art equipment, creative team, and commitment to excellence ensure every project meets the highest standards. Experience top-notch customer service, timely delivery, and results that exceed expectations.
//                     </p>
//                 </motion.div>
//             </div>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/about-press.jpg';

// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold text-center text-blue-700 mb-12"
//             >
//                 About Samruddhi Printers
//             </motion.h2>

//             <div className="grid md:grid-cols-2 gap-12 items-center">
//                 <motion.img
//                     src={aboutImg}
//                     alt="About Samruddhi Printers"
//                     className="rounded-2xl shadow-xl w-full object-cover"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 />

//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <p className="text-gray-700 text-lg mb-5 leading-relaxed">
//                         <strong>Samruddhi Printers</strong> is your trusted partner for high-quality print solutions. With over a decade of industry expertise, we specialize in transforming ideas into stunning printed products.
//                     </p>
//                     <p className="text-gray-700 text-lg mb-5 leading-relaxed">
//                         From elegant business cards and marketing brochures to large-format banners and customized prints, we provide comprehensive services tailored to individuals and businesses alike.
//                     </p>
//                     <p className="text-gray-700 text-lg leading-relaxed">
//                         Our state-of-the-art equipment, creative team, and commitment to excellence ensure every project meets the highest standards. Experience top-notch customer service, timely delivery, and results that exceed expectations.
//                     </p>
//                 </motion.div>
//             </div>
//         </main>
//     );
// }

import React from 'react';
import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/about-press.jpg';
// import team1 from '../assets/images/team1.jpg'; // Replace with real team images
// import team2 from '../assets/images/team2.jpg';

import aboutImg from '../assets/images/service-logo-stickers.webp';
import team1 from '../assets/images/servcie-round-logo-stickers.jpg'; // Replace with real team images
import team2 from '../assets/images/servcie-round-logo-stickers.jpg';


export default function About() {
    return (
        <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-blue-700 mb-12"
            >
                About Samruddhi Printers
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.img
                    src={aboutImg}
                    alt="About Samruddhi Printers"
                    className="rounded-2xl shadow-xl w-full object-cover"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-gray-700 text-lg mb-5 leading-relaxed">
                        <strong>Samruddhi Printers</strong> is your trusted partner for high-quality print solutions. With over a decade of industry expertise, we specialize in transforming ideas into stunning printed products.
                    </p>
                    <p className="text-gray-700 text-lg mb-5 leading-relaxed">
                        From business cards and brochures to banners and bill books, we offer end-to-end printing services powered by modern technology, exceptional creativity, and reliable support.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our expert team and advanced printing systems ensure every project is handled with precision and delivered on time with top-tier quality.
                    </p>
                </motion.div>
            </div>

            {/* Mission & Vision Section */}
            <section className="grid md:grid-cols-2 gap-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-blue-50 p-6 rounded-xl shadow"
                >
                    <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h3>
                    <p className="text-gray-700">
                        To deliver reliable, innovative, and sustainable printing solutions that help businesses communicate better and grow faster.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-blue-50 p-6 rounded-xl shadow"
                >
                    <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h3>
                    <p className="text-gray-700">
                        To become the most preferred printing partner for individuals and enterprises through excellence, innovation, and service.
                    </p>
                </motion.div>
            </section>

            {/* Our Team Section */}
            <section className="mb-20">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-semibold text-center text-blue-700 mb-10"
                >
                    Meet Our Team
                </motion.h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[team1, team2].map((img, index) => (
                        <motion.div
                            key={index}
                            className="text-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={img} alt="Team Member" className="w-28 h-28 mx-auto rounded-full object-cover mb-4" />
                            <h4 className="text-lg font-semibold text-gray-800">Team Member {index + 1}</h4>
                            <p className="text-gray-500 text-sm">Printing Specialist</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 text-white py-16 px-6 rounded-2xl text-center shadow-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
                    <p className="text-lg mb-6">From bulk printing to custom designs, we’ve got you covered.</p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
