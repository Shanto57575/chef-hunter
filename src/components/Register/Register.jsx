/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Marquee from "react-fast-marquee";

const auth = getAuth(app);
const user = auth.currentUser;

const Register = () => {
	const [success, setSuccess] = useState(" ");
	const [error, setError] = useState(" ");
	const { createUser } = useContext(AuthContext);

	const handleRegister = (event) => {
		setSuccess(" ");
		setError(" ");
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;

		const photo = user?.photoURL;

		if (password.length < 8) {
			setError("password must contain 8 characters");
			return;
		} else if (password !== confirm) {
			setError("Password didn't Match!!!");
			return;
		} else if (!/[A-Z]/.test(password)) {
			setError("Password must contain at least one uppercase letter.");
			return;
		} else if (!/[a-z]/.test(password)) {
			setError("Password must contain at least one lowercase letter.");
			return;
		} else if (!/[0-9]/.test(password)) {
			setError("Password must contain at least one number");
			return;
		} else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
			setError("Password must have at least one special character.");
			return;
		}

		createUser(email, password)
			.then(() => {
				setSuccess("Account created successfully!!!");
			})
			.catch((error) => {
				setError(error.message);
			});

		form.reset();

		console.log(name, email, photo, password);
	};
	return (
		<div>
			<Marquee
				speed={100}
				className="text-base rounded-full bg-stone-800 p-3 w-[40%] my-5 font-serif font-extrabold"
			>
				<span className="text-white">....Sign Up....</span>
				to Reserve Your table for any special Date
				<span className="text-white">....Sign Up....</span>
				to Reserve Your table for any special Date
			</Marquee>

			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden my-10">
				<div className="w-full p-6 m-auto border rounded-md shadow-xl lg:max-w-xl">
					<h1 className="text-3xl font-semibold text-center  uppercase">
						Create AN Account
					</h1>
					<form onSubmit={handleRegister} className="mt-6">
						<div className="mb-2">
							<label className="block text-sm font-semibold ">Name</label>
							<input
								type="text"
								name="name"
								placeholder="Name"
								className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold">Email</label>
							<input
								name="email"
								type="email"
								placeholder="Email"
								className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold ">Password</label>
							<input
								name="password"
								type="password"
								placeholder="password"
								className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
								className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold ">Photo Url</label>
							<input
								name="photo"
								type="url"
								placeholder="Photo Url"
								className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-blue-400">
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
