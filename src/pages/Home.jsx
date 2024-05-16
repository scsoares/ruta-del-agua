import { AboutProject } from "../components/AboutProject";
import { HeaderHome } from "../components/HeaderHome";
import { PhotosHome } from "../components/PhotosHome";
import { ProjectCenters } from "../components/ProjectCenters";
import { CityHome } from "../components/CityHome";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <HeaderHome />
      <ProjectCenters />
      <AboutProject />
      <PhotosHome />
      <CityHome />
      <Footer />
    </>
  );
};
