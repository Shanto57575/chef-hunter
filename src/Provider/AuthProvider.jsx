/* eslint-disable no-unused-vars */
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import React, { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const SignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const GoogleSignIn = () => {
		return signInWithPopup(auth, provider);
	};

	const GithubSignIn = () => {
		return signInWithPopup(auth, gitProvider);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unSubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		SignIn,
		GoogleSignIn,
		GithubSignIn,
		logOut,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
