"use client"

import { useEffect, useState } from "react"

export default function ImageCarousel({ images = [] }) {

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {

    if (images.length === 0) return

    const interval = setInterval(nextSlide, 3000)

    return () => clearInterval(interval)

  }, [images])

  return (

    <div className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors">

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-white">
        Site Images
      </h2>

      {/* Carousel Card */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 transition-colors">

        <div className="relative w-full overflow-hidden rounded-xl">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`w-full h-auto transition-opacity duration-700 ${
                index === current
                  ? "opacity-100"
                  : "opacity-0 absolute top-0 left-0"
              }`}
            />
          ))}

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ❮
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === current
                    ? "bg-white"
                    : "bg-white/40 dark:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  )
}