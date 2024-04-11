import useIsVisible from "../services/useIsVisible.js";
import { useRef } from "react";

export const AboutProject = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <>
      <section>
        <div
          ref={ref1}
          className={`transition-opacity ease-in-out duration-1000 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-auto flex flex-col lg:flex-row xl:flex-row px-10 py-36 gap-20 justify-center xl:justify-between items-center border-b-2 border-[#D9D9D9]">
            <span className="font-[Ergisa] text-3xl capitalize">
              Sobre el proyecto
            </span>

            <p className="text-[16px] text-justify indent-10 normal-case">
              Mauris cursus mattis molestie a iaculis at erat pellentesque
              adipiscing. Netus et malesuada fames ac turpis egestas integer
              eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel
              fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas
              dui id ornare arcu odio ut. Felis donec et odio pellentesque diam
              volutpat commodo sed egestas. Auctor eu augue ut lectus arcu
              bibendum at varius. Rhoncus mattis rhoncus urna neque viverra
              justo nec ultrices. Aenean euismod elementum nisi quis eleifend.
              Vitae purus faucibus ornare suspendisse sed nisi lacus. Mattis
              enim ut tellus elementum sagittis. Lectus quam id leo in vitae
              turpis. Lobortis scelerisque fermentum dui faucibus in ornare
              quam. Proin fermentum leo vel orci porta non pulvinar. Diam
              phasellus vestibulum lorem sed risus ultricies. Quisque egestas
              diam in arcu cursus. Morbi tincidunt ornare massa eget egestas.
              Scelerisque eu ultrices vitae auctor eu.
            </p>

            <button className="transition ease-in-out delay-400 hover:bg-[#181818] hover:text-[#EDEDED] text-[12px] xl:text-[20px] text-[#] py-2 px-8 border border-[#181818] rounded-full">
              LEER MÁS
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
