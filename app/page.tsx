import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="sticky bg-gray-50 top-0 z-50 w-full">
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
      <main className="max-w-[80%] md:container mx-auto  overflow-hidden ">
        <div className="w-full">
          <h1 className="text-xl text-center font-poppins font-bold text-gray-900 py-8">
            Online Youtube Downloader
          </h1>
          <input
            type="text"
            placeholder="Enter Youtube URL"
            className="block outline-none w-full p-3 font-poppins text-gray-600 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 "
          />
          <div className="flex justify-center items-center py-8 ">
            <button className="bg-blue-500 w-1/2 py-2 rounded-md text-white text-lg font-poppins tracking-wide">
              Download
            </button>
          </div>
        </div>
        <div className="grid gap-y-3">
          {/* Image and title */}
          <div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src="https://i.ytimg.com/vi/F6l2Bmh7Dq4/hqdefault.jpg"
                alt="thumbnail"
                className="w-full rounded-md"
              />

              <h1 className="text-base text-center font-medium text-gray-900">
                OSINT social media- Are you crazy to share so much information
                online 😱
              </h1>
              <p className="text-sm font-poppins text-gray-500">David Bombal</p>
            </div>
          </div>
          {/* Resolution */}
          <div className="flex justify-between items-center">
            <button className="flex flex-col items-center outline-none rounded-lg py-1">
              <h1>360p</h1>
              <p className="text-gray-500 text-sm font-poppins">MP4</p>
            </button>
            <button className="flex flex-col items-center outline-none rounded-lg py-1">
              <h1>720p</h1>
              <p className="text-gray-500 text-sm font-poppins">MP4</p>
            </button>
            <button className="flex flex-col items-center outline-none rounded-lg py-1">
              <h1>1080p</h1>
              <p className="text-gray-500 text-sm font-poppins">MP4</p>
            </button>
          </div>
        </div>
      </main>
      <footer className="h-screen"></footer>
    </>
  );
}
