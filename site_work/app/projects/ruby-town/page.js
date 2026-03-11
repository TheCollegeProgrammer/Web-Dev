import ImageCarousel from "@/components/ImageCarousel"

export default function Page() {
    return (
        <div className="text-gray-700">

            {/* HERO */}

            <section
                className="h-[450px] flex items-center justify-center text-white relative"
                style={{
                    backgroundImage: "url('/images/ruby-cover.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative text-center">
                    <h1 className="text-5xl font-semibold mb-3">Project</h1>

                    <div className="w-20 h-[3px] bg-blue-400 mx-auto mb-4"></div>

                    <p className="text-xl">Ruby Town</p>
                </div>

            </section>


            {/* INFO */}

            <section className="py-20 bg-gray-100">

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

                    {/* IMAGE */}

                    <div className="w-full">
                        <img
                            src="/images/ruby-logo.png"
                            alt="K.S. Shreya Homes"
                            className="rounded-xl shadow-lg w-full object-contain"
                        />
                    </div>


                    {/* TEXT */}

                    <div>

                        <h2 className="text-3xl font-semibold text-blue-700 mb-2">
                            Ruby Town - Residential & Commercial Plots
                        </h2>

                        <p className="text-sm text-gray-500 mb-4">
                            Marketed by Success Infra Estate
                        </p>

                        <p className="text-gray-600 leading-relaxed text-[16px] max-w-lg">
                            Ruby Town, located at Bokara, Nagpur, offers RL-sanctioned residential
                            and commercial plots in a well-planned layout with direct highway touch
                            connectivity. The project is designed with essential amenities and proper
                            infrastructure for comfortable living.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-[16px] max-w-lg mt-4">
                            Surrounded by an established locality and growing development, Ruby Town
                            presents a strong opportunity for both residential use and long-term investment.
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
                                src="/images/ruby-plan.png"
                                alt="Project Layout"
                                className="max-w-xl w-full rounded-lg"
                            />

                        </div>

                    </div>

                    {/* Highlight Cards */}

                    <div className="grid md:grid-cols-4 gap-8 text-center">

                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="font-semibold text-lg mb-1">Location</h4>
                            <p className="text-gray-600">Bokhara, Nagpur</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="font-semibold text-lg mb-1">Project Type</h4>
                            <p className="text-gray-600">Residential + Commercial Plots</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="font-semibold text-lg mb-1">Plot Sizes</h4>
                            <p className="text-gray-600">1200 – 3000 sq ft</p>
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
                                <p>Underground Electricity</p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                                <span className="text-green-600 text-xl">✔</span>
                                <p>Garden Area</p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                                <span className="text-green-600 text-xl">✔</span>
                                <p>Water Line</p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                                <span className="text-green-600 text-xl">✔</span>
                                <p>Street Light</p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                                <span className="text-green-600 text-xl">✔</span>
                                <p>Entrance Gate</p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
                                <span className="text-green-600 text-xl">✔</span>
                                <p>Wall Compound</p>
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

                        <div className="w-full h-[380px] rounded-xl overflow-hidden shadow-lg">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d902.3521411842839!2d79.07008570981586!3d21.232154921688327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1773251735373!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </div>


                        {/* RIGHT SIDE - ADVANTAGES */}

                        <div className="grid grid-cols-2 gap-6">

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <span className="text-2xl">🛣️</span>
                                <div>
                                    <p className="font-semibold">Outer Ring Road</p>
                                    <p className="text-gray-500 text-sm">2 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <span className="text-2xl">🏫</span>
                                <div>
                                    <p className="font-semibold">New Modern High School</p>
                                    <p className="text-gray-500 text-sm">5 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <span className="text-2xl">🛕</span>
                                <div>
                                    <p className="font-semibold">Koradi Temple</p>
                                    <p className="text-gray-500 text-sm">15 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <span className="text-2xl">🎓</span>
                                <div>
                                    <p className="font-semibold">Jhulelal Institute of Technology</p>
                                    <p className="text-gray-500 text-sm">5 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <span className="text-2xl">🏫</span>
                                <div>
                                    <p className="font-semibold">Bhonsala Military School</p>
                                    <p className="text-gray-500 text-sm">10 min drive</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
                                <span className="text-2xl">🏥</span>
                                <div>
                                    <p className="font-semibold">Central India Nursing School</p>
                                    <p className="text-gray-500 text-sm">5 min drive</p>
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