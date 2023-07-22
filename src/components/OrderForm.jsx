import React from "react";
import Payment from "./Payment";
import "../styles/OrderForm.css";
import Button from "../components/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const OrderForm = (props) => {
	const initialValues = {
		name: "",
		email: "",
		phoneNumber: "",
		address: "",
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
		address: Yup.string().required("field is required"),
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
									className={`text-16 ${
										errors.email && touched.email && "invalidField"
									}`}
								/>
								{errors.email && touched.email && (
									<ErrorMessage
										name="email"
										componint="div"
										render={(msg) => <div className="errorMsg">{msg}</div>}
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
						<div className="form-group">
							<label className="text-20" htmlFor="address">
								Fullname
								<span className="required">*</span>
								<br />
								<Field
									type="text"
									id="address"
									name="address"
									placeholder="Address"
									className={`text-16 ${
										errors.address && touched.address && "invalidField"
									}`}
								/>
								{errors.address && touched.address && (
									<ErrorMessage
										name="name"
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

export default OrderForm;
