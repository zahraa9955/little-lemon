import React from "react";
import "../styles/Card.css";

const Card = ({ item }) => {
	return (
		<div key={item.id} className="card">
			<div className="card-img">
				<img src={item.image} alt={item.name} />
			</div>
			<div className="card-body my-3 mx-3">
				<div className="title">
					<div className="text-30">{item.name}</div>
					<div className="text-30">{item.price}</div>
				</div>
				<div className="description text-16">{item.description}</div>
				<button type="submit" className="button text-bold text-16">
					Order a delivery
				</button>
			</div>
		</div>
	);
};

export default Card;
