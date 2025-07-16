import React from 'react';

export default function FAQ() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-lg text-[#F57C00]">What services do you offer?</h4>
                    <p>We offer a wide range of printing services including business cards, flyers, brochures, posters, banners, packaging, and more.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-[#F57C00]">How can I request a quote?</h4>
                    <p>You can request a quote by visiting our Contact page and filling out the form, or by calling us directly.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-[#F57C00]">Do you provide design services?</h4>
                    <p>Yes, we have an in-house design team to help you with custom designs for your print needs.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-[#F57C00]">What is your turnaround time?</h4>
                    <p>Turnaround time depends on the project, but we strive to deliver as quickly as possible, often within a few days.</p>
                </div>
            </div>
        </main>
    );
} 