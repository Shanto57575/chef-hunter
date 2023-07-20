import salad from "../../assets/salad.jpg";
import cake from "../../assets/cake.jpg";
import french from "../../assets/french.jpg";
import noodles from "../../assets/noodles.jpg";
import { Flip, Roll, Rotate, Zoom } from "react-awesome-reveal";

const Dish = () => {
	return (
		<div className="my-16 font-serif font-semibold">
			<h1 className="text-xl text-center font-serif text-white mb-5">
				Delicious
			</h1>
			<h1 className="font-serif mt-5 text-5xl text-center mb-16">
				Special Dishes !
			</h1>
			<div className="mx-auto lg:mx-12 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				<Zoom>
					<div className="text-center space-y-3 space-x-3">
						<Flip>
							<img
								className="mx-auto h-72 border-2 rounded-3xl group hover:scale-105 duration-500"
								src={salad}
							/>
						</Flip>
						<h1>Italian Salad</h1>
						<h2>
							Tomatoes, green bell pepper, sliced cucumber onion, olives, and
							feta cheese.
						</h2>
					</div>
					<div className="text-center space-y-3 space-x-3">
						<Roll>
							<img
								className="mx-auto h-72 border-2 rounded-3xl hover:scale-105 duration-500"
								src={cake}
								alt=""
							/>
						</Roll>
						<h1>Lasagne</h1>
						<h2>
							Vegetables, cheeses, ground meats, tomato sauce, seasonings and
							spices
						</h2>
					</div>
					<div className="text-center space-y-3 space-x-3">
						<Rotate>
							<img
								className="mx-auto h-72 border-2 rounded-3xl hover:scale-105 duration-500"
								src={noodles}
								alt=""
							/>
						</Rotate>
						<h1>Butternut Pumpkin</h1>
						<h2>
							Vegetables, cheeses, ground meats, tomato sauce, seasonings and
							spices
						</h2>
					</div>
					<div className="text-center space-y-3 space-x-3">
						<Flip>
							<img
								className="mx-auto h-72 border-2 rounded-3xl hover:scale-105 duration-500"
								src={french}
								alt=""
							/>
						</Flip>
						<h1>Tokusen Wagyu</h1>
						<h2>
							Typesetting industry lorem Lorem Ipsum is simply dummy text of the
							priand.
						</h2>
					</div>
				</Zoom>
			</div>
		</div>
	);
};

export default Dish;
