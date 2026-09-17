import React from 'react'
import { ArrowRight } from 'lucide-react'

const ChooseYourRide = () => {
    return (
        <section className="w-[90%] mx-auto my-5 space-y-5">


            <div>

                <h2 className="text-2xl font-bold text-[#2F3233]  sm:text-3xl">
                    Choose Your Ride
                </h2>

                <div className="mt-3 flex items-center gap-3">
                    <div className="h-1 w-6 shrink-0 bg-[#FD1022]" />

                    <p className="text-sm text-[#5C5F62] sm:text-base">
                        From city commutes to weekend getaways — find the perfect
                        vehicle for your journey.
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">


                <div
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cover bg-center transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                        backgroundImage: "url('/assets/bike.jpg')",
                    }}
                >

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />


                    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between p-5">

                        <div>
                            <h3 className="text-xl font-bold text-white">
                                Bikes
                            </h3>

                            <p className="mt-1 text-xs text-gray-200">
                                For every adventure
                            </p>
                        </div>

                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-md transition-transform duration-200 group-hover:scale-105">
                            <ArrowRight
                                size={16}
                                className="text-[#2F3233]"
                            />
                        </button>

                    </div>
                </div>


                <div
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cover bg-center transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                        backgroundImage: "url('/assets/scooter.jpg')",
                    }}
                >

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between p-5">

                        <div>
                            <h3 className="text-xl font-bold text-white">
                                Scooters
                            </h3>

                            <p className="mt-1 text-xs text-gray-200">
                                Simple. Smart. Reliable.
                            </p>
                        </div>

                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-md transition-transform duration-200 group-hover:scale-105">
                            <ArrowRight
                                size={16}
                                className="text-[#2F3233]"
                            />
                        </button>

                    </div>
                </div>


                <div
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cover bg-center transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                        backgroundImage: "url('/assets/car.jpg')",
                    }}
                >

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />


                    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between p-5">

                        <div>
                            <h3 className="text-xl font-bold text-white">
                                Cars
                            </h3>

                            <p className="mt-1 text-xs text-gray-200">
                                For every journey
                            </p>
                        </div>

                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-md transition-transform duration-200 group-hover:scale-105">
                            <ArrowRight
                                size={16}
                                className="text-[#2F3233]"
                            />
                        </button>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default ChooseYourRide