/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Chefs = ({ chef }) => {
	console.log(chef);
	const { chefImage, chefName, ChefExperience, recipes, Likes } = chef;
	return (
		<div className="card w-full glass">
			<figure>
				<img className="lg:h-60 lg:w-full" src={chefImage} alt="Chef" />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-lg font-bold text-orange-500 font-serif">
					Chef Name : <span className="text-black"> {chefName}</span>
				</h2>
				<p className="text-lg font-bold text-orange-500 font-serif">
					Years of Experience :{" "}
					<span className="text-black">{ChefExperience}</span>
				</p>
				<p className="text-lg font-bold text-orange-500 font-serif">
					Total Recipe : <span className="text-black"> {recipes.length}</span>
				</p>
				<p className="text-lg font-bold text-orange-500 font-serif">
					Likes :{" "}
					<span className="text-black gap-5">
						<FontAwesomeIcon className="text-red-500" icon={faHeart} />
						<span> {Likes}</span>
					</span>
				</p>
				<div className="card-actions justify-end">
					<Link to="/chef/:id">
						<button className="btn btn-primary">View Recipes</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Chefs;
