import type { NextPage } from "next";
import MainLayout from "../src/components/MainLayout/MainLayout";
import CreateProject from "../src/pages/CreateProject/CreateProject";

const CreateProjectPage: NextPage = () => {
  return (
    <MainLayout>
        <CreateProject/>
    </MainLayout>
  );
};

export default CreateProjectPage;
