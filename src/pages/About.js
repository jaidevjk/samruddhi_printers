import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import backgroundAnimation from '../assets/lottie/print-abstract-bg.json';
import aboutImage from '../assets/images/service-businesscard.jpg';
import mdImage from '../assets/images/md-kiran-kumar.jpg';
import aboutHero from '../assets/images/mainpageBg.png';

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
                <div className="absolute inset-0 bg-[#143E61] bg-opacity-60 flex items-center justify-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center z-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-2" style={{ color: '#fff', letterSpacing: '1px' }}>
                            About Samruddhi Printers
                        </h2>
                        <p className="text-lg md:text-2xl text-white font-medium max-w-2xl mx-auto mt-2 opacity-90">
                            Professional. Reliable. Future-Ready Print Solutions.
                        </p>
                    </motion.div>
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
                        <p><strong className="text-[#143E61]">Samruddhi Printers</strong> delivers professional, future-ready print solutions that blend tradition with innovation. With over a decade of expertise, we transform ideas into high-impact visual stories for businesses and creatives alike.</p>
                        <p>Our comprehensive services span offset and digital printing, branding, and packaging—delivered with unmatched speed, precision, and eco-smart technology.</p>
                        <p>We are driven by excellence, sustainability, and a people-first approach, ensuring every print reflects your brand’s true quality and vision.</p>
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

                {/* Meet the Team */}
                {/* <section className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-semibold text-center text-[#143E61] mb-10"
                    >
                        Meet Our Team
                    </motion.h3>
                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        {[{ name: "Shweta R", role: "Design Head", image: "/team1.jpg" },
                        { name: "Ramesh K", role: "Print Operations", image: "/team2.jpg" },
                        ].map((member, i) => (
                            <motion.div
                                key={member.name}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl"
                            >
                                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-[#F57C00]" />
                                <h4 className="font-bold text-[#143E61]">{member.name}</h4>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </section> */}

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
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="bg-gradient-to-br from-white via-blue-50 to-white p-8 rounded-2xl shadow-md border border-blue-100"
                        >
                            <h3 className="text-2xl font-semibold text-[#143E61] mb-3">{item.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Our Journey Timeline */}
                {/* <section className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-semibold text-center text-[#143E61] mb-10"
                    >
                        Our Journey
                    </motion.h3>

                    <div className="relative border-l-4 border-[#F57C00] pl-8 ml-3">
                        {[
                            { year: "2013", event: "Founded with a single offset machine." },
                            { year: "2016", event: "Expanded to digital and wide-format printing." },
                            { year: "2019", event: "Introduced eco-friendly print practices." },
                            { year: "2023", event: "Launched online order portal." },
                        ].map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="relative pb-10"
                            >
                                <div className="absolute -left-4 top-1 w-4 h-4 bg-[#143E61] border-4 border-white rounded-full shadow-lg"></div>
                                <h4 className="text-lg font-bold text-[#143E61]">{item.year}</h4>
                                <p className="text-gray-700">{item.event}</p>
                            </motion.div>
                        ))}
                    </div>
                </section> */}

                {/* <section className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-center text-[#143E61] mb-12"
                    >
                        Our Journey
                    </motion.h3>

                    <div className="relative border-l-4 border-[#F57C00] pl-10 ml-4">
                        {[
                            { year: "2013", event: "Founded with a single offset machine." },
                            { year: "2016", event: "Expanded to digital and wide-format printing." },
                            { year: "2019", event: "Introduced eco-friendly print practices." },
                            { year: "2023", event: "Launched online order portal and digital services." },
                        ].map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="relative pb-12"
                            >
                               
                                <div className="absolute -left-6 top-1.5 w-5 h-5 bg-[#143E61] border-[5px] border-white rounded-full shadow-lg z-10 transition-all duration-300 group-hover:scale-110"></div>

                                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                                    <h4 className="text-xl font-semibold text-[#143E61] mb-1">{item.year}</h4>
                                    <p className="text-gray-700 leading-relaxed">{item.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section> */}



                <section className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-center text-[#143E61] mb-12"
                    >
                        Our Journey
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-12 items-start">

                        {/* <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hidden md:block"
                        >
                            <Lottie animationData={timelineAnimation} loop autoplay />
                        </motion.div> */}


                        <div className="relative md:col-span-2 border-l-4 border-[#F57C00] pl-10 ml-4 space-y-12">
                            {[
                                { year: "2013", event: "Established with a single offset press, marking the beginning of our print journey." },
                                { year: "2016", event: "Expanded capabilities with digital and wide-format printing to serve diverse client needs." },
                                { year: "2019", event: "Adopted sustainable printing technologies to support eco-conscious production." },
                                { year: "2023", event: "Launched an online ordering platform, enhancing accessibility and digital service offerings." },
                            ]
                                .map((item, i) => (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        className="relative"
                                    >
                                        {/* Floating Icon with Year */}
                                        <div className="absolute -left-14 md:-left-16 top-1 group">
                                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#143E61] text-white font-bold shadow-xl border-4 border-white group-hover:scale-110 transition duration-300">
                                                {item.year}
                                            </div>
                                        </div>

                                        {/* Timeline Description Box */}
                                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                            <p className="text-gray-700 leading-relaxed">{item.event}</p>
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </section>


                {/* Core Values with Icons */}
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
                        {[{ icon: "💎", label: "Integrity & Trust" },
                        { icon: "🤝", label: "Customer Centricity" },
                        { icon: "💡", label: "Innovation in Every Print" },
                        { icon: "🌱", label: "Sustainable Practices" }].map((value, i) => (
                            <motion.div
                                key={value.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-4xl mb-3">{value.icon}</div>
                                <h4 className="text-[#F57C00] font-bold text-lg">{value.label}</h4>
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
