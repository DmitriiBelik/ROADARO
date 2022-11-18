import type { NextPage } from "next";
import MainLayout from "../src/components/MainLayout/MainLayout";
import Administartion from "../src/pages/Administration/Administartion";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Administartion/>
    </MainLayout>
  );
};

export default Home;
