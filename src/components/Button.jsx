import React from "react";
import "../styles/Button.css";

const Button = (props) => {
	return (
		<>
			<button
				data-testid="submit"
				type="submit"
				className={`button text-bold text-16`}
				style={props.styles}
			>
				{props.title}
			</button>
		</>
	);
};

export default Button;
