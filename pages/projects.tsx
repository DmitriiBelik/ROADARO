import type { NextPage } from "next";
import MainLayout from "../src/components/MainLayout/MainLayout";
import Projects from "../src/pages/Projects/Projects";

const ProjectsPage: NextPage = () => {
  return (
    <MainLayout>
      <Projects/>
    </MainLayout>
  );
};

export default ProjectsPage;
