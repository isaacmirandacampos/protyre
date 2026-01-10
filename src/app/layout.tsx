import { PrismicPreview } from "@prismicio/next";
import { repositoryName, createClient } from "@/prismicio";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { Lato } from 'next/font/google'

const lato = Lato({ weight: '400', subsets: ['latin'] })



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const homeData = await client.getSingle('home');
  const catalogoLink = homeData.data.catalogo_de_download;

  return (
    <html lang="pt-BR">
      <body className={"antialiased text-zinc-900 bg-black flex flex-col ".concat(lato.className)}>
        <Header catalogoLink={catalogoLink} />
        <main className="flex-grow relative bg-white">
          {children}
        </main>
        <Footer catalogoLink={catalogoLink} />
        <PrismicPreview
          repositoryName={repositoryName}
        />
      </body>
    </html>
  );
}
