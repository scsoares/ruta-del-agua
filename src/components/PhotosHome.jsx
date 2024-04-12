import photos from "../services/photos/photos.js";
import useIsVisible from "../services/useIsVisible.js";
import { useRef } from "react";

export const PhotosHome = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);

  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);

  return (
    <>
      <section>
        <div
          ref={ref1}
          className={`transition-opacity ease-in-out duration-1000 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative overflow-hidden flex flex-col items-center justify-between py-20 xl:justify-evenly xl:py-72 h-[1400px] xl:h-[850px] w-screen bg-[url('../../public/images/photos-bg.png')] bg-cover">
            <span className="text-[#ededed] font-[Ergisa] capitalize text-3xl xl:text-[210px]">
              Fotos
            </span>

            <div
              ref={ref2}
              className={`transition-opacity ease-in-out duration-[1500ms] ${
                isVisible2 ? "opacity-100" : "opacity-0"
              } absolute top-48 xl:top-[500px] -left-10`}
            >
              <div className="">
                <img
                  className="h-[200px] xl:h-[300px] w-[200px] xl:w-[300px] hover:h-[220px] hover:w-[220px] xl:hover:h-[320px] xl:hover:w-[320px] object-cover rounded-full hover:transition-all hover:ease-in-out hover:duration-1000"
                  src={`/images/${photos[3].fileName}`}
                  alt="Photo 1"
                ></img>
              </div>
            </div>

            <div
              ref={ref3}
              className={`transition-opacity ease-in-out duration-[2000ms] ${
                isVisible3 ? "opacity-100" : "opacity-0"
              } absolute top-[400px] xl:top-[100px] -right-10 xl:left-[200px]`}
            >
              <div className="">
                <img
                  className="h-[250px] w-[250px] hover:h-[270px] hover:w-[270px] object-cover rounded-full hover:transition-all hover:ease-in-out hover:duration-1000"
                  src={`/images/${photos[4].fileName}`}
                  alt="Photo 2"
                ></img>
              </div>
            </div>

            <div
              ref={ref4}
              className={`transition-opacity ease-in-out duration-[2500ms] ${
                isVisible4 ? "opacity-100" : "opacity-0"
              } absolute top-[700px] xl:top-[400px] -left-10 xl:left-[1500px]`}
            >
              <div className="">
                <img
                  className="h-[200px] w-[200px] hover:h-[220px] hover:w-[220px] object-cover rounded-full hover:transition-all hover:ease-in-out hover:duration-1000"
                  src={`/images/${photos[0].fileName}`}
                  alt="Photo 1"
                ></img>
              </div>
            </div>

            <div
              ref={ref5}
              className={`transition-opacity ease-in-out duration-[3000ms] ${
                isVisible5 ? "opacity-100" : "opacity-0"
              } absolute top-[900px] -right-10 xl:right-[300px] xl:top-[140px]`}
            >
              <div className="">
                <img
                  className="h-[250px] w-[250px] hover:h-[270px] hover:w-[270px] object-cover rounded-full hover:transition-all hover:ease-in-out hover:duration-1000"
                  src={`/images/${photos[5].fileName}`}
                  alt="Photo 2"
                ></img>
              </div>
            </div>

            <div
              ref={ref6}
              className={`transition-opacity ease-in-out duration-[3500ms] ${
                isVisible6 ? "opacity-100" : "opacity-0"
              } absolute right-[800px] xl:-top-[60px] hidden xl:flex`}
            >
              <div className="">
                <img
                  className="h-[250px] w-[250px] hover:h-[270px] hover:w-[270px] object-cover rounded-full hover:transition-all hover:ease-in-out hover:duration-1000"
                  src={`/images/${photos[2].fileName}`}
                  alt="Photo 2"
                ></img>
              </div>
            </div>

            <button className="transition ease-in-out delay-400 hover:bg-[#ededed] hover:text-[#181818] text-[12px] xl:text-[16px] max-w-40 xl:max-w-96 py-2 px-8 border text-[#ededed] border-[#ededed] rounded-full">
              VER MÁS
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
