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
          <div className="h-auto flex flex-col lg:flex-row xl:flex-row px-10 py-36 gap-20 lg:px-20 xl:px-72 xl:gap-52 justify-center xl:justify-around items-center border-b-2 border-[#D9D9D9]">
            <span className="font-[Ergisa] text-3xl xl:text-6xl capitalize">
              Sobre el proyecto
            </span>

            <div className="flex flex-col gap-10 items-center xl:items-start justify-center text-justify xl:text-start xl:pl-20">
              <p className="text-[16px] normal-case">
                Mauris cursus mattis molestie a iaculis at erat pellentesque
                adipiscing. Netus et malesuada fames ac turpis egestas integer
                eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel
                fringilla est ullamcorper eget nulla facilisi etiam. Velit
                egestas dui id ornare arcu odio ut. Felis donec et odio
                pellentesque diam volutpat commodo sed egestas. Auctor eu augue
                ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna
                neque viverra justo nec ultrices. <br />
                <br />
                Aenean euismod elementum nisi quis eleifend. Vitae purus
                faucibus ornare suspendisse sed nisi lacus. Mattis enim ut
                tellus elementum sagittis. Lectus quam id leo in vitae turpis.
                <br />
                <br />
                Lobortis scelerisque fermentum dui faucibus in ornare quam.
                Proin fermentum leo vel orci porta non pulvinar. Diam phasellus
                vestibulum lorem sed risus ultricies. Quisque egestas diam in
                arcu cursus. Morbi tincidunt ornare massa eget egestas.
                Scelerisque eu ultrices vitae auctor eu.
              </p>

              <button className="transition ease-in-out delay-400 hover:bg-[#181818] hover:text-[#EDEDED] text-[12px] xl:text-[16px] text-[#] max-w-40 xl:max-w-96 py-2 px-8 border border-[#181818] rounded-full">
                LEER MÁS
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
