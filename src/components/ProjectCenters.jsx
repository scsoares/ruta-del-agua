import useIsVisible from "../services/useIsVisible.js";
import photos from "../services/photos/photos.js";
import { useRef } from "react";

export const ProjectCenters = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <section>
        <div className="flex flex-col gap-20 items-center justify-center h-[1000px] lg:h-[800px] xl:h-[700px] border-b-2 border-[#D9D9D9]">
          <span className="font-[Ergisa] text-center text-3xl max-w-96 lg:max-w-full normal-case">
            Un proyecto de los centros
          </span>

          <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-20">
            <div
              ref={ref1}
              className={`transition-opacity ease-in-out duration-1000 ${
                isVisible1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                href=""
                className="w-[200px] lg:w-[250px] hover:w-[260px] lg:hover:w-[300px] hover:transition-all hover:ease-in-out hover:duration-1000 cursor-pointer"
              >
                <img
                  className="object-cover"
                  src={`/images/${photos[13].fileName}`}
                  alt="Logo IES El Rincón"
                ></img>
              </div>
            </div>

            <div
              ref={ref2}
              className={`transition-opacity ease-in-out duration-1000 ${
                isVisible2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                href=""
                className="w-[200px] lg:w-[300px] hover:w-[250px] xl:hover:w-[350px] hover:transition-all hover:ease-in-out hover:duration-1000 cursor-pointer"
              >
                <img
                  className="object-cover"
                  src={`/images/${photos[14].fileName}`}
                  alt="Logo CIFP"
                ></img>
              </div>
            </div>

            <div
              ref={ref3}
              className={`transition-opacity ease-in-out duration-1000 ${
                isVisible3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-[150px] lg:w-[150px] hover:w-[200px] hover:transition-all hover:ease-in-out hover:duration-1000 cursor-pointer">
                <img
                  className="object-cover"
                  src={`/images/${photos[15].fileName}`}
                  alt="Logo Ruta Del Agua"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
