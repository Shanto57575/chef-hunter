/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import bannerImage from "../../assets/italianFood.jpg"; // Import your image file

const Banner = () => {
	return (
		<div className="relative h-screen">
			<div className="absolute inset-0">
				<img
					style={{ filter: "brightness(0.6)" }}
					src={bannerImage}
					alt="Banner"
					className="h-full w-full object-cover rounded-lg"
				/>
			</div>
			<div className="absolute inset-0 flex items-center justify-center text-center lg:mx-28">
				<div className="font-bold tracking-wide text-center">
					<div className="text-base text-white">
						<span className="font-serif">Welcome to</span>
						<h1 className="text-2xl text-white font-serif">
							<span className="text-white font-extrabold">The</span>
							<span className="text-orange-300 font-extrabold">Etalia,</span>
						</h1>
						<span className="font-serif">
							{" "}
							Where every dish tells a story of its Italian roots
						</span>
					</div>
					<Marquee
						speed={100}
						className="text-base rounded-full my-5 bg-black p-3"
					>
						<span className="text-white">....Sign Up....</span>
						to Reserve Your table for any special Date
						<span className="text-white">....Sign Up....</span>
						to Reserve Your table for any special Date
					</Marquee>
					<div>
						<div className="text-base font-serif">
							<span className="text-white">
								Italian <span className="text-3xl text-white">C</span>uisine
								<strong className="text-3xl text-white"> B</strong>y
							</span>
							<span className="text-white">
								{" "}
								Italian <span className="text-3xl text-white">C</span>hefs
							</span>
						</div>
						<p className="text-base text-white mt-3 font-serif">
							Italian Food brings people together on many different levels. It’s
							nourishment of the soul and body; it’s truly love
						</p>
						<button className="btn my-5 bg-white font-serif font-extrabold">
							Find A Table
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
