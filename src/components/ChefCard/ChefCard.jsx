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
		<div className="grid grid-cols-3 gap-5 my-10">
			{chefs.map((chef) => (
				<Chefs key={chef.id} chef={chef}></Chefs>
			))}
		</div>
	);
};

export default ChefCard;
