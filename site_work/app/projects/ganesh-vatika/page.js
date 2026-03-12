import ImageCarousel from "@/components/ImageCarousel"
import {TrendingUp, Map, Home, ChartLine} from "lucide-react"
import Image from "next/image";

import { MapPin, ShoppingCart, Hotel, School } from "lucide-react"

export default function Page() {
  return (
    <div className="text-gray-700">

      {/* HERO */}

      <section
        className="h-[380px] flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/images/vatika-cover.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center">
          <h1 className="text-5xl font-semibold mb-3">Project</h1>

          <div className="w-20 h-[3px] bg-blue-400 mx-auto mb-4"></div>

          <p className="text-xl">Ganesh Vatika - 11</p>
        </div>

      </section>


      {/* INFO */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

          {/* IMAGE */}

          <div className="w-full">
            <img
              src="/images/Ganesh Vatika.png"
              alt="K.S. Shreya Homes"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>


          {/* TEXT */}

          <div>

            <h2 className="text-3xl font-semibold text-blue-700 mb-2">
              Ganesh Vatika - 11
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Marketed by Success Infra Estate
            </p>

            <p className="text-gray-600 leading-relaxed text-[16px] max-w-lg">
              Ganesh Vatika – 11 is a RERA-sanctioned residential layout located
              in the rapidly developing area of Shankarpur. Surrounded by well-established
              localities, the project offers clear documentation, planned infrastructure,
              and a secure environment for Residential + Commercial investment.

              The layout enjoys excellent connectivity to the Nagpur Highway and nearby
              institutions, while three reputed schools are within walking distance.
              With essential amenities and strong surrounding development, Ganesh Vatika – 11
              is an ideal choice for both comfortable living and long-term property value growth.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT HIGHLIGHTS */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-center mb-2">
            Project Highlights
          </h2>

          <p className="text-gray-500 text-center mb-2">
            Key details of the project layout and specifications
          </p>

          {/* Layout Image */}

          <div className="flex justify-center mt-4">

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 max-w-2xl">

              <img
                src="/images/ganesh-vatika-plan.png"
                alt="Project Layout"
                className="w-full rounded-lg object-contain"
              />

            </div>

          </div>

          {/* Highlight Cards */}

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-4">

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-semibold mt-1">Gotal-Pajri, Shankarpur</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Project Type</p>
              <p className="font-semibold mt-1">Residential + Commercial Plots</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Plot Sizes</p>
              <p className="font-semibold mt-1">800 – 3900 sq ft</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Scantion</p>
              <p className="font-semibold mt-1">Rl - Scantioned Plots</p>
            </div>

          </div>

        </div>

      </section>


      {/* AMENITIES */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-center mb-4">
            Project Amenities
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Essential infrastructure and lifestyle amenities available in the project
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE - AMENITIES LIST */}

            <div className="grid grid-cols-2 gap-6 text-[18px]">

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>Cement Road</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>Sewage Lines</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>Electricity</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>Garden Area</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>Water Line</p>
              </div>

            </div>


            {/* RIGHT SIDE - IMAGE GRID */}

            <div className="grid grid-cols-2 gap-5">

              <img
                src="/images/water-line.webp"
                className="rounded-xl shadow-md w-full h-[200px] object-cover hover:scale-105 transition"
              />

              <img
                src="/images/cement-road.jpg"
                className="rounded-xl shadow-md w-full h-[200px] object-cover hover:scale-105 transition"
              />

              <img
                src="/images/garden.jpg"
                className="rounded-xl shadow-lg col-span-2 w-full h-[220px] object-cover hover:scale-105 transition"
              />

            </div>
          </div>

        </div>

      </section>

      {/* LOCATION ADVANTAGES */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-14">
            Location Advantages
          </h2>

          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* LEFT SIDE - GOOGLE MAP */}

            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Vatika-map.png"
                alt="Project Location Map"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>


            {/* RIGHT SIDE - ADVANTAGES */}

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <MapPin className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">Besa Square</p>
                  <p className="text-gray-500 text-sm">5 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">D-Mart Beltarodi</p>
                  <p className="text-gray-500 text-sm">12 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <Hotel className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">Le Meridien Hotel</p>
                  <p className="text-gray-500 text-sm">10 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <School className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">Podar School</p>
                  <p className="text-gray-500 text-sm">4 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <School className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">Sanchit Public School</p>
                  <p className="text-gray-500 text-sm">5 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <School className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">Royal Gondwana School</p>
                  <p className="text-gray-500 text-sm">3 min drive</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* LAYOUT */}

      {/* <section className="py-16 bg-black">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10 text-center text-white">
            Project Layout
          </h2>

          <div className="w-full h-[520px] overflow-hidden rounded-xl">

            <iframe
              loading="lazy"
              className="w-full h-full border-0"
              src="https://www.canva.com/design/DAG4UPFsRCs/gotvCGbiEFjuCoPFG4vw6A/view?embed"
              allowFullScreen
            />

          </div>

        </div>

      </section> */}


      {/* GALLERY */}

      <ImageCarousel
        images={[
          "/images/ruby-1.png",
          "/images/ruby-2.png",
          "/images/ruby-3.png",
          "/images/ruby-4.png"
        ]}
      />


      {/* WHY INVEST */}

      <section className="py-16 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Why Invest in Ganesh Vatika - 11?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Map className="mx-auto mb-4 text-yellow-600" size={32} />
              <h3 className="font-semibold text-lg mb-2">
                Prime Developing Location
              </h3>
              <p className="text-gray-600 text-sm">
                Situated in a rapidly growing area with excellent infrastructure development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Home className="mx-auto mb-4 text-yellow-600" size={32} />
              <h3 className="font-semibold text-lg mb-2">
                Affordable Residential Plots
              </h3>
              <p className="text-gray-600 text-sm">
                Perfect opportunity to own premium plots at competitive prices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <TrendingUp className="mx-auto mb-4 text-yellow-600" size={32} />
              <h3 className="font-semibold text-lg mb-2">
                High Future Appreciation
              </h3>
              <p className="text-gray-600 text-sm">
                Strong potential for property value growth in the coming years.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ChartLine className="mx-auto mb-4 text-yellow-600" size={32} />
              <h3 className="font-semibold text-lg mb-2">
                Direct Highway Connectivity
              </h3>
              <p className="text-gray-600 text-sm">
                Easy access to major roads ensuring smooth travel and connectivity.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}