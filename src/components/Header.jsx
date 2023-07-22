import React from "react";
import logo from "../assests/Logo.png";
import "../styles/Header.css";
import { Routes, Route, Link } from "react-router-dom";

const Header = (props) => {
	const [ToggleMenu, setToggleMenu] = React.useState(false);
	return (
		<header className="container">
			<nav>
				<img src={logo} alt="logo" />
				<ul className="desktop">
					{props.links.map((link, index) => {
						return (
							<li key={index}>
								<Link aria-current="page" to={link.path}>
									{link.title}
								</Link>
							</li>
						);
					})}
				</ul>
				<button
					className="mobile burger"
					onClick={() => setToggleMenu(!ToggleMenu)}
				>
					&#9776;
				</button>
				<div className={`${ToggleMenu ? "mobile mob-menu" : "d-none"}`}>
					<button
						className="close-menu mobile burger"
						onClick={() => setToggleMenu(!ToggleMenu)}
					>
						<i className="bi bi-x"></i>
					</button>
					<ul className="mobile mob-menu-nav">
						{props.links.map((link, index) => {
							return (
								<li key={index}>
									<Link
										onClick={() => setToggleMenu(!ToggleMenu)}
										aria-current="page"
										to={link.path}
									>
										{link.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
