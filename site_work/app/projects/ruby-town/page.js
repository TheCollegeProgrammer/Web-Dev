import ImageCarousel from "@/components/ImageCarousel"
import BookNowSection from "@/components/BookNowSection"
import ContactUsSection from "@/components/ContactUsSection"
import { TrendingUp, Map, Home, ChartLine } from "lucide-react"
import Image from "next/image"

import { Route, School, Landmark, GraduationCap, Hospital } from "lucide-react"
import Contact from "@/components/ContactUsSection"

export default function Page() {
  return (
    <div className="text-gray-700 dark:text-gray-300">

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

      <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

          <div className="w-full">
            <img
              src="/images/ruby-logo.png"
              alt="Ruby Town"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>

          <div>

            <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Ruby Town - Residential & Commercial Plots
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Marketed by Success Infra Estate
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[16px] max-w-lg">
              Ruby Town, located at Bokara, Nagpur, offers RL-sanctioned residential
              and commercial plots in a well-planned layout with direct highway touch
              connectivity. The project is designed with essential amenities and proper
              infrastructure for comfortable living.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[16px] max-w-lg mt-4">
              Surrounded by an established locality and growing development, Ruby Town
              presents a strong opportunity for both residential use and long-term investment.
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
                src="/images/ruby-plan.png"
                alt="Project Layout"
                className="max-w-xl w-full rounded-lg"
              />

            </div>

          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            {[
              {title:"Location",value:"Bokhara, Nagpur"},
              {title:"Project Type",value:"Residential + Commercial Plots"},
              {title:"Plot Sizes",value:"1200 – 3000 sq ft"},
              {title:"Phases",value:"Phase 1"},
            ].map((item,i)=>(
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
              </div>
            ))}

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

              {[
                "Cement Road",
                "Sewage Lines",
                "Underground Electricity",
                "Garden Area",
                "Water Line",
                "Street Light",
                "Entrance Gate",
                "Wall Compound"
              ].map((item)=>(
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
                src="/images/ruby-map.png"
                alt="Project Location Map"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">

              {[
                {icon:Route,title:"Outer Ring Road",time:"2 min drive"},
                {icon:School,title:"New Modern High School",time:"5 min drive"},
                {icon:Landmark,title:"Koradi Temple",time:"15 min drive"},
                {icon:GraduationCap,title:"Jhulelal Institute of Technology",time:"5 min drive"},
                {icon:School,title:"Bhonsala Military School",time:"10 min drive"},
                {icon:Hospital,title:"Central India Nursing School",time:"5 min drive"}
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

      <section>
        < BookNowSection />
      </section>

      <section>
        < ContactUsSection />
      </section>

    </div>
  )
}