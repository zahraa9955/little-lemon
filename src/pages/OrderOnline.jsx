import React from "react";
import OrderForm from "../components/OrderForm";
import "../styles/OrderOnline.css";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../utilities/api";

const OrderOnline = () => {
	const navigate = useNavigate();
	const cart = [
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

	const handleSubmit = (data) => {
		submitAPI(data);
		navigate("/thank-you");
	};

	return (
		<>
			<div className="spacer" />

			<section className="container">
				<div>
					<div className="cart">
						<div>
							<h1>Cart</h1>
						</div>
						<div>
							<h1>Order summary</h1>
						</div>
						<div>
							{cart.map((item) => {
								return (
									<div className="cart-card" key={item.id}>
										<div className="cart-img-container">
											<img src={item.image} alt={item.name} />
										</div>
										<div>
											<p className="text-25">{item.name}</p>
											<p className="text-25">{item.price}</p>
											<div className="counter">
												<i className="bi bi-dash text-40" />
												<p className="text-30">1</p>
												<i className="bi bi-plus text-40" />
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="bg-white bg-shadow">
							<div className="order-summary">
								{cart.map((item) => (
									<div>
										<div>
											<h3>{item.name}</h3>
											<p>{item.price}</p>
										</div>
										<div>
											<div className="cart-img-container">
												<img src={item.image} alt={item.name} />
											</div>
										</div>
									</div>
								))}
								<h1 className="text-center my-5">Total : $24.44</h1>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="spacer" />

			<section className="container">
				<div>
					<OrderForm handleSubmit={handleSubmit} />
				</div>
			</section>

			<div className="spacer"></div>
		</>
	);
};

export default OrderOnline;
