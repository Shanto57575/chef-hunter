import React from "react";

const Chefs = ({ chef }) => {
	console.log(chef);
	const { chefImage, chefName, ChefExperience, recipes, Likes } = chef;
	return (
		<div className="card w-96 glass">
			<figure>
				<img className="h-60 w-full" src={chefImage} alt="Chef" />
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
					Total Recipe : <span className="text-black">{recipes.length}</span>
				</p>
				<p className="text-lg font-bold text-orange-500 font-serif">
					Likes : <span className="text-black"> {Likes}</span>
				</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">View Recipes</button>
				</div>
			</div>
		</div>
	);
};

export default Chefs;
