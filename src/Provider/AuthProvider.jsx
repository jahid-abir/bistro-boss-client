/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loader,setLoader] = useState(true)

    const getRegisterUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const getLoginUser = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (update) =>{
        setLoader(true)
        return updateProfile(auth.currentUser,update)
    }

    const signOutUser =() =>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,CurrentUser=>{
            setUser(CurrentUser)
            setLoader(false)
        });
        return ()=> unSubscribe()
    },[])

    const authInfo = {
        setUser,
        user,
        loader,
        getRegisterUser,
        getLoginUser,
        signOutUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;