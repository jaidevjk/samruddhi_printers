import React from 'react';
import TestimonialSlider from '../components/Testimonials';

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Customer Testimonials</h2>
            <p className="mb-8 text-lg text-center text-gray-600">Read what our clients say about our printing services and their experience with us.</p>
            <TestimonialSlider />
        </main>
    );
} 