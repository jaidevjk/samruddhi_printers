import React from 'react';

export default function ContactMap() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Our Location</h2>
            <div className="mb-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.89020970705!2d77.70107697372822!3d12.769112819288083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6fba339c908f%3A0xe9bdc65061a90790!2sSAMRUDDHI%20PRINTERS!5e1!3m2!1sen!2sin!4v1752215667507!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Samruddhi Printers Location"
                ></iframe>
            </div>
            <div className="text-lg">
                <p><strong>Address:</strong> Marsur Main Road, #71 Shop No. 5, Mohan Reddy Building, Marsur Gate, Anekal, Bengaluru, Karnataka 562106</p>
                <p><strong>Phone:</strong> +91 9591967075</p>
                <p><strong>Email:</strong> samruddhiprinterskp@gmail.com</p>
            </div>
        </main>
    );
} 