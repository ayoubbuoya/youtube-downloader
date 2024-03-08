import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="fixed bg-gray-50 top-0 z-50 w-full">
        <div className="container mx-auto p-3 ">
          <div className="flex items-center justify-between">
            <Link
              className="text-lg font-poppins font-semibold whitespace-nowrap md:font-bold md:text-xl "
              href="/"
            >
              Youtube Downloader
            </Link>

            <Navbar />
          </div>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
