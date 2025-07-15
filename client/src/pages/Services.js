import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/print-animation.json';
import TestimonialSlider from '../components/Testimonials';
import { FaPrint, FaTags, FaTshirt, FaEnvelopeOpenText } from 'react-icons/fa';
import { MdBusinessCenter, MdEventNote } from 'react-icons/md';

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
    { title: 'Offset Printing', category: 'Business', description: 'High-volume printing perfect for books, catalogs, and magazines.', image: offsetPrinting, icon: <FaPrint /> },
    { title: 'Digital Printing', category: 'Business', description: 'Quick and flexible printing, ideal for small jobs.', image: digitalPrinting, icon: <FaPrint /> },
    { title: 'Business Cards', category: 'Business', description: 'Personalized cards to give your brand a strong identity.', image: businessCard, icon: <MdBusinessCenter /> },
    { title: 'Flyers & Brochures', category: 'Business', description: 'Attractive promotional tools for your business.', image: flyerBrochure, icon: <FaTags /> },
    { title: 'Posters & Banners', category: 'Event', description: 'Large-format prints for events, sales, and announcements.', image: poster, icon: <MdEventNote /> },
    { title: 'Bill Books', category: 'Business', description: 'Customized bill books for efficient documentation.', image: billbook, icon: <FaEnvelopeOpenText /> },
    { title: 'Invitation Cards', category: 'Personal', description: 'Elegant invitations tailored to your style.', image: invitation, icon: <FaEnvelopeOpenText /> },
    { title: 'Product Labels & Stickers', category: 'Custom', description: 'Durable, branded labels for packaging.', image: label, icon: <FaTags /> },
    { title: 'T-shirt Printing', category: 'Custom', description: 'Vibrant custom T-shirt printing.', image: tshirt, icon: <FaTshirt /> },
    { title: 'Letterheads', category: 'Business', description: 'Professional letterheads for official documents.', image: letterhead, icon: <MdBusinessCenter /> },
    { title: 'Envelopes', category: 'Business', description: 'Branded envelopes to complement your identity.', image: envelope, icon: <FaEnvelopeOpenText /> },
];

const categories = ['All', 'Business', 'Event', 'Personal', 'Custom'];

export default function Services() {
    const [filter, setFilter] = useState('All');
    const [modalService, setModalService] = useState(null);

    const filteredServices = filter === 'All' ? services : services.filter(s => s.category === filter);

    return (
        <main className="py-2 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold z-20 text-[#143E61] text-center mb-10"
            >
                Our Printing Services
            </motion.h2>

            <div className="m-8 flex flex-wrap justify-center gap-4">
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
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group cursor-pointer"
                        onClick={() => setModalService(service)}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="p-6">
                            <div className="text-2xl text-blue-700 mb-2">{service.icon}</div>
                            <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-all duration-300">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {modalService && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative">
                        <button onClick={() => setModalService(null)} className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl">×</button>
                        <img src={modalService.image} alt={modalService.title} className="w-full h-56 object-cover rounded-xl mb-4" />
                        <h3 className="text-2xl font-bold text-[#143E61] mb-2">{modalService.title}</h3>
                        <p className="text-gray-700 mb-4">{modalService.description}</p>
                        <a
                            href="/contact"
                            className="inline-block mt-2 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                        >
                            Enquire Now
                        </a>
                    </div>
                </div>
            )}

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
                <TestimonialSlider />
            </div>
        </main>
    );
}
