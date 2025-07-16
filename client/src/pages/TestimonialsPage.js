import React from 'react';

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Customer Testimonials</h2>
            <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg shadow p-4">
                    <p className="text-gray-700 italic">"Excellent print quality and fast delivery! Highly recommend."</p>
                    <p className="text-right font-semibold mt-2">- Priya S.</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow p-4">
                    <p className="text-gray-700 italic">"Great customer service and attention to detail."</p>
                    <p className="text-right font-semibold mt-2">- Rahul K.</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow p-4">
                    <p className="text-gray-700 italic">"Our go-to printer for all our business needs."</p>
                    <p className="text-right font-semibold mt-2">- Anjali M.</p>
                </div>
            </div>
        </main>
    );
} 