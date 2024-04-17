import photos from "../services/photos/photos.js";

export const RouteHome = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center h-[800px] w-screen">
          <span className="font-[Ergisa] text-3xl capitalize">La ruta</span>
        </div>

        <span className="flex flex-row">
          Ver todo
          <img
            className="w-[20px]"
            src={`/images/${photos[17].fileName}`}
            alt="Arrow"
          ></img>
        </span>
      </section>
    </>
  );
};
