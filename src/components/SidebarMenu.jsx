import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

// eslint-disable-next-line react/prop-types
export const SidebarMenu = ({ isOpen, setIsOpen }) => {
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          id="navbar-overlay"
          className="absolute animate-[reveal_0.3s_ease-in-out] bg-black/40 w-screen h-screen top-0 left-0 z-40 lg:hidden"
        ></div>
      )}
      <div
        id="navbar-mobile"
        className={`absolute animate-[slide_0.5s_ease-in-out] w-4/6 h-screen bg-[#EDEDED] z-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div onClick={closeMenu} className="ml-[220px] mt-[20px]" type="button">
          <TfiClose />
        </div>
        <div className="flex items-center justify-center my-28">
          <ul className="flex flex-col gap-10 items-center justify-center text-[16px] tracking-widest text-[#181818] lg:hidden">
            <li className="active:underline active:underline-offset-8 active:decoration-wavy">
              <Link to="/about-project">Sobre</Link>
            </li>
            <li className="active:underline active:underline-offset-8 active:decoration-wavy">
              <Link to="/photos">Fotos</Link>
            </li>
            <li className="active:underline active:underline-offset-8 active:decoration-wavy">
              <Link to="/about-route">Historia</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
