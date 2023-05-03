/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Banner/Banner";
import ChefCard from "../ChefCard/ChefCard";
import Catering from "../Catering/Catering";
import Reservation from "../Reservation/Reservation";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<ChefCard></ChefCard>
			<Catering></Catering>
			<Reservation></Reservation>
		</div>
	);
};

export default Home;
