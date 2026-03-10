"use client"

import { useEffect, useState } from "react"

export default function ImageCarousel() {

  const images = [
    "/images/apartment.jpg",
    "/images/villa.jpg",
    "/images/apartment.jpg",
    "/images/villa.jpg"
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 2000) // speed (2 sec)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="py-16 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl text-grey-700 font-semibold text-center mb-10">
          Project Gallery
        </h2>

        <div className="relative w-full h-[420px] overflow-hidden rounded-xl">

          {images.map((img, index) => (

            <img
              key={index}
              src={img}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />

          ))}

        </div>

      </div>

    </section>

  )
}