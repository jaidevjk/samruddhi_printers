import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export default function GalleryPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const openLightbox = (idx) => {
        setCurrentIdx(idx);
        setLightboxOpen(true);
    };
    const closeLightbox = () => setLightboxOpen(false);
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    // Keyboard navigation
    React.useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e) => {
            if (e.key === 'ArrowLeft') prevImage(e);
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxOpen]);

    return (
        <div className="min-h-screen bg-white py-12 px-4 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: '#143E61' }}>
                    Our Print Showcase
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto text-lg">
                    Experience the artistry and precision of our printing services. Browse a curated selection of our finest projects—each crafted with passion, creativity, and a commitment to quality.
                </p>
                <hr className="mt-6 border-t-2 border-[#F57C00] w-24 mx-auto" />
            </div>
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-xl shadow hover:shadow-2xl transition-shadow duration-200 cursor-pointer group"
                            onClick={() => openLightbox(idx)}
                            tabIndex={0}
                            aria-label={`Open image ${idx + 1}`}
                            onKeyPress={(e) => (e.key === 'Enter' ? openLightbox(idx) : null)}
                        >
                            <img
                                src={img}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-all"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-6 right-8 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
                        onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                    <button
                        className="absolute left-4 md:left-12 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
                        onClick={prevImage}
                        aria-label="Previous image"
                    >
                        <FaChevronLeft />
                    </button>
                    <img
                        src={galleryImages[currentIdx]}
                        alt={`Gallery image ${currentIdx + 1}`}
                        className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl border-4 border-white"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="absolute right-4 md:right-12 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
                        onClick={nextImage}
                        aria-label="Next image"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
}