import type { NextPage } from "next";
import SignIn from "../src/pages/SignIn/SignIn";
import { onAuthStateChanged } from 'firebase/auth';
import { userFetched, selectAuthState } from "../src/redux/UserSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../src/services/firebase";
import { useAppSelector } from "../src/hooks/redux";

const SignInPage: NextPage = () => {

    const {userState} = useAppSelector(state => state.user)
    const dispatch = useDispatch();
  
    const authStateChanged = (user: any) => {
      dispatch(userFetched(user))
    }
  
    useEffect(() => {
      onAuthStateChanged(auth, authStateChanged)
    }, [])

    return (
        <SignIn currentUser={userState}/>
    );
};

export default SignInPage