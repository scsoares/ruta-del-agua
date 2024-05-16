import { useRef } from "react";
import photos from "../services/photos/photos.js";
import useIsVisible from "../services/useIsVisible.js";

export const AboutCultureFull = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center h-[1000px] lg:h-[800px] xl:h-[300px] mt-[10%]">
        <span className="font-[Ergisa] text-center text-3xl max-w-96 lg:max-w-full normal-case">
          La cultura de Telde
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
              className="w-[300px] lg:w-[350px] hover:w-[360px] lg:hover:w-[400px] hover:transition-all hover:ease-in-out hover:duration-1000 cursor-pointer"
            >
              <img
                className="object-cover"
                src={`/images/${photos[18].fileName}`}
                alt="Telde naturaleza"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-justify lg:mt-10 xl:mt-10 pt-10 pb-48 px-10 lg:px-48 xl:px-48 xl:text-start">
        <p className="text-[16px] normal-case">
          Telde posee uno de los conjuntos monumentales y culturales más
          importantes de Canarias, destacando sus centros fundacionales donde se
          combina la sencillez del Mudéjar con otros estilos arquitectónicos. En
          la zona fundacional de San Juan, se encuentra la Basílica Menor, que
          mezcla el gótico del siglo XVI con torres neogóticas del siglo XX y
          alberga valiosos retablos barrocos. Además, este núcleo histórico está
          rodeado de plazas, alamedas y casas nobles que reflejan la riqueza
          arquitectónica de la ciudad.
          <br />
          <br /> Otro enclave histórico relevante es el barrio de San Francisco,
          conocido por su arquitectura tradicional con casas pequeñas, encaladas
          y calles empedradas. Aquí se encuentra la Iglesia Conventual de San
          Francisco, una construcción sencilla que alberga arte barroco. Los
          Llanos de San Gregorio, actualmente una zona comercial, destacan por
          la Iglesia de San Gregorio Taumaturgo de estilo neoclásico y la
          renovada Plaza de San Gregorio. Telde también ofrece museos y centros
          culturales, como la Casa-Museo de León y Castillo y el Museo de Arte
          Sacro, que conservan el legado histórico y artístico de la región.
        </p>
      </div>
    </>
  );
};
