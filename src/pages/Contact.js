import React, { useState } from "react";
import { color, motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import main from '../assets/images/mainlogo.png';
import contactBg from '../assets/images/contact_us_banner.jpg'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
            .then(() => setSent(true))
            .catch((err) => console.error(err));
    };
    return (
        // <div style={{ backgroundColor: "#f8f9fa" }} >
        //     <main className="py-1 px-4 max-w-5xl mx-auto">
        //         {/* <motion.h2
        //          initial={{ opacity: 0, y: -20 }}
        //          whileInView={{ opacity: 1, y: 0 }}
        //          transition={{ duration: 0.6 }}
        //          className="text-3xl font-semibold text-center mb-10"
        //      >
        //          Get in Touch
        //      </motion.h2> */}

        //         <motion.h2
        //             initial={{ opacity: 0, y: -20 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.6 }}
        //             className="text-4xl font-bold text-center text-blue-700 mb-12"
        //         >
        //             Get in Touch
        //         </motion.h2>
        //         <div className="grid md:grid-cols-2 gap-10 contact-page">
        //             <motion.div
        //                 initial={{ opacity: 0, x: -30 }}
        //                 whileInView={{ opacity: 1, x: 0 }}
        //                 transition={{ duration: 0.6 }}
        //                 className="space-y-4"
        //             >
        //                 <p className="text-gray-700">
        //                     For inquiries, quotes, or custom printing solutions, feel free to reach out. We're here to help you bring your ideas to life.
        //                 </p>
        //                 <div>
        //                     {/* <p className="font-semibold">Address:</p>
        //                 <p className="text-gray-600">  Marsur Main Road, #71 Shop No. 5
        //                     Mohan Reddy Building, Marsur Gate,
        //                     Anekal, Bengaluru, Karnataka 562106</p> */}
        //                     <p className="fw-4" style={{}}>
        //                         <a href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
        //                             target="_blank"
        //                             style={{ color: "inherit", textDecoration: "none" }} >
        //                             <p className="font-semibold">Address:</p>
        //                             <p className="text-gray-600">  Marsur Main Road, #71 Shop No. 5
        //                                 Mohan Reddy Building, Marsur Gate,
        //                                 Anekal, Bengaluru, Karnataka 562106</p></a>
        //                         <br />
        //                         {/* <a href="tel:6362900041">
        //               <b>Phone:</b>
        //               <span> 6362900041</span>
        //             </a>
        //             <br /> */}
        //                         {//<a href="mailto:kurnool@multiplexgroup.com">
        //                             //                       <b>
        //                             //                         Email: <span>kurnool@multiplexgroup.com</span>
        //                             //                       </b>
        //                             //                     </a> 
        //                         }
        //                     </p>
        //                 </div>
        //                 <div>

        //                     <a href="tel:9591967075" style={{ color: "inherit", textDecoration: "none" }}>
        //                         <p className="font-semibold">Phone:</p>
        //                         <p className="text-gray-600">+91 9591967075</p>
        //                     </a>
        //                 </div>
        //                 <div>
        //                     <a href="mailto:samruddhiprinterskp@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
        //                         <p className="font-semibold">Email:</p>
        //                         <p className="text-gray-600">samruddhiprinterskp@gmail.com</p>
        //                     </a>
        //                 </div>
        //             </motion.div>

        //             <motion.form
        //                 initial={{ opacity: 0, x: 30 }}
        //                 whileInView={{ opacity: 1, x: 0 }}
        //                 transition={{ duration: 0.6 }}
        //                 className="bg-white shadow-md rounded-lg p-6 space-y-4"
        //             >
        //                 {sent ? (
        //                     <p className="text-green-600 text-center">Thank you for your message! We'll be in touch soon.</p>
        //                 ) : (
        //                     <form onSubmit={handleSubmit} className="space-y-4">
        //                         <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" style={{ textAlign: 'left', color: 'black' }} />
        //                         <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" style={{ textAlign: 'left', color: 'black' }} />
        //                         <textarea placeholder="Your Message" rows="5" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" style={{ textAlign: 'left', color: 'black' }}></textarea>
        //                         <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
        //                     </form>
        //                 )}

        //             </motion.form>
        //         </div>
        //         <div className="mt-10 text-center" style={{ border: "solid green 1px", padding: "10px", borderRadius: "8px" }}>
        //             <motion.div
        //                 initial={{ opacity: 0, x: -30 }}
        //                 whileInView={{ opacity: 1, x: 0 }}
        //                 transition={{ duration: 0.6 }}
        //                 className="space-y-0"
        //             >
        //                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.89020970705!2d77.70107697372822!3d12.769112819288083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6fba339c908f%3A0xe9bdc65061a90790!2sSAMRUDDHI%20PRINTERS!5e1!3m2!1sen!2sin!4v1752215667507!5m2!1sen!2sin"
        //                     width="100%" height="600"
        //                     style={{ border: "0", width: "100%", height: "400px", borderRadius: "8px" }}
        //                     allowFullScreen="" loading="lazy"
        //                     referrerPolicy="no-referrer-when-downgrade"></iframe>
        //             </motion.div>
        //         </div>
        //     </main>
        // </div>
        <div className="bg-[#ffff]">
            {/* Banner Section */}
            <div
                className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] mb-8 sm:mb-10"
                style={{
                    backgroundImage: `url(${contactBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-2 sm:px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold z-20" style={{ color: '#143E61' }}
                    >
                        Get in Touch
                    </motion.h2>
                </div>
            </div>

            {/* Main Content */}
            <main className="px-2 sm:px-4 md:px-8 max-w-5xl mx-auto pb-8 sm:pb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-center text-[#143E61] mb-3"
                >
                    We're Here to Help
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto"
                >
                    Have a question or need a quote? Fill out the form or use the contact details below—our team will get back to you promptly.
                </motion.p>
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start w-full">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:max-w-md space-y-4"
                    >
                        <p className="text-gray-700">
                            For inquiries, quotes, or custom printing solutions, feel free to reach out. We're here to help you bring your ideas to life.
                        </p>
                        <a href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 mb-4 text-gray-700 transition-colors hover:text-[#F57C00] no-underline">
                            <div className="flex items-center gap-2 mb-0">
                                <FaMapMarkerAlt className="text-[#143E61] w-6 h-6" />
                                <div className="font-semibold text-lg">Address</div>
                            </div>
                            <div className="text-gray-700">Marsur Main Road, #71 Shop No. 5, Mohan Reddy Building, Marsur Gate, Anekal, Bengaluru, Karnataka 562106</div>
                        </a>
                        <a href="mailto:samruddhiprinterskp@gmail.com" className="flex flex-col gap-1 mb-4 text-gray-700 transition-colors hover:text-[#F57C00] no-underline">
                            <div className="flex items-center gap-2 mb-0">
                                <FaEnvelope className="text-[#143E61] w-6 h-6" />
                                <div className="font-semibold text-lg">Email</div>
                            </div>
                            <div className="text-gray-700">samruddhiprinterskp@gmail.com</div>
                        </a>
                        <a href="tel:9591967075" className="flex flex-col gap-1 mb-4 text-gray-700 transition-colors hover:text-[#F57C00] no-underline">
                            <div className="flex items-center gap-2 mb-0">
                                <FaPhone className="text-[#143E61] w-6 h-6" />
                                <div className="font-semibold text-lg">Phone</div>
                            </div>
                            <div className="text-gray-700">+91 9591967075</div>
                        </a>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:max-w-md bg-white shadow-md rounded-lg p-4 sm:p-6 space-y-4"
                    >
                        {sent ? (
                            <p className="text-green-600 text-center">Thank you for your message! We'll be in touch soon.</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                                ></textarea>
                                {/* <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                    disabled
                                >
                                    Send Message
                                </button> */}
                                <button
                                    type="submit"
                                    disabled
                                    className="bg-blue-600 text-white px-6 py-2 rounded transition
             disabled:bg-gray-400
             disabled:cursor-not-allowed
             disabled:opacity-70"
                                >
                                    Send Message
                                </button>

                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Google Map */}
                <div className="mt-10 sm:mt-14 text-center flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block w-full max-w-3xl bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.89020970705!2d77.70107697372822!3d12.769112819288083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6fba339c908f%3A0xe9bdc65061a90790!2sSAMRUDDHI%20PRINTERS!5e1!3m2!1sen!2sin!4v1752215667507!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Samruddhi Printers Map"
                        ></iframe>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
