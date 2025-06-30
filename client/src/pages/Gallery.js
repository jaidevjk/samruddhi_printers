import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';

export default function Gallery() {
    const images = [gallery1, gallery2, gallery3, gallery4];

    return (
        <main className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-blue-700 mb-12"
            >
                Our Work Gallery
            </motion.h2> */}

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-center mb-12"
            >
                Our Work Gallery
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
                    >
                        <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-60 object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </main>
    );
}


//below is to switch the theme to dark mode
// import React from 'react';
// import { motion } from 'framer-motion';
// import gallery1 from '../assets/images/gallery1.jpg';
// import gallery2 from '../assets/images/gallery2.jpg';
// import gallery3 from '../assets/images/gallery3.jpg';
// import gallery4 from '../assets/images/gallery4.jpg';

// export default function Gallery() {
//     const images = [gallery1, gallery2, gallery3, gallery4];

//     return (
//         <main className="bg-gray-50 dark:bg-gray-900 py-20 px-4 md:px-6 lg:px-8">
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-3xl md:text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12"
//             >
//                 Our Work Gallery
//             </motion.h2>

//             <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//                 {images.map((img, index) => (
//                     <motion.div
//                         key={index}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl backdrop-blur bg-white/70 dark:bg-white/10 transition-all transform hover:scale-105"
//                     >
//                         <img
//                             src={img}
//                             alt={`Gallery ${index + 1}`}
//                             className="w-full h-60 object-cover rounded-2xl"
//                         />
//                     </motion.div>
//                 ))}
//             </div>
//         </main>
//     );
// }

