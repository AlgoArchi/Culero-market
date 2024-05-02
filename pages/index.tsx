import Description from "@/components/Home/Description";
import HomeBack from "@/components/Home/HomeBack";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex md:flex-row flex-col min-h-screen w-screen h-screen items-center justify-between xl:pl-24 pl-16 pr-12 lg:py-12 py-8 ${inter.className}`}
    >
      <Description />  
      <HomeBack />    
    </main>
  );
}
