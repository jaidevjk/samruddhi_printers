import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold text-white">Samruddhi Printers</h2>
                        <p className="text-sm mt-1">Providing quality printing services since 2020.</p>
                    </div>

                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-500" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="hover:text-pink-500" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="mailto:info@samruddhiprinters.com" className="hover:text-green-400" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                <p className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Samruddhi Printers. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
