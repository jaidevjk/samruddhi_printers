import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero-print.jpg';
import service1 from '../assets/images/service-businesscard.jpg';
import service2 from '../assets/images/service-flyers.png';
import service3 from '../assets/images/service-poster.jpg';
import service4 from '../assets/images/service-offset.png';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import logo1 from '../assets/images/logo-client1.jpg';
import logo2 from '../assets/images/logo-client2.jpg';
import logo3 from '../assets/images/logo-client3.jpg';
import mainpageBg from '../assets/images/mainpageBg.png'

export default function Home() {
    const services = [
        { title: "Business Cards", img: service1 },
        { title: "Flyers & Brochures", img: service2 },
        { title: "Posters & Banners", img: service3 },
        { title: "Offset & Digital Printing", img: service4 }
    ];

    const reasons = [
        "High-quality prints with vibrant, accurate colors",
        "Quick turnaround with affordable pricing",
        "Eco-friendly printing options available",
        "Dedicated team providing personalized solutions"
    ];

    const gallery = [gallery1, gallery2, gallery3];
    const logos = [logo1, logo2, logo3];

    return (
        <main className="bg-white text-gray-800">
            {/* Hero Section */}
            {/**/}
            <section
                className="relative  h-[80vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${mainpageBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
                <div className="absolute inset-0  bg-opacity-90"></div>
                <motion.div
                    className="relative text-center px-6 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-md leading-tight">
                        Premium Printing Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
                        From business cards to banners — let us bring your ideas to life with superior print quality.
                    </p>
                    <a
                        href="/contact"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-500 transition"
                    >
                        Get a Free Quote
                    </a>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <motion.h2
                    className="text-center text-3xl md:text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Printing Services
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-blue-50 py-16 px-4">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-8">Why Choose Samruddhi Printers?</h2>
                    <ul className="space-y-4 text-lg text-left md:text-center text-gray-700">
                        {reasons.map((reason, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center justify-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                            >
                                <span className="text-blue-600 font-bold">✔</span>
                                {reason}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/* Recent Works */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <motion.h2
                    className="text-center text-3xl font-bold mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Recent Works
                </motion.h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {gallery.map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            alt={`Gallery ${i + 1}`}
                            className="rounded-xl shadow-md hover:shadow-xl transition object-cover h-60 w-full"
                            whileHover={{ scale: 1.03 }}
                        />
                    ))}
                </div>
            </section>

            {/* Trusted Clients */}
            <section className="bg-gray-50 py-12 px-4">
                <motion.h2
                    className="text-center text-2xl font-bold mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Trusted by Clients
                </motion.h2>
                <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto opacity-90">
                    {logos.map((logo, i) => (
                        <motion.img
                            key={i}
                            src={logo}
                            alt={`Client ${i + 1}`}
                            className="h-16 object-contain"
                            whileHover={{ scale: 1.1 }}
                        />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-blue-600 text-white text-center">
                <motion.div
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Print with Us?</h2>
                    <p className="text-lg mb-6">Get in touch for a custom quote or to discuss your next print project.</p>
                    <a
                        href="/contact"
                        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </section>
            <br></br>
        </main>
    );
}



// import React from 'react';
// import { motion } from 'framer-motion';
// import heroImg from '../assets/images/hero-print.jpg';
// import service1 from '../assets/images/service-businesscard.jpg';
// import service2 from '../assets/images/service-flyers.png';
// import service3 from '../assets/images/service-poster.jpg';
// import service4 from '../assets/images/service-offset.png';
// import gallery1 from '../assets/images/gallery1.jpg';
// import gallery2 from '../assets/images/gallery2.jpg';
// import gallery3 from '../assets/images/gallery3.jpg';
// import logo1 from '../assets/images/logo-client1.jpg';
// import logo2 from '../assets/images/logo-client2.jpg';
// import logo3 from '../assets/images/logo-client3.jpg';

// export default function Home() {
//     const services = [
//         { title: "Business Cards", img: service1 },
//         { title: "Flyers & Brochures", img: service2 },
//         { title: "Posters & Banners", img: service3 },
//         { title: "Offset Printing", img: service4 }
//     ];

//     const reasons = [
//         "High-quality prints with vibrant colors",
//         "Affordable pricing and fast turnaround",
//         "Eco-friendly materials and processes",
//         "Personalized support and custom solutions"
//     ];

//     const gallery = [gallery1, gallery2, gallery3];
//     const logos = [logo1, logo2, logo3];

//     return (
//         <main>
//             {/* Hero Section */}
//             <section
//                 className="relative h-[80vh] bg-cover bg-center"
//                 style={{ backgroundImage: `url(${heroImg})` }}
//             >
//                 <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1 }}
//                         className="text-center px-4"
//                     >
//                         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//                             Premium Printing Services
//                         </h1>
//                         <p className="text-lg md:text-xl text-gray-200">
//                             Your one-stop shop for all your printing needs
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section className="py-16 px-4 max-w-7xl mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800"
//                 >
//                     Our Services
//                 </motion.h2>

//                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {services.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, y: 40 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
//                         >
//                             <img
//                                 src={item.img}
//                                 alt={item.title}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-4">
//                                 <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Why Choose Us Section */}
//             <section className="bg-blue-50 py-16 px-4">
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className="max-w-4xl mx-auto text-center"
//                 >
//                     <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Samruddhi Printers?</h2>
//                     <ul className="space-y-4 text-gray-700 text-lg text-left md:text-center">
//                         {reasons.map((reason, i) => (
//                             <motion.li
//                                 key={i}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="flex items-center justify-center gap-3"
//                             >
//                                 <span className="text-blue-600 text-xl">✔</span>
//                                 <span>{reason}</span>
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </motion.div>
//             </section>

//             {/* Gallery Section */}
//             <section className="py-16 px-4 max-w-6xl mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-semibold text-center text-gray-800 mb-10"
//                 >
//                     Recent Works
//                 </motion.h2>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {gallery.map((src, i) => (
//                         <motion.img
//                             key={i}
//                             src={src}
//                             alt={`Gallery ${i + 1}`}
//                             className="rounded-xl shadow-md object-cover h-60 w-full"
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ duration: 0.3 }}
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* Client Logos */}
//             <section className="bg-gray-100 py-12 px-4">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center text-2xl font-bold text-gray-700 mb-8"
//                 >
//                     Trusted by Clients
//                 </motion.h2>
//                 <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto">
//                     {logos.map((logo, i) => (
//                         <motion.img
//                             key={i}
//                             src={logo}
//                             alt={`Client ${i + 1}`}
//                             className="h-16 object-contain"
//                             whileHover={{ scale: 1.1 }}
//                             transition={{ duration: 0.3 }}
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-16 px-4 bg-blue-600 text-white text-center">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Quality Prints Fast?</h2>
//                     <p className="text-lg mb-6">Contact us today to get a quote or to discuss your next project.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                     >
//                         Get a Quote
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import heroImg from '../assets/images/hero-print.jpg';
// import service1 from '../assets/images/service-businesscard.jpg';
// import service2 from '../assets/images/service-flyers.jpg';
// import service3 from '../assets/images/service-poster.jpg';
// import service4 from '../assets/images/service-offset.jpg';
// import gallery1 from '../assets/images/gallery1.jpg';
// import gallery2 from '../assets/images/gallery2.jpg';
// import gallery3 from '../assets/images/gallery3.jpg';
// import logo1 from '../assets/images/logo-client1.jpg';
// import logo2 from '../assets/images/logo-client2.jpg';
// import logo3 from '../assets/images/logo-client3.jpg';

// export default function Home() {
//     const services = [
//         { title: "Business Cards", img: service1 },
//         { title: "Flyers & Brochures", img: service2 },
//         { title: "Posters & Banners", img: service3 },
//         { title: "Offset Printing", img: service4 }
//     ];

//     const reasons = [
//         "High-quality prints with vibrant colors",
//         "Affordable pricing and fast turnaround",
//         "Eco-friendly materials and processes",
//         "Personalized support and custom solutions"
//     ];

//     const gallery = [gallery1, gallery2, gallery3];
//     const logos = [logo1, logo2, logo3];

//     return (
//         <main>
//             {/* Hero Section */}
//             <section
//                 className="relative h-[85vh] bg-cover bg-center"
//                 style={{ backgroundImage: `url(${heroImg})` }}
//             >
//                 <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1 }}
//                         className="text-center px-6"
//                     >
//                         <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
//                             Professional Printing Solutions
//                         </h1>
//                         <p className="text-xl md:text-2xl text-gray-300">
//                             Fast, reliable, and beautifully printed – every time.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section className="py-20 px-4 max-w-7xl mx-auto bg-white">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl font-bold text-center mb-14 text-gray-800"
//                 >
//                     Our Services
//                 </motion.h2>

//                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {services.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             initial={{ opacity: 0, y: 40 }}
//                             transition={{ duration: 0.5, delay: index * 0.2 }}
//                             className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
//                         >
//                             <img
//                                 src={item.img}
//                                 alt={item.title}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-5 text-center">
//                                 <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Why Choose Us Section */}
//             <section className="bg-gray-50 py-20 px-4">
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className="max-w-4xl mx-auto text-center"
//                 >
//                     <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Samruddhi Printers?</h2>
//                     <ul className="space-y-5 text-gray-700 text-lg text-left md:text-center">
//                         {reasons.map((reason, i) => (
//                             <motion.li
//                                 key={i}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.4, delay: i * 0.2 }}
//                                 className="flex items-center justify-center gap-3"
//                             >
//                                 <span className="text-blue-600 text-xl">✔</span>
//                                 <span>{reason}</span>
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </motion.div>
//             </section>

//             {/* Gallery Section */}
//             <section className="py-20 px-4 max-w-6xl mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl font-bold text-center text-gray-800 mb-12"
//                 >
//                     Recent Projects
//                 </motion.h2>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {gallery.map((src, i) => (
//                         <motion.img
//                             key={i}
//                             src={src}
//                             alt={`Gallery ${i + 1}`}
//                             className="rounded-xl shadow-md object-cover h-64 w-full hover:scale-105 transition-transform duration-300"
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* Client Logos */}
//             <section className="bg-gray-100 py-14 px-4">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center text-3xl font-bold text-gray-700 mb-10"
//                 >
//                     Trusted by Clients
//                 </motion.h2>
//                 <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
//                     {logos.map((logo, i) => (
//                         <motion.img
//                             key={i}
//                             src={logo}
//                             alt={`Client ${i + 1}`}
//                             className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
//                             whileHover={{ scale: 1.1 }}
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h2 className="text-4xl md:text-5xl font-bold mb-5">Need Quality Prints Fast?</h2>
//                     <p className="text-lg md:text-xl mb-6">Get in touch today for quotes, consultation, or custom solutions.</p>
//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
//                     >
//                         Request a Quote
//                     </a>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }
