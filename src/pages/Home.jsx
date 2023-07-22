import React from "react";
import "../styles/Home.css";
import Card from "../components/Card";
import OurStory from "../components/ourStory";
import advImg from "../assests/restauranfood.jpg";
import Lemon from "../assests/Asset 20@4x.png";
import testimonialsIcon from "../assests/testimonialsIcon.png";
import testimonialsCurve from "../assests/testimonialsCurve.png";
import { Link } from "react-router-dom";

const Home = () => {
	const [name, setName] = React.useState();
	const specials = [
		{
			id: 1,
			image: require("../assests/greek salad.jpg"),
			name: "Greek salad",
			price: "$ 12.99",
			description:
				"classic Italian-American dish consisting of breaded and fried chicken cutlets topped with marinara sauce and melted cheese. The chicken is usually coated in breadcrumbs, pan-fried until crispy, then baked with marinara sauce and a layer of mozzarella cheese until the cheese is golden and bubbly",
		},
		{
			id: 2,
			image: require("../assests/lemon dessert.jpg"),
			name: "Bruchetta",
			price: "$ 9.99",
			description:
				"a French stew made with tender chunks of beef braised in red wine, along with bacon, onions, carrots, mushrooms, and herbs. The beef is seared to develop a rich flavor, then slow-cooked in a mixture of red wine and beef broth until it becomes fork-tender.",
		},
		{
			id: 3,
			image: require("../assests/spaghettibolognese-2.jpg"),
			name: "Ped Thai",
			price: "$ 5.00",
			description:
				"Thai stir-fried noodle dish that combines rice noodles, shrimp or chicken (or both), eggs, bean sprouts, and a flavorful sauce. The dish is typically cooked quickly over high heat, with the noodles absorbing the sweet, tangy, and savory flavors of the sauce.",
		},
	];

	const testimonials = [
		{
			image: require("../assests/Collins_Sophia.jpg"),
			name: "Sophia Collins",
			description:
				"Little Lemon has become my go-to restaurant for a delightful dining experience.",
		},
		{
			image: require("../assests/Emily_Parker_Headshot_-_Square.jpg"),
			name: "Emily Parker",
			description:
				"I recently visited Little Lemon, and I must say, it was an absolute delight.",
		},
		{
			image: require("../assests/michiel.jpg"),
			name: "Michael Ramirez",
			description:
				"Little Lemon has quickly become my favorite restaurant in town.",
		},
		{
			image: require("../assests/Mark-Thompson-Photo-3.jpg"),
			name: "Mark Thompson",
			description:
				"Little Lemon is a hidden gem that I stumbled upon, and I'm so glad I did.",
		},
	];
	return (
		<>
			<article className="position-rel container">
				<div className="py-4">
					<div>
						<h1 className="text-50 text-primary2">Little Lemon</h1>
						<h2 className="text-30 text-light">Chicago</h2>
						<p className="text-20 text-light pt-4">
							We are a family owned <br />
							Mediteranean restaurant,
							<br />
							focused on traditional <br />
							recipes served with a modern <br />
							twist
						</p>
						<button type="submit" className="button text-bold text-16">
							Reserve Table
						</button>
					</div>
					<div className="position-rel">
						<img className="position-abs" src={Lemon} alt="Lemon" />
						<div className="image-container">
							<img src={advImg} alt="ad image" width="379" height="413" />
						</div>
					</div>
				</div>
				<div className="bg-primary overlay position-abs"></div>
			</article>

			<div className="spacer" />

			<section className="container">
				<div className="specials">
					<div>
						<div className="text-40">Specials</div>
						<div>
							<button type="submit" className="button text-bold text-20">
								Online Menu
							</button>
						</div>
					</div>
					<div className="mt-5 specials-cards">
						{specials.map((item, index) => {
							return <Card item={item} />;
						})}
					</div>
					<div className="text-center my-6">
						<Link to="/menu" className="text-30">
							View all
						</Link>
					</div>
				</div>
			</section>

			<div className="spacer" />

			<section className="position-rel container text-center my-6">
				<div>
					<h1 className="testimonials-title text-40">Testimonials</h1>
					<div className="testimonials">
						{testimonials.map((item, index) => {
							return (
								<div key={index} className="position-rel testimonial-card">
									<img
										className="px-2 py-3"
										src={testimonialsIcon}
										alt="icon"
									/>
									<p className="description px-3">{item.description}</p>
									<div className="img">
										<img alt="client" src={item.image} width="53" />
									</div>
									<p className="text-light text-20 py-3">{item.name}</p>
									<img
										className="position-abs"
										src={testimonialsCurve}
										alt="curve"
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="testimonials-overlay position-abs"></div>
			</section>

			<div className="spacer" />

			<OurStory />

			<div className="spacer" />
		</>
	);
};

export default Home;
