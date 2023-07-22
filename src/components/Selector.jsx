import React from "react";
import "../styles/Selector.css";

const Selector = ({ label, options, icon, handleChange }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [selected, setSelected] = React.useState(label);

	return (
		<>
			<div
				className={`selector ${isOpen ? "bg-secondary" : "bg-primary"}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<img src={icon} alt="icon" />
				<p className={`${!isOpen ? "text-light" : ""}`}>{selected}</p>

				{isOpen ? (
					<i className="bi bi-chevron-down"></i>
				) : (
					<i className="bi bi-chevron-up text-light"></i>
				)}
			</div>
			{isOpen && (
				<div className="options">
					{options.map((option, index) => {
						return (
							<div
								key={index}
								className="option bg-secondary text-primary"
								onClick={() => {
									setSelected(option.label);
									setIsOpen(!isOpen);
									handleChange(option.value);
								}}
								data-testid="initialTime"
							>
								{option.label}
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Selector;
