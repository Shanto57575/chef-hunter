/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const SingleChef = () => {
	const chefData = useLoaderData();
	const { id, chefImage, chefName, ChefExperience, recipes, Likes, about } =
		chefData;

	return (
		<div>
			<Banner></Banner>
			<h1 className="text-5xl text-center font-serif font-extrabold my-10">
				Meet {chefName}!
			</h1>
			<div className="card card-side hover:bg-yellow-600 hover:text-white shadow-2xl grid grid-cols-2 mb-16">
				<figure className="h-full px-5">
					<img src={chefImage} alt="Movie" />
				</figure>
				<div className="card-body font-serif font-extrabold">
					<h2 className="card-title">MasterChef : {chefName}</h2>
					<p>{ChefExperience} Years of Experience</p>
					<p className="text-sm text-white">{about}</p>
					<p>Liked By : {Likes} People</p>
					<p>Total Recipes : {recipes.length}</p>
					<div className="card-actions justify-end">
						<Link to={`recipes/${id}`}>
							<button className="btn btn-primary">See Recipes</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleChef;
