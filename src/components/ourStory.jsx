import React from "react";
import "../styles/ourStory.css";
import marionAndAndrian from "../assests/Mario and Adrian A.jpg";
import marionAndAndrian2 from "../assests/Mario and Adrian b.jpg";

const ourStory = (props) => {
	return (
		<>
			<section className="container">
				<div className="story">
					<div>
						<div>
							<h1 className={`text-50 ${props.title}`}>Little Lemon</h1>
							<h2 className={`text-30 ${props.subtitle}`}>Chicago</h2>
							<p className={`text-20 mt-5 ${props.description}`}>
								At Little Lemon, we pride ourselves on our
								<br /> innovative and flavorful menu inspired by the <br />
								refreshing essence of lemons. Our talented
								<br /> team of chefs combines fresh, locally
								<br /> sourced ingredients with a creative touch to <br /> craft
								dishes that showcase the zesty and <br /> tangy flavors of
								lemons in unexpected ways.
							</p>
						</div>
					</div>
					<div>
						<div>
							<div className="img-container">
								<img src={marionAndAndrian} alt="" />
							</div>
						</div>
						<div>
							<div className="img-container">
								<img src={marionAndAndrian2} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ourStory;
