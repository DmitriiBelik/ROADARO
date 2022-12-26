import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase';
import {getDatabase, ref, push, set, get, query} from 'firebase/database'
import { userParamsFetched } from '../redux/UserSlice';

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

export async function getParams(user:any, dispatch: any){
    const oSnapshot = await get(query(ref(getDatabase(),`users/${user?.uid}/params`)));
    const oArr: any[] = []
    let oParam;
    oSnapshot.forEach((oDoc) => {
        oParam = oDoc.val();
        oParam.key = oDoc.key;
        oArr.push(oParam);
    });
    dispatch(userParamsFetched(oArr))
}

export async function addParams(user: any,params: any){
    const paramsList = {
        lastName: params.lastName,
        firstName: params.firstName,
        patrName: params.patrName,
        phone: params.phone,
        sex: params.sex,
    }
    const oRef = await push(
        ref(
            getDatabase(),
            `users/${user.uid}/params`
        )
    );
    await set(oRef, paramsList);
}

export async function logout(){
    await signOut(auth)
}

