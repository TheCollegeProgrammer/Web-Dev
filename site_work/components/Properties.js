const properties = [
    {
        id: 1,
        title: "Residential Layout Bokhara",
        image: "/images/bokhara.png",
        location: "Bokhara, Nagpur",
        description:
            "Premium residential plots in a rapidly developing and well-connected location.",
    },
    {
        id: 2,
        title: "Ganesh Vatika - 11",
        image: "/images/Ganesh Vatika.png",
        location: "Shankarpur, Nagpur",
        description:
            "Residential plots in a high-growth area with strong connectivity and modern convenience.",
    },
    {
        id: 3,
        title: "Mauli Niwasa 36 & 37",
        image: "/images/Mauli.png",
        location: "Borkhedi - Butibori, Nagpur",
        description:
            "Mauli Niwasa 36 & 37 offers premium residential & commercial plots with modern amenities.",
    },
    {
        id: 4,
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">

                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl w-full max-w-[320px] mx-auto"
                    >
                        {/* Image */}
                        <img
                            src={property.image}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-5">

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {property.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-700 mb-2">
                                {property.description}
                            </p>

                            {/* Location */}
                            <p className="text-sm text-gray-800 mb-4">
                                📍 {property.location}
                            </p>

                            {/* Button */}
                            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full">
                                View Details
                            </button>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}