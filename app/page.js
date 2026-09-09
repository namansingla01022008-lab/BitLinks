import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";


const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className="bg-purple-100">
        <section className="grid grid-cols-1 md:grid-cols-2 h-[84vh] bg-purple-100">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className={`text-lg md:text-xl lg:text-3xl font-bold ${poppins.className} text-center`}>
              The Best URL shortener in the Market
            </p>

            <p className="md:px-20 lg:px-24 xl:px-32 text-center">
              We are the most straightforward URL Shortener in the world. Most of the url
              shorteners will track you or ask you to give your details for login. We
              understand your needs and hence we have created this URL shortener
            </p>
            <div className='flex gap-3'>
              <Link href="/shorten">
                <button className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer'>Try Now</button>
              </Link>

              <Link href="/github" target="_blank">
                <button className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer'>GitHub</button>
              </Link>
            </div>
          </div>

          <div className="flex justify-start relative">
            <Image
              className="mix-blend-darken"
              alt="an Image of a vector"
              src={"/vector.png"}
              fill={true}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
