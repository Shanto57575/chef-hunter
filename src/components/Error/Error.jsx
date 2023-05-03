/* eslint-disable no-unused-vars */
import React from "react";
import fourOFour from "../../assets/charshoChar.png";
import { Link } from "react-router-dom";
const Error = () => {
	return (
		<div className="h-[200px] text-center">
			<img
				src={fourOFour}
				alt="404 Not found!"
				className="mx-auto justify-center items-center  text-center"
			/>
			<h1 className="text-red-600 font-extrabold text-5xl my-5">
				Are you lost?
			</h1>
			<Link to="/">
				<h1 className="btn">Get Back to Home</h1>
			</Link>
		</div>
	);
};

export default Error;
