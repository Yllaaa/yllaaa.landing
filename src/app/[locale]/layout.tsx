/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/zFooter/Footer";
import Navbar from "@/components/aaaNavbar/Navbar";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: any }; // Use a more specific type instead of `any`
}) {
  // Destructure `params` to access `locale`
  const { locale } = await params;

  // Fetch messages server-side
  const messages = await getMessages(locale);

  return (
    <section lang={locale}>
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
  );
}