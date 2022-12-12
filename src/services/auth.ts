import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase';
import {getDatabase, ref, push, set, get, query, remove} from 'firebase/database'

export async function register(email: string, password: string) {
    try{
        const oUC = await createUserWithEmailAndPassword(
            auth,
            email, password 
        );
        return oUC.user;
    }
    catch(err){
        console.log(err)
    }
}

export async function login (email: string, password: string) {
    try{
        const oUC = await signInWithEmailAndPassword(auth, email, password);
        return oUC.user;
    }
    catch(err){
        console.log(err)
    }
}

export async function logout(){
    await signOut(auth)
}

