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
        <main className="py-2 px-4 max-w-7xl mx-auto">
            {/* <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-center text-blue-700 mb-4"
            >
                Our Printing Services
            </motion.h2> */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold z-20"
                style={{ color: "#143E61" }}
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
