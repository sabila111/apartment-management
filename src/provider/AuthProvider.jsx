import  { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.init';



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const CreateUser = (email, password) => {
        setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    }

    const UpdateUser = (name, photo) => {
        const profile = {
            displayName:name,
            photoURL:photo,
        }
        // console.log(auth.currentUser)
        return updateProfile(auth.currentUser, profile)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
             unSubscribe()
        }
    },[])

    const authInfo = {
  user,
  loading,
  CreateUser,
  signIn,
  logOut,
  UpdateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;