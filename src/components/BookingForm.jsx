import React from "react";
import Selector from "../components/Selector";
import Payment from "../components/Payment";
import "../styles/BookingForm.css";
import OccaisonIcon from "../assests/occaison.png";
import Button from "../components/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = (props) => {
	const [occasion, setOccasion] = React.useState("");
	const [time, setTime] = React.useState("");

	const initialValues = {
		name: "",
		email: "",
		phoneNumber: "",
		date: "",
		occasion: occasion,
		time: time,
		ccNumber: "",
		expiration: "",
		ccv: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("field is required"),
		email: Yup.string().email("Invalid email").required("field is required"),
		phoneNumber: Yup.string()
			.matches(/^\d+$/, "Phone number must only contain digits")
			.min(10, "Phone number must be at least 10 digits")
			.max(15, "Phone number can be at most 15 digits")
			.required("Phone number is required"),
		date: Yup.date().required("Date is required"),
		occasion: Yup.string().required("Occaison is required"),
		time: Yup.string().required("Occaison is required"),
		seats: Yup.number()
			.required("Seats is Required")
			.positive("Must be a positive number")
			.integer("Must be an integer"),
		ccNumber: Yup.string()
			.matches(/^\d{16}$/, "Invalid credit card number")
			.required("Credit card number is required"),
		expiration: Yup.date().required("Expiration date is required"),
		ccv: Yup.string()
			.matches(/^\d{3}$/, "Invalid CCV")
			.required("CCV is required"),
	});

	return (
		<>
			<h2>Billing information</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={props.handleSubmit}
			>
				{({ errors, touched, values }) => (
					<Form>
						<div className="form-group">
							<label className="text-20" htmlFor="name">
								Fullname
								<span className="required">*</span>
								<br />
								<Field
									type="text"
									id="name"
									name="name"
									placeholder="Name"
									className={`text-16 ${
										errors.name && touched.name && "invalidField"
									}`}
								/>
								{errors.name && touched.name && (
									<ErrorMessage
										name="name"
										componint="div"
										render={(msg) => <div className="errorMsg">{msg}</div>}
									/>
								)}
							</label>
						</div>
						<div className="form-group">
							<label className="text-20" htmlFor="email">
								Email Address
								<span className="required">*</span>
								<br />
								<Field
									type="email"
									id="email"
									name="email"
									placeholder="Email Address"
									data-testid="email"
									className={`text-16 ${
										errors.email && touched.email && "invalidField"
									}`}
								/>
								{errors.email && touched.email && (
									<ErrorMessage
										name="email"
										componint="div"
										render={(msg) => (
											<div className="errorMsg" data-testid="emailError">
												{msg}
											</div>
										)}
									/>
								)}
							</label>
						</div>
						<div className="form-group">
							<label className="text-20" htmlFor="phoneNumber">
								Phone Number
								<span className="required">*</span>
								<br />
								<Field
									type="number"
									id="phoneNumber"
									name="phoneNumber"
									placeholder="Phone Number"
									className={`text-16 ${
										errors.phoneNumber && touched.phoneNumber && "invalidField"
									}`}
								/>
								{errors.phoneNumber && touched.phoneNumber && (
									<ErrorMessage
										name="phoneNumber"
										componint="div"
										render={(msg) => <div className="errorMsg">{msg}</div>}
									/>
								)}
							</label>
						</div>
						<div className="form-group dateAndTime">
							<label className="text-20" htmlFor="date">
								Date {initialValues.date}
								<span className="required">*</span>
								<br />
								<Field name="date">
									{({ field, meta }) => (
										<>
											<input
												type="date"
												className={`text-16 ${
													errors.date && touched.date && "invalidField"
												}`}
												data-testid="date"
												onChange={(e) => {
													props.updateTimes(e);
													values.date = e.target.value;
												}}
											/>
										</>
									)}
								</Field>
								{errors.date && touched.date && (
									<ErrorMessage
										name="date"
										componint="div"
										render={(msg) => <div className="errorMsg">{msg}</div>}
									/>
								)}
							</label>
							<label className="text-20" htmlFor="time">
								Available Time
								<span className="required">*</span>
								<br />
								<Selector
									label="Times"
									icon={OccaisonIcon}
									options={props.availableTimes.map((time) => {
										return { label: time, value: time };
									})}
									handleChange={(value) => {
										setTime(value);
										values.time = value;
									}}
								/>
								{errors.time && (
									<ErrorMessage
										name="time"
										componint="div"
										render={(msg) => <div className="errorMsg">{msg}</div>}
									/>
								)}
							</label>
						</div>
						<div className="form-group">
							<label className="text-20" htmlFor="occasion">
								Occasion
								<span className="required">*</span>
								<br />
								<Selector
									label="Occasion"
									icon={OccaisonIcon}
									options={[
										{ label: "Birthday", value: "birthday" },
										{ label: "Engagement", value: "engagement" },
										{ label: "Anniversary", value: "anniversary" },
									]}
									handleChange={(value) => {
										setOccasion(value);
										values.occasion = value;
									}}
								/>
								{errors.occasion && (
									<ErrorMessage
										name="occasion"
										componint="div"
										render={(msg) => <div className="errorMsg">{msg}</div>}
									/>
								)}
							</label>
						</div>
						<div className="form-group">
							<label className="text-20" htmlFor="seats">
								Seats
								<span className="required">*</span>
								<br />
								<Field
									type="number"
									className={`text-16 ${
										errors.seats && touched.date && "invalidField"
									}`}
									id="seats"
									name="seats"
									placeholder="Seats"
								/>
								{errors.seats && touched.seats && (
									<ErrorMessage
										name="seats"
										componint="div"
										render={(msg) => <div className="errorMsg">{msg}</div>}
									/>
								)}
							</label>
						</div>
						<div className="py-6">
							<hr />
						</div>
						<Payment touched={touched} errors={errors} />
						<div className="form-group pt-5">
							<Button
								styles={{
									width: "100%",
									height: "50px",
								}}
								title="Submit & Pay"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default BookingForm;
