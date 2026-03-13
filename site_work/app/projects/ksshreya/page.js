import ImageCarousel from "@/components/ImageCarousel"
import { TrendingUp, Map, Home, ChartLine } from "lucide-react"
import Image from "next/image"

import { Route, Trophy, Hospital, Trees, School, GraduationCap } from "lucide-react"

export default function Page() {
  return (
    <div className="text-gray-700 dark:text-gray-300">

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

      <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

          <div className="w-full">
            <img
              src="/images/KSShreya.png"
              alt="K.S. Shreya Homes"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>

          <div>

            <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              K.S. Shreya Homes
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Marketed by Success Infra Estate
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[16px] max-w-lg">
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

      <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-center mb-2">
            Project Highlights
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-center mb-2">
            Key details of the project layout and specifications
          </p>

          <div className="flex justify-center mt-4 mb-12">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">

              <img
                src="/images/ks-plan-new.png"
                alt="Project Layout"
                className="max-w-xl w-full rounded-lg"
              />

            </div>

          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">Near VCA Stadium, Jamtha</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Project Type</h4>
              <p className="text-gray-600 dark:text-gray-400">Residential Plots</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Plot Sizes</h4>
              <p className="text-gray-600 dark:text-gray-400">1000 – 1500 sq ft</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-1">Phases</h4>
              <p className="text-gray-600 dark:text-gray-400">Phase 1</p>
            </div>

          </div>

        </div>

      </section>


      {/* AMENITIES */}

      <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-center mb-4">
            Project Amenities
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-center mb-12">
            Essential infrastructure and lifestyle amenities available in the project
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="grid grid-cols-2 gap-6 text-[18px]">

              {["Cement Road","Sewage Lines","Electricity","Garden Area","Water Line"].map((item)=>(
                <div key={item} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex items-center gap-3">
                  <span className="text-green-600 text-xl">✔</span>
                  <p>{item}</p>
                </div>
              ))}

            </div>

            <div className="grid grid-cols-2 gap-5">

              <img src="/images/water-line.webp"
                className="rounded-xl shadow-md w-full h-[200px] object-cover hover:scale-105 transition"/>

              <img src="/images/cement-road.jpg"
                className="rounded-xl shadow-md w-full h-[200px] object-cover hover:scale-105 transition"/>

              <img src="/images/garden.jpg"
                className="rounded-xl shadow-lg col-span-2 w-full h-[220px] object-cover hover:scale-105 transition"/>

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
                src="/images/ksshreya-map.png"
                alt="Project Location Map"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">

              {[
                {icon:Route,title:"Nagpur Highway",time:"5 min drive"},
                {icon:Trophy,title:"VCA Stadium",time:"4 min drive"},
                {icon:Hospital,title:"National Cancer Institute",time:"7 min drive"},
                {icon:Trees,title:"Oxygen Bird Park",time:"10 min drive"},
                {icon:School,title:"St. Vincent Pallotti Engineering College",time:"12 min drive"},
                {icon:GraduationCap,title:"IIM Nagpur",time:"12 min drive"},
              ].map((item,i)=>(
                <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300"/>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.time}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


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
            Why Invest in K.S.Shreya Home's?
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