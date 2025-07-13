// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
// const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// const [sent, setSent] = useState(false);

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
//         .then(() => setSent(true))
//         .catch((err) => console.error(err));
// };

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


import React, { useState } from "react";
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import main from '../assets/images/mainlogo.png';


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
        <div style={{ backgroundColor: "#f8f9fa" }} >
            <main className="py-1 px-4 max-w-5xl mx-auto">
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
                <div className="grid md:grid-cols-2 gap-10 contact-page">
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
                            {/* <p className="font-semibold">Address:</p>
                        <p className="text-gray-600">  Marsur Main Road, #71 Shop No. 5
                            Mohan Reddy Building, Marsur Gate,
                            Anekal, Bengaluru, Karnataka 562106</p> */}
                            <p className="fw-4" style={{}}>
                                <a href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                                    target="_blank"
                                    style={{ color: "inherit", textDecoration: "none" }} >
                                    <p className="font-semibold">Address:</p>
                                    <p className="text-gray-600">  Marsur Main Road, #71 Shop No. 5
                                        Mohan Reddy Building, Marsur Gate,
                                        Anekal, Bengaluru, Karnataka 562106</p></a>
                                <br />
                                {/* <a href="tel:6362900041">
                      <b>Phone:</b>
                      <span> 6362900041</span>
                    </a>
                    <br /> */}
                                {//<a href="mailto:kurnool@multiplexgroup.com">
                                    //                       <b>
                                    //                         Email: <span>kurnool@multiplexgroup.com</span>
                                    //                       </b>
                                    //                     </a> 
                                }
                            </p>
                        </div>
                        <div>

                            <a href="tel:9591967075" style={{ color: "inherit", textDecoration: "none" }}>
                                <p className="font-semibold">Phone:</p>
                                <p className="text-gray-600">+91 9591967075</p>
                            </a>
                        </div>
                        <div>
                            <a href="mailto:samruddhiprinterskp@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                                <p className="font-semibold">Email:</p>
                                <p className="text-gray-600">samruddhiprinterskp@gmail.com</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white shadow-md rounded-lg p-6 space-y-4"
                    >
                        {sent ? (
                            <p className="text-green-600 text-center">Thank you for your message! We'll be in touch soon.</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" style={{ textAlign: 'left', color: 'black' }} />
                                <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" style={{ textAlign: 'left', color: 'black' }} />
                                <textarea placeholder="Your Message" rows="5" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" style={{ textAlign: 'left', color: 'black' }}></textarea>
                                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
                            </form>
                        )}

                    </motion.form>
                </div>
                <div className="mt-10 text-center" style={{ border: "solid green 1px", padding: "10px", borderRadius: "8px" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-0"
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.89020970705!2d77.70107697372822!3d12.769112819288083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6fba339c908f%3A0xe9bdc65061a90790!2sSAMRUDDHI%20PRINTERS!5e1!3m2!1sen!2sin!4v1752215667507!5m2!1sen!2sin"
                            width="100%" height="600"
                            style={{ border: "0", width: "100%", height: "400px", borderRadius: "8px" }}
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
