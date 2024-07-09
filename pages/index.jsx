import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import {AsideDer} from "../components/AsideDer";
import {LeftSideBar} from "../components/AsideIzq";
import Content from "../components/Contenido";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid grid-col w-full bg-stone-100">
        <NavBar/>
       
        <section className="flex flex-row  gap-4 p-4 mt-2">
          <div className="w-min-[200x] max-w-[300px] ">
             <LeftSideBar/></div>
          <div className="min-w-[500px]">
            <Content/>
          </div>
          <div className="min-w-64 max-w-80">
            <AsideDer/>
          </div>
        </section>
      </main>
    );
  }