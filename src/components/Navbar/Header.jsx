/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaHome } from "react-icons/fa";
import { BiCommentError } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { ImEnter } from "react-icons/im";

import "firebase/auth";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const location = useLocation();

	const handleSignOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error.message);
			});
	};

	const navItem = (
		<>
			<Link
				className={`btn btn-ghost normal-case text-xl  ${
					location.pathname === "/" ? "text-white" : ""
				}`}
				to="/"
				isActive={() => location.pathname === "/"}
			>
				<div className="flex items-center gap-2">
					<FaHome />
					<span>Home</span>
				</div>
			</Link>
			<Link
				className={`btn btn-ghost normal-case text-xl  ${
					location.pathname === "/about" ? "text-white" : ""
				}`}
				to="/about"
				isActive={() => location.pathname === "/about"}
			>
				<div className="flex items-center gap-2">
					<BiCommentError /> <span>About</span>
				</div>
			</Link>
			<Link
				className={`btn btn-ghost normal-case text-xl ${
					location.pathname === "/blog" ? "text-white" : " "
				}`}
				to="/blog"
				isActive={() => location.pathname === "/blog"}
			>
				<div className="flex items-center gap-2">
					<BsFillJournalBookmarkFill />
					<span>Blog</span>
				</div>
			</Link>
			{!user && (
				<Link
					className={`btn btn-ghost normal-case text-xl ${
						location.pathname === "/login" ? "text-white" : " "
					}`}
					to="/login"
					isActive={() => location.pathname === "/login"}
				>
					<div className="flex items-center gap-2">
						<HiOutlineLogin />
						<span>Sign In</span>
					</div>
				</Link>
			)}
			<Link
				className={`btn btn-ghost normal-case text-xl ${
					location.pathname === "/register" ? "text-white" : " "
				}`}
				to="/register"
				isActive={() => location.pathname === "/register"}
			>
				<div className="flex items-center gap-2">
					<ImEnter />
					<span>Sign Up</span>
				</div>
				{user && (
					<button
						className="btn btn-ghost normal-case text-xl "
						onClick={handleSignOut}
					>
						Sign Out
					</button>
				)}
			</Link>
		</>
	);
	return (
		<div className="navbar font-serif font-extrabold px-2 py-4">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content z-10 shadow bg-base-100 rounded-box w-48"
					>
						<div className="bg-black h-60">{navItem}</div>
					</ul>
				</div>
				<h1 className="md:text-2xl font-serif md:btn">
					The <span className="text-white md:font-extrabold">Etalia</span>
				</h1>
			</div>
			<>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navItem}</ul>
				</div>
				{user && (
					<img
						className="rounded-full h-12 w-12"
						src={user ? user.photoURL : "loading"}
						alt="profile"
						title={user.displayName}
					/>
				)}
			</>
		</div>
	);
};

export default Header;
