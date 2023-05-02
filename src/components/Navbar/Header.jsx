/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleSignOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error.message);
			});
	};

	return (
		<div className="md:navbar bg-slate-500 text-white rounded-lg my-5">
			<h1 className="btn btn-ghost normal-case text-xl">
				The <span className="text-blue-400 font-extrabold">Etalia</span>
			</h1>
			<Link className="btn btn-ghost normal-case text-xl text-blue-400" to="/">
				Home
			</Link>
			<Link
				className="btn btn-ghost normal-case text-xl text-blue-400"
				to="/blog"
			>
				Blog
			</Link>
			<Link
				className="btn btn-ghost normal-case text-xl text-blue-400"
				to="/login"
			>
				Login
			</Link>
			<Link
				className="btn btn-ghost normal-case text-xl text-blue-400"
				to="/register"
			>
				Sign Up
			</Link>
			{user && (
				<button
					className="btn btn-ghost normal-case text-xl text-blue-400"
					onClick={handleSignOut}
				>
					Sign Out
				</button>
			)}
		</div>
	);
};

export default Header;
