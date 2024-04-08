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
        <div className="flex flex-col bg-[url('../../public/images/header-image.png')] bg-cover w-screen h-[450px] lg:h-[1000px]">
          <div
            id="navbar"
            className="flex justify-between lg:justify-around items-center py-[20px] px-[20px] text-white"
          >
            <div className="w-[120px] lg:w-[238px] lg:h-[90px]">
              <img
                className="object-cover"
                src={`/images/${photos[11].fileName}`}
                alt="City Hall Logo"
              ></img>
            </div>

            <span className="hidden font-[Ethereal] lg:flex lg:text-2xl capitalize">
              Ruta Del Agua De Telde
            </span>

            <ul className="hidden gap-20 text-[16px] lg:flex">
              <li>
                <Link to="/about-project">Sobre</Link>
              </li>
              <li>
                <Link to="/photos">Fotos</Link>
              </li>
              <li>
                <Link to="/about-route">Historia</Link>
              </li>
            </ul>

            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="w-[50px] lg:w-[238px] lg:hidden"
            >
              <img
                className="object-cover"
                src={`/images/${photos[9].fileName}`}
                alt="Menu icon"
              ></img>
            </div>
          </div>

          <span className="flex flex-wrap text-white font-[Ethereal] mt-16 lg:mt-40 text-center text-5xl lg:text-[160px]">
            Ruta del agua de Telde
          </span>

          <button className="flex hover:bg-white hover:text-black text-[12px] lg:text-[24px] text-white border border-white py-2 px-8 mt-24 rounded-full self-center">
            MÁS INFORMACCIÓN
          </button>
        </div>
      </header>
    </>
  );
};
