/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserAlt,
	faCalendar,
	faClock,
} from "@fortawesome/free-solid-svg-icons";

import "./Reservation.css";
import { Flip, Rotate, Slide, Zoom } from "react-awesome-reveal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const Reservation = () => {
	const [startDate, setStartDate] = useState(new Date());

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Booking Confirmed, Welcome to The Etalia!",
			showConfirmButton: false,
			timer: 1500,
		});
		form.reset();
	};

	return (
		<div
			name="reserve"
			id="target-section"
			className="text-center lg:mx-16 rounded-md my-16"
		>
			<p className="text-center text-white font-serif text-xl">Reservation</p>
			<h1 className="text-5xl font-serif mt-3 mb-5">Reserve Your Table!</h1>

			<div className="lg:flex gap-5 md:p-5 items-center justify-center">
				<div className="lg:w-1/2 grid grid-cols-3 gap-3">
					<Flip>
						<img
							src="https://media.istockphoto.com/id/1186198866/photo/cooking-by-a-chef-italian-lasagna-frying-a-dressing-in-a-frying-pan-and-sprinkling-with-basil.jpg?s=612x612&w=0&k=20&c=fJPWGU53OhdPwr8zUZIz1uW07jwN4noM83Qmknaf8UU="
							alt=""
							className="rounded-lg"
						/>
					</Flip>
					<Rotate>
						<img
							src="https://media.istockphoto.com/id/1434542354/photo/a-female-chef-pouring-sauce-on-salad.jpg?s=612x612&w=0&k=20&c=ZWsHCE6eKTXvQ48ljLhgraUreNA0t3JZN2LH7KUdw2w="
							alt=""
							className="rounded-lg"
						/>
					</Rotate>
					<Slide>
						<img
							src="https://media.istockphoto.com/id/914599778/photo/chef-proudly-presenting-thai-spicy-crab-papaya-salad-lao-isan-cuisine.jpg?s=612x612&w=0&k=20&c=nhePzeY192HaFzJCymfmLMY5nICduIJgNgis4AmnMGI="
							alt=""
							className="rounded-lg"
						/>
					</Slide>
					<Zoom>
						<img
							src="https://media.istockphoto.com/id/877309726/photo/male-chef-garnishing-food-in-kitchen.jpg?s=612x612&w=0&k=20&c=U2wynKNuBJSd86sqyY3ivCT3EsqmllPe4k1cDwOgVLc="
							alt=""
							className="rounded-lg"
						/>
						<Flip>
							{" "}
							<img
								src="https://media.istockphoto.com/id/957820918/photo/cook-preparing-many-plates-in-a-restaurant-kitchen-catering-caterer.jpg?s=612x612&w=0&k=20&c=0_hoZRvlSIvM1-Y_V5pkqXZTYlJrtrZBtPwdwiYbnWw="
								alt=""
								className="rounded-lg"
							/>
						</Flip>
						<img
							src="https://media.istockphoto.com/id/1226531002/photo/a-female-chef-in-a-white-uniform-and-a-black-apron-in-the-restaurant-kitchen-cooking-a-salad.jpg?s=612x612&w=0&k=20&c=vIPogQeCXlhQ5Hc-rW4jbwm0Bat7hQuUI7h2WCnTslo="
							alt=""
							className="rounded-lg"
						/>
						<img
							src="https://media.istockphoto.com/id/1502384708/photo/hand-of-young-male-chef-putting-aromatic-herb-on-top-of-roasted-meat.jpg?s=612x612&w=0&k=20&c=waf0n9XAfKwNONPgMo1MdFn6gVTUmQa-CP4BSbmXujo="
							alt=""
							className="rounded-lg"
						/>
						<img
							src="https://media.istockphoto.com/id/1466340905/photo/the-chef-prepares-shrimp-with-herbs-cooking-seafood-healthy-vegetarian-food-and-food-on-dark.jpg?s=612x612&w=0&k=20&c=RMMwYGzlWPvwWoDkjovBR6COMJdbQCltqHPbPudoXRI="
							alt=""
							className="rounded-lg"
						/>
					</Zoom>
					<Flip>
						<img
							src="https://media.istockphoto.com/id/1155524809/photo/salad-with-buratta-cheese.jpg?s=612x612&w=0&k=20&c=XqcfoSJK1etJ_iitKuhALPXyNu8dduHSPhbo_vqrThE="
							alt=""
							className="rounded-lg"
						/>
					</Flip>
				</div>
				<div className="lg:w-1/2 space-y-2">
					<p className="text-sm my-2 text-center font-semibold">
						Restaurant will be open for all days, Sunday night will be closed,
						All booking payment is secured with credit card, no charges will be
						aplly for online booking. no refundable.
					</p>
					<p className="font-serif">
						<span className="text-white">Booking request</span> +88-123-123456{" "}
						<span className="text-white">or fill out the order form</span>
					</p>
					<form onSubmit={handleSubmit} className="text-center">
						<div className="flex flex-wrap -mx-3 m-1">
							<div className="w-full md:w-1/2 px-3 md:mb-0">
								<input
									className="appearance-none block bg-black  w-full border rounded py-3 px-4 mb-3 leading-tight"
									name="name"
									type="text"
									placeholder="Your Name"
									required
								/>
							</div>
							<div className="w-full md:w-1/2 px-3">
								<input
									className="appearance-none block w-full border bg-black border-gray-200 rounded py-3 px-4 leading-tight"
									name="number"
									type="tel"
									placeholder="Phone Number"
									required
								/>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-2">
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<div className="flex justify-center items-center border rounded-sm bg-black">
									<FontAwesomeIcon icon={faUserAlt} />
									<div className="relative">
										<select
											className="block appearance-none w-full cursor-pointer py-3 px-4 pr-8 bg-black rounded leading-tight focus:outline-none"
											id="grid-state"
											required
										>
											<option>1 person</option>
											<option>2 person</option>
											<option>3 person</option>
											<option>4 person</option>
											<option>5 person</option>
											<option>6 person</option>
											<option>8 person</option>
											<option>9 person</option>
											<option>10 person</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
											<svg
												className="fill-current h-4 w-4"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<div className="flex justify-center items-center border rounded-sm bg-black px-5">
									<FontAwesomeIcon icon={faCalendar} />
									<div className="relative">
										<DatePicker
											className="block appearance-none w-full cursor-pointer py-3 px-4 pr-8 bg-black rounded leading-tight focus:outline-none"
											selected={startDate}
											onChange={(date) => setStartDate(date)}
										/>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
											<svg
												className="fill-current h-4 w-4"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<div className="flex justify-center items-center border rounded-sm bg-black">
									<FontAwesomeIcon icon={faClock} />
									<div className="relative">
										<select
											className="block appearance-none cursor-pointer bg-black w-full py-3 px-4 pr-8 rounded leading-tight focus:outline-none"
											id="grid-state"
										>
											<option> 10 : 00 am</option>
											<option> 11 : 00 am</option>
											<option> 12 : 00 pm</option>
											<option> 01 : 00 pm</option>
											<option> 02 : 00 pm</option>
											<option> 03 : 00 pm</option>
											<option> 04 : 00 pm</option>
											<option> 05 : 00 pm</option>
											<option> 06 : 00 pm</option>
											<option> 07 : 00 pm</option>
											<option> 08 : 00 pm</option>
											<option> 09 : 00 pm</option>
											<option> 10 : 00 pm</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
											<svg
												className="fill-current h-4 w-4"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<textarea
							placeholder="Message"
							name="message"
							className="border bg-black my-5 h-36 w-full p-4"
						/>
						<button
							type="submit"
							value="Book a Table"
							className="w-full cursor-pointer font-bold border text-center p-3 bg-black hover:bg-stone-700 mx-auto"
						>
							Book a Table
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Reservation;
