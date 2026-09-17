"use client"
import React, { useState } from 'react'
import { ArrowRight, Star } from 'lucide-react'

const vehicles = {
    Bikes: [
        {
            name: 'Royal Enfield Classic 350',
            image: '/assets/classic-350.jpg',
            rating: '4.8',
            reviews: '320+ reviews',
            price: '₹ 799',
        },
        {
            name: 'KTM Duke 250',
            image: '/assets/duke-250.jpg',
            rating: '4.7',
            reviews: '280+ reviews',
            price: '₹ 899',
        },
        {
            name: 'Yamaha R15 V4',
            image: '/assets/r15-v4.jpg',
            rating: '4.9',
            reviews: '410+ reviews',
            price: '₹ 999',
        },
        {
            name: 'Honda CB350',
            image: '/assets/cb350.jpg',
            rating: '4.8',
            reviews: '250+ reviews',
            price: '₹ 849',
        },
        {
            name: 'Bajaj Dominar 400',
            image: '/assets/dominar-400.jpg',
            rating: '4.6',
            reviews: '190+ reviews',
            price: '₹ 949',
        },
        {
            name: 'TVS Apache RTR',
            image: '/assets/apache-rtr.jpg',
            rating: '4.7',
            reviews: '230+ reviews',
            price: '₹ 799',
        },
    ],

    Scooters: [
        {
            name: 'Honda Activa 6G',
            image: '/assets/activa-6g.jpg',
            rating: '4.8',
            reviews: '350+ reviews',
            price: '₹ 499',
        },
        {
            name: 'TVS Ntorq 125',
            image: '/assets/ntorq-125.jpg',
            rating: '4.7',
            reviews: '280+ reviews',
            price: '₹ 549',
        },
        {
            name: 'Suzuki Access 125',
            image: '/assets/access-125.jpg',
            rating: '4.6',
            reviews: '210+ reviews',
            price: '₹ 529',
        },
        {
            name: 'Yamaha Aerox 155',
            image: '/assets/aerox-155.jpg',
            rating: '4.8',
            reviews: '190+ reviews',
            price: '₹ 699',
        },
        {
            name: 'Honda Dio',
            image: '/assets/dio.jpg',
            rating: '4.7',
            reviews: '240+ reviews',
            price: '₹ 499',
        },
        {
            name: 'TVS Jupiter',
            image: '/assets/jupiter.jpg',
            rating: '4.6',
            reviews: '180+ reviews',
            price: '₹ 479',
        },
    ],

    Cars: [
        {
            name: 'Hyundai Creta',
            image: '/assets/creta.jpg',
            rating: '4.9',
            reviews: '420+ reviews',
            price: '₹ 2,499',
        },
        {
            name: 'Kia Seltos',
            image: '/assets/seltos.jpg',
            rating: '4.8',
            reviews: '350+ reviews',
            price: '₹ 2,399',
        },
        {
            name: 'Toyota Innova',
            image: '/assets/innova.jpg',
            rating: '4.9',
            reviews: '510+ reviews',
            price: '₹ 2,799',
        },
        {
            name: 'Mahindra Thar',
            image: '/assets/thar.jpg',
            rating: '4.8',
            reviews: '390+ reviews',
            price: '₹ 2,699',
        },
        {
            name: 'Maruti Swift',
            image: '/assets/swift.jpg',
            rating: '4.7',
            reviews: '300+ reviews',
            price: '₹ 1,899',
        },
        {
            name: 'Tata Nexon',
            image: '/assets/nexon.jpg',
            rating: '4.7',
            reviews: '260+ reviews',
            price: '₹ 1,999',
        },
    ],
}

const PopularVehicles = () => {
    const [activeTab, setActiveTab] = useState('Bikes');

    return (
        <section className="px-6 py-16 sm:px-[6.5%]">

            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <h2 className="text-2xl font-bold text-[#2F3233] sm:text-3xl">
                    Popular Vehicles
                </h2>

                <div className="flex items-center gap-5">

                    {['Bikes', 'Scooters', 'Cars'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative pb - 1 text - sm font - semibold transition ${activeTab === tab
                                ? 'text-[#FD1022]'
                                : 'text-gray-500 hover:text-gray-900'
                                } `}
                        >
                            {tab}

                            {activeTab === tab && (
                                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#FD1022]" />
                            )}
                        </button>
                    ))}

                </div>

                <button className="flex items-center gap-1 text-sm font-semibold text-[#FD1022] transition hover:gap-2">
                    <span>View All</span>
                    <ArrowRight size={15} />
                </button>

            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

                {vehicles[activeTab].map((vehicle) => (
                    <div
                        key={vehicle.name}
                        className="overflow-hidden rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md"
                    >

                        <div
                            className="aspect-[4/3] bg-contain bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('${vehicle.image}')`,
                            }}
                        />

                        <h3 className="mt-2 truncate text-sm font-bold text-[#2F3233]">
                            {vehicle.name}
                        </h3>

                        <div className="mt-1 flex items-center gap-1">

                            <Star
                                size={12}
                                fill="currentColor"
                                className="text-amber-500"
                            />

                            <span className="text-xs font-bold text-[#2F3233]">
                                {vehicle.rating}
                            </span>

                            <span className="truncate text-[10px] text-gray-500">
                                ({vehicle.reviews})
                            </span>

                        </div>

                        <div className="mt-2 flex items-baseline gap-1">

                            <span className="text-sm font-extrabold text-[#2F3233]">
                                {vehicle.price}
                            </span>

                            <span className="text-xs font-medium text-gray-500">
                                / day
                            </span>

                        </div>

                        <button className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg bg-[#FD1022] py-2 text-xs font-bold text-white transition hover:opacity-90">
                            <span>Book Now</span>
                            <ArrowRight size={13} />
                        </button>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default PopularVehicles

