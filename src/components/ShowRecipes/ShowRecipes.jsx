/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShowRecipes.css";

const ShowRecipes = ({ chefData }) => {
	const { chefName, ChefsRecipe } = chefData;
	const chefLastName = chefName.split(" ")[1];

	const [clicked, setClicked] = useState(false);
	const favClick = () => {
		toast("Marked as favourite!", {
			position: toast.POSITION.TOP_CENTER,
			className: "toast-message",
		});
		setClicked(true);
	};

	return (
		<div>
			<h1 className="text-center font-serif font-extrabold text-3xl my-5">
				{chefLastName}'s{" "}
				<span className="text-white text-xl">Delectable Delicacy.....</span>
			</h1>
			<div className="card lg:flex lg:card-side bg-base-100 my-10 border shadow-2xl">
				<figure className="lg:h-full my-auto lg:ms-2 lg:w-[50%]">
					<img
						className="rounded-xl"
						src={ChefsRecipe?.food1?.foodImg}
						alt="Movie"
					/>
				</figure>
				<div className="card-body hover:bg-stone-800 lg:my-1 rounded-xl lg:w-[50%]">
					<h2 className="card-title">{ChefsRecipe?.food1?.recipeName}</h2>
					<div>
						<p className="text-white font-serif text-2xl underline">
							Ingredients :{" "}
						</p>
						<p>1. {ChefsRecipe?.food1?.ingredients[0]}</p>
						<p>2. {ChefsRecipe?.food1?.ingredients[1]}</p>
						<p>3. {ChefsRecipe?.food1?.ingredients[2]}</p>
						<p>4. {ChefsRecipe?.food1?.ingredients[3]}</p>
						<p>5. {ChefsRecipe?.food1?.ingredients[4]}</p>
					</div>
					<p>{ChefsRecipe?.food1?.method}</p>
					<p>
						rating : {ChefsRecipe?.food1?.rating}{" "}
						<span>
							<FontAwesomeIcon className="text-amber-300" icon={faStar} />
						</span>
					</p>
					<div className="card-actions justify-end">
						<ToastContainer></ToastContainer>
						<button
							onClick={favClick}
							disabled={clicked}
							className="btn btn-primary"
						>
							{clicked ? true : false}
							favourite
							<FontAwesomeIcon className="text-red-600" icon={faHeart} />
						</button>
					</div>
				</div>
			</div>
			<div className="card flex lg:card-side bg-base-100 my-10 border shadow-2xl">
				<figure className="lg:h-full my-auto lg:ms-2 lg:w-[50%]">
					<img
						className="rounded-xl"
						src={ChefsRecipe?.food2?.foodImg}
						alt="Movie"
					/>
				</figure>
				<div className="card-body hover:bg-stone-800 lg:my-1 rounded-xl lg:w-[50%]">
					<h2 className="card-title">{ChefsRecipe?.food1?.recipeName}</h2>
					<div>
						<p className="text-white font-serif text-2xl underline">
							Ingredients :{" "}
						</p>
						<p>1. {ChefsRecipe?.food1?.ingredients[0]}</p>
						<p>2. {ChefsRecipe?.food1?.ingredients[1]}</p>
						<p>3. {ChefsRecipe?.food1?.ingredients[2]}</p>
						<p>4. {ChefsRecipe?.food1?.ingredients[3]}</p>
						<p>5. {ChefsRecipe?.food1?.ingredients[4]}</p>
					</div>
					<p>{ChefsRecipe?.food1?.method}</p>
					<p>
						rating : {ChefsRecipe?.food1?.rating}{" "}
						<span>
							<FontAwesomeIcon className="text-amber-300" icon={faStar} />
						</span>
					</p>
					<div className="card-actions justify-end">
						<ToastContainer></ToastContainer>
						<button
							onClick={favClick}
							disabled={clicked}
							className="btn btn-primary"
						>
							{clicked ? true : false}
							favourite
							<FontAwesomeIcon className="text-red-600" icon={faHeart} />
						</button>
					</div>
				</div>
			</div>
			<div className="card flex lg:card-side bg-base-100 my-10 border shadow-2xl">
				<figure className="lg:h-full my-auto lg:ms-2 lg:w-[50%]">
					<img
						className="rounded-xl"
						src={ChefsRecipe?.food3?.foodImg}
						alt="Movie"
					/>
				</figure>
				<div className="card-body hover:bg-stone-800 lg:my-1 rounded-xl lg:w-[50%]">
					<h2 className="card-title">{ChefsRecipe?.food1?.recipeName}</h2>
					<div>
						<p className="text-white font-serif text-2xl underline">
							Ingredients :{" "}
						</p>
						<p>1. {ChefsRecipe?.food1?.ingredients[0]}</p>
						<p>2. {ChefsRecipe?.food1?.ingredients[1]}</p>
						<p>3. {ChefsRecipe?.food1?.ingredients[2]}</p>
						<p>4. {ChefsRecipe?.food1?.ingredients[3]}</p>
						<p>5. {ChefsRecipe?.food1?.ingredients[4]}</p>
					</div>
					<p>{ChefsRecipe?.food1?.method}</p>
					<p>
						rating : {ChefsRecipe?.food1?.rating}{" "}
						<span>
							<FontAwesomeIcon className="text-amber-300" icon={faStar} />
						</span>
					</p>
					<div className="card-actions justify-end">
						<ToastContainer></ToastContainer>
						<button
							onClick={favClick}
							disabled={clicked}
							className="btn btn-primary"
						>
							{clicked ? true : false}
							favourite
							<FontAwesomeIcon className="text-red-600" icon={faHeart} />
						</button>
					</div>
				</div>
			</div>
			<div className="card flex lg:card-side bg-base-100 my-10 border shadow-2xl">
				<figure className="lg:h-full my-auto lg:ms-2 lg:w-[50%]">
					<img
						className="rounded-xl"
						src={ChefsRecipe?.food4?.foodImg}
						alt="Movie"
					/>
				</figure>
				<div className="card-body hover:bg-stone-800 lg:my-1 rounded-xl lg:w-[50%]">
					<h2 className="card-title">{ChefsRecipe?.food1?.recipeName}</h2>
					<div>
						<p className="text-white font-serif text-2xl underline">
							Ingredients :{" "}
						</p>
						<p>1. {ChefsRecipe?.food1?.ingredients[0]}</p>
						<p>2. {ChefsRecipe?.food1?.ingredients[1]}</p>
						<p>3. {ChefsRecipe?.food1?.ingredients[2]}</p>
						<p>4. {ChefsRecipe?.food1?.ingredients[3]}</p>
						<p>5. {ChefsRecipe?.food1?.ingredients[4]}</p>
					</div>
					<p>{ChefsRecipe?.food1?.method}</p>
					<p>
						rating : {ChefsRecipe?.food1?.rating}{" "}
						<span>
							<FontAwesomeIcon className="text-amber-300" icon={faStar} />
						</span>
					</p>
					<div className="card-actions justify-end">
						<ToastContainer></ToastContainer>
						<button
							onClick={favClick}
							disabled={clicked}
							className="btn btn-primary"
						>
							{clicked ? true : false}
							favourite
							<FontAwesomeIcon className="text-red-600" icon={faHeart} />
						</button>
					</div>
				</div>
			</div>
			<div className="card flex lg:card-side bg-base-100 my-10 border shadow-2xl">
				<figure className="lg:h-full my-auto lg:ms-2 lg:w-[50%]">
					<img
						className="rounded-xl"
						src={ChefsRecipe?.food5?.foodImg}
						alt="Movie"
					/>
				</figure>
				<div className="card-body hover:bg-stone-800 lg:my-1 rounded-xl lg:w-[50%]">
					<h2 className="card-title">{ChefsRecipe?.food1?.recipeName}</h2>
					<div>
						<p className="text-white font-serif text-2xl underline">
							Ingredients :{" "}
						</p>
						<p>1. {ChefsRecipe?.food1?.ingredients[0]}</p>
						<p>2. {ChefsRecipe?.food1?.ingredients[1]}</p>
						<p>3. {ChefsRecipe?.food1?.ingredients[2]}</p>
						<p>4. {ChefsRecipe?.food1?.ingredients[3]}</p>
						<p>5. {ChefsRecipe?.food1?.ingredients[4]}</p>
					</div>
					<p>{ChefsRecipe?.food1?.method}</p>
					<p>
						rating : {ChefsRecipe?.food1?.rating}{" "}
						<span>
							<FontAwesomeIcon className="text-amber-300" icon={faStar} />
						</span>
					</p>
					<div className="card-actions justify-end">
						<ToastContainer></ToastContainer>
						<button
							onClick={favClick}
							disabled={clicked}
							className="btn btn-primary"
						>
							{clicked ? true : false} favourite
							<FontAwesomeIcon className="text-red-600" icon={faHeart} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowRecipes;
