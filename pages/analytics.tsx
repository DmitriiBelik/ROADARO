import { onAuthStateChanged } from "firebase/auth";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../src/components/MainLayout/MainLayout";
import AnalyticsPage from "../src/pages/Analytics/AnaliticsPage";
import { userFetched } from "../src/redux/UserSlice";
import { auth } from "../src/services/firebase";

const Analytics: NextPage = () => {

    const dispatch = useDispatch();
  
    const authStateChanged = (user: any) => {
      dispatch(userFetched(user))
    }
  
    useEffect(() => {
      onAuthStateChanged(auth, authStateChanged)
    }, [])

  return (
    <MainLayout>
        <AnalyticsPage/>
    </MainLayout>
  );
};

export default Analytics;
