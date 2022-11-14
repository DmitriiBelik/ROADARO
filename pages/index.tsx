/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from "next";
import MainLayout from "../src/components/MainLayout/MainLayout";
import Projects from "../src/components/Projects/Projects";
import Administartion from "../src/components/Administrartion/Administartion";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Administartion/>
    </MainLayout>
  );
};

export default Home;
