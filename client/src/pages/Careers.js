import React from 'react';

export default function Careers() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Careers at Samruddhi Printers</h2>
            <p className="mb-6 text-lg">We're always looking for talented individuals to join our team. If you're passionate about printing, design, or customer service, we'd love to hear from you!</p>
            <div className="mb-8">
                <h4 className="font-semibold text-lg text-[#F57C00] mb-2">Current Openings</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Graphic Designer</li>
                    <li>Sales Executive</li>
                    <li>Print Machine Operator</li>
                </ul>
            </div>
            <p>To apply, send your resume to <a href="mailto:samruddhiprinterskp@gmail.com" className="text-blue-600 underline">samruddhiprinterskp@gmail.com</a>.</p>
        </main>
    );
} 