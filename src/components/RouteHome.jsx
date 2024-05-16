import photos from "../services/photos/photos.js";
import { IoIosArrowRoundForward } from "react-icons/io";
import useIsVisible from "../services/useIsVisible.js";
import { useRef } from "react";

export const RouteHome = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <section>
        <div className="flex flex-col gap-5 items-center justify-center h-auto w-screen my-24">
          <span className="font-[Ergisa] text-3xl capitalize">La ruta</span>

          <div className="flex flex-row items-center justify-center">
            <span>Ver todo</span>
            <IoIosArrowRoundForward size={32} />
          </div>

          <div className="flex flex-col lg:flex-row xl:flex-row gap-10 mt-10">
            <div
              ref={ref1}
              className={`relative text-center transition-opacity ease-in-out duration-1000 ${
                isVisible1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="h-[300px] w-[300px] hover:scale-110 xl:hover:scale-110 object-cover rounded-full hover:transition-all hover:ease-in-out hover:duration-1000 object-left-top opacity-50"
                src={`/images/${photos[8].fileName}`}
                alt="Photo 1"
              />
              <div className="absolute font-[Ergisa] top-[45%] left-[25%] text-3xl text-[#101010]">
                HISTORIA
              </div>
            </div>

            <div
              ref={ref2}
              className={`transition-opacity ease-in-out duration-1000 ${
                isVisible2 ? "opacity-100" : "opacity-0"
              } relative`}
            >
              <img
                className="h-[300px] w-[300px]  hover:scale-110 xl:hover:scale-110 object-cover rounded-full hover:transition-all hover:ease-in-out hover:duration-1000 object-left-top opacity-50"
                src={`/images/${photos[2].fileName}`}
                alt="Photo 1"
              />
              <div className="absolute font-[Ergisa] top-[45%] left-[15%] text-3xl text-[#181818]">
                NATURALEZA
              </div>
            </div>

            <div
              ref={ref3}
              className={`transition-opacity ease-in-out duration-1000 ${
                isVisible3 ? "opacity-100" : "opacity-0"
              } relative`}
            >
              <img
                className="h-[300px] w-[300px] hover:scale-110 xl:hover:scale-110 object-cover rounded-full hover:transition-all hover:ease-in-out hover:duration-1000 object-left-top opacity-50"
                src={`/images/${photos[18].fileName}`}
                alt="Photo 1"
              />
              <div className="absolute font-[Ergisa] top-[45%] left-[28%] text-3xl text-[#181818]">
                CULTURA
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
