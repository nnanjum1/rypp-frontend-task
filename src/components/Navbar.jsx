"use client";

import Image from "next/image";
import { UserRound, ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative w-[90%] mx-auto py-4 top-0 ">
            <div className="flex items-center justify-between">

                <div >
                    <Image
                        src="/assets/rypp-logo.png.png"
                        alt="RYPP - Ride Your Way"
                        width={80}
                        height={60}
                        priority
                    />
                </div>


                <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
                    <a
                        href="#"
                        className="border-b-2 border-[#FD1022] pb-1 text-sm font-semibold text-[#FD1022]"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-[#2F3233] hover:text-[#FD1022]"
                    >
                        Vehicles
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-[#2F3233] hover:text-[#FD1022]"
                    >
                        How It Works
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-[#2F3233] hover:text-[#FD1022]"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-[#2F3233] hover:text-[#FD1022]"
                    >
                        Career
                    </a>

                    <a
                        href="#"
                        className="text-sm font-medium text-[#2F3233] hover:text-[#FD1022]"
                    >
                        Contact
                    </a>
                </div>


                <div className="hidden items-center gap-2 xl:gap-3 lg:flex">

                    <button className="flex items-center gap-2 rounded-[5px] border border-gray-200 px-3 py-2 text-sm font-bold text-[#1C1C1D] hover:border-[#FD1022] hover:text-[#FD1022] xl:px-4">

                        <FaLocationDot size={17} className="text-[#FD1022]" />
                        <span>Bengaluru</span>
                        <ArrowRight size={15} />
                    </button>


                    <button className="flex items-center gap-2 rounded-[5px] border border-gray-200 px-3 py-2 text-sm font-bold text-[#1C1C1D] hover:border-[#FD1022] hover:text-[#FD1022] xl:px-4">
                        <UserRound size={17} />
                        <span>Sign In</span>
                    </button>


                    <button className="flex items-center gap-2 rounded-[5px] bg-[#FD1022] px-4 py-2.5 text-sm font-bold text-white hover:opacity-70 xl:px-5">
                        <span>Book Now</span>
                        <ArrowRight size={16} />
                    </button>
                </div>


                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-[5px] p-2 text-[#1C1C1D] lg:hidden"
                    aria-label="Toggle menu"
                >
                    <Menu size={25} />
                </button>


            </div>
            {menuOpen && (
                <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-[#FDFCFD] px-5 py-5 shadow-md lg:hidden">
                    <div className="flex flex-col gap-4">
                        <a
                            href="#"
                            className="font-semibold text-[#FD1022]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>

                        <a
                            href="#"
                            className="font-medium text-[#2F3233]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Vehicles
                        </a>

                        <a
                            href="#"
                            className="font-medium text-[#2F3233]"
                            onClick={() => setMenuOpen(false)}
                        >
                            How It Works
                        </a>

                        <a
                            href="#"
                            className="font-medium text-[#2F3233]"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </a>

                        <a
                            href="#"
                            className="font-medium text-[#2F3233]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Career
                        </a>

                        <a
                            href="#"
                            className="font-medium text-[#2F3233]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </a>

                        <div className="mt-2 flex flex-col gap-3 border-t border-gray-200 pt-4">
                            <button className="flex items-center justify-center gap-2 rounded-[5px] border border-gray-200 px-4 py-2.5 text-center text-sm font-bold text-[#1C1C1D] hover:border-[#FD1022] hover:text-[#FD1022]">
                                <FaLocationDot size={17} className="text-[#FD1022]" />
                                <span >Bengaluru</span>
                                <ArrowRight size={15} />
                            </button>

                            <button className="flex items-center justify-center gap-2 rounded-[5px] border border-gray-200 px-4 py-2.5 text-sm font-bold text-[#1C1C1D] hover:border-[#FD1022] hover:text-[#FD1022] ">
                                <UserRound size={17} />
                                <span>Sign In</span>
                            </button>

                            <button className="flex items-center justify-center gap-2 rounded-[5px] bg-[#FD1022] px-4 py-2.5 text-sm font-bold text-white">
                                <span>Book Now</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
