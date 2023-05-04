/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowRecipes from "../ShowRecipes/ShowRecipes";

const SingleChef = () => {
	let chefData = useLoaderData();
	console.log(chefData);
	const { chefImage, chefName, ChefExperience, recipes, Likes, about } =
		chefData;

	return (
		<div>
			<h1 className="text-5xl text-center font-serif font-extrabold my-10">
				<span className="text-white">Meet</span> {chefName}!
			</h1>
			<div className="card lg:card-side hover:bg-yellow-600 hover:text-white shadow-2xl lg:grid lg:grid-cols-2 mb-16">
				<figure className="lg:h-full lg:px-5">
					<img src={chefImage ? chefImage : "Image Not Found"} alt="Movie" />
				</figure>
				<div className="card-body font-serif font-extrabold">
					<h2 className="card-title">
						MasterChef : {chefName ? chefName : "Kea Firdausi"}
					</h2>
					<p>{ChefExperience ? ChefExperience : 7} Years of Experience</p>
					<p className="text-sm text-white">
						{about
							? about
							: `${chefName} is a classically trained chef with a deep appreciation for the traditions of French cuisine. He honed his skills in some of the best restaurants in Paris, and is known for his mastery of delicate sauces and complex techniques. Matthews' dishes are often elegant and refined, but never lacking in flavor.

`}
					</p>
					<p>Liked By : {Likes ? Likes : 96912379} People</p>
					<p>Total Recipes : {recipes.length}</p>
					<div className="card-actions justify-end"></div>
				</div>
			</div>
			{<ShowRecipes chefData={chefData}></ShowRecipes>}
		</div>
	);
};

export default SingleChef;
