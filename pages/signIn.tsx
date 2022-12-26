import type { NextPage } from "next";
import SignIn from "../src/pages/SignIn/SignIn";
import { onAuthStateChanged } from 'firebase/auth';
import { userFetched } from "../src/redux/UserSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../src/services/firebase";

const SignInPage: NextPage = () => {

    const dispatch = useDispatch();
  
    const authStateChanged = (user: any) => {
      dispatch(userFetched(user))
    }
  
    useEffect(() => {
      onAuthStateChanged(auth, authStateChanged)
    }, [])

    return (
        <SignIn/>
    );
};

export default SignInPage