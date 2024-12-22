import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createSignInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser,updatedData)
    .then(() => {
      // Manually update the user state with the new information
      setUser({
        ...auth.currentUser,
        displayName: updatedData.displayName,
        photoURL: updatedData.photoURL,
      });
    })
    .catch((error) => {
      throw error;
    });
  }

  
  const userSignOut = () => {
    return signOut(auth);
  }


  const signInWithGoogle = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("currently Logged user", currentUser);
        setUser(currentUser)

      }else{
        setUser(null)
      }
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

    const eduService = {
        user,
        loading,
        createUser,
        updateUserProfile,
        createSignInUser,
        userSignOut,
        signInWithGoogle
    }


    return (
        <AuthContext.Provider value={eduService}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;