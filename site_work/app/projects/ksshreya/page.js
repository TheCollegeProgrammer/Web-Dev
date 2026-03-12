import ImageCarousel from "@/components/ImageCarousel"
import Image from "next/image";

import { Route, Trophy, Hospital, Trees, School, GraduationCap } from "lucide-react";
export default function Page() {
  return (
    <div className="text-gray-700">

      {/* HERO */}

      <section
        className="h-[380px] flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/images/ks-layout.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center">
          <h1 className="text-5xl font-semibold mb-3">Project</h1>

          <div className="w-20 h-[3px] bg-blue-400 mx-auto mb-4"></div>

          <p className="text-xl">K.S.Shreya Home's</p>
        </div>

      </section>


      {/* INFO */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

          {/* IMAGE */}

          <div className="w-full">
            <img
              src="/images/KSShreya.png"
              alt="K.S. Shreya Homes"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>


          {/* TEXT */}

          <div>

            <h2 className="text-3xl font-semibold text-blue-700 mb-2">
              K.S. Shreya Homes
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Marketed by Success Infra Estate
            </p>

            <p className="text-gray-600 leading-relaxed text-[16px] max-w-lg">
              Located in Jamtha near the National Cancer Institute, K.S. Shreya Homes
              offers NMRDA-approved and RERA-registered residential plots with modern
              amenities and excellent connectivity.

              The project is surrounded by growing infrastructure and planned
              development, making it a strong choice for both comfortable living
              and long-term investment.
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

          <div className="flex justify-center mt-4 mb-12">

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">

              <img
                src="/images/ks-plan-new.png"
                alt="Project Layout"
                className="max-w-xl w-full rounded-lg"
              />

            </div>

          </div>

          {/* Highlight Cards */}

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Location</h4>
              <p className="text-gray-600">Near VCA Stadium, Jamtha</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Project Type</h4>
              <p className="text-gray-600">Residential Plots</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Plot Sizes</h4>
              <p className="text-gray-600">1000 – 1500 sq ft</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Phases</h4>
              <p className="text-gray-600">Phase 1</p>
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
                src="/images/ksshreya-map.png"
                alt="Project Location Map"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>


            {/* RIGHT SIDE - ADVANTAGES */}

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <Route className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">Nagpur Highway</p>
                  <p className="text-gray-500 text-sm">5 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <Trophy className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">VCA Stadium</p>
                  <p className="text-gray-500 text-sm">4 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <Hospital className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">National Cancer Institute</p>
                  <p className="text-gray-500 text-sm">7 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <Trees className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">Oxygen Bird Park</p>
                  <p className="text-gray-500 text-sm">10 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <School className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">St. Vincent Pallotti Engineering College</p>
                  <p className="text-gray-500 text-sm">12 min drive</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                <GraduationCap className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold">IIM Nagpur</p>
                  <p className="text-gray-500 text-sm">12 min drive</p>
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

      <ImageCarousel />


      {/* WHY INVEST */}

      <section className="py-16 bg-gray-100">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-10">
            Why Invest in Mauli Niwasa?
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>Rapidly developing location</li>
            <li>Direct highway connectivity</li>
            <li>Affordable residential plots</li>
            <li>High future appreciation</li>

          </ul>

        </div>

      </section>

    </div>
  )
}