import React from 'react'
import {
    ArrowRight,
    TentTree,
    BriefcaseBusiness,
    CarFront,
    Compass,
} from 'lucide-react'

const ExploreBehicle = () => {
    return (
        <section
            className="relative w-full overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/road.jpg')",
            }}
        >

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60" />


            <div className="relative z-10 flex min-h-[350px] flex-col justify-between w-[90%] mx-auto py-10 ">


                <div className="flex flex-1 items-center ">


                    <div className="max-w-2xl">

                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Rent Smart. Ride Happy.
                        </h2>

                        <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-gray-200 sm:text-base">
                            Whether it's a quick city ride or a long road trip,
                            <br className="hidden sm:block" />
                            RYPP makes vehicle rental simple, affordable and hassle-free.
                        </p>

                        <button className="mt-6 flex items-center gap-2 rounded-lg bg-[#FD1022] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90">
                            <span>Explore Vehicles</span>
                            <ArrowRight size={17} />
                        </button>

                    </div>

                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-5 sm:grid-cols-4 sm:gap-6">


                    <div className="flex items-center gap-2">
                        <TentTree
                            size={20}
                            className="shrink-0 text-white"
                        />

                        <span className="text-xs font-semibold text-white sm:text-sm">
                            Weekend Getaways
                        </span>
                    </div>


                    <div className="flex items-center gap-2">
                        <BriefcaseBusiness
                            size={20}
                            className="shrink-0 text-white"
                        />

                        <span className="text-xs font-semibold text-white sm:text-sm">
                            Business Travel
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CarFront
                            size={20}
                            className="shrink-0 text-white"
                        />

                        <span className="text-xs font-semibold text-white sm:text-sm">
                            Daily Commute
                        </span>
                    </div>


                    <div className="flex items-center gap-2">
                        <Compass
                            size={20}
                            className="shrink-0 text-white"
                        />

                        <span className="text-xs font-semibold text-white sm:text-sm">
                            Exploring New Cities
                        </span>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default ExploreBehicle