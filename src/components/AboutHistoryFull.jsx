import { useRef } from "react";
import photos from "../services/photos/photos.js";
import useIsVisible from "../services/useIsVisible.js";

export const AboutHistoryFull = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center h-[1000px] lg:h-[800px] xl:h-[300px] mt-[10%]">
        <span className="font-[Ergisa] text-center text-3xl max-w-96 lg:max-w-full normal-case">
          La historia de Telde
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
                src={`/images/${photos[8].fileName}`}
                alt="Telde antiga"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-justify lg:mt-10 xl:mt-10 pt-10 pb-48 px-10 lg:px-48 xl:px-48 xl:text-start">
        <p className="text-[16px] normal-case">
          La Ciudad de Telde se encuentra situada en el sureste de la Isla de
          Gran Canaria a 14 kms. de Las Palmas de Gran Canaria. Con más de 650
          años de existencia, fue en 1351 y tras la promulgación de la bula
          pontificia “Coelestis Rex Regum” cuando se crea en su solar la primera
          diócesis de las Afortunadas y se le enviste con título de Ciudad.
          Telde fue cabeza de uno de los dos Guanartematos o reinos en los que
          se dividió la Isla durante décadas. Al concluir la conquista
          castellana en 1483, se erigió una urbe de nuevo cuño dedicada casi por
          entero a la agricultura y al comercio de la caña de azúcar. Su
          primacía económica y la pujanza de una sociedad de hombres
          emprendedores hicieron de Telde una zona rica y próspera con una
          notable vida social y cultural.
          <br />
          <br />
          Los 101 Km2 de este municipio sin duda le acercarán al verdadero
          corazón de la canariedad, pues esta antigua urbe conserva uno de los
          patrimonios paisajísticos, arqueológicos e histórico- artísticos más
          ricos del archipiélago. Esta ciudad, segunda en importancia de Gran
          Canaria, se acerca a los 100.000 habitantes, de los que un 60% tiene
          menos de treinta años. Centro industrial y mercantil de primer orden,
          se caracteriza por la recuperación del paisaje urbano, además de sus
          grandes espacios de ocio y equipamientos culturales y deportivos.
        </p>
      </div>
    </>
  );
};
