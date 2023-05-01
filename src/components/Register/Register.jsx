/* eslint-disable no-unused-vars */
import React from "react";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
const user = auth.currentUser;

const Register = () => {
	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = user?.photoURL;

		console.log(name, email, photo, password);
	};
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Create An Account!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleRegister} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								name="email"
								type="text"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						{/* <div className="form-control">
							<label className="label">
								<span className="label-text">Photo Url</span>
							</label>
							<input
								type="url"
								name="photo"
								placeholder="photo url"
								className="input input-bordered"
								// required
							/>
						</div> */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Sign Up</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
