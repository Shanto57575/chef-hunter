/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";

const AboutUs = () => {
	return (
		<div className="font-serif font-extrabold text-center my-10">
			<Marquee speed={200} pauseOnHover={true} className="flex rounded-lg">
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/898213902/photo/cold-cuts-and-wine.jpg?b=1&s=170667a&w=0&k=20&c=VjfAfnxzxrOu3_R-iK4uFhPw9VFf99PLlQ6q3bowR7k="
					alt=""
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=CPnBJAsLv6e8ZE1DP_z0zP1uRk2adI-aeQQuPSsK8QU="
					alt=""
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/1287249478/photo/pizza-chef-preparing-pizza-at-the-restaurant.jpg?b=1&s=170667a&w=0&k=20&c=mbPYXi7dA6Kp2oMAKImCo1osc0SxWBB8-psBc9Yydlo="
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/1006587840/photo/seafood-and-pasta-sicily-spaghetti.jpg?b=1&s=170667a&w=0&k=20&c=0ZNLej-X-I12C3H1sg6nJOtsEixQnPyM7UTyRwRLLmE="
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/1190466456/photo/chicken-riggies.jpg?b=1&s=170667a&w=0&k=20&c=m5emcLdwtc3BivRei5etmq46DK1yCwjikuaV-0XN0io="
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=8pARCDQkmc8X6SUnWQBY7MAdYVBSxbH8PBS3sJxLOiE="
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/1409730006/photo/team-of-cooks-working-at-a-restaurant-and-looking-at-a-recipe.jpg?b=1&s=170667a&w=0&k=20&c=UDoWInzyfHS6fAJEBgtmQjRw359CQwciPfv3-TsiNPo="
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/1409729992/photo/hectic-cooks-working-in-a-busy-commercial-kitchen-at-a-restaurant.jpg?b=1&s=170667a&w=0&k=20&c=IO7gtdTizd8qmMzwl5yTLo_g1TjgvsEikR9udWagITw="
				/>
				<img
					className="h-[150px] rounded-md"
					src="https://media.istockphoto.com/id/1343182422/photo/empty-rustic-design-restaurant-with-wooden-furniture-and-some-decorative-plants.jpg?b=1&s=170667a&w=0&k=20&c=et0uadwZ9NPZbg-t8nRENoJh5I_aqTCVqEhO2kMcywc="
				/>
			</Marquee>{" "}
			<h2 className="mt-10 mb-4">
				Welcome to <span className="text-white">The Etalia</span>
			</h2>
			<p>
				Where authentic Italian cuisine meets rustic elegance. Our restaurant is
				home to a team of expert Italian chefs, each one handpicked from the
				finest culinary schools in Italy. Their passion for creating delicious,
				authentic Italian dishes is evident in every bite.
			</p>
			<p>
				Our menu is a carefully curated selection of classic Italian dishes,
				made with the freshest, highest quality ingredients. From homemade pasta
				to wood-fired pizza, every dish is a masterpiece that transports you to
				the heart of Italy.
			</p>
			<p>
				But The Etalia is more than just a restaurant. It's a celebration of all
				things Italian, a place where people can come together to share their
				love for good food and good company. Whether it's a romantic dinner for
				two or a lively family gathering, The Etalia is always the perfect place
				to create memories and savor the flavors of Italy.
			</p>
		</div>
	);
};

export default AboutUs;
