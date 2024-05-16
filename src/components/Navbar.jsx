import photos from "../services/photos/photos.js";
import { SidebarMenu } from "./SidebarMenu.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <header>
        <div className="relative flex flex-col bg-[url('/images/header-image-3.png')] bg-cover w-screen h-[150px] xl:h-[130px]">
          <div
            id="navbar"
            className="flex justify-between lg:justify-around xl:justify-around items-center py-[20px] px-[20px] text-[#EDEDED]"
          >
            <div className="w-[110px] xl:w-[110px]">
              <img
                className="object-cover"
                src={`/images/${photos[19].fileName}`}
                alt="City Hall Logo"
              ></img>
            </div>

            <Link
              to="/"
              className="hidden font-[Ergisa] lg:flex lg:text-base lg:ml-20 xl:flex xl:text-lg capitalize"
            >
              Ruta Del Agua De Telde
            </Link>

            <ul className="hidden gap-12 text-[16px] tracking-widest lg:gap-10 lg:flex lg:text-[12px] xl:text-[14px] xl:flex">
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
        </div>
      </header>
    </>
  );
};
