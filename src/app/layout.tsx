import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { Lato } from 'next/font/google'

const lato = Lato({ weight: '400', subsets: ['latin'] })



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={"antialiased text-zinc-900 bg-black flex flex-col ".concat(lato.className)}>
        <Header />
        <main className="flex-grow relative bg-white">
          {children}
        </main>
        <Footer />
        <PrismicPreview
          repositoryName={repositoryName}
        />
      </body>
    </html>
  );
}
