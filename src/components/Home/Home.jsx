/* eslint-disable no-unused-vars */
import React from "react";
import food from "../../assets/italianFood.jpg";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import ChefCard from "../ChefCard/ChefCard";

const Home = () => {
	return (
		<div className="lg:grid lg:grid-cols-2 bg-slate-300">
			<div className="text-2xl italic lg:m-5 font-extrabold text-center">
				<div className="grid sm:grid-cols-1 lg:grid-cols-3">
					<div className="w-24 mx-auto lg:mt-12">
						<img className="rounded-full" src={logo} alt="" />
					</div>
					<div>
						<span className="text-orange-600">
							ITalian <span className="text-5xl text-black">C</span>UISINE
						</span>
						<h1 className="text-black">By</h1>
						<span className="text-orange-600">
							{" "}
							ITalian <span className="text-5xl text-black">C</span>HEFS
						</span>
					</div>
				</div>
				<Marquee
					speed={100}
					className="text-base mt-5 text-orange-500 bg-black p-3"
				>
					<span className="text-white">....Sign Up....</span>
					to Reserve Your table for any special Date
					<span className="text-white">....Sign Up....</span>
					to Reserve Your table for any special Date
				</Marquee>

				<div>
					<p className="text-base font-serif mt-5 text-orange-500">
						True Italian Food
					</p>
					<p className="text-base font-sans">
						Food brings people together on many different levels. It’s
						nourishment of the soul and body; it’s truly love
					</p>
				</div>
			</div>
			<div>
				<img src={food} alt="" />
			</div>
			<ChefCard></ChefCard>
		</div>
	);
};

export default Home;
