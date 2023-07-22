import React from "react";
import "../styles/Confirmation.css";
import Button from "../components/Button";

const Confirmation = () => {
	return (
		<div className="main-div position-rel">
			<div className="main-container"></div>
			<div className="box position-abs">
				<h1 className="text-50" data-lead-id="site-header-title">
					THANK YOU!
				</h1>
				<i className="bi bi-check"></i>
				<p className="text-20">
					We have reserved a table for you and your party. We look forward to
					<br />
					welcoming you on the specified date and time. If you have any
					<br />
					questions or need to make changes to your reservation, please feel
					<br />
					free to contact us at the provided email or phone number. Thank you,
					<br />
					and we hope you have a wonderful dining experience!
				</p>
			</div>
		</div>
	);
};

export default Confirmation;
