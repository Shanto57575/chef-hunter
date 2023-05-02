/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";

const ChefCard = () => {
	const [chef, setChef] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/chef")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);
	return <div></div>;
};

export default ChefCard;
