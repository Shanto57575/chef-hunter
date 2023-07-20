/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./Catering.css";

const Catering = () => {
	return (
		<div className="lg:mx-16">
			<h1 className="text-xl text-center font-serif text-white mb-5">
				Why Choose Us
			</h1>
			<h1 className="font-serif mt-5 text-5xl text-center">Our Strength !</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 text-center font-bold">
				<div className="leaf card my-5 h-[350px] glass transform group hover:bg-stone-900 hover:text-white transition duration-300 rounded">
					<figure className="h-40">
						<img
							className="group-hover:scale-125 duration-700 brightness-75 group-hover:brightness-100"
							src="https://media.istockphoto.com/id/948116034/photo/he-s-got-a-special-cooking-skill.jpg?s=612x612&w=0&k=20&c=bQ2XsJnDJYPZnmN52adBrQCbyKV06A4Edh8U90Vrukc="
						/>
					</figure>
					<div className="card-body">
						<h3 className="text-center text-white font-bold">Skilled Chefs</h3>
						<p>Experience the culinary expertise of our Skilled Chefs.</p>
					</div>
				</div>
				<div className="leaf card my-5 h-[350px] glass transform group hover:bg-stone-900 hover:text-white transition duration-300 rounded">
					<figure className="h-40">
						<img
							className="group-hover:scale-125 duration-700 brightness-75 group-hover:brightness-100"
							src="https://media.istockphoto.com/id/1471434168/photo/splashes-and-vegetables.jpg?s=612x612&w=0&k=20&c=xv0YMpkYnh9YSaOUjfo0Iw4ETt80z6yngZ5hCJVd8nM="
							alt=""
						/>
					</figure>
					<div className="card-body">
						<h3 className="text-center text-white font-bold">Hygienic Food</h3>
						<p>Safe, hygienic food: worry-free dining experience guaranteed.</p>
					</div>
				</div>
				<div className="leaf card my-5 h-[350px] glass transform group hover:bg-stone-900 hover:text-white transition duration-300 rounded">
					<figure className="h-40">
						<img
							className="group-hover:scale-125 duration-700 brightness-75 group-hover:brightness-100"
							src="https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A="
							alt=""
						/>
					</figure>
					<div className="card-body">
						<h3 className="text-center text-white font-bold">
							Fresh Environment
						</h3>
						<p>Fresh ambiance, flavorful dishes: prioritize your well-being.</p>
					</div>
				</div>
				<div className="leaf card my-5 h-[350px] glass transform group hover:bg-stone-900 hover:text-white transition duration-300 rounded">
					<figure className="h-40">
						<img
							className="group-hover:scale-125 duration-700 group-hover:brightness-125"
							src="https://media.istockphoto.com/id/1298329918/photo/birthday-celebratory-toast-with-string-lights-and-champagne-silhouettes.jpg?s=612x612&w=0&k=20&c=PaDeMR5-r0NdlxghuVF9tRqR5XkCdNdTzxrkofv0Syk="
							alt=""
						/>
					</figure>
					<div className="card-body">
						<h3 className="text-center text-white font-bold">Event & Party</h3>
						<p>
							Remarkable celebrations at The Etalia, where every detail shines.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catering;
