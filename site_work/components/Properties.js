const properties = [
    {
        id: 1,
        title: "Green Valley Villas",
        price: "₹80 Lakh",
        image: "/images/villa.jpg",
        location: "Nagpur"
    },
    {
        id: 2,
        title: "City Heights",
        price: "₹65 Lakh",
        image: "/images/apartment.jpg",
        location: "Pune"
    },
    {
        id: 3,
        title: "Lake View Homes",
        price: "₹72 Lakh",
        image: "/images/villa.jpg",
        location: "Mumbai"
    },
    {
        id: 4,
        title: "Prime Residency",
        price: "₹55 Lakh",
        image: "/images/apartment.jpg",
        location: "Nagpur"
    }
    , {
        id: 5,
        title: "Skyline Towers",
        price: "₹90 Lakh",
        image: "/images/apartment.jpg",
        location: "Delhi"
    }
    , {
        id: 5,
        title: "Skyline Towers",
        price: "₹90 Lakh",
        image: "/images/apartment.jpg",
        location: "Delhi"
    }
]


export default function Properties() {
    return (
        <section id="properties" className="py-16 bg-gray-100">

            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Our Projects
            </h2>
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6">

                {properties.map((property) => (

                    <div
                        key={property.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden w-[260px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >

                        <img
                            src={property.image}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-5">

                            <h3 className="text-lg font-semibold text-gray-900">
                                {property.title}
                            </h3>

                            <p className="text-gray-600">
                                {property.location}
                            </p>

                            <p className="font-bold text-gray-800 mt-1">
                                {property.price}
                            </p>

                            <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                                View Details
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}