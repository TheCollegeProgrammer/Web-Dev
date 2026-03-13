"use client"

import Link from "next/link"

export default function BookNowSection() {
  return (
    <section className="py-20 bg-[#cccccc] text-black text-center dark:bg-gray-900 dark:text-white">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          So Don't Wait — Book Your Plot Today
        </h2>

        <p className="text-gray-700 mb-8 dark:text-gray-300">
          Limited plots available in prime locations. Secure your investment today.
        </p>

        <Link href="/enquiry_form">
          <button className="bg-black text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </Link>

      </div>

    </section>
  )
}