import { AboutProject } from "../components/AboutProject";
import { HeaderHome } from "../components/HeaderHome";
import { PhotosHome } from "../components/PhotosHome";
import { ProjectCenters } from "../components/ProjectCenters";
import { RouteHome } from "../components/RouteHome";

export const Home = () => {
  return (
    <>
      <HeaderHome />
      <ProjectCenters />
      <AboutProject />
      <PhotosHome />
      <RouteHome />
    </>
  );
};
