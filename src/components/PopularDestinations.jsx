import React from 'react'
import { ArrowRight } from 'lucide-react'

const destinations = [
    {
        name: 'Bengaluru',
        tagline: 'City Rides',
        image: '/assets/bengaluru.jpg',
    },
    {
        name: 'Coorg',
        tagline: 'Nature Escapes',
        image: '/assets/coorg.jpg',
    },
    {
        name: 'Goa',
        tagline: 'Beach Vibes',
        image: '/assets/goa.jpg',
    },
    {
        name: 'Manali',
        tagline: 'Mountain Trails',
        image: '/assets/manali.jpg',
    },
    {
        name: 'Rishikesh',
        tagline: 'Spiritual Journeys',
        image: '/assets/rishikesh.jpg',
    },
    {
        name: 'Jaipur',
        tagline: 'Royal Experiences',
        image: '/assets/jaipur.jpg',
    },
]

const PopularDestinations = () => {
    return (
        <section className="mx-auto w-[90%] ">


            <div className="mb-6 flex items-end justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-[#2F3233] sm:text-3xl">
                        Popular Destinations
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Top places our riders love to explore.
                    </p>
                </div>

                <button className="flex items-center gap-1 text-sm font-semibold text-[#FD1022]">
                    <span>View All</span>
                    <ArrowRight size={16} />
                </button>

            </div>



            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

                {destinations.map((destination) => (
                    <div
                        key={destination.name}
                        className="relative h-[180px] overflow-hidden rounded-xl bg-cover bg-center sm:h-[200px] lg:h-[220px]" style={{
                            backgroundImage: `url(${destination.image})`,
                        }}
                    >


                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 z-10 p-3">

                            <h3 className="text-sm font-bold text-white">
                                {destination.name}
                            </h3>

                            <p className="text-[10px] text-gray-200">
                                {destination.tagline}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default PopularDestinations