import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
    return (
        <section
            className="relative h-[280px] w-full overflow-hidden bg-cover bg-right md:h-[320px]"
            style={{ backgroundImage: "url('/assets/road.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 mx-auto flex h-full w-[90%] items-center">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                        Ready for Your Next Journey?
                    </h2>

                    <p className="mt-2 text-sm text-gray-200 md:text-base">
                        Choose your ride and experience freedom like never before.
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FD1022] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-700">
                        Book Your Ride
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CTA