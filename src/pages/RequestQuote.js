import React, { useState } from 'react';

export default function RequestQuote() {
    const [form, setForm] = useState({ name: '', email: '', details: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Request a Quote</h2>
            {submitted ? (
                <p className="text-green-600 text-center">Thank you! We'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="w-full border p-2 rounded" />
                    <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
                    <textarea name="details" value={form.details} onChange={handleChange} required placeholder="Project Details" className="w-full border p-2 rounded" rows={5} />
                    <button type="submit" className="bg-[#F57C00] text-white px-6 py-2 rounded">Submit</button>
                </form>
            )}
        </main>
    );
} 