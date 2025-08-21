/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import Footer from "@/components/zFooter/Footer"
import Navbar from "@/components/aaaNavbar/Navbar"
import notFound from "../not-found"
import "../globals.css"

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: any } // Use a more specific type instead of `any`
}) {
  const locales = ["en", "es", "ca", "ar"]

  // Destructure `params` to access `locale`
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  // Fetch messages server-side
  const messages = await getMessages(locale)
  const direction = locale === "ar" ? "rtl" : "ltr"

  return (
    <section lang={locale} dir={direction}>
      <NextIntlClientProvider messages={messages}>
        <header>
          <Navbar />
        </header>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </NextIntlClientProvider>
    </section>
  )
}
