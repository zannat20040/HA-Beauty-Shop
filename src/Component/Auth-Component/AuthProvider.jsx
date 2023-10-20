// import React, { useEffect, useState } from 'react';
// import auth from '../../../Firebase/Firebase.config';
// import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

// export const AuthContext = createContext(null);

// const AuthProvider = () => {
//     const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const provider = new GoogleAuthProvider();

// //   const createUser = (email, password) => {
// //     setLoading(true);
// //     return createUserWithEmailAndPassword(auth, email, password);
// //   };
//   const createUserByGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, provider);
//   };
// //   const loginUser = (email, password) => {
// //     setLoading(true);
// //     return signInWithEmailAndPassword(auth, email, password);
// //   };

// //   const signOutUser = () => {
// //     setLoading(true);
// //     return signOut(auth);
// //   };

//   const googleSignOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     createUser,
//     signOutUser,
//     loginUser,
//     loading,
//     createUserByGoogle,
//     googleSignOut
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );

// };

// export default AuthProvider;