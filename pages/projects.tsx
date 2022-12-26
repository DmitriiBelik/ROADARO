import { onAuthStateChanged } from "firebase/auth";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../src/components/MainLayout/MainLayout";
import Projects from "../src/pages/Projects/Projects";
import { userFetched } from "../src/redux/UserSlice";
import { auth } from "../src/services/firebase";

const ProjectsPage: NextPage = () => {

  const dispatch = useDispatch();

  const authStateChanged = (user: any) => {
    dispatch(userFetched(user))
  }

  useEffect(() => {
    onAuthStateChanged(auth, authStateChanged)
  }, [])

  return (
    <MainLayout>
      <Projects/>
    </MainLayout>
  );
};

export default ProjectsPage;
