import React from 'react'
import { ArrowRight } from 'lucide-react'

const steps = [
    {
        number: '01',
        title: 'Choose Vehicle',
        description1: 'Browse bikes, scooters',
        description2: 'or cars as per your need.',

    },
    {
        number: '02',
        title: 'Select Date & Location',
        description1: 'Pick your trip dates',
        description2: 'and location.',

    },
    {
        number: '03',
        title: 'Book & Pay',
        description1: 'Confirm your booking',
        description2: 'with secure payment.',

    },
    {
        number: '04',
        title: 'Ride & Enjoy',
        description1: 'Pick up your vehicle',
        description2: 'and start your journey.',

    },
]

const HowItWorks = () => {
    return (
        <section className="relative mx-auto w-[90%] overflow-hidden py-16">


            <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2F3233] sm:text-3xl">
                    How It Works
                </h2>

                <p className="mt-2 text-sm text-[#5C5F62] sm:text-base">
                    Get on the road in just a few simple steps.
                </p>
            </div>



            <div className="relative flex items-center">
                <div className="relative flex-1">

                    <div className="absolute left-[12%] right-[12%] top-6 hidden h-0.5 bg-gray-200 md:block" />

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="relative z-10 flex flex-col items-center px-3 text-center"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                                    <span className="text-base font-extrabold text-[#FD1022]">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="mt-3 text-xs font-bold text-[#2F3233] md:text-sm">
                                    {step.title}
                                </h3>

                                <p className="mt-1  text-[10px] text-gray-500 md:text-xs">
                                    {step.description1}
                                </p>
                                <p className="mt-1  text-[10px] text-gray-500 md:text-xs">
                                    {step.description2}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full border-[15px] border-red-50 opacity-70 md:flex">
                    <ArrowRight
                        size={60}
                        strokeWidth={5}
                        className="text-red-100"
                    />
                </div>
            </div>




        </section>
    )
}

export default HowItWorks