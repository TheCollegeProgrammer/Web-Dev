export default function Hero() {
  return (
    <section
      className="relative h-screen bg-center bg-cover bg-fixed"
      style={{ backgroundImage: "url('/images/villa.jpg')" }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Find Your Dream Property
        </h1>

        <p className="text-lg mb-8 max-w-xl">
          Premium villas, apartments and plots in prime locations
        </p>

        <a
          href="#properties"
          className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Explore Properties
        </a>

      </div>

    </section>
  )
}