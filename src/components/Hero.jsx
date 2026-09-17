import { ArrowRight, Info, Shield } from 'lucide-react'
import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import { IoIosPeople } from 'react-icons/io'
import { FaCarSide, FaShieldAlt, FaHeadset } from 'react-icons/fa'

const Hero = () => {
    return (
        <section
            className="relative  w-full overflow-hidden bg-cover bg-center "
            style={{
                backgroundImage: "url('/assets/hero.jpg')",
                backgroundPosition: 'center right',
            }}
        >

            <div className="w-[90%] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFD] via-[#FDFCFD]/95 via-[20%] via-[#FDFCFD]/10 via-[50%] to-transparent" />


                <div className="relative z-10 flex w-full flex-col justify-center  py-12 ">


                    <p className="mb-4 text-sm font-semibold tracking-wider text-[#2F3233]">
                        EXPLORE. RIDE. BELONG.
                    </p>


                    <h1 className="text-4xl font-black leading-tight text-[#2F3233] sm:text-5xl xl:text-6xl">
                        India’s Next Gen
                        <br />
                        <span className="text-[#FD1022]">
                            Vehicle Rental
                        </span>
                        <br />
                        <span className="text-[#FD1022]">
                            Platform
                        </span>
                    </h1>


                    <div className="mt-5">
                        <p className="text-base text-[#2F3233] sm:text-lg">
                            Bikes, Scooters and Cars for every journey.
                        </p>

                        <p className="text-base text-[#2F3233] sm:text-lg">
                            Affordable. Flexible. Reliable.
                        </p>
                    </div>


                    <div className="mt-7 flex flex-wrap gap-4">


                        <button className="flex items-center gap-2 rounded-lg bg-[#FD1022] px-5 py-3 text-sm font-bold text-white transition hover:opacity-80">
                            <span>Book Your Ride</span>
                            <ArrowRight size={16} />
                        </button>


                        <button className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/90 px-4 py-2.5 backdrop-blur-sm transition hover:border-[#FD1022]">

                            <div className="rounded-full border border-gray-200 bg-[#FDFCFD] p-2">
                                <FaCirclePlay
                                    className="text-[#FD1022]"
                                    size={18}
                                />
                            </div>

                            <div className="text-left">
                                <p className="text-xs font-bold text-[#2F3233]">
                                    Watch Video
                                </p>

                                <p className="text-[10px] text-gray-500">
                                    2 min
                                </p>
                            </div>

                        </button>

                    </div>


                    <div className="md:w-[50%] sm:w-[70%] grid mt-5 lg:grid-cols-4 grid-cols-2 items-center gap-x-0 gap-y-2">

                        <div className="flex items-center gap-2">
                            <IoIosPeople
                                size={34}
                                className="shrink-0 text-[#FD1022]"
                            />

                            <div className="text-[11px] leading-tight text-[#2F3233]">
                                <p>Trusted by</p>
                                <p >10K+ Riders</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 ">
                            <FaCarSide
                                size={28}
                                className="shrink-0 text-[#FD1022]"
                            />

                            <div className="text-[11px] leading-tight text-[#2F3233]">
                                <p>Wide Range</p>
                                <p >of Vehicles</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-2">
                            <Shield
                                size={27}
                                className="shrink-0 text-[#FD1022]"
                            />

                            <div className="text-[11px] leading-tight text-[#2F3233]">
                                <p>Safe &amp; Secure</p>
                                <p >Rentals</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 ">
                            <Info
                                size={27}
                                className="shrink-0 text-[#FD1022]"
                            />

                            <div className="text-[11px] leading-tight text-[#2F3233] ">
                                <p>24/7</p>
                                <p >Support</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="absolute right-[5%] top-[12%] z-20 hidden border-l border-black/60 pl-5 text-[#2F3233] md:block">


                    <div className="text-left text-xs font-black uppercase leading-[1.25] tracking-wider lg:text-sm">
                        <p>Bike</p>
                        <p>Car</p>
                        <p>Rentals</p>
                        <p>Anywhere</p>
                    </div>


                    <div className="my-5 w-full h-[3px] w-10 bg-[#FD1022]" />


                    <div className="text-lefttext-[10px] font-bold uppercase leading-[1.6] tracking-widest text-[#2F3233] lg:text-xs">
                        <p>Explore</p>
                        <p>Travel</p>
                        <p>Work</p>
                        <p>Live More</p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero