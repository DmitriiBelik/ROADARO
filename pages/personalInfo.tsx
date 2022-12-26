import type { NextPage } from "next";
import PersonalInfo from "../src/pages/PersonalInfo/PersonalInfo";
import { onAuthStateChanged } from 'firebase/auth';
import { userFetched } from "../src/redux/UserSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../src/services/firebase";
import { useAppSelector } from "../src/hooks/redux";

const PersonalInfoPage: NextPage = () => {

    const {userState} = useAppSelector(state => state.user)
    const dispatch = useDispatch();
  
    const authStateChanged = (user: any) => {
      dispatch(userFetched(user))
    }
  
    useEffect(() => {
      onAuthStateChanged(auth, authStateChanged)
    }, [])

    return (
        <PersonalInfo currentUser={userState}/>
    );
};

export default PersonalInfoPage