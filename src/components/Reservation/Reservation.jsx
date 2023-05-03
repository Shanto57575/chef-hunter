/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserAlt,
	faCalendar,
	faClock,
} from "@fortawesome/free-solid-svg-icons";

const Reservation = () => {
	return (
		<div className="text-center lg:w-[700px] bg-stone-900 mx-auto my-14 lg:py-16 lg:px-10">
			<h1 className="text-5xl text-white font-serif mt-5">
				Reserve Your Table!
			</h1>
			<p className="font-serif mt-5 mb-7">
				<span className="text-white">Booking request</span> +88-123-123456{" "}
				<span className="text-white">or fill out the order form</span>
			</p>
			<form className="text-center lg:mx-12">
				<div className="flex flex-wrap -mx-3 m-1">
					<div className="w-full md:w-1/2 px-3 md:mb-0">
						<input
							className="appearance-none block bg-black  w-full border rounded py-3 px-4 mb-3 leading-tight"
							id="grid-first-name"
							type="text"
							placeholder="Your Name"
							required
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<input
							className="appearance-none block w-full border bg-black border-gray-200 rounded py-3 px-4 leading-tight"
							id="grid-last-name"
							type="text"
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
									className="block appearance-none w-full py-3 px-4 pr-8 bg-black rounded leading-tight focus:outline-none "
									id="grid-state"
								>
									<option>1 person</option>
									<option>2 person</option>
									<option>3 person</option>
									<option>4 person</option>
									<option>5 person</option>
									<option>6 person</option>
									<option>7 person</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
							<FontAwesomeIcon icon={faCalendar} />
							<div className="relative">
								<select
									className="block appearance-none bg-black px-5 w-full py-3 pr-8 rounded leading-tight "
									id="grid-state"
								>
									<FontAwesomeIcon icon={faCalendar} />
									<option>DD-MM-YYYY</option>
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
						<div className="flex justify-center items-center border rounded-sm bg-black">
							<FontAwesomeIcon icon={faClock} />
							<div className="relative">
								<select
									className="block appearance-none bg-black w-full py-3 px-4 pr-8 rounded leading-tight "
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
				<input
					placeholder="Message"
					className="border bg-black my-5 h-36 w-full"
				/>
			</form>
			<p className="border text-center p-3 lg:w-[530px] bg-black hover:bg-stone-700 mx-auto">
				Book A Table
			</p>
		</div>
	);
};

export default Reservation;
