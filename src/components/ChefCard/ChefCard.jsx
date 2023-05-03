/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import Chefs from "./Chefs";

const ChefCard = () => {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/chef")
			.then((res) => res.json())
			.then((data) => setChefs(data));
	}, []);

	return (
		<div>
			<div className="text-center mt-20">
				<p className="text-xl text-white font-serif mt-5">Experienced Team</p>
				<h1 className="font-serif text-5xl mt-5 mb-7">Meet Our Chefs !</h1>
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 my-10">
				{chefs.map((chef) => (
					<Chefs key={chef.id} chef={chef}></Chefs>
				))}
			</div>
		</div>
	);
};

export default ChefCard;
