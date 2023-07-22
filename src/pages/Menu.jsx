import React from "react";
import Card from "../components/Card";
import Dish from "../assests/image-box.png";
import Curve3 from "../assests/curve3.png";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
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
		{
			id: 4,
			image: require("../assests/greek salad.jpg"),
			name: "Greek salad",
			price: "$ 12.99",
			description:
				"classic Italian-American dish consisting of breaded and fried chicken cutlets topped with marinara sauce and melted cheese. The chicken is usually coated in breadcrumbs, pan-fried until crispy, then baked with marinara sauce and a layer of mozzarella cheese until the cheese is golden and bubbly",
		},
		{
			id: 5,
			image: require("../assests/lemon dessert.jpg"),
			name: "Bruchetta",
			price: "$ 9.99",
			description:
				"a French stew made with tender chunks of beef braised in red wine, along with bacon, onions, carrots, mushrooms, and herbs. The beef is seared to develop a rich flavor, then slow-cooked in a mixture of red wine and beef broth until it becomes fork-tender.",
		},
		{
			id: 6,
			image: require("../assests/spaghettibolognese-2.jpg"),
			name: "Ped Thai",
			price: "$ 5.00",
			description:
				"Thai stir-fried noodle dish that combines rice noodles, shrimp or chicken (or both), eggs, bean sprouts, and a flavorful sauce. The dish is typically cooked quickly over high heat, with the noodles absorbing the sweet, tangy, and savory flavors of the sauce.",
		},
		{
			id: 7,
			image: require("../assests/greek salad.jpg"),
			name: "Greek salad",
			price: "$ 12.99",
			description:
				"classic Italian-American dish consisting of breaded and fried chicken cutlets topped with marinara sauce and melted cheese. The chicken is usually coated in breadcrumbs, pan-fried until crispy, then baked with marinara sauce and a layer of mozzarella cheese until the cheese is golden and bubbly",
		},
		{
			id: 8,
			image: require("../assests/lemon dessert.jpg"),
			name: "Bruchetta",
			price: "$ 9.99",
			description:
				"a French stew made with tender chunks of beef braised in red wine, along with bacon, onions, carrots, mushrooms, and herbs. The beef is seared to develop a rich flavor, then slow-cooked in a mixture of red wine and beef broth until it becomes fork-tender.",
		},
		{
			id: 9,
			image: require("../assests/spaghettibolognese-2.jpg"),
			name: "Ped Thai",
			price: "$ 5.00",
			description:
				"Thai stir-fried noodle dish that combines rice noodles, shrimp or chicken (or both), eggs, bean sprouts, and a flavorful sauce. The dish is typically cooked quickly over high heat, with the noodles absorbing the sweet, tangy, and savory flavors of the sauce.",
		},
	];

	return (
		<>
			<article className="container position-rel menu bg-primary py-5">
				<div className="pt-4">
					<div>
						<div className="adv-body">
							<h1 className={`text-50 text-light`}>Bruchetta</h1>
							<p className={`text-20 mt-5 text-light`}>
								a French stew made with tender chunks of beef braised in red
								wine,
								<br />
								along with bacon, onions, carrots, mushrooms, and herbs. The
								beef <br />
								is seared to develop a rich flavor, then slow-cooked in a
								mixture <br />
								of red wine and beef broth until it becomes fork-tender.
							</p>
							<button type="submit" className="button text-bold text-16 mt-5">
								Order delivery
							</button>
						</div>
					</div>
					<div>
						<div className="img-container">
							<img src={Dish} alt="dish" />
						</div>
					</div>
					<img
						className="menu-curve-overlay position-abs"
						src={Curve3}
						alt="curve3"
					/>
				</div>
			</article>
			<div className="spacer"></div>
			<section className="container">
				<div className="menu-cards">
					<div>
						<div className="menu-title text-40 text-center">Menu</div>
					</div>
					<div className="mt-5 cards">
						{specials.map((item, index) => {
							return <Card item={item} />;
						})}
					</div>
				</div>
			</section>
			<div className="spacer"></div>
		</>
	);
};

export default Menu;
