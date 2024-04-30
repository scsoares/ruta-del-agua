import useIsVisible from "../services/useIsVisible.js";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
                El proyecto es una colaboración entre los centros educativos IES
                El Rincón y CIFP San Cristóbal, ambos ubicados en Las Palmas de
                Gran Canaria. La actividad se llevó a cabo el 26 de enero de
                2024 en la ciudad de Telde, reuniendo a los estudiantes de
                Desarrollo Web de El Rincón y a los estudiantes de Turismo de
                San Cristóbal. Estos últimos desempeñaron el papel de guías
                turísticos en la ruta, mientras que los estudiantes de
                desarrollo actuaron como turistas. Esta cooperación resultó en
                una oportunidad de socialización para estos alumnos, así como en
                una oportunidad para poner en práctica sus estudios respectivos.
                Mientras los estudiantes de Turismo fungieron como guías durante
                la ruta, los de desarrollo se encargaron, a su vez, de crear las
                páginas web destinadas al recorrido. <br />
                {/* La jornada comenzó con una breve introducción a cargo de los
                profesores coordinadores de ambos centros, quienes explicaron
                los objetivos de la actividad y asignaron los roles
                correspondientes a cada grupo de estudiantes. Los alumnos de
                Turismo, previamente preparados con información detallada sobre
                los lugares a visitar, guiaron a sus compañeros de Desarrollo
                Web a lo largo de la ruta planificada. Durante el recorrido, se
                fomentó el intercambio de conocimientos entre ambas disciplinas,
                enriqueciendo la experiencia para todos los participantes. La
                interacción entre los estudiantes fue destacada, ya que no solo
                compartieron conocimientos específicos de sus áreas de estudio,
                sino que también fortalecieron sus habilidades de comunicación y
                trabajo en equipo. Además, la actividad permitió a los alumnos
                de Desarrollo Web aplicar sus habilidades técnicas en un
                contexto real, creando páginas web informativas y atractivas
                para promover los sitios turísticos visitados durante la ruta.
                Al finalizar la jornada, se realizó una sesión de
                retroalimentación donde los estudiantes pudieron expresar sus
                impresiones y sugerencias para futuras actividades
                colaborativas. En general, el proyecto fue recibido con
                entusiasmo por parte de los participantes y se destacó como una
                experiencia enriquecedora tanto a nivel académico como personal. */}
              </p>

              <Link
                to="/about-project"
                className="transition ease-in-out delay-400 hover:bg-[#181818] hover:text-[#EDEDED] text-[12px] xl:text-[16px] text-[#] max-w-40 xl:max-w-96 py-2 px-8 border border-[#181818] rounded-full"
              >
                LEER MÁS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
