import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-col w-full">{children}</section>
      <Footer />
    </main>
  );
}
