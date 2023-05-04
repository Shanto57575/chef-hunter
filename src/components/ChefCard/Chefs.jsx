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
		<div className="card w-full glass transform hover:bg-yellow-600 hover:text-white transition duration-300">
			<figure>
				<LazyLoad
					height={200}
					offset={100}
					threshold={0.5}
					debounce={500}
					throttle={1000}
					placeholder={<div>Loading...</div>}
				>
					<img className="lg:h-60 lg:w-full" src={chefImage} alt="Chef" />
				</LazyLoad>
			</figure>
			<div className="card-body">
				<h2 className="card-title text-lg font-bold  font-serif">
					Chef Name :{" "}
					<span className="text-white">
						{" "}
						{chefName ? chefName : "keek Firdausi"}
					</span>
				</h2>
				<p className="text-lg font-bold  font-serif">
					Years of Experience :{" "}
					<span className="text-white">
						{ChefExperience ? ChefExperience : 7}
					</span>
				</p>
				<p className="text-lg font-bold  font-serif">
					Total Recipe : <span className="text-white"> {recipes.length}</span>
				</p>
				<p className="text-lg font-bold  font-serif">
					Likes :{" "}
					<span className="text-white gap-5">
						<FontAwesomeIcon className="text-yellow-300" icon={faHeart} />
						<span> {Likes ? Likes : 96912379}</span>
					</span>
				</p>
				<div className="card-actions justify-end">
					<Link to={`/chef/${id}`}>
						<button className="btn btn-primary">Chef Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Chefs;
