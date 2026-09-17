import React from 'react'
import {
    IndianRupee,
    ShieldCheck,
    MapPin,
    Headset,
} from 'lucide-react'

const WhyRypp = () => {
    return (
        <section className="mx-auto w-[90%] py-16">

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

                <div className="lg:col-span-8">

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-[#2F3233] sm:text-3xl">
                            Why RYPP?
                        </h2>

                        <p className="mt-2 text-sm text-[#5C5F62] sm:text-base">
                            More than just rentals — a better way to move.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                        <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#FD1022]">
                                <IndianRupee size={22} />
                            </div>

                            <h3 className="text-xs font-bold text-[#2F3233] md:text-sm">
                                Affordable Prices
                            </h3>

                            <p className="mt-1 text-[10px] text-gray-500 md:text-xs">
                                Great vehicles,
                            </p>
                            <p className="text-[10px] text-gray-500 md:text-xs">
                                budget friendly.
                            </p>
                        </div>


                        <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#FD1022]">
                                <ShieldCheck size={23} />
                            </div>

                            <h3 className="text-xs font-bold text-[#2F3233] md:text-sm">
                                Verified Partners
                            </h3>

                            <p className="mt-1 text-[10px] text-gray-500 md:text-xs">
                                Trusted & rated
                            </p>
                            <p className="text-[10px] text-gray-500 md:text-xs">
                                local vendors.
                            </p>
                        </div>


                        <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#FD1022]">
                                <MapPin size={23} />
                            </div>

                            <h3 className="text-xs font-bold text-[#2F3233] md:text-sm">
                                Pan India Availability
                            </h3>

                            <p className="mt-1 text-[10px] text-gray-500 md:text-xs">
                                50+ cities and
                            </p>
                            <p className="text-[10px] text-gray-500 md:text-xs">
                                counting.
                            </p>
                        </div>


                        <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#FD1022]">
                                <Headset size={23} />
                            </div>

                            <h3 className="text-xs font-bold text-[#2F3233] md:text-sm">
                                24/7 Support
                            </h3>

                            <p className="mt-1 text-[10px] text-gray-500 md:text-xs">
                                We're always here
                            </p>
                            <p className="text-[10px] text-gray-500 md:text-xs">
                                for you.
                            </p>
                        </div>

                    </div>

                </div>



                <div className="relative flex min-h-[240px] overflow-hidden rounded-2xl bg-[#FDF2F3] p-6 lg:col-span-4">

                    <div className="relative z-10 w-[55%]">

                        <h3 className="text-lg font-extrabold leading-snug text-[#2F3233] md:text-xl">
                            Download the RYPP App
                        </h3>

                        <div className="my-2 h-0.5 w-6 bg-[#FD1022]" />

                        <p className="mb-4 text-xs leading-5 text-gray-600">
                            Book, manage and extend your rides on the go.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <img
                                src="/assets/playstore.png"
                                alt="Google Play"
                                className="w-[85px] object-contain"
                            />

                            <img
                                src="/assets/applestore.png"
                                alt="App Store"
                                className="w-[85px] object-contain"
                            />
                        </div>

                    </div>



                    <div className="absolute bottom-[-55px] right-[-5px] w-[135px] rotate-12 sm:w-[150px] md:w-[165px] lg:w-[175px]">

                        <div className="relative">

                            <img
                                src="/assets/mocup7.jpg"
                                alt="RYPP App"
                                className="w-full object-contain"
                            />

                            <img
                                src="/assets/rypp-logo2.png"
                                alt="RYPP Logo"
                                className="absolute left-1/2 top-[35%] w-10 -translate-x-1/2 object-contain"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default WhyRypp