export default function Contact() {
  return (
    <section id="contact" className="p-16 bg-gray-100 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors">
      <h2 className="text-3xl font-bold mb-6">
        Get In Touch
      </h2>

      <p className="mb-6">
        Interested in buying a property? Contact us today.
      </p>
      <div className="flex justify-center gap-4 col-2">
      <a
        href="https://wa.me/8080331005"
        className="bg-green-500 text-white px-6 py-3 rounded-lg"
      >
        Chat on WhatsApp
      </a>
      <a
        href="tel:7887889488"
        className="bg-green-500 text-white px-6 py-3 rounded-lg"
      >
        Call Now !!!
      </a>
      </div>
    </section>
  )
}