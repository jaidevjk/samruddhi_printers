
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

// import React from 'react';
// import { motion } from 'framer-motion';
// // import aboutImg from '../assets/images/about-press.jpg';
// // import team1 from '../assets/images/team1.jpg'; // Replace with real team images
// // import team2 from '../assets/images/team2.jpg';

// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg'; // Replace with real team images
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';


// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
//             {/* Hero Section */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold text-center text-blue-700 mb-12"
//             >
//                 About Samruddhi Printers
//             </motion.h2>

//             <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
//                         From business cards and brochures to banners and bill books, we offer end-to-end printing services powered by modern technology, exceptional creativity, and reliable support.
//                     </p>
//                     <p className="text-gray-700 text-lg leading-relaxed">
//                         Our expert team and advanced printing systems ensure every project is handled with precision and delivered on time with top-tier quality.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* Mission & Vision Section */}
//             <section className="grid md:grid-cols-2 gap-10 mb-20">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-blue-50 p-6 rounded-xl shadow"
//                 >
//                     <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h3>
//                     <p className="text-gray-700">
//                         To deliver reliable, innovative, and sustainable printing solutions that help businesses communicate better and grow faster.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="bg-blue-50 p-6 rounded-xl shadow"
//                 >
//                     <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h3>
//                     <p className="text-gray-700">
//                         To become the most preferred printing partner for individuals and enterprises through excellence, innovation, and service.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Our Team Section */}
//             <section className="mb-20">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-blue-700 mb-10"
//                 >
//                     Meet Our Team
//                 </motion.h3>

//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {[team1, team2].map((img, index) => (
//                         <motion.div
//                             key={index}
//                             className="text-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                         >
//                             <img src={img} alt="Team Member" className="w-28 h-28 mx-auto rounded-full object-cover mb-4" />
//                             <h4 className="text-lg font-semibold text-gray-800">Team Member {index + 1}</h4>
//                             <p className="text-gray-500 text-sm">Printing Specialist</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="bg-blue-600 text-white py-16 px-6 rounded-2xl text-center shadow-md">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                     <p className="text-lg mb-6">From bulk printing to custom designs, we’ve got you covered.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                     >
//                         Get in Touch
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';

// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Heading */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-5xl font-bold text-center text-blue-700 mb-12"
//             >
//                 About Samruddhi Printers
//             </motion.h2>

//             {/* Company Overview */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                 <motion.img
//                     src={aboutImg}
//                     alt="About Samruddhi Printers"
//                     className="rounded-2xl shadow-2xl w-full object-cover"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 />

//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <p className="text-lg mb-5 leading-relaxed">
//                         <strong>Samruddhi Printers</strong> is a future-focused print solutions company offering premium printing services with unmatched creativity, quality, and precision. Since our inception over a decade ago, we’ve empowered clients to turn ideas into compelling printed realities.
//                     </p>
//                     <p className="text-lg mb-5 leading-relaxed">
//                         With capabilities ranging from traditional offset printing to advanced digital workflows, custom branding, and packaging—we proudly serve startups, corporates, and creative agencies across sectors.
//                     </p>
//                     <p className="text-lg leading-relaxed">
//                         We believe in delivering excellence at every step—with cutting-edge machinery, expert designers, eco-conscious materials, and a customer-first mindset.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* Mission & Vision */}
//             <section className="grid md:grid-cols-2 gap-10 mb-20">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-blue-50 p-8 rounded-xl shadow-md"
//                 >
//                     <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h3>
//                     <p>
//                         To craft printing solutions that elevate brands, accelerate business growth, and leave lasting impressions—one print at a time.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="bg-blue-50 p-8 rounded-xl shadow-md"
//                 >
//                     <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h3>
//                     <p>
//                         To be India’s most trusted and technologically advanced printing partner—redefining quality, speed, and sustainability.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Core Values */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-blue-700 mb-10"
//                 >
//                     Our Core Values
//                 </motion.h3>
//                 <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                     {[
//                         'Integrity & Trust',
//                         'Customer Centricity',
//                         'Innovation in Every Print',
//                         'Sustainable Practices'
//                     ].map((value, i) => (
//                         <motion.div
//                             key={i}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.4, delay: i * 0.2 }}
//                             className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
//                         >
//                             <h4 className="text-blue-600 font-bold text-lg mb-2">{value}</h4>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Our Team */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-blue-700 mb-10"
//                 >
//                     Meet Our Team
//                 </motion.h3>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {[team1, team2, team1].map((img, index) => (
//                         <motion.div
//                             key={index}
//                             className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                         >
//                             <img
//                                 src={img}
//                                 alt="Team Member"
//                                 className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-600"
//                             />
//                             <h4 className="text-lg font-semibold text-gray-800">Team Member {index + 1}</h4>
//                             <p className="text-gray-500 text-sm">Print & Design Specialist</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="bg-blue-600 text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                     <p className="text-lg mb-6">From bulk offset to personalized packaging — we bring your vision to life in print.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                     >
//                         Get in Touch
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';

// const theme = {
//     primary: 'text-[#0f172a]',        // Navy
//     highlight: 'text-[#fbbf24]',      // Golden yellow
//     bgHighlight: 'bg-[#fef9c3]',      // Light gold
//     accent: 'text-[#1e3a8a]'          // Dark blue for contrast
// };

// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800 bg-white">
//             {/* Heading */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className={`text-5xl font-extrabold text-center mb-12 ${theme.primary}`}
//             >
//                 About <span className={theme.highlight}>Samruddhi Printers</span>
//             </motion.h2>

//             {/* Company Overview */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
//                     <p className="text-lg mb-5 leading-relaxed">
//                         <strong className={theme.accent}>Samruddhi Printers</strong> is a progressive printing firm known for its commitment to quality, creativity, and speed. With over 10 years in the industry, we’ve delivered top-tier print solutions for businesses, institutions, and entrepreneurs alike.
//                     </p>
//                     <p className="text-lg mb-5 leading-relaxed">
//                         Whether it's offset printing, digital printing, custom labels, packaging, or corporate branding materials—our solutions are tailored to meet diverse business demands with precision and flair.
//                     </p>
//                     <p className="text-lg leading-relaxed">
//                         We combine advanced technology with experienced craftsmanship to ensure every print speaks volumes about your brand.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* Mission & Vision */}
//             <section className="grid md:grid-cols-2 gap-10 mb-20">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-[#fef9c3] p-8 rounded-xl shadow-md"
//                 >
//                     <h3 className="text-2xl font-semibold text-[#92400e] mb-3">Our Mission</h3>
//                     <p className="text-gray-800">
//                         To empower businesses with world-class printing solutions that enhance communication, marketing, and brand visibility—delivered with efficiency and elegance.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="bg-[#fef9c3] p-8 rounded-xl shadow-md"
//                 >
//                     <h3 className="text-2xl font-semibold text-[#92400e] mb-3">Our Vision</h3>
//                     <p className="text-gray-800">
//                         To be recognized as India’s most innovative and reliable printing partner, delivering excellence at every scale—locally and globally.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Core Values */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-[#0f172a] mb-10"
//                 >
//                     Our Core Values
//                 </motion.h3>
//                 <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                     {[
//                         'Integrity & Trust',
//                         'Customer First Approach',
//                         'Continuous Innovation',
//                         'Eco-Conscious Operations'
//                     ].map((value, i) => (
//                         <motion.div
//                             key={i}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.4, delay: i * 0.2 }}
//                             className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition"
//                         >
//                             <h4 className="text-lg font-semibold text-[#92400e]">{value}</h4>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Our Team */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-[#0f172a] mb-10"
//                 >
//                     Meet Our Experts
//                 </motion.h3>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {[team1, team2, team1].map((img, index) => (
//                         <motion.div
//                             key={index}
//                             className="text-center bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                         >
//                             <img
//                                 src={img}
//                                 alt="Team Member"
//                                 className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-400"
//                             />
//                             <h4 className="text-lg font-semibold">Team Member {index + 1}</h4>
//                             <p className="text-gray-500 text-sm">Print & Design Specialist</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="bg-[#0f172a] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                     <p className="text-lg mb-6">From short runs to full-scale productions — we bring creativity and reliability to every project.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//                     >
//                         Get in Touch
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';

// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Heading */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-5xl font-extrabold text-center text-teal-700 mb-12"
//             >
//                 About Samruddhi Printers
//             </motion.h2>

//             {/* Company Overview */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                 <motion.img
//                     src={aboutImg}
//                     alt="About Samruddhi Printers"
//                     className="rounded-2xl shadow-2xl w-full object-cover"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 />

//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <p className="text-lg mb-5 leading-relaxed">
//                         <strong className="text-teal-700">Samruddhi Printers</strong> is a premium print solutions company that blends innovation, precision, and artistry to deliver world-class results. Since 2010, we’ve helped businesses and creators turn concepts into striking printed assets that leave a lasting impact.
//                     </p>
//                     <p className="text-lg mb-5 leading-relaxed">
//                         Our comprehensive portfolio spans offset printing, digital solutions, branded packaging, corporate stationery, and more — supported by cutting-edge equipment and eco-conscious practices.
//                     </p>
//                     <p className="text-lg leading-relaxed">
//                         We pride ourselves on excellence, fast turnarounds, and partnerships that help brands grow and thrive in a competitive world.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* Mission & Vision */}
//             <section className="grid md:grid-cols-2 gap-10 mb-20">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-teal-50 p-8 rounded-xl shadow-md"
//                 >
//                     <h3 className="text-2xl font-semibold text-teal-700 mb-3">Our Mission</h3>
//                     <p>
//                         To empower businesses through exceptional printing services that blend creativity, technology, and reliability — building brands that stand out.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="bg-teal-50 p-8 rounded-xl shadow-md"
//                 >
//                     <h3 className="text-2xl font-semibold text-teal-700 mb-3">Our Vision</h3>
//                     <p>
//                         To be recognized globally as the most trusted and innovative print partner, known for sustainable solutions and impeccable service.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Capabilities */}
//             <section className="mb-20">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-teal-700 mb-10"
//                 >
//                     Our Capabilities
//                 </motion.h3>
//                 <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                     {[
//                         'Offset & Digital Printing',
//                         'Custom Packaging',
//                         'Corporate Stationery',
//                         'Eco-Friendly Materials'
//                     ].map((item, i) => (
//                         <motion.div
//                             key={i}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.4, delay: i * 0.2 }}
//                             className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
//                         >
//                             <h4 className="text-teal-700 font-bold text-lg mb-2">{item}</h4>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Our Team */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-teal-700 mb-10"
//                 >
//                     Meet Our Team
//                 </motion.h3>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {[team1, team2, team1].map((img, index) => (
//                         <motion.div
//                             key={index}
//                             className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                         >
//                             <img
//                                 src={img}
//                                 alt={`Team Member ${index + 1}`}
//                                 className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-teal-600"
//                             />
//                             <h4 className="text-lg font-semibold">Team Member {index + 1}</h4>
//                             <p className="text-gray-500 text-sm">Print & Design Specialist</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="bg-teal-700 text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Brand Deserves the Best</h3>
//                     <p className="text-lg mb-6">Partner with Samruddhi Printers for quality that speaks volumes.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                     >
//                         Get in Touch
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';

// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Hero Section with Logo & Tagline */}
//             <motion.div
//                 initial={{ opacity: 0, y: -30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="text-center mb-16"
//             >
//                 {/* <img src="../assets/images/mainlogo.png" alt="Samruddhi Printers Logo" className="w-28 mx-auto mb-4" /> */}
//                 <h2 className="text-5xl font-extrabold text-[#D72F1B] mb-2 tracking-tight">
//                     Samruddhi Printers
//                 </h2>
//                 <p className="text-[#0077C8] text-xl font-medium">
//                     Precision in Every Print. Passion in Every Page.
//                 </p>
//             </motion.div>

//             {/* Company Overview */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//                 <motion.img
//                     src={aboutImg}
//                     alt="About Samruddhi Printers"
//                     className="rounded-2xl shadow-2xl w-full object-cover"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 />

//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <p className="text-lg mb-5 leading-relaxed">
//                         <strong>Samruddhi Printers</strong> is a future-focused print solutions company offering premium printing services with unmatched creativity, quality, and precision. Since our inception over a decade ago, we’ve empowered clients to turn ideas into compelling printed realities.
//                     </p>
//                     <p className="text-lg mb-5 leading-relaxed">
//                         With capabilities ranging from traditional offset printing to advanced digital workflows, custom branding, and packaging—we proudly serve startups, corporates, and creative agencies across sectors.
//                     </p>
//                     <p className="text-lg leading-relaxed">
//                         We believe in delivering excellence at every step—with cutting-edge machinery, expert designers, eco-conscious materials, and a customer-first mindset.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* Mission & Vision */}
//             <section className="grid md:grid-cols-2 gap-10 mb-24">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-[#F0F9F2] p-8 rounded-xl shadow-md border"
//                 >
//                     <h3 className="text-2xl font-semibold text-[#3BB143] mb-3">Our Mission</h3>
//                     <p>
//                         To craft printing solutions that elevate brands, accelerate business growth, and leave lasting impressions—one print at a time.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="bg-[#F0F9F2] p-8 rounded-xl shadow-md border"
//                 >
//                     <h3 className="text-2xl font-semibold text-[#3BB143] mb-3">Our Vision</h3>
//                     <p>
//                         To be India’s most trusted and technologically advanced printing partner—redefining quality, speed, and sustainability.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Core Values */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-blue-700 mb-10"
//                 >
//                     Our Core Values
//                 </motion.h3>
//                 <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                     {[
//                         'Integrity & Trust',
//                         'Customer Centricity',
//                         'Innovation in Every Print',
//                         'Sustainable Practices'
//                     ].map((value, i) => (
//                         <motion.div
//                             key={i}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.4, delay: i * 0.2 }}
//                             className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
//                         >
//                             <h4 className="text-[#D72F1B] font-bold text-lg mb-2">{value}</h4>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* About the Managing Director */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-[#D72F1B] mb-10"
//                 >
//                     About Our Founder & MD – Kiran Kumar C
//                 </motion.h3>

//                 <div className="grid md:grid-cols-2 gap-10 items-center">
//                     <motion.div
//                         className="bg-[#FFF5F0] p-6 md:p-8 rounded-xl shadow-md"
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h4 className="text-2xl font-semibold text-[#0077C8] mb-4">
//                             Kiran Kumar C – Founder & Proprietor
//                         </h4>
//                         <p className="text-gray-700 leading-relaxed text-lg mb-4">
//                             With a deep-rooted passion for print technology and creative craftsmanship, Mr. Kiran Kumar C established Samruddhi Printers with a singular vision—to redefine the printing experience in India. Under his leadership, the company has flourished from a local press into a trusted brand recognized for quality, integrity, and customer-centricity.
//                         </p>
//                         <p className="text-gray-700 leading-relaxed text-lg">
//                             Mr. Kumar’s strategic thinking, dedication to innovation, and commitment to excellence have driven consistent growth and client satisfaction. His hands-on leadership style continues to inspire the team to exceed expectations on every project.
//                         </p>
//                     </motion.div>

//                     <motion.img
//                         src="/assets/images/founder-kiran.jpg" // replace with real MD image path
//                         alt="Kiran Kumar C - MD"
//                         className="rounded-2xl shadow-xl w-full object-cover"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     />
//                 </div>
//             </section>


//             {/* Our Team */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-blue-700 mb-10"
//                 >
//                     Meet Our Team
//                 </motion.h3>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {[team1, team2, team1].map((img, index) => (
//                         <motion.div
//                             key={index}
//                             className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                         >
//                             <img
//                                 src={img}
//                                 alt="Team Member"
//                                 className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-[#3BB143]"
//                             />
//                             <h4 className="text-lg font-semibold text-gray-800">Team Member {index + 1}</h4>
//                             <p className="text-gray-500 text-sm">Print & Design Specialist</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="bg-gradient-to-br from-[#F36C21] to-[#D72F1B] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                     <p className="text-lg mb-6">From bulk offset to personalized packaging — we bring your vision to life in print.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-[#D72F1B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                     >
//                         Get in Touch
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';

// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Heading */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-5xl font-bold text-center text-blue-800 mb-12"
//             >
//                 About Samruddhi Printers
//             </motion.h2>

//             {/* Company Overview */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                 <motion.img
//                     src={aboutImg}
//                     alt="About Samruddhi Printers"
//                     className="rounded-2xl shadow-2xl w-full object-cover"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 />

//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <p className="text-lg mb-5 leading-relaxed">
//                         <strong>Samruddhi Printers</strong> is a future-focused print solutions company offering premium printing services with unmatched creativity, quality, and precision. Since our inception over a decade ago, we’ve empowered clients to turn ideas into compelling printed realities.
//                     </p>
//                     <p className="text-lg mb-5 leading-relaxed">
//                         With capabilities ranging from traditional offset printing to advanced digital workflows, custom branding, and packaging—we proudly serve startups, corporates, and creative agencies across sectors.
//                     </p>
//                     <p className="text-lg leading-relaxed">
//                         We believe in delivering excellence at every step—with cutting-edge machinery, expert designers, eco-conscious materials, and a customer-first mindset.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* Mission & Vision */}
//             <section className="grid md:grid-cols-2 gap-10 mb-20">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-blue-50 p-8 rounded-xl shadow-md"
//                 >
//                     <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h3>
//                     <p>
//                         To craft printing solutions that elevate brands, accelerate business growth, and leave lasting impressions—one print at a time.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="bg-blue-50 p-8 rounded-xl shadow-md"
//                 >
//                     <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h3>
//                     <p>
//                         To be India’s most trusted and technologically advanced printing partner—redefining quality, speed, and sustainability.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Core Values */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-blue-700 mb-10"
//                 >
//                     Our Core Values
//                 </motion.h3>
//                 <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                     {[
//                         'Integrity & Trust',
//                         'Customer Centricity',
//                         'Innovation in Every Print',
//                         'Sustainable Practices'
//                     ].map((value, i) => (
//                         <motion.div
//                             key={i}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.4, delay: i * 0.2 }}
//                             className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
//                         >
//                             <h4 className="text-blue-600 font-bold text-lg mb-2">{value}</h4>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Our Team */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-blue-700 mb-10"
//                 >
//                     Meet Our Team
//                 </motion.h3>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {[team1, team2, team1].map((img, index) => (
//                         <motion.div
//                             key={index}
//                             className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                         >
//                             <img
//                                 src={img}
//                                 alt="Team Member"
//                                 className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-600"
//                             />
//                             <h4 className="text-lg font-semibold text-gray-800">Team Member {index + 1}</h4>
//                             <p className="text-gray-500 text-sm">Print & Design Specialist</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* MD & Proprietor Section */}
//             <section className="bg-gradient-to-br from-orange-100 to-white py-20 px-6 rounded-2xl shadow-lg mb-24">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="max-w-5xl mx-auto text-center"
//                 >
//                     <img
//                         src="/path-to-kiran-kumar-image.jpg"
//                         alt="Kiran Kumar C"
//                         className="w-32 h-32 mx-auto rounded-full border-4 border-orange-400 shadow-md mb-6 object-cover"
//                     />
//                     <h3 className="text-2xl md:text-3xl font-bold text-blue-800">Kiran Kumar C</h3>
//                     <p className="text-sm text-gray-600 mb-3 italic">Founder, Proprietor & Managing Director</p>
//                     <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
//                         "At Samruddhi Printers, we believe printing is not just about ink on paper—it's about leaving a legacy of excellence.
//                         With over 10 years of experience, my mission is to continuously evolve, adapt to new technologies, and provide our clients with unmatched quality, service, and satisfaction."
//                     </p>
//                     <p className="text-orange-500 mt-4 font-semibold">— Kiran Kumar C</p>
//                 </motion.div>
//             </section>

//             {/* Call to Action */}
//             <section className="bg-blue-600 text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                     <p className="text-lg mb-6">From bulk offset to personalized packaging — we bring your vision to life in print.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                     >
//                         Get in Touch
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';
// import mdImg from '../assets/images/md-kiran-kumar.jpg'; // Replace with actual image path

// export default function About() {
//     return (
//         <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800 font-sans">
//             {/* Heading */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-5xl font-bold text-center text-[#0057A0] mb-14 tracking-tight"
//             >
//                 About Samruddhi Printers
//             </motion.h2>

//             {/* Company Overview */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//                 <motion.img
//                     src={aboutImg}
//                     alt="About Samruddhi Printers"
//                     className="rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] w-full object-cover"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 />

//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <p className="text-lg mb-5 leading-relaxed">
//                         <strong>Samruddhi Printers</strong> is a forward-thinking print solutions company offering premium services with creativity, quality, and precision. Since our inception over a decade ago, we've empowered clients to bring ideas to life.
//                     </p>
//                     <p className="text-lg mb-5 leading-relaxed">
//                         We specialize in offset and digital printing, branding, packaging, and corporate stationery. Our clientele includes startups, corporates, and agencies from various sectors.
//                     </p>
//                     <p className="text-lg leading-relaxed">
//                         With cutting-edge machines, eco-conscious materials, and an expert team, we deliver impactful print experiences that set brands apart.
//                     </p>
//                 </motion.div>
//             </div>

//             {/* Mission & Vision */}
//             <section className="grid md:grid-cols-2 gap-10 mb-24">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-[#E6F1FA] p-8 rounded-xl shadow-md border-l-4 border-[#F9A825]"
//                 >
//                     <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">Our Mission</h3>
//                     <p>
//                         To craft dependable and innovative printing solutions that elevate brands and drive business growth.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="bg-[#E6F1FA] p-8 rounded-xl shadow-md border-l-4 border-[#4CAF50]"
//                 >
//                     <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">Our Vision</h3>
//                     <p>
//                         To be India's most trusted and technologically advanced printing partner—driven by innovation, excellence, and sustainability.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Core Values */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-[#0057A0] mb-10"
//                 >
//                     Our Core Values
//                 </motion.h3>
//                 <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                     {[
//                         'Integrity & Trust',
//                         'Customer Centricity',
//                         'Innovation in Every Print',
//                         'Sustainable Practices'
//                     ].map((value, i) => (
//                         <motion.div
//                             key={i}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.4, delay: i * 0.2 }}
//                             className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition border-[#e0e0e0]"
//                         >
//                             <h4 className="text-[#0057A0] font-bold text-lg mb-2">{value}</h4>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* MD Section */}
//             <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
//                 <motion.img
//                     src={mdImg}
//                     alt="Kiran Kumar C - MD & Proprietor"
//                     className="rounded-full shadow-lg w-60 h-60 mx-auto object-cover border-4 border-[#F57C00]"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 />
//                 <motion.div
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">Kiran Kumar C</h3>
//                     <p className="text-gray-600 mb-4">Managing Director & Proprietor</p>
//                     <p className="text-lg leading-relaxed mb-3">
//                         "At Samruddhi Printers, we believe print is not just ink on paper—it's an extension of your brand story. Our mission is to make that story impactful."
//                     </p>
//                     <p className="text-sm italic text-gray-500">— Kiran Kumar C</p>
//                 </motion.div>
//             </section>

//             {/* Our Team */}
//             <section className="mb-24">
//                 <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-[#0057A0] mb-10"
//                 >
//                     Meet Our Team
//                 </motion.h3>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {[team1, team2, team1].map((img, index) => (
//                         <motion.div
//                             key={index}
//                             className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                         >
//                             <img
//                                 src={img}
//                                 alt="Team Member"
//                                 className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-[#0057A0]"
//                             />
//                             <h4 className="text-lg font-semibold text-gray-800">Team Member {index + 1}</h4>
//                             <p className="text-gray-500 text-sm">Print & Design Specialist</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="bg-gradient-to-r from-[#0057A0] to-[#4CAF50] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                     <p className="text-lg mb-6">From offset bulk to premium custom prints — partner with a brand that delivers excellence.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-[#0057A0] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                     >
//                         Get in Touch
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// // import backgroundAnimation from '../assets/lottie/print-abstract-bg.json'; // Add your Lottie animation here
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';
// import mdImage from '../assets/images/md-kiran-kumar.jpg'; // Replace with actual image
// import backgroundAnimation from '../assets/lottie/print-animation.json'; // Replace with your actual Lottie animation path
// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Background Lottie */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Heading */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-5xl font-bold text-center text-[#0057A0] mb-12"
//                 >
//                     About Samruddhi Printers
//                 </motion.h2>

//                 {/* Company Overview */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-2xl shadow-2xl w-full object-cover"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />

//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p className="text-lg mb-5 leading-relaxed">
//                             <strong>Samruddhi Printers</strong> is a future-focused print solutions company offering premium printing services with unmatched creativity, quality, and precision. Since our inception over a decade ago, we’ve empowered clients to turn ideas into compelling printed realities.
//                         </p>
//                         <p className="text-lg mb-5 leading-relaxed">
//                             With capabilities ranging from traditional offset printing to advanced digital workflows, custom branding, and packaging—we proudly serve startups, corporates, and creative agencies across sectors.
//                         </p>
//                         <p className="text-lg leading-relaxed">
//                             We believe in delivering excellence at every step—with cutting-edge machinery, expert designers, eco-conscious materials, and a customer-first mindset.
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* MD Section */}
//                 <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
//                     <motion.img
//                         src={mdImage}
//                         alt="Kiran Kumar C"
//                         className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left"
//                     >
//                         <h3 className="text-3xl font-bold text-[#0057A0] mb-3">Kiran Kumar C</h3>
//                         <p className="text-orange-600 font-semibold mb-2">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg mb-4">
//                             A visionary leader with a passion for precision and creativity, Kiran Kumar C has steered Samruddhi Printers to its industry-leading position. His commitment to innovation and customer satisfaction continues to inspire our team every day.
//                         </p>
//                         <blockquote className="italic text-gray-600 border-l-4 border-[#0057A0] pl-4">
//                             "Excellence in print is not just about machines—it's about people, purpose, and passion."
//                         </blockquote>
//                     </motion.div>
//                 </div>

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="bg-[#E3F2FD] p-8 rounded-xl shadow-md"
//                     >
//                         <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">Our Mission</h3>
//                         <p>
//                             To craft printing solutions that elevate brands, accelerate business growth, and leave lasting impressions—one print at a time.
//                         </p>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="bg-[#E3F2FD] p-8 rounded-xl shadow-md"
//                     >
//                         <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">Our Vision</h3>
//                         <p>
//                             To be India’s most trusted and technologically advanced printing partner—redefining quality, speed, and sustainability.
//                         </p>
//                     </motion.div>
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#0057A0] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={i}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="bg-[#0057A0] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to personalized packaging — we bring your vision to life in print.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#0057A0] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-[#2C3E50]">
//             {/* Background Lottie */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0" >
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Heading */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-5xl font-bold text-center text-[#E65100] mb-12"
//                 >
//                     About Samruddhi Printers
//                 </motion.h2>

//                 {/* Company Overview */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
//                         <p className="text-lg mb-5 leading-relaxed">
//                             <strong>Samruddhi Printers</strong> is a future-focused print solutions company offering premium printing services with unmatched creativity, quality, and precision. Since our inception over a decade ago, we’ve empowered clients to turn ideas into compelling printed realities.
//                         </p>
//                         <p className="text-lg mb-5 leading-relaxed">
//                             With capabilities ranging from traditional offset printing to advanced digital workflows, custom branding, and packaging—we proudly serve startups, corporates, and creative agencies across sectors.
//                         </p>
//                         <p className="text-lg leading-relaxed">
//                             We believe in delivering excellence at every step—with cutting-edge machinery, expert designers, eco-conscious materials, and a customer-first mindset.
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* MD Section */}
//                 <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
//                     <motion.img
//                         src={mdImage}
//                         alt="Kiran Kumar C"
//                         className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto shadow-lg"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left"
//                     >
//                         <h3 className="text-3xl font-bold text-[#E65100] mb-3">Kiran Kumar C</h3>
//                         <p className="text-[#43A047] font-semibold mb-2">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg mb-4">
//                             A visionary leader with a passion for precision and creativity, Kiran Kumar C has steered Samruddhi Printers to its industry-leading position. His commitment to innovation and customer satisfaction continues to inspire our team every day.
//                         </p>
//                         <blockquote className="italic text-gray-600 border-l-4 border-[#E65100] pl-4">
//                             "Excellence in print is not just about machines—it's about people, purpose, and passion."
//                         </blockquote>
//                     </motion.div>
//                 </div>

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="bg-[#FFF3E0] p-8 rounded-xl shadow-md"
//                     >
//                         <h3 className="text-2xl font-semibold text-[#E65100] mb-3">Our Mission</h3>
//                         <p>
//                             To craft printing solutions that elevate brands, accelerate business growth, and leave lasting impressions—one print at a time.
//                         </p>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="bg-[#FFF3E0] p-8 rounded-xl shadow-md"
//                     >
//                         <h3 className="text-2xl font-semibold text-[#E65100] mb-3">Our Vision</h3>
//                         <p>
//                             To be India’s most trusted and technologically advanced printing partner—redefining quality, speed, and sustainability.
//                         </p>
//                     </motion.div>
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#E65100] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={i}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
//                             >
//                                 <h4 className="text-[#43A047] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="bg-[#E65100] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to personalized packaging — we bring your vision to life in print.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#E65100] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import flameAnimation from '../assets/lottie/logo-flames.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Background Lottie */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Heading with Animated Logo Flame */}
//                 <div className="flex flex-col items-center justify-center mb-12 relative">
//                     <motion.h2
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-5xl font-bold text-center text-[#0057A0]"
//                     >
//                         About Samruddhi Printers
//                     </motion.h2>
//                     <div className="w-28 h-28 absolute -top-12">
//                         <Lottie animationData={flameAnimation} loop autoPlay className="w-full h-full" />
//                     </div>
//                 </div>

//                 {/* Company Overview */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-2xl shadow-2xl w-full object-cover"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />

//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p className="text-lg mb-5 leading-relaxed">
//                             <strong>Samruddhi Printers</strong> is a future-focused print solutions company offering premium printing services with unmatched creativity, quality, and precision. Since our inception over a decade ago, we’ve empowered clients to turn ideas into compelling printed realities.
//                         </p>
//                         <p className="text-lg mb-5 leading-relaxed">
//                             With capabilities ranging from traditional offset printing to advanced digital workflows, custom branding, and packaging—we proudly serve startups, corporates, and creative agencies across sectors.
//                         </p>
//                         <p className="text-lg leading-relaxed">
//                             We believe in delivering excellence at every step—with cutting-edge machinery, expert designers, eco-conscious materials, and a customer-first mindset.
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* Additional sections remain unchanged and follow here... */}
//             </div>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import flameAnimation from '../assets/lottie/logo-flames.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import team1 from '../assets/images/servcie-round-logo-stickers.jpg';
// import team2 from '../assets/images/servcie-round-logo-stickers.jpg';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Background Lottie */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Animated Heading with Flames */}
//                 <div className="flex flex-col items-center justify-center mb-12 relative">
//                     <motion.h2
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-5xl font-bold text-center text-[#0057A0] z-10"
//                     >
//                         About Samruddhi Printers
//                     </motion.h2>
//                     <div className="w-20 h-20 mt-2">
//                         <Lottie animationData={flameAnimation} loop autoPlay />
//                     </div>
//                 </div>

//                 {/* Company Overview */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-2xl shadow-2xl w-full object-cover"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />

//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p className="text-lg mb-5 leading-relaxed">
//                             <strong>Samruddhi Printers</strong> is a future-focused print solutions company offering premium printing services with unmatched creativity, quality, and precision. Since our inception over a decade ago, we’ve empowered clients to turn ideas into compelling printed realities.
//                         </p>
//                         <p className="text-lg mb-5 leading-relaxed">
//                             With capabilities ranging from traditional offset printing to advanced digital workflows, custom branding, and packaging—we proudly serve startups, corporates, and creative agencies across sectors.
//                         </p>
//                         <p className="text-lg leading-relaxed">
//                             We believe in delivering excellence at every step—with cutting-edge machinery, expert designers, eco-conscious materials, and a customer-first mindset.
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* MD Section */}
//                 {/* <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
//                     <motion.img
//                         src={mdImage}
//                         alt="Kiran Kumar C"
//                         className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left"
//                     >
//                         <h3 className="text-3xl font-bold text-[#0057A0] mb-3">Kiran Kumar C</h3>
//                         <p className="text-orange-600 font-semibold mb-2">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg mb-4">
//                             A visionary leader with a passion for precision and creativity, Kiran Kumar C has steered Samruddhi Printers to its industry-leading position. His commitment to innovation and customer satisfaction continues to inspire our team every day.
//                         </p>
//                         <blockquote className="italic text-gray-600 border-l-4 border-[#0057A0] pl-4">
//                             "Excellence in print is not just about machines—it's about people, purpose, and passion."
//                         </blockquote>
//                     </motion.div>
//                 </div> */}
//                 <div className="grid md:grid-cols-2 gap-10 items-center mb-24">

//                     <motion.div
//                         className="mx-auto w-fit relative"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.7 }}
//                     >
//                         <div className="relative w-64 h-64 rounded-full p-[4px] bg-gradient-to-tr from-[#0057A0] via-white to-[#F57C00] shadow-lg hover:shadow-xl transition-all duration-500">
//                             <img
//                                 src={mdImage}
//                                 alt="Kiran Kumar C"
//                                 className="w-full h-full object-cover rounded-full border-4 border-white"
//                             />
//                         </div>
//                     </motion.div>

//                     {/* MD Text */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left"
//                     >
//                         <h3 className="text-3xl font-extrabold text-[#0057A0] mb-2 tracking-tight">Kiran Kumar C</h3>
//                         <p className="text-[#F57C00] font-semibold text-lg mb-4">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
//                             A visionary leader who blends creative insight with strategic execution,
//                             <strong> Kiran Kumar C </strong> has shaped Samruddhi Printers into a trusted name in the printing industry.
//                             His leadership is driven by a commitment to innovation, quality, and client success.
//                         </p>

//                         <div className="flex gap-2 items-start text-gray-600 italic text-base border-l-4 border-[#0057A0] pl-4">
//                             <svg className="w-5 h-5 mt-1 text-[#F57C00]" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M7.17 6A5.001 5.001 0 0 1 12 2v2a3 3 0 0 0-3 3H7.17zM5 8h4a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7v-2a3 3 0 0 1-3-3V8z" />
//                             </svg>
//                             <span>
//                                 “Excellence in print is not just about machines—it's about people, purpose, and passion.”
//                             </span>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="bg-[#E3F2FD] p-8 rounded-xl shadow-md"
//                     >
//                         <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">Our Mission</h3>
//                         <p>
//                             To craft printing solutions that elevate brands, accelerate business growth, and leave lasting impressions—one print at a time.
//                         </p>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="bg-[#E3F2FD] p-8 rounded-xl shadow-md"
//                     >
//                         <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">Our Vision</h3>
//                         <p>
//                             To be India’s most trusted and technologically advanced printing partner—redefining quality, speed, and sustainability.
//                         </p>
//                     </motion.div>
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#0057A0] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={i}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="bg-[#0057A0] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to personalized packaging — we bring your vision to life in print.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#0057A0] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json'; // Replace or provide JSON
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Background Lottie */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Heading */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-5xl font-bold text-center text-[#0057A0] mb-12"
//                 >
//                     About Samruddhi Printers
//                 </motion.h2>

//                 {/* Company Overview */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-2xl shadow-2xl w-full object-cover"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p className="text-lg mb-5 leading-relaxed">
//                             <strong>Samruddhi Printers</strong> is a future-focused print solutions company offering premium printing services with unmatched creativity, quality, and precision. Since our inception over a decade ago, we’ve empowered clients to turn ideas into compelling printed realities.
//                         </p>
//                         <p className="text-lg mb-5 leading-relaxed">
//                             With capabilities ranging from traditional offset printing to advanced digital workflows, custom branding, and packaging—we proudly serve startups, corporates, and creative agencies across sectors.
//                         </p>
//                         <p className="text-lg leading-relaxed">
//                             We believe in delivering excellence at every step—with cutting-edge machinery, expert designers, eco-conscious materials, and a customer-first mindset.
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* MD Section */}
//                 <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
//                     <motion.img
//                         src={mdImage}
//                         alt="Kiran Kumar C"
//                         className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto shadow-lg"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left space-y-4"
//                     >
//                         <h3 className="text-3xl font-bold text-[#0057A0] flex items-center justify-center md:justify-start gap-2">
//                             Kiran Kumar C
//                             <svg className="w-6 h-6 text-[#F57C00] animate-bounce-slow" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12 2C10.14 4.39 10 6.87 11.15 8.72C9.62 8.56 8 9.49 8 12C8 15.03 10.14 17 12 17C13.86 17 16 15.03 16 12C16 9.5 14.38 8.56 12.85 8.72C14 6.87 13.86 4.39 12 2Z" />
//                             </svg>
//                         </h3>
//                         <p className="text-orange-600 font-semibold">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg">
//                             A visionary leader with a passion for precision and creativity, Kiran Kumar C has steered Samruddhi Printers to its industry-leading position. His commitment to innovation and customer satisfaction continues to inspire our team every day.
//                         </p>
//                         <motion.blockquote
//                             className="italic text-gray-600 border-l-4 border-[#0057A0] pl-4 text-md"
//                             initial={{ opacity: 0, x: -10 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1, delay: 0.3 }}
//                         >
//                             "Excellence in print is not just about machines—it's about people, purpose, and passion."
//                         </motion.blockquote>
//                     </motion.div>
//                 </div>

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     {[
//                         { title: 'Our Mission', text: 'To craft printing solutions that elevate brands, accelerate business growth, and leave lasting impressions—one print at a time.' },
//                         { title: 'Our Vision', text: 'To be India’s most trusted and technologically advanced printing partner—redefining quality, speed, and sustainability.' }
//                     ].map((item, i) => (
//                         <motion.div
//                             key={item.title}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.2 }}
//                             className="bg-[#E3F2FD] p-8 rounded-xl shadow-md"
//                         >
//                             <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">{item.title}</h3>
//                             <p>{item.text}</p>
//                         </motion.div>
//                     ))}
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#0057A0] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={value}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="bg-[#0057A0] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to personalized packaging — we bring your vision to life in print.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#0057A0] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800">
//             {/* Background Lottie */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Heading */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-5xl font-extrabold text-center text-[#0057A0] mb-12 tracking-tight"
//                 >
//                     About Samruddhi Printers
//                 </motion.h2>

//                 {/* Company Overview */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-3xl shadow-xl w-full object-cover border border-[#e0e0e0]"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p className="text-lg mb-5 leading-relaxed">
//                             <strong>Samruddhi Printers</strong> is a forward-thinking print solutions provider known for our creativity, quality, and customer focus. For over a decade, we’ve helped clients transform ideas into powerful printed communications.
//                         </p>
//                         <p className="text-lg mb-5 leading-relaxed">
//                             From traditional offset to modern digital workflows, custom branding to product packaging—we deliver excellence across industries with a commitment to innovation and sustainability.
//                         </p>
//                         <p className="text-lg leading-relaxed">
//                             Our team combines skilled craftsmanship, eco-conscious materials, and cutting-edge technology to offer services that are as reliable as they are refined.
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* MD Section */}
//                 <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
//                     <motion.img
//                         src={mdImage}
//                         alt="Kiran Kumar C"
//                         className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto shadow-lg"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left space-y-4"
//                     >
//                         <h3 className="text-3xl font-bold text-[#0057A0] flex items-center justify-center md:justify-start gap-2">
//                             Kiran Kumar C
//                             <svg className="w-6 h-6 text-[#F57C00] animate-pulse" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12 2C10.14 4.39 10 6.87 11.15 8.72C9.62 8.56 8 9.49 8 12C8 15.03 10.14 17 12 17C13.86 17 16 15.03 16 12C16 9.5 14.38 8.56 12.85 8.72C14 6.87 13.86 4.39 12 2Z" />
//                             </svg>
//                         </h3>
//                         <p className="text-orange-600 font-semibold">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg">
//                             A visionary leader, Kiran Kumar C has led Samruddhi Printers with passion and precision. His dedication to quality and customer-centricity fuels our team and drives our reputation in the print industry.
//                         </p>
//                         <motion.blockquote
//                             className="italic text-gray-600 border-l-4 border-[#0057A0] pl-4 text-md"
//                             initial={{ opacity: 0, x: -10 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1, delay: 0.3 }}
//                         >
//                             "Excellence in print is not just about machines—it's about people, purpose, and passion."
//                         </motion.blockquote>
//                     </motion.div>
//                 </div>

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     {[{
//                         title: 'Our Mission',
//                         text: 'To craft printing solutions that elevate brands, accelerate growth, and leave lasting impressions.'
//                     }, {
//                         title: 'Our Vision',
//                         text: 'To be India’s most trusted and innovative printing partner—setting benchmarks for quality, speed, and sustainability.'
//                     }].map((item, i) => (
//                         <motion.div
//                             key={item.title}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.2 }}
//                             className="bg-[#E3F2FD] p-8 rounded-xl shadow-md"
//                         >
//                             <h3 className="text-2xl font-semibold text-[#0057A0] mb-3">{item.title}</h3>
//                             <p>{item.text}</p>
//                         </motion.div>
//                     ))}
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#0057A0] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={value}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition-all duration-300"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="bg-[#0057A0] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#0057A0] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-900 font-[\'Inter\',sans-serif]">
//             {/* Background Animation */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Title */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-5xl font-black text-center text-[#143E61] mb-14 tracking-tight"
//                 >
//                     About Samruddhi Printers
//                 </motion.h2>

//                 {/* Overview */}
//                 <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-3xl shadow-2xl w-full object-cover border border-gray-300"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-lg space-y-5 leading-relaxed text-[#1A1A1A]"
//                     >
//                         <p><strong className="text-[#F57C00]">Samruddhi Printers</strong> delivers future-ready print solutions blending tradition and innovation. With over a decade of experience, we convert ideas into high-impact visual stories.</p>
//                         <p>Our full-service printing spans from offset to digital, branding to packaging. We cater to startups, corporates, and creatives with unmatched speed and eco-smart technology.</p>
//                         <p>Driven by excellence, sustainability, and people-first values, we ensure every print reflects your brand’s true quality.</p>
//                     </motion.div>
//                 </div>

//                 {/* MD Profile */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
//                     <motion.div
//                         className="relative flex justify-center"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <img
//                             src={mdImage}
//                             alt="Kiran Kumar C"
//                             className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] shadow-xl"
//                         />
//                         <div className="absolute top-0 right-6 animate-ping-slow">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="#F57C00" viewBox="0 0 24 24" className="w-10 h-10">
//                                 <path d="M12 2C10.14 4.39 10 6.87 11.15 8.72C9.62 8.56 8 9.49 8 12C8 15.03 10.14 17 12 17C13.86 17 16 15.03 16 12C16 9.5 14.38 8.56 12.85 8.72C14 6.87 13.86 4.39 12 2Z" />
//                             </svg>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left space-y-4"
//                     >
//                         <h3 className="text-3xl font-bold text-[#143E61]">Kiran Kumar C</h3>
//                         <p className="text-[#F57C00] font-semibold">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg">With an eye for detail and commitment to client success, Kiran Kumar C guides Samruddhi Printers to stay ahead in technology and service. His leadership fosters trust, creativity, and precision in everything we do.</p>
//                         <motion.blockquote
//                             className="italic text-gray-600 border-l-4 border-[#F57C00] pl-4 text-md"
//                             initial={{ opacity: 0, x: -10 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1, delay: 0.3 }}
//                         >
//                             "Excellence in print is not just about machines—it’s about people, purpose, and passion."
//                         </motion.blockquote>
//                     </motion.div>
//                 </div>

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     {[{
//                         title: 'Our Mission',
//                         text: 'To craft printing solutions that elevate brands, accelerate growth, and leave lasting impressions.'
//                     }, {
//                         title: 'Our Vision',
//                         text: 'To be India’s most trusted and innovative printing partner—setting benchmarks for quality, speed, and sustainability.'
//                     }].map((item, i) => (
//                         <motion.div
//                             key={item.title}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.2 }}
//                             className="bg-gradient-to-br from-white via-blue-50 to-white p-8 rounded-2xl shadow-md border border-blue-100"
//                         >
//                             <h3 className="text-2xl font-semibold text-[#143E61] mb-3">{item.title}</h3>
//                             <p className="text-gray-700 leading-relaxed">{item.text}</p>
//                         </motion.div>
//                     ))}
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#143E61] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={value}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="bg-[#143E61] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#143E61] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import flameAnimation from '../assets/lottie/logo-flames.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800 font-[Inter]">
//             {/* Background Animation */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Heading with Animated Flames */}
//                 <div className="flex flex-col items-center justify-center mb-14">
//                     <motion.h2
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-5xl font-extrabold text-center text-[#143E61] tracking-tight"
//                     >
//                         About Samruddhi Printers
//                     </motion.h2>
//                     <div className="w-24 h-24 mt-2">
//                         <Lottie animationData={flameAnimation} loop autoPlay className="w-full h-full" />
//                     </div>
//                 </div>

//                 {/* Divider */}
//                 <hr className="border-t-2 border-[#F57C00] mb-12 w-20 mx-auto" />

//                 {/* Overview */}
//                 <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-3xl shadow-xl w-full object-cover border border-gray-200"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-lg space-y-5 leading-relaxed"
//                     >
//                         <p><strong className="text-[#143E61]">Samruddhi Printers</strong> delivers future-ready print solutions blending tradition and innovation. With over a decade of experience, we convert ideas into high-impact visual stories.</p>
//                         <p>Our full-service printing spans from offset to digital, branding to packaging. We cater to startups, corporates, and creatives with unmatched speed and eco-smart technology.</p>
//                         <p>Driven by excellence, sustainability, and people-first values, we ensure every print reflects your brand’s true quality.</p>
//                     </motion.div>
//                 </div>

//                 {/* Divider */}
//                 <hr className="border-t-2 border-[#143E61] mb-12 w-20 mx-auto" />

//                 {/* MD Profile Enhanced */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
//                     <motion.img
//                         src={mdImage}
//                         alt="Kiran Kumar C"
//                         className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto shadow-2xl"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left space-y-4"
//                     >
//                         <h3 className="text-3xl font-bold text-[#143E61]">Kiran Kumar C</h3>
//                         <p className="text-[#F57C00] font-semibold">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg">With an eye for detail and commitment to client success, Kiran Kumar C guides Samruddhi Printers to stay ahead in technology and service. His leadership fosters trust, creativity, and precision in everything we do.</p>
//                         <motion.blockquote
//                             className="italic text-gray-600 border-l-4 border-[#F57C00] pl-4 text-md"
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <span className="inline-block animate-[typing_3s_steps(40)_1,blink_1s_step-end_infinite] overflow-hidden whitespace-nowrap border-r-2 border-gray-500">"Excellence in print is not just about machines—it’s about people, purpose, and passion."</span>
//                         </motion.blockquote>
//                     </motion.div>
//                 </div>

//                 {/* Divider */}
//                 <hr className="border-t-2 border-[#F57C00] mb-12 w-20 mx-auto" />

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     {[{
//                         title: 'Our Mission',
//                         text: 'To craft printing solutions that elevate brands, accelerate growth, and leave lasting impressions.'
//                     }, {
//                         title: 'Our Vision',
//                         text: 'To be India’s most trusted and innovative printing partner—setting benchmarks for quality, speed, and sustainability.'
//                     }].map((item, i) => (
//                         <motion.div
//                             key={item.title}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.2 }}
//                             className="bg-gradient-to-br from-white via-blue-50 to-white p-8 rounded-2xl shadow-md border border-blue-100"
//                         >
//                             <h3 className="text-2xl font-semibold text-[#143E61] mb-3">{item.title}</h3>
//                             <p className="text-gray-700 leading-relaxed">{item.text}</p>
//                         </motion.div>
//                     ))}
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#143E61] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={value}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Call to Action */}
//                 <section className="bg-[#143E61] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#143E61] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import flameAnimation from '../assets/lottie/logo-flames.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800 font-[Inter]">
//             {/* Background Animation */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Heading with Animated Flames */}
//                 <div className="flex flex-col items-center justify-center mb-14">
//                     <motion.h2
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-5xl font-extrabold text-center text-[#143E61] tracking-tight"
//                     >
//                         About Samruddhi Printers
//                     </motion.h2>
//                     <div className="w-24 h-24 mt-2">
//                         <Lottie animationData={flameAnimation} loop autoPlay className="w-full h-full" />
//                     </div>
//                 </div>

//                 {/* Divider */}
//                 <hr className="border-t-2 border-[#F57C00] mb-12 w-20 mx-auto" />

//                 {/* Overview */}
//                 <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-3xl shadow-xl w-full object-cover border border-gray-200"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-lg space-y-5 leading-relaxed"
//                     >
//                         <p><strong className="text-[#143E61]">Samruddhi Printers</strong> delivers future-ready print solutions blending tradition and innovation. With over a decade of experience, we convert ideas into high-impact visual stories.</p>
//                         <p>Our full-service printing spans from offset to digital, branding to packaging. We cater to startups, corporates, and creatives with unmatched speed and eco-smart technology.</p>
//                         <p>Driven by excellence, sustainability, and people-first values, we ensure every print reflects your brand’s true quality.</p>
//                     </motion.div>
//                 </div>

//                 {/* Divider */}
//                 <hr className="border-t-2 border-[#143E61] mb-12 w-20 mx-auto" />

//                 {/* MD Profile Enhanced */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
//                     <motion.img
//                         src={mdImage}
//                         alt="Kiran Kumar C"
//                         className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto shadow-2xl"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left space-y-4"
//                     >
//                         <h3 className="text-3xl font-bold text-[#143E61]">Kiran Kumar C</h3>
//                         <p className="text-[#F57C00] font-semibold">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg">With an eye for detail and commitment to client success, Kiran Kumar C guides Samruddhi Printers to stay ahead in technology and service. His leadership fosters trust, creativity, and precision in everything we do.</p>
//                         {/* <motion.blockquote
//                             className="italic text-gray-600 border-l-4 border-[#F57C00] pl-4 text-md"
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <span className="inline-block animate-[typing_3s_steps(40)_1,blink_1s_step-end_infinite] overflow-hidden whitespace-nowrap border-r-2 border-gray-500" style={{ color: '#ffff' }}>"Excellence in print is not just about machines—it’s about people, purpose, and passion."</span>
//                         </motion.blockquote> */}
//                         {/* <motion.blockquote
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ duration: 1 }}
//                             className="relative bg-[#143E61] text-white px-6 py-5 rounded-xl shadow-lg border-l-4 border-[#F57C00] text-lg font-medium leading-relaxed"
//                         >
//                             <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white pr-2 animate-[typing_4s_steps(55)_1,blink_1s_step-end_infinite]">
//                                 "Excellence in print is not just about machines—it’s about people, purpose, and passion."
//                             </span>
//                         </motion.blockquote> */}
//                         <motion.blockquote
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ duration: 1 }}
//                             className="relative  text-white px-6 py-5 rounded-xl shadow-lg border-l-4 border-[#F57C00] text-lg font-medium leading-relaxed"
//                         >
//                             <span className="inline-block max-w-full overflow-hidden whitespace-nowrap border-r-2 border-white pr-2 animate-typing">
//                                 "Excellence in print is not just about machines—it’s about people, purpose, and passion."
//                             </span>
//                             <span className="absolute top-0 right-0 text-[#ffff] animate-ping-slow">
//                                 "Excellence in print is not just about machines—it’s about people, purpose, and passion."

//                             </span>
//                         </motion.blockquote>


//                     </motion.div>
//                 </div>

//                 {/* Divider */}
//                 <hr className="border-t-2 border-[#F57C00] mb-12 w-20 mx-auto" />

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     {[{
//                         title: 'Our Mission',
//                         text: 'To craft printing solutions that elevate brands, accelerate growth, and leave lasting impressions.'
//                     }, {
//                         title: 'Our Vision',
//                         text: 'To be India’s most trusted and innovative printing partner—setting benchmarks for quality, speed, and sustainability.'
//                     }].map((item, i) => (
//                         <motion.div
//                             key={item.title}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.2 }}
//                             className="bg-gradient-to-br from-white via-blue-50 to-white p-8 rounded-2xl shadow-md border border-blue-100"
//                         >
//                             <h3 className="text-2xl font-semibold text-[#143E61] mb-3">{item.title}</h3>
//                             <p className="text-gray-700 leading-relaxed">{item.text}</p>
//                         </motion.div>
//                     ))}
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#143E61] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={value}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Call to Action */}
//                 <section className="bg-[#143E61] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#143E61] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import flameAnimation from '../assets/lottie/logo-flames.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800 font-sans">
//             {/* Background Animation */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">
//                 {/* Heading with Animated Flames */}
//                 <div className="flex flex-col items-center justify-center mb-14">
//                     <motion.h2
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-5xl font-extrabold text-center text-[#143E61] tracking-tight"
//                     >
//                         About Samruddhi Printers
//                     </motion.h2>
//                     <div className="w-20 h-20 mt-4">
//                         <Lottie animationData={flameAnimation} loop autoPlay className="w-full h-full" />
//                     </div>
//                 </div>

//                 <hr className="border-t-2 border-[#F57C00] mb-12 w-20 mx-auto" />

//                 {/* Overview */}
//                 <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
//                     <motion.img
//                         src={aboutImg}
//                         alt="About Samruddhi Printers"
//                         className="rounded-3xl shadow-xl w-full object-cover border border-gray-200"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-lg space-y-5 leading-relaxed"
//                     >
//                         <p><strong className="text-[#143E61]">Samruddhi Printers</strong> delivers future-ready print solutions blending tradition and innovation. With over a decade of experience, we convert ideas into high-impact visual stories.</p>
//                         <p>Our full-service printing spans from offset to digital, branding to packaging. We cater to startups, corporates, and creatives with unmatched speed and eco-smart technology.</p>
//                         <p>Driven by excellence, sustainability, and people-first values, we ensure every print reflects your brand’s true quality.</p>
//                     </motion.div>
//                 </div>

//                 <hr className="border-t-2 border-[#143E61] mb-12 w-20 mx-auto" />

//                 {/* MD Section */}
//                 <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
//                     <motion.img
//                         src={mdImage}
//                         alt="Kiran Kumar C"
//                         className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto shadow-2xl"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left space-y-4"
//                     >
//                         <h3 className="text-3xl font-bold text-[#143E61]">Kiran Kumar C</h3>
//                         <p className="text-[#F57C00] font-semibold">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg">With an eye for detail and commitment to client success, Kiran Kumar C guides Samruddhi Printers to stay ahead in technology and service. His leadership fosters trust, creativity, and precision in everything we do.</p>
//                         <motion.blockquote
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ duration: 1 }}
//                             className="relative bg-[#143E61] text-white px-6 py-5 rounded-xl shadow-md border-l-4 border-[#F57C00] text-lg font-medium leading-relaxed"
//                         >
//                             <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white pr-2 animate-[typing_4s_steps(60,end)_1,blink_1s_step-end_infinite]">
//                                 "Excellence in print is not just about machines—it’s about people, purpose, and passion."
//                             </span>
//                         </motion.blockquote>
//                     </motion.div>
//                 </div>

//                 <hr className="border-t-2 border-[#F57C00] mb-12 w-20 mx-auto" />

//                 {/* Mission & Vision */}
//                 <section className="grid md:grid-cols-2 gap-10 mb-20">
//                     {[{
//                         title: 'Our Mission',
//                         text: 'To craft printing solutions that elevate brands, accelerate growth, and leave lasting impressions.'
//                     }, {
//                         title: 'Our Vision',
//                         text: 'To be India’s most trusted and innovative printing partner—setting benchmarks for quality, speed, and sustainability.'
//                     }].map((item, i) => (
//                         <motion.div
//                             key={item.title}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.2 }}
//                             className="bg-gradient-to-br from-white via-blue-50 to-white p-8 rounded-2xl shadow-md border border-blue-100"
//                         >
//                             <h3 className="text-2xl font-semibold text-[#143E61] mb-3">{item.title}</h3>
//                             <p className="text-gray-700 leading-relaxed">{item.text}</p>
//                         </motion.div>
//                     ))}
//                 </section>

//                 {/* Core Values */}
//                 <section className="mb-24">
//                     <motion.h3
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-semibold text-center text-[#143E61] mb-10"
//                     >
//                         Our Core Values
//                     </motion.h3>
//                     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
//                         {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
//                             <motion.div
//                                 key={value}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Call to Action */}
//                 <section className="bg-[#143E61] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
//                         <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
//                         <a
//                             href="/contact"
//                             className="inline-block bg-white text-[#143E61] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
//                         >
//                             Get in Touch
//                         </a>
//                     </motion.div>
//                 </section>
//             </div>
//         </main>
//     );
// }


import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
import flameAnimation from '../assets/lottie/logo-flames.json';
import aboutImg from '../assets/images/service-logo-stickers.webp';
import mdImage from '../assets/images/md-kiran-kumar.jpg';

export default function About() {
    return (
        <main className="relative overflow-hidden py-2 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-gray-800 font-sans bg-gradient-to-br from-white to-blue-50">
            {/* Background Animation */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
                <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
            </div>

            <div className="relative z-10">
                {/* Heading with Animated Flames */}
                <div className="flex flex-col items-center justify-center mb-2">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-extrabold text-center text-[#143E61] tracking-tight"
                    >
                        About Samruddhi Printers
                    </motion.h2>
                    {/* <div className="w-20 h-20 mt-4">
                        <Lottie animationData={flameAnimation} loop autoPlay className="w-full h-full" />
                    </div> */}
                </div>

                <hr className="border-t-2 border-[#F57C00] mb-12 w-20 mx-auto" />

                {/* Overview */}
                <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
                    <motion.img
                        src={aboutImg}
                        alt="About Samruddhi Printers"
                        className="rounded-3xl shadow-xl w-full object-cover border border-gray-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-lg space-y-5 leading-relaxed"
                    >
                        <p><strong className="text-[#143E61]">Samruddhi Printers</strong> delivers future-ready print solutions blending tradition and innovation. With over a decade of experience, we convert ideas into high-impact visual stories.</p>
                        <p>Our full-service printing spans from offset to digital, branding to packaging. We cater to startups, corporates, and creatives with unmatched speed and eco-smart technology.</p>
                        <p>Driven by excellence, sustainability, and people-first values, we ensure every print reflects your brand’s true quality.</p>
                    </motion.div>
                </div>

                <hr className="border-t-2 border-[#143E61] mb-12 w-20 mx-auto" />

                {/* MD Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.img
                        src={mdImage}
                        alt="Kiran Kumar C"
                        className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left space-y-4"
                    >
                        <h3 className="text-3xl font-bold text-[#143E61]">Kiran Kumar C</h3>
                        <p className="text-[#F57C00] font-semibold">Managing Director & Proprietor</p>
                        <p className="text-gray-700 text-lg">With an eye for detail and commitment to client success, Kiran Kumar C guides Samruddhi Printers to stay ahead in technology and service. His leadership fosters trust, creativity, and precision in everything we do.</p>
                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative bg-[#143E61] text-white px-6 py-5 rounded-xl shadow-md border-l-4 border-[#F57C00] text-lg font-medium leading-relaxed"
                        >
                            "Excellence in print is not just about machines—it’s about people, purpose, and passion."
                        </motion.blockquote>
                    </motion.div>
                </div>

                <hr className="border-t-2 border-[#F57C00] mb-12 w-20 mx-auto" />

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-10 mb-20">
                    {[{
                        title: 'Our Mission',
                        text: 'To craft printing solutions that elevate brands, accelerate growth, and leave lasting impressions.'
                    }, {
                        title: 'Our Vision',
                        text: 'To be India’s most trusted and innovative printing partner—setting benchmarks for quality, speed, and sustainability.'
                    }].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="bg-gradient-to-br from-white via-blue-50 to-white p-8 rounded-2xl shadow-md border border-blue-100"
                        >
                            <h3 className="text-2xl font-semibold text-[#143E61] mb-3">{item.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Core Values */}
                <section className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-semibold text-center text-[#143E61] mb-10"
                    >
                        Our Core Values
                    </motion.h3>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
                        {['Integrity & Trust', 'Customer Centricity', 'Innovation in Every Print', 'Sustainable Practices'].map((value, i) => (
                            <motion.div
                                key={value}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                {/* <section className="bg-[#143E61] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
                        <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-[#143E61] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </section> */}
                {/* <section className="bg-[#143E61]  text-white py-16 px-6 rounded-2xl text-center shadow-xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
                        <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-[#143E61] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </section> */}
                {/* <section
                    className="bg-[#1E5A87] text-white py-16 px-6 rounded-2xl text-center shadow-xl"
                    style={{
                        backgroundImage: "url('/textures/paper-texture-light.png')", // Example texture
                        backgroundSize: 'cover',
                        backgroundBlendMode: 'overlay',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
                        <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-[#143E61] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </section> */}
                <section className="animated-gradient text-white py-16 px-6 rounded-2xl text-center shadow-xl overflow-hidden relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s Print Something Great Together</h3>
                        <p className="text-lg mb-6">From bulk offset to custom packaging — we bring your brand’s vision to life.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-[#143E61] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-sm"
                        >
                            Get in Touch
                        </a>
                    </motion.div>

                    {/* Optional overlay for better readability */}
                    {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-2xl"></div> */}

                    <style jsx>{`
    .animated-gradient {
      background: linear-gradient(270deg, #1E5A87, #143E61, #F57C00);
      background-size: 600% 600%;
      animation: gradientMove 15s ease infinite;
      position: relative;
      z-index: 0;
    }

    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
                </section>


                <br />
                <br />
            </div>
        </main>
    );
}
