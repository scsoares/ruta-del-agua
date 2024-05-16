import { useRef } from "react";
import photos from "../services/photos/photos.js";
import useIsVisible from "../services/useIsVisible.js";

export const AboutNatureFull = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center h-[1000px] lg:h-[800px] xl:h-[300px] mt-[10%]">
        <span className="font-[Ergisa] text-center text-3xl max-w-96 lg:max-w-full normal-case">
          La natureza de Telde
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
                src={`/images/${photos[2].fileName}`}
                alt="Telde naturaleza"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-justify lg:mt-10 xl:mt-10 pt-10 pb-48 px-10 lg:px-48 xl:px-48 xl:text-start">
        <p className="text-[16px] normal-case">
          Desde la majestuosa Caldera de los Marteles hasta el campo de dunas
          fósiles de los Arenales de Tufia, Telde ofrece una geografía diversa y
          llena de hermosos rincones naturales. Los barrancos, que actúan como
          arterias de drenaje, son espacios que albergan ecosistemas con una
          importante diversidad biológica. El Barranco de los Cernícalos, con
          sus 12 km de espectacular orografía, cuenta con cascadas y
          desfiladeros durante todo el año, además de una rica flora y fauna.
          Este entorno natural es ideal para el senderismo y ofrece uno de los
          itinerarios ecológicos más interesantes de Gran Canaria.
          <br />
          <br /> El Bufadero de la Garita es otra formación geológica destacada,
          donde el océano impulsa el agua a través de una oquedad submarina y la
          expulsa por un orificio, creando un espectáculo natural. Telde también
          se extiende hasta el mar, con 10 km de costa que incluyen acantilados
          y playas de lava triturada. Playas como San Borondón y Playa de Ojos
          de Garza son conocidas por su misterio y belleza, mientras que la
          Playa de Melenara, con 600 metros de arena fina y varios años
          galardonada con la Bandera Azul, ofrece servicios excepcionales y un
          paseo marítimo con restaurantes y comercios. <br />
          <br /> Otras playas importantes son La Garita, Las Salinetas, Playa
          del Hombre, Hoya del Pozo, Agua Dulce y Tufia, todas frecuentadas por
          sus buenas condiciones climáticas y la variedad de servicios. Además,
          Telde cuenta con cuidados paseos marítimos para disfrutar caminando a
          lo largo de su costa.
        </p>
      </div>
    </>
  );
};
