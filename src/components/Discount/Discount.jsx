import food from "../../assets/f.png";
import dis from "../../assets/25.jpg";
import "./Discount.css";

const Discount = () => {
	return (
		<div className="parallax bg-fixed lg:mx-16 rounded-md">
			<div className="lg:flex items-center justify-center p-5 lg:p-20 bg-black bg-opacity-50">
				<div className="w-full lg:w-1/2 relative lg:mr-40">
					<img
						src="https://media.istockphoto.com/id/1448600062/photo/grilled-and-sliced-beef-steak-with-grilled-vegetables-served-on-plate-on-black-background.jpg?s=612x612&w=0&k=20&c=hi7OLITh9cCGBRzO0PPCptFo5BLXn8yqIaK66Bq-5hA="
						alt=""
						className="w-full mx-auto rounded-xl shadow-2xl shadow-slate-600"
					/>
					<img className="absolute top-0 lg:w-36 right-0" src={dis} alt="" />
					<img
						className="hidden lg:block lg:w-96 absolute top-1/4 left-2/4 animate-spin slower rounded-full"
						src={food}
						alt=""
					/>
				</div>
				<div className="lg:w-1/2 space-y-4 mt-10 lg:mt-0">
					<h1 className="text-5xl text-center font-extrabold border-b-4 border-current pb-2">
						Exciting 25% Off Deal!
					</h1>
					<p className="text-justify font-bold text-white bg-opacity-0">
						Indulge in a gastronomic adventure like never before with our
						exclusive 25% discount! Treat yourself to a world of flavors and
						culinary excellence at our chef restaurant app. From savory starters
						to mouthwatering mains and irresistible desserts, our menu is
						designed to tantalize your taste buds. Experience the perfect blend
						of quality ingredients, expert craftsmanship, and incredible
						savings. Dont miss out on this limited-time offer. Download our app
						now and savor the finest dishes while enjoying an unbeatable
						discount. Hurry, satisfy your cravings today!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Discount;
