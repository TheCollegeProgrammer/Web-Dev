import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export const metadata = {
  title: "Success Infra Estate",
  description: "Find your dream property with our trusted real estate agency",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}