import ImageCarousel from "@/components/ImageCarousel"
import Image from "next/image";
import { Route, School, GraduationCap, Train, Factory } from "lucide-react"

export default function Page() {
    return (
        <div className="text-gray-700">

            {/* HERO */}

            <section
                className="h-[380px] flex items-center justify-center text-white relative"
                style={{
                    backgroundImage: "url('/images/mauli-layout.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative text-center">
                    <h1 className="text-5xl font-semibold mb-3">Project</h1>

                    <div className="w-20 h-[3px] bg-blue-400 mx-auto mb-4"></div>

                    <p className="text-xl">Mauli Niwasa 36, 37</p>
                </div>

            </section>


            {/* INFO */}

            <section className="py-20 bg-gray-100">

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">

                    <img
                        src="/images/Mauli.png"
                        className="rounded-lg shadow-md w-full"
                    />

                    <div>

                        <h2 className="text-3xl font-semibold text-blue-700 mb-2">
                            Mauli Niwasa 36, 37
                        </h2>

                        <p className="text-sm text-gray-500 mb-6">
                            Marketed By Success Infra Estate
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Mauli Niwasa 36 & 37 is located in a rapidly developing zone with
                            direct highway access, offering excellent connectivity and easy
                            access to daily essentials—making it ideal for both living and
                            investment.
                        </p>

                    </div>

                </div>

            </section>


            {/* PROJECT HIGHLIGHTS */}

            <section className="py-20 bg-gray-100">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Project Highlights
                    </h2>

                    {/* Layout Image */}

                    <div className="flex justify-center mb-16">
                        <img
                            src="/images/mauli-plan.png"
                            alt="Project Layout"
                            className="rounded-xl shadow-xl max-w-4xl w-full border"
                        />
                    </div>


                    {/* Highlight Cards */}

                    <div className="grid md:grid-cols-4 gap-8 text-center">

                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="font-semibold text-lg mb-1">Location</h4>
                            <p className="text-gray-600">Borkhedi, Butibori</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="font-semibold text-lg mb-1">Project Type</h4>
                            <p className="text-gray-600">Residential + Commercial Plots</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="font-semibold text-lg mb-1">Plot Sizes</h4>
                            <p className="text-gray-600">1000 – 3500 sq ft</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="font-semibold text-lg mb-1">Phases</h4>
                            <p className="text-gray-600">Phase 1 & Phase 2</p>
                        </div>

                    </div>

                </div>

            </section>


            {/* AMENITIES */}

            <section className="py-20 bg-gray-100">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-center mb-14">
                        Project Amenities
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* LEFT SIDE - AMENITIES LIST */}

                        <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-[17px]">

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Club House</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Swimming Pool</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Community Hall</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Indoor Games</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Cafe Restaurant</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Cricket Turf</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Basketball Court</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Drainage Line</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Sewage Line with STP</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Water Supply</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Road Plantation</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Gazebo for Yoga</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Jogging Track</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <p>Street Lamps</p>
                            </div>

                        </div>


                        {/* RIGHT SIDE - IMAGE GRID */}

                        <div className="grid grid-cols-2 grid-rows-2 gap-4">

                            {/* SMALL IMAGE 1 */}

                            <img
                                src="/images/hall.png"
                                alt="Amenity"
                                className="rounded-xl shadow-md w-full h-[180px] object-cover hover:scale-105 transition"
                            />

                            {/* LARGE IMAGE */}

                            <img
                                src="/images/cafe.png"
                                alt="Amenities"
                                className="rounded-xl shadow-xl row-span-2 w-full h-full object-cover hover:scale-105 transition"
                            />

                            {/* SMALL IMAGE 2 */}

                            <img
                                src="/images/pool.jpg"
                                alt="Amenity"
                                className="rounded-xl shadow-md w-full h-[180px] object-cover hover:scale-105 transition"
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
                                src="/images/Mauli-map.png"
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
                                    <p className="text-gray-500">2 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <School className="w-6 h-6 text-gray-700" />
                                <div>
                                    <p className="font-semibold">St. Carlet Schools</p>
                                    <p className="text-gray-500">5 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <GraduationCap className="w-6 h-6 text-gray-700" />
                                <div>
                                    <p className="font-semibold">IIIT</p>
                                    <p className="text-gray-500">25 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <Train className="w-6 h-6 text-gray-700" />
                                <div>
                                    <p className="font-semibold">Upcoming Metro</p>
                                    <p className="text-gray-500">5 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <GraduationCap className="w-6 h-6 text-gray-700" />
                                <div>
                                    <p className="font-semibold">Kamla Nehru College</p>
                                    <p className="text-gray-500">5 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <Factory className="w-6 h-6 text-gray-700" />
                                <div>
                                    <p className="font-semibold">MIDC Butibori</p>
                                    <p className="text-gray-500">15 min drive</p>
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