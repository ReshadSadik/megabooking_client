import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initializAuthentication } from '../authentication/Firebase/firebase.init';

initializAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // google sign in start
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        // const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // google sign in end

  //   authenticate user start
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
  }, []);
  //   authenticate user end

  //   sign out users

  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    googleSignIn,
    signOutUser,
    users,
    isLoading,
  };
};

export default useFirebase;
