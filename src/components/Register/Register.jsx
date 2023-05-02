/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Banner from "../Banner/Banner";

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
			<h1 className="text-xl italic text-center my-5">
				Welcome to, The
				<span className="text-orange-500 font-extrabold text-3xl">
					{" "}
					Etalia
				</span>{" "}
			</h1>
			<Banner></Banner>
			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden my-10">
				<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
					<h1 className="text-3xl font-semibold text-center text-blue-400 uppercase">
						Create AN Account
					</h1>
					<form onSubmit={handleRegister} className="mt-6">
						<div className="mb-2">
							<label className="block text-sm font-semibold text-gray-800">
								Name
							</label>
							<input
								type="text"
								name="name"
								placeholder="Name"
								className="block w-full px-4 py-2 mt-2 text-blue-400 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold text-gray-800">
								Email
							</label>
							<input
								name="email"
								type="email"
								placeholder="Email"
								className="block w-full px-4 py-2 mt-2 text-blue-400 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold text-gray-800">
								Password
							</label>
							<input
								name="password"
								type="password"
								placeholder="password"
								className="block w-full px-4 py-2 mt-2 text-blue-400 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold text-gray-800">
								Confirm Password
							</label>
							<input
								name="confirm"
								type="password"
								placeholder="Confirm password"
								className="block w-full px-4 py-2 mt-2 text-blue-400 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mb-2">
							<label className="block text-sm font-semibold text-gray-800">
								Photo Url
							</label>
							<input
								name="photo"
								type="url"
								placeholder="Photo Url"
								className="block w-full px-4 py-2 mt-2 text-blue-400 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								required
							/>
						</div>
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
								Sign Up
							</button>
						</div>
					</form>
					<div className="relative flex items-center justify-center w-full mt-6 border border-t">
						<div className="absolute px-5 bg-white">Or</div>
					</div>
					<p className="mt-8 text-sm font-light text-center text-gray-700">
						Already have an account?{" "}
						<Link
							to="/login"
							className="font-medium text-blue-400 hover:underline"
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
