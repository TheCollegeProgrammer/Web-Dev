import Link from "next/link"

const properties = [
    {
        id: 1,
        slug: "residential-layout-bokhara",
        title: "Residential Layout Bokhara",
        image: "/images/bokhara.png",
        location: "Bokhara, Nagpur",
        description:
            "Premium residential plots in a rapidly developing and well-connected location.",
    },
    {
        id: 2,
        slug: "ganesh-vatika-11",
        title: "Ganesh Vatika - 11",
        image: "/images/Ganesh Vatika.png",
        location: "Shankarpur, Nagpur",
        description:
            "Residential plots in a high-growth area with strong connectivity and modern convenience.",
    },
    {
        id: 3,
        slug: "mauli-niwasa-36-37",
        title: "Mauli Niwasa 36 & 37",
        image: "/images/Mauli.png",
        location: "Borkhedi - Butibori, Nagpur",
        description:
            "Mauli Niwasa 36 & 37 offers premium residential & commercial plots with modern amenities.",
    },
    {
        id: 4,
        slug: "ks-shreya-homes",
        title: "K.S.Shreya Homes",
        image: "/images/KSShreya.png",
        location: "Jamtha, Nagpur",
        description:
            "Residential plots in the city’s fastest-growing corridor with excellent connectivity and development.",
    },
];

export default function Properties() {
    return (
        <section id="properties" className="py-16 bg-gray-100">

            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Our Projects
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 justify-items-center">
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden w-[300px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >

                        {/* Image */}
                        <img
                            src={property.image}
                            className="w-full h-48 object-cover"
                        />

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">

                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {property.title}
                            </h3>

                            <p className="text-sm text-gray-600 mb-2">
                                📍 {property.location}
                            </p>

                            <p className="text-sm text-gray-700 mb-4">
                                {property.description}
                            </p>

                            {/* Button */}
                            <Link href={`/projects/${property.slug}`}>
                                <button className="mt-auto w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                                    View Details
                                </button>
                            </Link>


                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}