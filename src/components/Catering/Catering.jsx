/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cook from "../../assets/chefCook.png";
import {
	faUtensils,
	faBowlFood,
	faSeedling,
	faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";

const Catering = () => {
	return (
		<div>
			<h1 className="text-lg text-center mb-5">WHY CHOOSE US</h1>
			<hr className="border" />
			<h1 className="font-serif mt-5 text-5xl text-white text-center">
				Our Strength
			</h1>
			<div className="lg:grid lg:grid-cols-4 lg:gap-8 my-10 text-center font-bold">
				<div className="card lg:w-64 my-5 glass transform hover:bg-yellow-600 hover:text-white transition duration-300">
					<figure className="mt-5">
						<FontAwesomeIcon className="h-24" icon={faUtensils} />{" "}
					</figure>
					<div className="card-body">
						<h3 className="text-center text-white font-bold">Skilled Chefs</h3>
						<p>Experience the culinary expertise of our Skilled Chefs.</p>
					</div>
				</div>
				<div className="card lg:w-64 my-5 glass transform hover:bg-yellow-600 hover:text-white transition duration-300">
					<figure className="mt-5">
						<FontAwesomeIcon className="h-24" icon={faBowlFood} />{" "}
					</figure>
					<div className="card-body">
						<h3 className="text-center text-white font-bold">Hygienic Food</h3>
						<p>
							Enjoy safe and hygienic food at our Restaurant for a worry-free
							dining experience.
						</p>
					</div>
				</div>
				<div className="card lg:w-64 my-5 glass transform hover:bg-yellow-600 hover:text-white transition duration-300">
					<figure className="mt-5">
						<FontAwesomeIcon className="h-24" icon={faSeedling} />{" "}
					</figure>
					<div className="card-body">
						<h3 className="text-center text-white font-bold">
							Fresh Environment
						</h3>
						<p>
							Savor the flavors of our dishes in a Fresh Environment, where we
							prioritize your dining experience and well-being.
						</p>
					</div>
				</div>
				<div className="card lg:w-64 my-5 glass transform hover:bg-yellow-600 hover:text-white transition duration-300">
					<figure className="mt-5">
						<FontAwesomeIcon className="h-24" icon={faChampagneGlasses} />
					</figure>
					<div className="card-body">
						<h3 className="text-center text-white font-bold">Event & Party</h3>
						<p>
							Host unforgettable events and parties at The Etalia, where our
							team will take care of every detail to make your celebration a
							success.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catering;
