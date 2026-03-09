import "./globals.css"

export const metadata = {
  title: "Success Infra Estate",
  description: "Find your dream property with our trusted real estate agency",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}