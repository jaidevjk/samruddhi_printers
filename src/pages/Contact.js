// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [sent, setSent] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
//             .then(() => setSent(true))
//             .catch((err) => console.error(err));
//     };

//     return (
//         <main className="py-16 px-4 max-w-xl mx-auto">
//             <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
//             {sent ? (
//                 <p className="text-green-600 text-center">Thank you for your message! We'll be in touch soon.</p>
//             ) : (
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <input type="text" name="name" onChange={handleChange} value={formData.name} required placeholder="Your Name" className="w-full border border-gray-300 rounded px-4 py-2" />
//                     <input type="email" name="email" onChange={handleChange} value={formData.email} required placeholder="Email Address" className="w-full border border-gray-300 rounded px-4 py-2" />
//                     <textarea name="message" onChange={handleChange} value={formData.message} required placeholder="Message" rows="4" className="w-full border border-gray-300 rounded px-4 py-2" />
//                     <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
//                 </form>
//             )}
//         </main>
//     );
// }
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {

    return (
        <main className="py-16 px-4 max-w-5xl mx-auto">
            {/* <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-center mb-10"
            >
                Get in Touch
            </motion.h2> */}

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-blue-700 mb-12"
            >
                Get in Touch
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <p className="text-gray-700">
                        For inquiries, quotes, or custom printing solutions, feel free to reach out. We're here to help you bring your ideas to life.
                    </p>
                    <div>
                        <p className="font-semibold">Address:</p>
                        <p className="text-gray-600">123 Press Street, Bengaluru, Karnataka, 560001</p>
                    </div>
                    <div>
                        <p className="font-semibold">Phone:</p>
                        <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                    <div>
                        <p className="font-semibold">Email:</p>
                        <p className="text-gray-600">info@samruddhiprinters.com</p>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-md rounded-lg p-6 space-y-4"
                >
                    <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <textarea placeholder="Your Message" rows="5" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
                </motion.form>
            </div>
        </main>
    );
}
