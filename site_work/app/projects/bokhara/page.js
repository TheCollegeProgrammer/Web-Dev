import ImageCarousel from "@/components/ImageCarousel"

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

            <section className="py-16 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Project Highlights
                    </h2>

                    <div className="flex justify-center">

                        <img
                            src="/images/mauli-plan.png"
                            alt="Project Layout"
                            className="rounded-xl shadow-lg max-w-3xl w-full"
                        />

                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center mb-12">

                        <div>
                            <h4 className="font-semibold text-lg">Location</h4>
                            <p>Nagpur Highway Road</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg">Project Type</h4>
                            <p>Residential Plots</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg">Plot Sizes</h4>
                            <p>1000 – 1500 sq ft</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg">Phases</h4>
                            <p>Phase 1 & Phase 2</p>
                        </div>

                    </div>

                    {/* CENTER IMAGE */}

                </div>

            </section>


            {/* AMENITIES */}

            <section className="py-16 bg-gray-100">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Project Amenities
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6 text-center">

                        <p>Internal Cement Roads</p>
                        <p>Street Lighting</p>
                        <p>Water Pipeline</p>
                        <p>Drainage System</p>
                        <p>Electricity Connection</p>
                        <p>Garden Area</p>
                        <p>Children Play Area</p>
                        <p>Gated Layout</p>

                    </div>

                </div>

            </section>


            {/* LOCATION ADVANTAGES */}

            <section className="py-16 bg-white">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-center mb-10">
                        Location Advantages
                    </h2>

                    <ul className="space-y-4 text-lg text-gray-700">

                        <li>2 min from Nagpur Highway</li>
                        <li>5 min from Schools</li>
                        <li>8 min from Hospitals</li>
                        <li>10 min from Market Area</li>
                        <li>20 min from Railway Station</li>

                    </ul>

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