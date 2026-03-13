export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-200">
        WHY TO CHOOSE US ?
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">

        {/* Renting */}
        <div className="relative w-[300px] h-[260px] rounded-lg overflow-hidden group">

          <img
            src="/images/counsaltancy.jpg"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              Expert Property Consultancy
            </h3>

            <p className="text-sm">
              Our experienced consultants guide you through every step of the property buying process.
              We help you choose the right investment based on your budget, location preference,
              and future growth potential.
            </p>

          </div>

        </div>

        {/* Buying */}
        <div className="relative w-[300px] h-[260px] rounded-lg overflow-hidden group">

          <img
            src="/images/legel.jpg"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              100% Legal & Verified Projects
            </h3>

            <p className="text-sm">
              All our projects are legally verified with proper documentation.
              We ensure that plots are sanctioned and RERA registered so you can invest
              with complete confidence and peace of mind.
            </p>

          </div>

        </div>

        {/* Selling */}
        <div className="relative w-[300px] h-[260px] rounded-lg overflow-hidden group">

          <img
            src="/images/home-loan.jpg"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

          <div className="relative text-white p-6 text-center flex flex-col justify-center h-full">

            <h3 className="text-xl font-semibold mb-3">
              Easy Home Loan Assistance
            </h3>

            <p className="text-sm">
              We assist you in getting quick and easy home loan approvals through trusted banks
              and financial institutions, making your property purchase smooth and hassle-free.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}