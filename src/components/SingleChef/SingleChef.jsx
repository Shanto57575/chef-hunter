/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";

const SingleChef = () => {
	const { id } = useParams();
	console.log(id);
	const chefData = useLoaderData();
	console.log("chefData", chefData);
	return (
		<div>
			<Banner></Banner>
		</div>
	);
};

export default SingleChef;
