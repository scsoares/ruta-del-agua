import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRssSquare } from "react-icons/fa";

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
              <span className="font-[Ergisa] text-xl">LA RUTA</span>
              <ul className="flex flex-col justify-center text-center gap-4 text-xs cursor-pointer">
                <li>Historia</li>
                <li>Naturaleza</li>
                <li>Cultura</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <span className="font-[Ergisa] text-xl">SOCIAL</span>
              <ul className="flex flex-col justify-center text-center gap-4 text-xs cursor-pointer">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Tik Tok</li>
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
