/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Marquee from "react-fast-marquee";
import { updateProfile } from "firebase/auth";

const Register = () => {
	const { createUser, user } = useContext(AuthContext);

	const [success, setSuccess] = useState(" ");
	const [error, setError] = useState(" ");

	const emailRef = useRef();

	const handleRegister = (event) => {
		event.preventDefault();

		setSuccess(" ");
		setError(" ");

		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;

		if (password.length < 6) {
			setError("password must contain 6 characters");
			return;
		} else if (password !== confirm) {
			setError("Password didn't Match!!!");
			return;
		} else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
			setError("Password must have at least one special character.");
			return;
		}

		createUser(email, password)
			.then((result) => {
				console.log(result.user);
				setSuccess("Account created successfully!!!");
				updateProfile(result.user, {
					displayName: name,
					photoURL: "https://ibb.co/cL1xhkz",
				})
					.then(() => {
						console.log("all okkkkkkkkkk");
					})
					.catch((error) => {
						console.log("Shahin dhore fel error take");
					});
			})
			.catch((error) => {
				setError(error.message);
			});

		// form.reset();

		console.log(name, email, password);
	};
	return (
		<div className="font-serif font-extrabold">
			<Marquee
				speed={100}
				pauseOnHover="true"
				className="text-base rounded-full bg-stone-700 p-4 w-[40%] my-5 font-serif font-extrabold"
			>
				<span className="text-white">....Sign Up....</span>
				to Reserve Your table for any special Date
				<span className="text-white">....Sign Up....</span>
				to Reserve Your table for any special Date
				<span className="text-white">....Sign Up....</span>
				to Reserve Your table for any special Date
			</Marquee>

			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden my-10">
				<div className="w-full p-6 m-auto border rounded-md shadow-xl lg:max-w-xl">
					<h1 className="text-3xl font-serif font-extrabold text-center uppercase">
						Create an account
					</h1>
					<form onSubmit={handleRegister} className="mt-6">
						<div className="mb-2">
							<label className="block text-sm font-semibold ">Name</label>
							<input
								type="text"
								name="name"
								placeholder="Name"
								className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold">Email</label>
							<input
								ref={emailRef}
								name="email"
								type="email"
								placeholder="Email"
								className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold ">Password</label>
							<input
								name="password"
								type="password"
								placeholder="password"
								className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold ">
								Confirm Password
							</label>
							<input
								name="confirm"
								type="password"
								placeholder="Confirm password"
								className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold ">Photo Url</label>
							<input
								name="photo"
								type="url"
								placeholder="Photo Url"
								className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-blue-400">
								Sign Up
							</button>
						</div>
					</form>
					<div className="relative flex items-center justify-center w-full mt-6 border border-t">
						<div className="absolute px-5 bg-white">Or</div>
					</div>
					<p className="mt-8 text-sm font-light text-center">
						Already have an account?{" "}
						<Link
							to="/login"
							className="font-medium text-yellow-500  hover:underline"
						>
							Please login
						</Link>
					</p>
					<p className="text-center font-bold text-green-500">{success}</p>
					<p className="text-center font-bold text-red-500">{error}</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
