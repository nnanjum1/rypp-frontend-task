import React from 'react'
import {
    Users,
    Bike,
    MapPin,
    Star,
    ShieldCheck,
} from 'lucide-react'

const metrics = [
    {
        icon: Users,
        value: '10K+',
        label: 'Happy Riders',
    },
    {
        icon: Bike,
        value: '500+',
        label: 'Vehicles on Platform',
    },
    {
        icon: MapPin,
        value: '50+',
        label: 'Cities (Upcoming)',
    },
    {
        icon: Star,
        value: '4.8',
        label: 'Average Rating',
    },
    {
        icon: ShieldCheck,
        value: '100%',
        label: 'Verified Partners',
    },
]

const Metrics = () => {
    return (
        <section className="w-full bg-gray-50 px-6 py-4">
            <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-5">
                {metrics.map((metric) => {
                    const Icon = metric.icon

                    return (
                        <div
                            key={metric.label}
                            className="flex items-center justify-center gap-3"
                        >
                            <Icon
                                size={24}
                                className="text-[#FD1022]"
                            />

                            <div>
                                <p className="text-sm font-extrabold text-[#2F3233] md:text-base">
                                    {metric.value}
                                </p>

                                <p className="text-[10px] font-medium text-gray-500 md:text-xs">
                                    {metric.label}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Metrics