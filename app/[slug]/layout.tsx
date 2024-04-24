import "./global.css";

export const metadata = {
  title: "Next.js Forms Example",
  description: "Example application with forms and Postgres.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  /**
   * Take the domains from the constants and
   * generate the static paths using domain + locales
   */
  const paths = ["test", "second"].flatMap((entry) => ({
    slug: entry,
  })
      
  )
  return paths
}
