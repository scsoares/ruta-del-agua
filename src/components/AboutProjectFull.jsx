import { useRef } from "react";
import photos from "../services/photos/photos.js";
import useIsVisible from "../services/useIsVisible.js";

export const AboutProjectFull = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center h-[1000px] lg:h-[800px] xl:h-[300px] mt-[10%]">
        <span className="font-[Ergisa] text-center text-3xl max-w-96 lg:max-w-full normal-case">
          Sobre el Proyecto
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
      <div className="flex flex-col items-center justify-center text-justify lg:mt-10 xl:mt-10 pb-48 px-10 lg:px-48 xl:px-48 xl:text-start">
        <p className="text-[16px] normal-case">
          El proyecto es una colaboración entre los centros educativos IES El
          Rincón y CIFP San Cristóbal, ambos ubicados en Las Palmas de Gran
          Canaria. La actividad se llevó a cabo el 26 de enero de 2024 en la
          ciudad de Telde, reuniendo a los estudiantes de Desarrollo Web de El
          Rincón y a los estudiantes de Turismo de San Cristóbal. Estos últimos
          desempeñaron el papel de guías turísticos en la ruta, mientras que los
          estudiantes de desarrollo actuaron como turistas. Esta cooperación
          resultó en una oportunidad de socialización para estos alumnos, así
          como en una oportunidad para poner en práctica sus estudios
          respectivos. Mientras los estudiantes de Turismo fungieron como guías
          durante la ruta, los de desarrollo se encargaron, a su vez, de crear
          las páginas web destinadas al recorrido. <br />
          <br />
          La jornada comenzó con una breve introducción a cargo de los
          profesores coordinadores de ambos centros, quienes explicaron los
          objetivos de la actividad y asignaron los roles correspondientes a
          cada grupo de estudiantes. Los alumnos de Turismo, previamente
          preparados con información detallada sobre los lugares a visitar,
          guiaron a sus compañeros de Desarrollo Web a lo largo de la ruta
          planificada. Durante el recorrido, se fomentó el intercambio de
          conocimientos entre ambas disciplinas, enriqueciendo la experiencia
          para todos los participantes.
          <br />
          <br />
          La interacción entre los estudiantes fue destacada, ya que no solo
          compartieron conocimientos específicos de sus áreas de estudio, sino
          que también fortalecieron sus habilidades de comunicación y trabajo en
          equipo. Además, la actividad permitió a los alumnos de Desarrollo Web
          aplicar sus habilidades técnicas en un contexto real, creando páginas
          web informativas y atractivas para promover los sitios turísticos
          visitados durante la ruta. Al finalizar la jornada, se realizó una
          sesión de retroalimentación donde los estudiantes pudieron expresar
          sus impresiones y sugerencias para futuras actividades colaborativas.
          En general, el proyecto fue recibido con entusiasmo por parte de los
          participantes y se destacó como una experiencia enriquecedora tanto a
          nivel académico como personal.
        </p>
      </div>
    </>
  );
};
