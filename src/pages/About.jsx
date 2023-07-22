import React from "react";
import "../styles/About.css";
import OurStory from "../components/ourStory";
import Curve from "../assests/curve2.png";
import Assest1 from "../assests/Rectangle 7.png";
import Assest2 from "../assests/Rectangle 8.png";
import marionAndAndrian from "../assests/Ellipse 1.png";
import marionAndAndrian2 from "../assests/Ellipse 2.png";
import insta from "../assests/Group 18.png";
import linkedIn from "../assests/Group 23.png";
import facebook from "../assests/Group 25.png";

const About = () => {
	const [activeFaq, setActiveFaq] = React.useState({
		isOpen: false,
		index: 0,
	});
	const faqs = [
		{
			question: "How can I make a reservation?",
			answer:
				"We recommend making a reservation through our online booking system on our website. Simply select the date, time, and number of guests, and we'll ensure a table is ready for you",
		},
		{
			question: "Are reservations required?",
			answer:
				"While reservations are not always required, they are highly recommended, especially during peak hours or for larger groups. Reserving a table in advance helps us provide you with the best dining experience",
		},
		{
			question: "What are your opening hours?",
			answer:
				"We are open from [opening hours], [days of the week]. Please note that these hours may vary on holidays or special occasions. You can find our current opening hours on our website or by contacting us directly.",
		},
		{
			question: "Do you accommodate dietary restrictions or allergies?",
			answer:
				"Yes, we strive to accommodate various dietary restrictions and allergies. Please inform our staff about your specific requirements when making a reservation or upon arrival. We will do our best to provide suitable options or make necessary adjustments to our menu.",
		},
	];

	const handleFaqClick = (index) => {
		setActiveFaq({ isOpen: !activeFaq.isOpen, index: index });
	};

	return (
		<div>
			<article className="position-rel">
				<div className="pt-4">
					<OurStory
						title="text-primary2"
						subtitle="text-light"
						description="text-light"
					/>
				</div>
				<div className="bg-primary about-overlay position-abs">
					<img
						className="about-curve-overlay position-abs"
						src={Curve}
						alt="curve"
						width="880"
					/>
				</div>
			</article>

			<div className="spacer" />

			<section className="container">
				<div className="story-2">
					<div>
						<img src={Assest1} alt="" />
						<img src={Assest2} alt="" />
					</div>
					<div>
						<div>
							<h1 className={`text-50`}>Our Story</h1>
							<p className={`text-25 mt-4`}>
								At Little Lemon, our journey began with a shared passion for
								culinary excellence and a desire to create a unique dining
								experience. Inspired by the vibrant flavors of lemons and a
								vision to bring something fresh and exciting to the Chicago
								dining scene, we embarked on a culinary adventure.
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className="spacer" />

			<section className="position-rel container team-section">
				<div>
					<h1 className="text-40 text-center mt-4">Owners</h1>
					<div className="team-cards">
						<div className="team-card">
							<h1 className="bg-light text-center text-30 px-2 py-4">
								Meet The Team
							</h1>
							<p className="bg-primary2 text-light px-2 py-4">
								At Little Lemon, our team is the heart and soul behind the
								exceptional dining experience we offer. We are a group of
								passionate individuals who share a love for food, hospitality,
								and creating unforgettable moments for our guests. Allow us to
								introduce you to the talented individuals who make up our
								dedicated team
							</p>
						</div>
						<div className="mario-card bg-light px-5 py-5">
							<div className="img-container">
								<img src={marionAndAndrian} alt="mario and adrian" />
							</div>
							<h2>Mario</h2>
							<h3>Owner</h3>
							<div>
								<img src={insta} alt="socail instagram" />
								<img src={facebook} alt="socail facebook" />
								<img src={linkedIn} alt="socail linkedIn" width="100" />
							</div>
						</div>
						<div className="adrian-card bg-primary2 px-5 py-5">
							<div className="img-container">
								<img src={marionAndAndrian2} alt="mario and adrian" />
							</div>
							<h2 className="text-light">Adrian</h2>
							<h3 className="text-light">Owner</h3>
							<div>
								<img src={insta} alt="socail instagram" width="100" />
								<img src={facebook} alt="socail facebook" width="100" />
								<img src={linkedIn} alt="socail linkedIn" width="100" />
							</div>
						</div>
					</div>
				</div>
				<div className="team-section-overlay position-abs"></div>
			</section>

			<div className="spacer" />
			<section className="container">
				<div>
					<h1 className="text-50 text-center mb-5">
						Frequently Asked Questions
					</h1>
					<div className="faqs">
						{faqs.map((faq, index) => {
							return (
								<div key={index} className="faq-card my-3">
									<div
										className={`faq-card-header ${
											index == activeFaq.index && activeFaq.isOpen
												? "bg-primary"
												: "bg-secondary"
										}`}
									>
										<h2
											className={`faq-card-header ${
												index == activeFaq.index && activeFaq.isOpen
													? "text-light"
													: ""
											} text-30`}
										>
											{faq.question}
										</h2>
										<button type="button" onClick={() => handleFaqClick(index)}>
											{index == activeFaq.index && activeFaq.isOpen && (
												<span className="bi bi-dash text-40 text-light"></span>
											)}
											{(index !== activeFaq.index || !activeFaq.isOpen) && (
												<span className="bi bi-plus text-40"></span>
											)}
										</button>
									</div>
									{index === activeFaq.index && activeFaq.isOpen && (
										<div className={`faq-card-body text-25`}>
											<p className="">{faq.answer}</p>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<div className="spacer"></div>
		</div>
	);
};

export default About;
