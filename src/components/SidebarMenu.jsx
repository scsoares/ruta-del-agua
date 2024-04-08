import { Link } from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <>
      <div
        id="navbar-overlay"
        className="absolute animate-[reveal_0.1s_ease-in-out] bg-black/30 w-screen h-screen top-0 left-0 z-40 lg:hidden"
      ></div>
      <div
        id="navbar-mobile"
        className="absolute animate-[slide_0.5s_ease-in-out] w-screen h-screen bg-white z-50 lg:hidden"
      >
        <div className="flex items-center justify-center my-28">
          <ul className="flex flex-col gap-10 items-center justify-center text-[16px] lg:hidden">
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
        </div>
      </div>
    </>
  );
};
