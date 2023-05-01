/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="md:navbar bg-primary text-primary-content">
			<a className="btn btn-ghost normal-case text-xl">Fatto a mano</a>
			<Link className="btn btn-ghost normal-case text-xl" to="/">
				Home
			</Link>
			<Link className="btn btn-ghost normal-case text-xl" to="/blog">
				Blog
			</Link>
			<Link className="btn btn-ghost normal-case text-xl" to="/login">
				Login
			</Link>
			<Link className="btn btn-ghost normal-case text-xl" to="/register">
				Sign Up
			</Link>
		</div>
	);
};

export default Header;
