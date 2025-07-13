import React, { useState } from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';

const images = [gallery1, gallery2, gallery3, gallery4];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <main className="bg-white py-2 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center mb-16">
                {/* <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-[#143E61] dark:text-white mb-4"
                >
                    Our Work Gallery
                </motion.h2> */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=" text-3xl md:text-5xl font-bold z-20"
                    style={{ color: "#143E61" }}
                >
                    Our Work Gallery
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
                >
                    Discover a glimpse of our creativity and craftsmanship through these featured works.
                    From vibrant prints to personalized packaging — every piece reflects our dedication to quality.
                </motion.p>
                <motion.hr
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 border-t-2 border-[#F57C00] w-24 mx-auto origin-left"
                />
            </div>

            {/* Carousel on mobile */}
            <div className="md:hidden overflow-x-auto flex gap-4 pb-4">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="min-w-[80%] rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 bg-white dark:bg-white/10 backdrop-blur cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img}
                            loading="lazy"
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-60 object-cover rounded-2xl"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Grid on larger screens */}
            <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 bg-white dark:bg-white/10 backdrop-blur cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img}
                            loading="lazy"
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-60 object-cover rounded-2xl"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-full max-h-full rounded-lg shadow-lg transition-all duration-500"
                    />
                </div>
            )}
        </main>
    );
}