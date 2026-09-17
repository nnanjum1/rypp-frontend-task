
import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <section className="mx-auto w-full">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">


                <div className="relative  overflow-hidden rounded-2xl bg-[#FD1022] p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white">
                        What Our Riders Say
                    </h2>

                    <p className="mt-2 text-sm text-white/90">
                        Real people. Real journeys. Real freedom.
                    </p>

                    <div className="relative z-10 mt-8 rounded-xl bg-white p-6 shadow-lg">
                        <p className="text-sm  font-medium leading-relaxed text-gray-800">
                            “RYPP made my trip to Coorg unforgettable.
                            Easy booking, great vehicle and zero hassle!”
                        </p>
                        <div className="flex justify-between">
                            <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600">
                                <ArrowLeft size={13} />
                            </button>

                            <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600">
                                <ArrowRight size={13} />
                            </button>
                        </div>
                        <div className="px-5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image
                                        src="/assets/amit-avatar.avif"
                                        alt="Amit Sharma"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900">
                                        Amit Sharma
                                    </h3>

                                    <p className="text-[10px] text-gray-500">
                                        Traveler, Bengaluru
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div className="mt-5 flex justify-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                            <span className="h-1.5 w-5 rounded-full bg-[#FD1022]" />
                        </div>
                    </div>



                </div>


                <div
                    className="relative overflow-hidden rounded-2xl bg-cover bg-[65%_center]" style={{ backgroundImage: "url('/assets/road2.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                Our Vision
                            </h2>

                            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-200">
                                To make mobility simple, reliable, and
                                accessible
                            </p>
                            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-200">
                                for everyone — powering journeys
                                across every
                            </p>
                            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-200">
                                city, town, and destination in
                                India.
                            </p>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonial

