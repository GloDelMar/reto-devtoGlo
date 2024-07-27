import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import {AsideDer} from "../components/AsideDer";
import {LeftSideBar} from "../components/AsideIzq";
import Content from "../components/Contenido";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid grid-col w-full bg-stone-100 m-0 p-0 ">
        <NavBar/>
       
        <section className="flex flex-row ml-4">
          <div className="w-min-[200x] max-w-[300px] ">
             <LeftSideBar/></div>
          <div className="w-full mr-4">
            <Content/>
          </div>
          <div className="max-w-[500px] w-[400] mr-4">
            <AsideDer/>
          </div>
        </section>
      </main>
    );
  }