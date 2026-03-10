export default async function ProjectPage({ params }) {

  const { slug } = await params

  const properties = [
    {
      slug: "residential-layout-bokhara",
      title: "Residential Layout Bokhara",
      image: "/images/bokhara.png",
      location: "Bokhara, Nagpur",
      description: "Premium residential plots in a rapidly developing location."
    }
  ]

  const project = properties.find(
    (p) => p.slug === slug
  )

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">

      <img src={project.image} className="w-full rounded-xl mb-8"/>

      <h1 className="text-3xl font-bold mb-4">
        {project.title}
      </h1>

      <p className="text-gray-600 mb-4">
        📍 {project.location}
      </p>

      <p>{project.description}</p>

    </div>
  )
}