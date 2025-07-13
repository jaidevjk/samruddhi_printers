

// import React from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
// import flameAnimation from '../assets/lottie/logo-flames.json';
// import aboutImg from '../assets/images/service-logo-stickers.webp';
// import mdImage from '../assets/images/md-kiran-kumar.jpg';

// export default function About() {
//     return (
//         <main className="relative overflow-hidden py-2 px-4 md:px-6 lg:px-8 max-w-8xl mx-auto text-gray-800 font-sans bg-white"
//             style={{ marginInline: "2px" }}
//         >

//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
//                 <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
//             </div>

//             <div className="relative z-10">

//                 <div className="flex flex-col items-center justify-center mb-2">
//                     <motion.h2
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="text-3xl font-extrabold text-center text-[#143E61] tracking-tight"
//                     >
//                         About Samruddhi Printers
//                     </motion.h2>
//                     {/* <div className="w-20 h-20 mt-4">
//                         <Lottie animationData={flameAnimation} loop autoPlay className="w-full h-full" />
//                     </div> */}
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
//                         viewport={{ once: true }}
//                         transition={{ duration: 1 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
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
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center md:text-left space-y-4"
//                     >
//                         <h3 className="text-3xl font-bold text-[#143E61]">Kiran Kumar C</h3>
//                         <p className="text-[#F57C00] font-semibold">Managing Director & Proprietor</p>
//                         <p className="text-gray-700 text-lg">With an eye for detail and commitment to client success, Kiran Kumar C guides Samruddhi Printers to stay ahead in technology and service. His leadership fosters trust, creativity, and precision in everything we do.</p>
//                         <motion.blockquote
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 1 }}
//                             className="relative bg-[#143E61] text-white px-6 py-5 rounded-xl shadow-md border-l-4 border-[#F57C00] text-lg font-medium leading-relaxed"
//                         >
//                             "Excellence in print is not just about machines—it’s about people, purpose, and passion."
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
//                             viewport={{ once: true }}
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
//                         viewport={{ once: true }}
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
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
//                             >
//                                 <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Call to Action */}
//                 {/* <section className="bg-[#143E61] text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
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
//                 </section> */}
//                 {/* <section className="bg-[#143E61]  text-white py-16 px-6 rounded-2xl text-center shadow-xl">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
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
//                 </section> */}
//                 {/* <section
//                     className="bg-[#1E5A87] text-white py-16 px-6 rounded-2xl text-center shadow-xl"
//                     style={{
//                         backgroundImage: "url('/textures/paper-texture-light.png')", // Example texture
//                         backgroundSize: 'cover',
//                         backgroundBlendMode: 'overlay',
//                         backgroundRepeat: 'no-repeat',
//                     }}
//                 >
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
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
//                 </section> */}
//                 <section className="animated-gradient text-white py-16 px-6 rounded-2xl text-center shadow-xl overflow-hidden relative">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
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

//                     {/* Optional overlay for better readability */}
//                     {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-2xl"></div> */}

//                     <style jsx>{`
//     .animated-gradient {
//       background: linear-gradient(270deg, #1E5A87, #143E61, #F57C00);
//       background-size: 600% 600%;
//       animation: gradientMove 15s ease infinite;
//       position: relative;
//       z-index: 0;
//     }

//     @keyframes gradientMove {
//       0% { background-position: 0% 50%; }
//       50% { background-position: 100% 50%; }
//       100% { background-position: 0% 50%; }
//     }
//   `}</style>
//                 </section>


//                 <br />
//                 <br />
//             </div>
//         </main>
//     );
// }

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
import aboutImage from '../assets/images/service-logo-stickers.webp';
import mdImage from '../assets/images/md-kiran-kumar.jpg';
import aboutHero from '../assets/images/about_us_banner.png'; // <-- Use the new image generated here

export default function AboutPage() {
    return (
        <main className="relative overflow-hidden text-gray-800 font-sans bg-white">

            {/* Hero Section */}
            <div
                className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-16"
                style={{
                    backgroundImage: `url(${aboutHero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold z-20"
                        style={{ color: "#143E61" }}
                    >
                        Get to Know Us
                    </motion.h2>
                </div>
            </div>

            {/* Background Animation */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
                <Lottie animationData={backgroundAnimation} loop autoPlay className="w-full h-full" />
            </div>

            <div className="relative z-10 px-4 md:px-10 max-w-7xl mx-auto">

                {/* Overview Section */}
                <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
                    <motion.img
                        src={aboutImage}
                        alt="About Samruddhi Printers"
                        className="rounded-3xl shadow-xl w-full object-cover border border-gray-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-lg space-y-5 leading-relaxed"
                    >
                        <p><strong className="text-[#143E61]">Samruddhi Printers</strong> delivers future-ready print solutions blending tradition and innovation. With over a decade of experience, we convert ideas into high-impact visual stories.</p>
                        <p>Our full-service printing spans from offset to digital, branding to packaging. We cater to startups, corporates, and creatives with unmatched speed and eco-smart technology.</p>
                        <p>Driven by excellence, sustainability, and people-first values, we ensure every print reflects your brand’s true quality.</p>
                    </motion.div>
                </div>

                {/* MD Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.img
                        src={mdImage}
                        alt="Kiran Kumar C"
                        className="rounded-full w-64 h-64 object-cover border-4 border-[#F57C00] mx-auto shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left space-y-4"
                    >
                        <h3 className="text-3xl font-bold text-[#143E61]">Kiran Kumar C</h3>
                        <p className="text-[#F57C00] font-semibold">Managing Director & Proprietor</p>
                        <p className="text-gray-700 text-lg">With an eye for detail and commitment to client success, Kiran Kumar C guides Samruddhi Printers to stay ahead in technology and service. His leadership fosters trust, creativity, and precision in everything we do.</p>
                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative bg-[#143E61] text-white px-6 py-5 rounded-xl shadow-md border-l-4 border-[#F57C00] text-lg font-medium leading-relaxed"
                        >
                            "Excellence in print is not just about machines—it’s about people, purpose, and passion."
                        </motion.blockquote>
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-10 mb-20">
                    {[
                        {
                            title: 'Our Mission',
                            text: 'To craft printing solutions that elevate brands, accelerate growth, and leave lasting impressions.'
                        },
                        {
                            title: 'Our Vision',
                            text: 'To be India’s most trusted and innovative printing partner—setting benchmarks for quality, speed, and sustainability.'
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-semibold text-center text-[#143E61] mb-10"
                    >
                        Our Core Values
                    </motion.h3>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
                        {[
                            'Integrity & Trust',
                            'Customer Centricity',
                            'Innovation in Every Print',
                            'Sustainable Practices'
                        ].map((value, i) => (
                            <motion.div
                                key={value}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <h4 className="text-[#F57C00] font-bold text-lg mb-2">{value}</h4>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="animated-gradient text-white py-16 px-6 rounded-2xl text-center shadow-xl overflow-hidden relative mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
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
            </div>
        </main>
    );
}
