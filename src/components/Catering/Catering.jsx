/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Catering = () => {
	return (
		<div>
			<h1>This is catering</h1>
			<div className="card card-side grid grid-cols-2 bg-base-100 shadow-xl my-10">
				<figure>
					<img
						src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdGVyaW5nJTJGZXZlbnRzJTIwY2hlZnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
						alt="Food"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Catering events</h2>
					<p>
						Looking for a catering service that will take your event to the next
						level? Look no further than The
						<span className="text-orange-500 font-bold">Etalia</span>. With
						years of experience in the culinary industry, our team of skilled
						chefs and event professionals knows how to create a truly
						unforgettable dining experience. Whether you're planning a corporate
						luncheon, a wedding reception, or a private dinner party, we'll work
						with you to design a customized menu that fits your unique taste and
						budget. From mouthwatering appetizers to decadent desserts, every
						dish is made with the freshest and highest quality ingredients to
						ensure that your guests are blown away. But it's not just about the
						food - we also offer a range of event services, from staffing to
						rental equipment, to ensure that every aspect of your event is
						seamless and stress-free. And with our commitment to sustainability
						and eco-friendly practices, you can feel good about choosing a
						catering service that's both delicious and responsible. So why
						settle for a mediocre catering experience when you can have the
						best? Contact The
						<span className="text-orange-500 font-bold">Etalia</span> today to
						start planning your next event.
					</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Watch</button>
					</div>
				</div>
			</div>
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<img
						src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0ZXJpbmclMkZldmVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
						className="w-full h-[450px]"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img
						src="https://images.unsplash.com/photo-1525265332434-d52e2314161d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdGVyaW5nJTJGZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						className="w-full h-[450px]"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img
						src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdGVyaW5nJTJGZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						className="w-full h-[450px]"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img
						src="https://images.unsplash.com/photo-1519691548119-14735e4a11c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdGVyaW5nJTJGZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						className="w-full h-[450px]"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catering;
