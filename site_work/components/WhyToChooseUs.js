export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100">

      <h2 className="text-3xl font-semibold text-center mb-12">
        WHY CHOOSE US
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">

        {/* Renting */}
        <div className="relative w-[300px] h-[260px] rounded-lg overflow-hidden group">

          <img
            src="/images/rent.jpg"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              Renting
            </h3>

            <p className="text-sm">
              Need a place to rent? Our rental experts will assist you in
              finding the ideal rental property.
            </p>

          </div>

        </div>

        {/* Buying */}
        <div className="relative w-[300px] h-[260px] rounded-lg overflow-hidden group">

          <img
            src="/images/buy.jpg"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              Buying
            </h3>

            <p className="text-sm">
              Looking to buy your dream home? Our team will guide you
              through the process and help you find the perfect property.
            </p>

          </div>

        </div>

        {/* Selling */}
        <div className="relative w-[300px] h-[260px] rounded-lg overflow-hidden group">

          <img
            src="/images/sell.jpg"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              Selling
            </h3>

            <p className="text-sm">
              Ready to sell your property? We'll help market your home
              effectively and attract qualified buyers.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}