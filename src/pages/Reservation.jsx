import React from "react";
import BookingForm from "../components/BookingForm";
import Canvas from "../assests/online-table-reservation-image-small-removebg-preview.png";
import Curve from "../assests/Asset 20@4x.png";
import "../styles/Reservation.css";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../utilities/api";

const Reservation = () => {
	const navigate = useNavigate();

	const initializeTimes = (availableTimes, action) => {
		const date = new Date(action.date);
		return fetchAPI(date);
	};

	const updateTimes = (e) => {
		dispatch({ date: e.target.value });
	};

	const [availableTimes, dispatch] = React.useReducer(initializeTimes, [
		"09:00",
		"12:00",
		"15:00",
		"19:00",
		"21:00",
	]);

	React.useEffect(() => {
		const today = new Date();
		dispatch({ date: today });
	}, []);

	const handleSubmit = (data) => {
		submitAPI(data);
		navigate("/thank-you");
	};

	return (
		<>
			<article className="container res-adv bg-primary position-rel">
				<div className="">
					<div>
						<div className="adv-body">
							<h1 className={`text-50 text-light`}>Reserve A Table</h1>
						</div>
					</div>
				</div>
				<img className="position-abs" src={Canvas} alt="res-img" />
				<img className="position-abs" src={Curve} alt="curve4" />
			</article>

			<div className="spacer"></div>

			<section className="container">
				<div>
					<BookingForm
						handleSubmit={handleSubmit}
						availableTimes={availableTimes}
						updateTimes={updateTimes}
					/>
				</div>
			</section>

			<div className="spacer"></div>
		</>
	);
};

export default Reservation;
