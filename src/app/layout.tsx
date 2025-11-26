import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview
        repositoryName={repositoryName}
        writeToken={process.env.PRISMIC_WRITE_TOKEN}
      />
    </html>
  );
}
