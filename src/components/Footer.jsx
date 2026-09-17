
import React from 'react'
import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {
    Phone,
    Mail,
    MapPin,
    Send,
} from 'lucide-react'

const quickLinks = [
    'Home',
    'Vehicles',
    'How It Works',
    'About',
    'Career',
    'Contact',
]

const supportLinks = [
    'Help Center',
    'Booking Guide',
    'Cancellation Policy',
    'Terms & Conditions',
    'Privacy Policy',
]

const Footer = () => {
    return (
        <footer className="bg-[#0B0F12] py-12">
            <div className="mx-auto w-[90%]">

                <div className="grid grid-cols-1 gap-8 pb-10 text-center md:grid-cols-2 md:justify-items-center lg:grid-cols-5 lg:justify-items-start lg:text-left">

                    <div className="w-full">
                        <div className="flex items-center justify-center lg:justify-start">
                            <img
                                src="/assets/rypp-logo2.png"
                                alt="RYPP"
                                className="h-12 w-auto bg-white object-contain"
                            />
                        </div>

                        <p className="mt-4 text-xs font-medium text-gray-400">
                            India's Smart Mobility Platform
                        </p>

                        <p className="mt-1 text-xs font-medium text-gray-400">
                            Bike • Car • Rentals
                        </p>

                        <div className="mt-5 flex justify-center gap-2 lg:justify-start">
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/80 text-gray-300 transition hover:bg-[#FD1022] hover:text-white">
                                <FaLinkedinIn size={14} />
                            </button>

                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/80 text-gray-300 transition hover:bg-[#FD1022] hover:text-white">
                                <FaInstagram size={14} />
                            </button>

                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/80 text-gray-300 transition hover:bg-[#FD1022] hover:text-white">
                                <FaXTwitter size={14} />
                            </button>

                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/80 text-gray-300 transition hover:bg-[#FD1022] hover:text-white">
                                <FaFacebookF size={14} />
                            </button>

                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/80 text-gray-300 transition hover:bg-[#FD1022] hover:text-white">
                                <FaYoutube size={14} />
                            </button>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <div className="space-y-2">
                            {quickLinks.map((link) => (
                                <p
                                    key={link}
                                    className="text-xs text-gray-400 transition hover:text-white"
                                >
                                    {link}
                                </p>
                            ))}
                        </div>
                    </div>


                    <div className="w-full">
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
                            Support
                        </h3>

                        <div className="space-y-2">
                            {supportLinks.map((link) => (
                                <p
                                    key={link}
                                    className="text-xs text-gray-400 transition hover:text-white"
                                >
                                    {link}
                                </p>
                            ))}
                        </div>
                    </div>


                    <div className="w-full">
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-xs text-gray-300">
                            <div className="flex items-center justify-center gap-2 lg:justify-start">
                                <Phone size={14} />
                                <span>+91 98765 43210</span>
                            </div>

                            <div className="flex items-center justify-center gap-2 lg:justify-start">
                                <Mail size={14} />
                                <span>hello@rypp.in</span>
                            </div>

                            <div className="flex items-center justify-center gap-2 lg:justify-start">
                                <MapPin size={14} />
                                <span>Bengaluru, India</span>
                            </div>
                        </div>
                    </div>


                    <div className="w-full max-w-xs">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                            Subscribe to our newsletter
                        </h3>

                        <p className="mt-1 text-xs text-gray-400">
                            Get latest updates and offers.
                        </p>

                        <div className="relative mt-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full rounded-full border border-gray-700 bg-transparent px-4 py-2 pr-10 text-xs text-white outline-none placeholder:text-gray-500 focus:border-[#FD1022]"
                            />

                            <button className="absolute right-1 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#FD1022] text-white">
                                <Send size={13} />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-800/80 pt-6 text-[11px] text-gray-500 md:flex-row">
                    <p>
                        © 2026 RYPP. All Rights Reserved.
                    </p>

                    <p>
                        Ride Your Way. Explore More.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

