/* eslint-disable no-unused-vars */
import { Link } from "react-scroll";
import bannerImage from "../../assets/italianFood.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<div className="h-[800px]">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper"
			>
				<SwiperSlide>
					<img
						style={{ filter: "brightness(0.5)" }}
						src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA="
						alt="Banner"
					/>
					<div className="absolute inset-0 flex items-center justify-center text-center">
						<div className="font-bold tracking-wide text-center">
							<div className="text-base text-white space-y-5">
								<p className="font-serif text-lg uppercase">
									Traditional & Hygine
								</p>
								<hr className="w-1/3 mx-auto border" />
								<p className="font-serif text-3xl md:text-5xl lg:text-7xl">
									Where Flavors Whisper <br /> Enchanting Tales
								</p>
							</div>
							<div>
								<p className="w-1/2 mx-auto md:w-full text-xl text-white font-serif my-5">
									Come with family & feel the joy of mouthwatering food
								</p>
								<Link to="reserve" smooth={true} duration={500}>
									<button className="btn my-5 bg-white font-serif font-extrabold">
										Find A Table
									</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ filter: "brightness(0.5)" }}
						src="https://media.istockphoto.com/id/1434542354/photo/a-female-chef-pouring-sauce-on-salad.jpg?s=612x612&w=0&k=20&c=ZWsHCE6eKTXvQ48ljLhgraUreNA0t3JZN2LH7KUdw2w="
						alt="Banner"
					/>
					<div className="absolute inset-0 flex items-center justify-center text-center">
						<div className="font-bold tracking-wide text-center">
							<div className="text-base text-white space-y-5">
								<p className="font-serif text-lg">AMAZING & DELICIOUS</p>
								<hr className="w-1/3 mx-auto border" />
								<p className="font-serif text-3xl md:text-5xl lg:text-7xl">
									Where Italian roots <br /> flavor every bite{" "}
								</p>
							</div>
							<div>
								<p className="w-1/2 mx-auto md:w-full text-xl text-white font-serif my-5">
									Come with family & feel the joy of mouthwatering food
								</p>
								<Link to="reserve" smooth={true} duration={500}>
									<button className="btn my-5 bg-white font-serif font-extrabold">
										Find A Table
									</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ filter: "brightness(0.5)" }}
						src="https://media.istockphoto.com/id/1044645782/photo/chef-cook-preparing-vegetables-in-his-kitchen.jpg?s=612x612&w=0&k=20&c=UYXr-rAaL9WdkrJsDbRcNMiPVyFoeSmc56aqKOKbwVA="
						alt="Banner"
					/>
					<div className="absolute inset-0 flex items-center justify-center text-center">
						<div className="font-bold tracking-wide text-center">
							<div className="text-base text-white space-y-5">
								<p className="font-serif text-lg uppercase">
									DELIGHTFUL EXPERIENCE
								</p>
								<hr className="w-1/3 mx-auto border" />
								<p className="font-serif text-3xl md:text-5xl lg:text-7xl">
									Flavours inspired <br /> by the seasons
								</p>
							</div>
							<div>
								<p className="w-1/2 mx-auto md:w-full text-xl text-white font-serif my-5">
									Come with family & feel the joy of mouthwatering food
								</p>
								<Link to="reserve" smooth={true} duration={500}>
									<button className="btn my-5 bg-white font-serif font-extrabold">
										Find A Table
									</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ filter: "brightness(0.5)" }}
						src="https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck="
						alt="Banner"
					/>
					<div className="absolute inset-0 flex items-center justify-center text-center">
						<div className="font-bold tracking-wide text-center">
							<div className="text-base text-white space-y-5">
								<p className="font-serif text-lg uppercase">Divine Cuisine</p>
								<hr className="w-1/3 mx-auto border" />
								<p className="font-serif text-3xl md:text-5xl lg:text-7xl">
									Where Every Flavour <br /> tells a story
								</p>
							</div>
							<div>
								<p className="w-1/2 mx-auto md:w-full text-xl text-white font-serif my-5">
									Come with family & feel the joy of mouthwatering food
								</p>
								<Link to="reserve" smooth={true} duration={500}>
									<button className="btn my-5 bg-white font-serif font-extrabold">
										Find A Table
									</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<div className="autoplay-progress" slot="container-end">
					<svg viewBox="0 0 48 48" ref={progressCircle}>
						<circle cx="24" cy="24" r="20"></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</div>
	);
};

export default Banner;
