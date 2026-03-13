"use client"

import Link from "next/link"

export default function BookNowSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          So Don't Wait — Book Your Plot Today
        </h2>

        <p className="text-blue-100 mb-8">
          Limited plots available in prime locations. Secure your investment today.
        </p>

        <Link href="/enquiry_form">
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
            Book Now
          </button>
        </Link>

      </div>

    </section>
  )
}