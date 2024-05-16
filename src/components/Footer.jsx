import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRssSquare } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col h-auto py-24 border-t-2 border-[#D9D9D9] gap-20">
          <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-around xl:px-48 gap-20 ">
            <div className="flex flex-col items-center justify-center gap-5">
              <span className="font-[Ergisa] text-xl">GENERAL</span>
              <ul className="flex flex-col justify-center text-center gap-4 text-xs cursor-pointer">
                <Link to="/about-project">Sobre el proyecto</Link>
                <li>Fotos</li>
                <li>Mapa y ubicación</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <span className="font-[Ergisa] text-xl">LA CIUDAD</span>
              <ul className="flex flex-col justify-center text-center gap-4 text-xs cursor-pointer">
                <Link to="/about-history">Historia</Link>
                <Link to="/about-nature">Naturaleza</Link>
                <Link to="/about-culture">Cultura</Link>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <span className="font-[Ergisa] text-xl">SOCIAL</span>
              <ul className="flex flex-col justify-center text-center gap-4 text-xs cursor-pointer">
                <Link to="https://instagram.com">Instagram</Link>
                <Link to="https://facebook.com">Facebook</Link>
                <Link to="https://tiktok.com">Tik Tok</Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="capitalize">© 2024 Made by Sarah Soares. </span>
            <div className="flex gap-5">
              <a href="https://github.com/scsoares">
                <FaGithub size={32} />
              </a>

              <a href="/rss.xml">
                <FaRssSquare size={32} />
              </a>

              <a href="https://www.figma.com/design/sC9Y2U0xJYH7xFiKhLSpwm/S%C3%B8lve---Ecommerce-%26-Shop-Website---Webflow-Template-(Community)?node-id=0-1">
                <FaFigma size={32} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
