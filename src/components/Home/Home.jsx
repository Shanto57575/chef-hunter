/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Banner/Banner";
import ChefCard from "../ChefCard/ChefCard";
import Catering from "../Catering/Catering";
import Reservation from "../Reservation/Reservation";
import Dish from "../SpecialDish/Dish";
import Discount from "../Discount/Discount";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<ChefCard></ChefCard>
			<Dish></Dish>
			<Catering></Catering>
			<Discount></Discount>
			<Reservation></Reservation>
		</div>
	);
};

export default Home;
