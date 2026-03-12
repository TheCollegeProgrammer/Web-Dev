"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronsDown, ChevronsUp } from "lucide-react"

const properties = [
    {
        id: 1,
        link: "ruby-town",
        title: "Ruby Town",
        image: "/images/ruby-logo.png",
        location: "Bokhara, Nagpur",
        description:
            "Residential + Commercial plots in the city’s fastest-growing corridor with excellent connectivity and development.",
    },
    {
        id: 2,
        link: "bokhara",
        title: "Residential Layout Bokhara",
        image: "/images/bokhara.png",
        location: "Bokhara, Nagpur",
        description:
            "Premium residential plots in a rapidly developing and well-connected location.",
    },
    {
        id: 3,
        link: "ganesh-vatika",
        title: "Ganesh Vatika - 11",
        image: "/images/Ganesh Vatika.png",
        location: "Shankarpur, Nagpur",
        description:
            "Residential + Commercial plots in a high-growth area with strong connectivity and modern convenience.",
    },
    {
        id: 4,
        link: "mauli-niwasa",
        title: "Mauli Niwasa 36 & 37",
        image: "/images/Mauli.png",
        location: "Borkhedi - Butibori, Nagpur",
        description:
            "Mauli Niwasa 36 & 37 offers premium residential & commercial plots with modern amenities.",
    },
    {
        id: 5,
        link: "ksshreya",
        title: "K.S.Shreya Homes",
        image: "/images/KSShreya.png",
        location: "Jamtha, Nagpur",
        description:
            "Residential plots in the city’s fastest-growing corridor with excellent connectivity and development.",
    }
]

export default function Properties() {

    const [expanded, setExpanded] = useState(false)
    const searchParams = useSearchParams()

    useEffect(() => {
        if (searchParams.get("expand") === "true") {
            setExpanded(true)

            const el = document.getElementById("properties")
            if (el) {
                el.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [searchParams])

    return (
        <section id="properties" className="py-16 bg-gray-100">

            <h2 className="text-3xl font-bold text-center mt-5 mb-12 text-gray-800">
                Our Projects
            </h2>

            {/* Expandable container */}
            <div
                className={`flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6 overflow-hidden transition-all duration-700 ${expanded ? "max-h-[950px]" : "max-h-[420px]"
                    }`}
            >

                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden w-[300px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >

                        <img
                            src={property.image}
                            className="w-full h-48 object-cover"
                            alt={property.title}
                        />

                        <div className="p-5 flex flex-col flex-grow">

                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {property.title}
                            </h3>

                            <p className="text-sm text-gray-600 mb-2">
                                📍 {property.location}
                            </p>

                            <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                                {property.description}
                            </p>

                            <Link href={`/projects/${property.link}`}>
                                <button className="mt-auto w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                                    View Details
                                </button>
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

            {/* View More Toggle */}
            <div className="text-center mt-8">

                <span
                    onClick={() => setExpanded(!expanded)}
                    className="group cursor-pointer inline-flex items-center gap-3 text-lg font-medium text-gray-800 hover:text-black transition"
                >

                    <span className="text-xl transition-transform group-hover:-translate-x-1">
                        {expanded ? <ChevronsUp /> : <ChevronsDown />}
                    </span>

                    {expanded ? "View Less" : "View More"}

                    <span className="text-xl transition-transform group-hover:translate-x-1">
                        {expanded ? <ChevronsUp /> : <ChevronsDown />}
                    </span>

                </span>

            </div>

        </section>
    )
}