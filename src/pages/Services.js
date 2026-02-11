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

// Add new imports for additional services and online images
// Use a highly relevant printed boxes image for packaging
const onlinePackaging = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80';
const onlineLargeFormat = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80';
const onlineInvitation = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80';
const onlineCalendar = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
const onlineNotebook = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80';
const onlineGiftCard = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80';

// Assign the most relevant local images to each service, and use highly relevant online images where needed
const services = [
    { title: 'Offset Printing', category: 'Business', description: 'High-volume, cost-effective printing for books, catalogs, and more.', image: require('../assets/images/service-offset.png'), icon: <FaPrint /> },
    { title: 'Digital Printing', category: 'Business', description: 'Quick, flexible, and vibrant prints for small to medium runs.', image: require('../assets/images/service-digital.jpg'), icon: <FaPrint /> },
    { title: 'Business Cards', category: 'Business', description: 'Premium cards to make a lasting impression.', image: require('../assets/images/service-businesscard.jpg'), icon: <MdBusinessCenter /> },
    { title: 'Flyers & Brochures', category: 'Business', description: 'Effective marketing materials for your business.', image: require('../assets/images/service-flyers.png'), icon: <FaTags /> },
    { title: 'Posters & Banners', category: 'Event', description: 'Large-format prints for events, promotions, and branding.', image: require('../assets/images/service-poster.jpg'), icon: <MdEventNote /> },
    { title: 'Bill Books', category: 'Business', description: 'Customized bill books for efficient documentation.', image: require('../assets/images/service-billbook.jpg'), icon: <FaEnvelopeOpenText /> },
    { title: 'Invitation Cards', category: 'Personal', description: 'Elegant invitations for every occasion.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', icon: <FaEnvelopeOpenText /> },
    { title: 'Product Labels & Stickers', category: 'Custom', description: 'Durable, branded labels for packaging and branding.', image: require('../assets/images/service-logo-stickers.webp'), icon: <FaTags /> },
    { title: 'T-shirt Printing', category: 'Custom', description: 'Vibrant custom T-shirt printing for events and promotions.', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80', icon: <FaTshirt /> },
    { title: 'Letterheads', category: 'Business', description: 'Professional letterheads for official communication.', image: require('../assets/images/service-offset.png'), icon: <MdBusinessCenter /> },
    { title: 'Envelopes', category: 'Business', description: 'Branded envelopes to complement your identity.', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', icon: <FaEnvelopeOpenText /> },
    { title: 'Packaging', category: 'Custom', description: 'Custom packaging solutions for your products.', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80', icon: <FaPrint /> },
    { title: 'Large Format Printing', category: 'Event', description: 'Eye-catching prints for displays, signage, and exhibitions.', image: require('../assets/images/service-poster.jpg'), icon: <MdEventNote /> },
    { title: 'Calendars', category: 'Business', description: 'Personalized calendars for corporate gifting and branding.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', icon: <FaTags /> },
    { title: 'Notebooks', category: 'Business', description: 'Branded notebooks for events, offices, and giveaways.', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', icon: <MdBusinessCenter /> },
    { title: 'Gift Cards', category: 'Personal', description: 'Custom gift cards for promotions and special occasions.', image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80', icon: <FaTags /> },
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
                className="text-3xl md:text-5xl font-bold z-20 text-center mb-10"
                style={{ color: '#143E61' }}
            >
                Our Printing Services
            </motion.h2>

            <div className="m-8 flex flex-wrap justify-center gap-4">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full border ${filter === cat ? 'bg-[#143E61] text-white' : 'bg-white text-[#143E61]'} hover:bg-blue-100 font-semibold shadow-sm transition`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredServices.map((service, i) => (
                    <motion.div
                        key={i}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group cursor-pointer border border-gray-100 hover:border-[#143E61] hover:-translate-y-1 duration-300 flex flex-col items-center p-6 text-center"
                        onClick={() => setModalService(service)}
                    >
                        <div className="text-3xl text-[#143E61] mb-3">{service.icon}</div>
                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-32 w-full object-cover rounded-xl mb-4 border group-hover:scale-105 transition-transform duration-300"
                        />
                        <h3 className="text-lg font-semibold mb-2 text-[#143E61] group-hover:text-[#F57C00] transition">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-2 group-hover:text-gray-800 transition-all duration-300">{service.description}</p>
                    </motion.div>
                ))}
            </div>

            {modalService && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative border-2 border-[#143E61]">
                        <button onClick={() => setModalService(null)} className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl">×</button>
                        <img src={modalService.image} alt={modalService.title} className="w-full h-56 object-cover rounded-xl mb-4 border" />
                        <h3 className="text-2xl font-bold text-[#143E61] mb-2">{modalService.title}</h3>
                        <p className="text-gray-700 mb-4 text-base">{modalService.description}</p>
                        <a
                            href="/contact"
                            className="inline-block mt-2 bg-[#143E61] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#F57C00] transition"
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
