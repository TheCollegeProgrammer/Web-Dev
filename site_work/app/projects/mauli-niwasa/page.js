import ImageCarousel from "@/components/ImageCarousel"
export default function Page() {
  return (
    <div>

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

          <div className="w-16 h-[3px] bg-blue-400 mx-auto mb-4"></div>

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

      <section className="py-16 bg-black">

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

      </section>

      <ImageCarousel />

    </div>
  )
}