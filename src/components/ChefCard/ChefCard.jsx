/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import Chefs from "./Chefs";
import { Zoom } from "react-awesome-reveal";

const ChefCard = () => {
	const [chefs, setChefs] = useState(null);

	useEffect(() => {
		fetch("https://chief-recipe-hunter-server-shanto57575.vercel.app/chef")
			.then((res) => res.json())
			.then((data) => setChefs(data));
	}, []);

	return (
		<div className="mb-20">
			<div className="text-center my-20">
				<p className="text-xl text-white font-serif mt-5">Experienced Team</p>
				<h1 className="font-serif text-5xl mt-5 mb-7">Meet Our Chefs !</h1>
			</div>
			{!chefs && (
				<div className="text-center text-red-600 h-screen">
					<span className="loading loading-infinity loading-xs"></span>
					<span className="loading loading-infinity loading-sm"></span>
					<span className="loading loading-infinity loading-md"></span>
					<span className="loading loading-infinity loading-lg"></span>
				</div>
			)}

			<Zoom>
				<div className="lg:mx-16 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{chefs &&
						chefs.map((chef) => <Chefs key={chef.id} chef={chef}></Chefs>)}
				</div>
			</Zoom>
		</div>
	);
};

export default ChefCard;
