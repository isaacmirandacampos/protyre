import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased text-zinc-900 bg-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-white">
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
