/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Roll } from "react-awesome-reveal";
import "./Chefs.css";

const Chefs = ({ chef }) => {
	const { user } = useContext(AuthContext);

	console.log(chef);
	const { id, chefImage, chefName, ChefExperience, recipes, Likes } = chef;

	return (
		<Roll>
			<div className="bg mx-auto card transform hover:bg-stone-900 hover:text-amber-400 hover:font-extrabold transition duration-500 rounded shadow-md shadow-current">
				<figure>
					<LazyLoad
						height={200}
						offset={100}
						debounce={500}
						throttle={1000}
						placeholder={<div>Loading...</div>}
					>
						<img src={chefImage} alt="Chef" />
					</LazyLoad>
				</figure>
				<div className="card-body text-start">
					<h2 className="card-title text-lg lg:font-bold font-serif">
						Chef Name :
						<span className="text-white">
							{chefName ? chefName : "keek Firdausi"}
						</span>
					</h2>
					<p className="text-lg md:font-bold font-serif">
						Years of Experience :
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
							<button
								onClick={() => {
									!user &&
										Swal.fire({
											position: "center",
											icon: "success",
											title: "Login first to view the recipes",
											showConfirmButton: false,
											timer: 1500,
										});
								}}
								className="btn btn-active border-x-neutral border-t-neutral border-b-4 border-white font-serif"
							>
								View Recipes
							</button>
						</Link>
					</div>
				</div>
			</div>
		</Roll>
	);
};

export default Chefs;
