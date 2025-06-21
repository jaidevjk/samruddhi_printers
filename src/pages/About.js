import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about-press.jpg';

export default function About() {
    return (
        <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-blue-700 mb-12"
            >
                About Samruddhi Printers
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
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
                        From elegant business cards and marketing brochures to large-format banners and customized prints, we provide comprehensive services tailored to individuals and businesses alike.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our state-of-the-art equipment, creative team, and commitment to excellence ensure every project meets the highest standards. Experience top-notch customer service, timely delivery, and results that exceed expectations.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
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

