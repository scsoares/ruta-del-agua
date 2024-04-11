import photos from "../services/photos/photos.js";
import { Link } from "react-router-dom";
import { SidebarMenu } from "./SidebarMenu.jsx";
import { useState } from "react";

export const HeaderHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <SidebarMenu />}
      <header>
        <div className="relative flex flex-col bg-[#EDEDED] bg-[url('../../public/images/header-image-3.png')] bg-cover w-screen h-[650px] xl:h-[1000px]">
          <div
            id="navbar"
            className="flex justify-between lg:justify-around xl:justify-around items-center py-[20px] px-[20px] text-[#EDEDED]"
          >
            <div className="w-[120px] xl:w-[200px]">
              <img
                className="object-cover"
                src={`/images/${photos[11].fileName}`}
                alt="City Hall Logo"
              ></img>
            </div>

            <span className="hidden font-[Ergisa] lg:flex lg:text-base lg:ml-20 xl:flex xl:text-2xl capitalize">
              Ruta Del Agua De Telde
            </span>

            <ul className="hidden gap-12 text-[16px] tracking-widest lg:gap-10 lg:flex lg:text-[12px] xl:flex">
              <li className="hover:underline hover:underline-offset-8 hover:decoration-wavy">
                <Link to="/about-project">Sobre</Link>
              </li>
              <li className="hover:underline hover:underline-offset-8 hover:decoration-wavy">
                <Link to="/photos">Fotos</Link>
              </li>
              <li className="hover:underline hover:underline-offset-8 hover:decoration-wavy">
                <Link to="/about-route">Historia</Link>
              </li>
            </ul>

            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="w-[50px] xl:w-[238px] lg:hidden xl:hidden"
            >
              <img
                className="object-cover"
                src={`/images/${photos[9].fileName}`}
                alt="Menu icon"
              ></img>
            </div>
          </div>

          <span className="flex flex-wrap text-[#EDEDED] font-[Ergisa] mt-16 xl:mt-40 text-center xl:leading-tight text-[2.3rem] mx-10 xl:mx-40  lg:text-[90px] xl:text-[130px] animate-[reveal_2s_ease-in-out]">
            Ruta del agua de Telde
          </span>

          <button className="flex transition ease-in-out delay-400 hover:bg-[#EDEDED] hover:text-black text-[12px] xl:text-[20px] text-[#EDEDED] border border-[#EDEDED] py-2 px-8 mt-48 lg:mt-24 rounded-full self-center animate-[reveal_3s_ease-in-out]">
            MÁS INFORMACCIÓN
          </button>
        </div>
      </header>
    </>
  );
};
