import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


const auth = getAuth(app)
export const UserContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // The signed-in user info.
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log(loggedUser);

          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
           console.log(errorMessage)
          });
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const emailVerified = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
              setUser(user);
              setLoading(false)
          });
          return () => {
            return unsubscribe();
          }

    }, [])
    console.log(user)
    const userInfo = {
        user,
        handleGoogleSignIn,
        setUser,
        createUser,
        loginUser,
        logOut,
        loading,
        emailVerified
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;