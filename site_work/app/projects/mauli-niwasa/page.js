import ImageCarousel from "@/components/ImageCarousel"
import { TrendingUp, Map, Home, ChartLine } from "lucide-react"
import Image from "next/image"
import { Route, School, GraduationCap, Train, Factory } from "lucide-react"

export default function Page() {
  return (
    <div className="text-gray-700 dark:text-gray-300">

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

      <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">

          <img
            src="/images/Mauli.png"
            className="rounded-lg shadow-md w-full"
          />

          <div>

            <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Mauli Niwasa 36, 37
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Marketed By Success Infra Estate
            </p>

            <p className="leading-relaxed text-lg">
              Mauli Niwasa 36 & 37 is located in a rapidly developing zone with
              direct highway access, offering excellent connectivity and easy
              access to daily essentials—making it ideal for both living and
              investment.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT HIGHLIGHTS */}

      <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Project Highlights
          </h2>

          <div className="flex justify-center mb-16">
            <img
              src="/images/mauli-plan.png"
              alt="Project Layout"
              className="rounded-xl shadow-xl max-w-4xl w-full border dark:border-gray-700"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">Borkhedi, Butibori</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Project Type</h4>
              <p className="text-gray-600 dark:text-gray-400">Residential + Commercial Plots</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Plot Sizes</h4>
              <p className="text-gray-600 dark:text-gray-400">1000 – 3500 sq ft</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Phases</h4>
              <p className="text-gray-600 dark:text-gray-400">Phase 1 & Phase 2</p>
            </div>

          </div>

        </div>

      </section>


      {/* AMENITIES */}

      <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-14">
            Project Amenities
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-[17px]">

              {[
                "Club House","Swimming Pool","Community Hall","Indoor Games",
                "Cafe Restaurant","Cricket Turf","Basketball Court","Drainage Line",
                "Sewage Line with STP","Water Supply","Road Plantation","Gazebo for Yoga",
                "Jogging Track","Street Lamps"
              ].map((item)=>(
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1">✔</span>
                  <p>{item}</p>
                </div>
              ))}

            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4">

              <img
                src="/images/hall.png"
                alt="Amenity"
                className="rounded-xl shadow-md w-full h-[180px] object-cover hover:scale-105 transition"
              />

              <img
                src="/images/cafe.png"
                alt="Amenities"
                className="rounded-xl shadow-xl row-span-2 w-full h-full object-cover hover:scale-105 transition"
              />

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

      <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-14">
            Location Advantages
          </h2>

          <div className="grid md:grid-cols-2 gap-14 items-start">

            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Mauli-map.png"
                alt="Project Location Map"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">

              {[
                {icon:Route,title:"Nagpur Highway",time:"2 min drive"},
                {icon:School,title:"St. Carlet Schools",time:"5 min drive"},
                {icon:GraduationCap,title:"IIIT",time:"25 min drive"},
                {icon:Train,title:"Upcoming Metro",time:"5 min drive"},
                {icon:GraduationCap,title:"Kamla Nehru College",time:"5 min drive"},
                {icon:Factory,title:"MIDC Butibori",time:"15 min drive"}
              ].map((item,i)=>(
                <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500 dark:text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


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

      <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Why Invest in Ruby Town?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[{
              icon:Map,title:"Prime Developing Location",
              text:"Situated in a rapidly growing area with excellent infrastructure development."
            },{
              icon:Home,title:"Affordable Residential Plots",
              text:"Perfect opportunity to own premium plots at competitive prices."
            },{
              icon:TrendingUp,title:"High Future Appreciation",
              text:"Strong potential for property value growth in the coming years."
            },{
              icon:ChartLine,title:"Direct Highway Connectivity",
              text:"Easy access to major roads ensuring smooth travel and connectivity."
            }].map((item,i)=>(
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                <item.icon className="mx-auto mb-4 text-yellow-600" size={32}/>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  )
}