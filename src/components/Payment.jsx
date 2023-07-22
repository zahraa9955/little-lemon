import React from "react";
import "../styles/Payment.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Payment = ({ touched, errors }) => {
	return (
		<>
			<h2>Payment</h2>
			<div className="form-group">
				<label className="text-20" htmlFor="ccNumber">
					CC Number
					<span className="required">*</span>
					<br />
					<Field
						type="number"
						className={`text-16 ${
							errors.ccNumber && touched.ccNumber && "invalidField"
						}`}
						id="ccNumber"
						name="ccNumber"
					/>
					{errors.ccNumber && touched.ccNumber && (
						<ErrorMessage
							name="ccNumber"
							componint="div"
							render={(msg) => <div className="errorMsg">{msg}</div>}
						/>
					)}
				</label>
			</div>
			<div className="form-group exp-ccv">
				<label className="text-20" htmlFor="expiration">
					Expire
					<span className="required">*</span>
					<br />
					<Field
						type="month"
						className={`text-16 ${
							errors.expiration && touched.expiration && "invalidField"
						}`}
						id="expiration"
						name="expiration"
					/>
					{errors.expiration && touched.expiration && (
						<ErrorMessage
							name="expiration"
							componint="div"
							render={(msg) => <div className="errorMsg">{msg}</div>}
						/>
					)}
				</label>
				<label className="text-20" htmlFor="ccv">
					CCV
					<span className="required">*</span>
					<br />
					<Field
						type="number"
						className={`text-16 ${errors.ccv && touched.ccv && "invalidField"}`}
						id="ccv"
						name="ccv"
					/>
					{errors.ccv && touched.ccv && (
						<ErrorMessage
							name="ccv"
							componint="div"
							render={(msg) => <div className="errorMsg">{msg}</div>}
						/>
					)}
				</label>
			</div>
		</>
	);
};

export default Payment;
