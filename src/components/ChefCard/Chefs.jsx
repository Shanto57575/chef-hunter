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
		<div className="card w-full glass transform hover:bg-yellow-600 hover:text-white transition duration-300">
			<figure>
				<img className="lg:h-60 lg:w-full" src={chefImage} alt="Chef" />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-lg font-bold  font-serif">
					Chef Name : <span className="text-white"> {chefName}</span>
				</h2>
				<p className="text-lg font-bold  font-serif">
					Years of Experience :{" "}
					<span className="text-white">{ChefExperience}</span>
				</p>
				<p className="text-lg font-bold  font-serif">
					Total Recipe : <span className="text-white"> {recipes.length}</span>
				</p>
				<p className="text-lg font-bold  font-serif">
					Likes :{" "}
					<span className="text-white gap-5">
						<FontAwesomeIcon className="text-yellow-300" icon={faHeart} />
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
