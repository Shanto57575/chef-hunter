/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chefs = ({ chef }) => {
	console.log(chef);
	const { id, chefImage, chefName, ChefExperience, recipes, Likes } = chef;
	return (
		<div className="card w-full glass transform hover:bg-stone-700 hover:text-amber-400 hover:font-extrabold transition duration-500">
			<figure>
				<LazyLoad
					height={200}
					offset={100}
					debounce={500}
					throttle={1000}
					placeholder={<div>Loading...</div>}
				>
					<img className="lg:w-full" src={chefImage} alt="Chef" />
				</LazyLoad>
			</figure>
			<div className="card-body text-start">
				<h2 className="card-title text-lg lg:font-bold font-serif">
					Chef Name :{" "}
					<span className="text-white">
						{" "}
						{chefName ? chefName : "keek Firdausi"}
					</span>
				</h2>
				<p className="text-lg md:font-bold font-serif">
					Years of Experience :{" "}
					<span className="text-white">
						{ChefExperience ? ChefExperience : 7}
					</span>
				</p>
				<p className="text-lg md:font-bold  font-serif">
					Total Recipe : <span className="text-white"> {recipes.length}</span>
				</p>
				<p className="text-lg md:font-bold font-serif">
					Likes :{" "}
					<span className="text-white gap-5">
						<FontAwesomeIcon className="text-yellow-300" icon={faHeart} />
						<span> {Likes ? Likes : 96912379}</span>
					</span>
				</p>
				<div className="card-actions justify-end">
					<Link to={`/chef/${id}`}>
						<button className="btn btn-active border-white">
							View Recipes
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Chefs;
