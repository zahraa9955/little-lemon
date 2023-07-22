import React from "react";

import "../styles/Footer.css";
import FooterImg from "../assests/logo-white.png";
import insta from "../assests/Group 18.png";
import linkedIn from "../assests/Group 23.png";
import youtube from "../assests/Group 24.png";
import facebook from "../assests/Group 25.png";
import { Routes, Route, Link } from "react-router-dom";
const Footer = () => {
	return (
		<>
			<footer className="footer container bg-primary">
				<div>
					<div className="logo">
						<img src={FooterImg} alt="footer logo" width="184" />
					</div>
					<div className="doormat">
						<h1 className="text-30 text-light">Doormat</h1>
						<div>
							<Link className="text-20 text-light" to="/">
								Home
							</Link>
						</div>
						<div>
							<Link className="text-20 text-light" to="/about">
								About
							</Link>
						</div>
						<div>
							<Link className="text-20 text-light" to="/reservation">
								Reservation
							</Link>
						</div>
						<div>
							<Link className="text-20 text-light" to="/order-online">
								Order Online
							</Link>
						</div>
						<div>
							<Link className="text-20 text-light" to="/login">
								Login
							</Link>
						</div>
					</div>
					<div className="contact">
						<h1 className="text-30 text-light">Contact</h1>
						<div className="text-20 text-light">
							Address: 123 Main Street, Anytown, USA
						</div>
						<div className="text-20 text-light">
							Email: info@savorybistro.com
						</div>
						<div className="text-20 text-light">
							Phone number: +1 (555) 123-4567
						</div>
					</div>
					<div className="social-links">
						<h1 className="text-30 text-light">Social Media Links</h1>
						<div>
							<img src={insta} alt="instagram" />
							<img src={facebook} alt="facebook" />
							<img src={youtube} alt="youtube" />
							<img src={linkedIn} alt="linkedIn" />
						</div>
					</div>
					<div className="copywrites text-light">
						Copyright © 2023 Little Lemon Restaurant. All rights reserved.
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
