import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero-print.jpg';
import service1 from '../assets/images/service-businesscard.jpg';
import service2 from '../assets/images/service-flyers.png';
import service3 from '../assets/images/service-poster.jpg';
import service4 from '../assets/images/service-offset.png';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import logo1 from '../assets/images/logo-client1.jpg';
import logo2 from '../assets/images/logo-client2.jpg';
import logo3 from '../assets/images/logo-client3.jpg';
import mainpageBg from '../assets/images/mainpageBg.png'
import TestimonialSlider from '../components/Testimonials';
import { FaPrint, FaTags, FaTshirt, FaEnvelopeOpenText } from 'react-icons/fa';
import { MdBusinessCenter, MdEventNote } from 'react-icons/md';
import serviceDigital from '../assets/images/service-digital.jpg';
import serviceCustom from '../assets/images/service-custom-design.webp';
import serviceBrochure from '../assets/images/service-flyers.png';
import servicePoster from '../assets/images/service-poster.jpg';
import serviceSticker from '../assets/images/service-stickers.webp';
import serviceLabel from '../assets/images/service-logo-stickers.webp';
import serviceLetterhead from '../assets/images/service-offset.png';
import serviceEnvelope from '../assets/images/service-billbook.jpg';
// Online images for missing services
const onlinePackaging = 'https://images.pexels.com/photos/449813/pexels-photo-449813.jpeg?auto=compress&w=800';
const onlineLargeFormat = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80';
const onlineInvitation = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80';

export default function Home() {
    const services = [
        { title: "Business Cards", img: service1 },
        { title: "Flyers & Brochures", img: service2 },
        { title: "Posters & Banners", img: service3 },
        { title: "Offset & Digital Printing", img: service4 }
    ];

    const reasons = [
        "High-quality prints with vibrant, accurate colors",
        "Quick turnaround with affordable pricing",
        "Eco-friendly printing options available",
        "Dedicated team providing personalized solutions"
    ];

    const gallery = [gallery1, gallery2, gallery3];
    const logos = [logo1, logo2, logo3];

    const featuredServices = [
        { title: 'Offset Printing', icon: <FaPrint className="text-blue-700 text-3xl mb-2" />, img: service4, desc: 'High-volume, cost-effective printing for books, catalogs, and more.' },
        { title: 'Digital Printing', icon: <FaPrint className="text-blue-700 text-3xl mb-2" />, img: serviceDigital, desc: 'Quick, flexible, and vibrant prints for small to medium runs.' },
        { title: 'Custom Design', icon: <FaTags className="text-blue-700 text-3xl mb-2" />, img: serviceCustom, desc: 'Creative design solutions tailored to your brand.' },
        { title: 'Business Cards', icon: <MdBusinessCenter className="text-blue-700 text-3xl mb-2" />, img: service1, desc: 'Premium cards to make a lasting impression.' },
        { title: 'Brochures & Flyers', icon: <FaTags className="text-blue-700 text-3xl mb-2" />, img: serviceBrochure, desc: 'Effective marketing materials for your business.' },
        { title: 'Posters & Banners', icon: <MdEventNote className="text-blue-700 text-3xl mb-2" />, img: servicePoster, desc: 'Large-format prints for events, promotions, and branding.' },
        { title: 'Stickers & Labels', icon: <FaTags className="text-blue-700 text-3xl mb-2" />, img: serviceSticker, desc: 'Custom stickers and labels for packaging and branding.' },
        { title: 'Product Labels', icon: <FaTags className="text-blue-700 text-3xl mb-2" />, img: serviceLabel, desc: 'Durable, branded labels for all your products.' },
        { title: 'Letterheads', icon: <MdBusinessCenter className="text-blue-700 text-3xl mb-2" />, img: serviceLetterhead, desc: 'Professional letterheads for official communication.' },
        { title: 'Envelopes', icon: <FaEnvelopeOpenText className="text-blue-700 text-3xl mb-2" />, img: serviceEnvelope, desc: 'Branded envelopes to complement your identity.' },
        { title: 'Invitations', icon: <FaEnvelopeOpenText className="text-blue-700 text-3xl mb-2" />, img: onlineInvitation, desc: 'Elegant invitations for every occasion.' },
        { title: 'Packaging', icon: <FaPrint className="text-blue-700 text-3xl mb-2" />, img: onlinePackaging, desc: 'Custom packaging solutions for your products.' },
        { title: 'Large Format Printing', icon: <MdEventNote className="text-blue-700 text-3xl mb-2" />, img: onlineLargeFormat, desc: 'Eye-catching prints for displays, signage, and exhibitions.' },
    ];

    return (
        <main className="bg-white text-gray-800 home-page">
            {/* Hero Section */}
            <section
                className="relative h-[80vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${mainpageBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
                <div className="absolute inset-0 bg-[#143E61] bg-opacity-10"></div>
                <motion.div
                    className="relative text-center px-6 max-w-2xl mx-auto z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3
                        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                        style={{ color: '#143E61', textShadow: '0 2px 8px #fff, 0 1px 0 #fff' }}
                    >
                        Premium Printing Solutions
                    </h3>
                    <p className="text-lg md:text-2xl text-white font-medium mb-6 max-w-xl mx-auto opacity-90">
                        Elevate your brand with vibrant, high-quality prints and creative design—delivered fast, every time.
                    </p>
                    <span className="inline-block bg-white text-[#143E61] px-4 py-2 rounded-full font-semibold mb-6 shadow-sm text-base md:text-lg">
                        Trusted by 500+ businesses & creators
                    </span>
                    <a
                        href="/contact"
                        className="bg-[#F57C00] text-white px-8 py-3 rounded-full font-extrabold shadow-lg hover:bg-orange-600 transition"
                        style={{ textShadow: '0 1px 4px #143E61' }}
                    >
                        Get a Free Quote
                    </a>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <motion.h2
                    className="text-center text-3xl md:text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#143E61' }}
                >
                    Our Printing Services
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Services Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <motion.h2
                    className="text-center text-3xl md:text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#143E61' }}
                >
                    Featured Services
                </motion.h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {featuredServices.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col items-center p-6 text-center group hover:border-[#143E61] hover:-translate-y-1 duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {item.icon}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-32 object-cover rounded-xl mb-4 border group-hover:scale-105 transition-transform duration-300"
                            />
                            <h3 className="text-lg font-semibold mb-2 text-[#143E61]">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-blue-50 py-16 px-4">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-8" style={{ color: '#143E61' }}>
                        Why Choose Samruddhi Printers?
                    </h2>
                    <ul className="space-y-4 text-lg text-left md:text-center text-gray-700">
                        {reasons.map((reason, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center justify-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                            >
                                <span className="text-blue-600 font-bold">✔</span>
                                {reason}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <motion.h2
                    className="text-center text-3xl font-bold mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#143E61' }}
                >
                    How It Works
                </motion.h2>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {[{
                        icon: '📝',
                        title: '1. Request Quote',
                        desc: 'Share your requirements and get a quick, transparent quote.'
                    }, {
                        icon: '🎨',
                        title: '2. Approve Design',
                        desc: 'Our team helps you finalize the perfect design for your needs.'
                    }, {
                        icon: '🖨️',
                        title: '3. Print & Finish',
                        desc: 'We print with precision and quality, using the latest technology.'
                    }, {
                        icon: '🚚',
                        title: '4. Fast Delivery',
                        desc: 'Receive your order on time, every time—guaranteed.'
                    }].map((step, i) => (
                        <motion.div
                            key={step.title}
                            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex flex-col items-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            <div className="text-4xl mb-3">{step.icon}</div>
                            <h4 className="font-bold text-[#143E61] mb-2">{step.title}</h4>
                            <p className="text-gray-600 text-base">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Recent Works */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <motion.h2
                    className="text-center text-3xl font-bold mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#143E61' }}
                >
                    Recent Works
                </motion.h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {gallery.map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            alt={`Gallery ${i + 1}`}
                            className="rounded-xl shadow-md hover:shadow-xl transition object-cover h-60 w-full"
                            whileHover={{ scale: 1.03 }}
                        />
                    ))}
                </div>
            </section>

            {/* Trusted Clients */}
            <section className="bg-gray-50 py-12 px-4">
                <motion.h2
                    className="text-center text-2xl font-bold mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: '#143E61' }}
                >
                    Trusted by Clients
                </motion.h2>
                <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto opacity-90">
                    {logos.map((logo, i) => (
                        <motion.img
                            key={i}
                            src={logo}
                            alt={`Client ${i + 1}`}
                            className="h-16 object-contain"
                            whileHover={{ scale: 1.1 }}
                        />
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialSlider />
            <br></br>
            {/* CTA Section */}
            <section className="py-16 px-4 bg-blue-600 text-white text-center">
                <motion.div
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#143E61' }}>
                        Ready to Print with Us?
                    </h2>
                    <p className="text-lg mb-6">Get in touch for a custom quote or to discuss your next print project.</p>
                    <a
                        href="/contact"
                        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </section>
            <br></br>

            {/* Discover More Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto text-align-center align-items-center">
                <motion.h2
                    className="text-center text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#143E61' }}
                >
                    Discover More
                </motion.h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Explore more about our services, partners, and resources. Click on any card to learn more or get started with us.</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a href="/portfolio" className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition p-6 text-center h-56 group">
                        <span className="text-4xl mb-3 group-hover:text-[#F57C00] transition">📁</span>
                        <h3 className="text-lg font-semibold text-[#F57C00] mb-2">Portfolio</h3>
                        <p className="text-gray-600 text-sm">See our best works and case studies.</p>
                    </a>
                    <a href="/testimonials" className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition p-6 text-center h-56 group">
                        <span className="text-4xl mb-3 group-hover:text-[#F57C00] transition">💬</span>
                        <h3 className="text-lg font-semibold text-[#F57C00] mb-2">Testimonials</h3>
                        <p className="text-gray-600 text-sm">Read what our customers say about us.</p>
                    </a>
                    {/* <a href="/request-quote" className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition p-6 text-center h-56 group">
                        <span className="text-4xl mb-3 group-hover:text-[#F57C00] transition">📝</span>
                        <h3 className="text-lg font-semibold text-[#F57C00] mb-2">Request a Quote</h3>
                        <p className="text-gray-600 text-sm">Get a custom quote for your project.</p>
                    </a> */}
                    {/* <a href="/download-center" className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition p-6 text-center h-56 group">
                        <span className="text-4xl mb-3 group-hover:text-[#F57C00] transition">⬇️</span>
                        <h3 className="text-lg font-semibold text-[#F57C00] mb-2">Download Center</h3>
                        <p className="text-gray-600 text-sm">Download templates and catalogs.</p>
                    </a> */}
                    {/* <a href="/contact-map" className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition p-6 text-center h-56 group">
                        <span className="text-4xl mb-3 group-hover:text-[#F57C00] transition">🗺️</span>
                        <h3 className="text-lg font-semibold text-[#F57C00] mb-2">Contact Map</h3>
                        <p className="text-gray-600 text-sm">Find us on the map and get in touch.</p>
                    </a> */}
                    <a href="/partners" className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition p-6 text-center h-56 group">
                        <span className="text-4xl mb-3 group-hover:text-[#F57C00] transition">🤝</span>
                        <h3 className="text-lg font-semibold text-[#F57C00] mb-2">Partners</h3>
                        <p className="text-gray-600 text-sm">Meet our business partners and vendors.</p>
                    </a>
                    {/* <a href="/press" className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition p-6 text-center h-56 group">
                        <span className="text-4xl mb-3 group-hover:text-[#F57C00] transition">📰</span>
                        <h3 className="text-lg font-semibold text-[#F57C00] mb-2">Press & Media</h3>
                        <p className="text-gray-600 text-sm">See our media coverage and awards.</p>
                    </a> */}
                </div>
            </section>
        </main>
    );
}
