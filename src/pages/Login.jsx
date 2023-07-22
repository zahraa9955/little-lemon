import React from "react";
import "../styles/Login.css";
import Lemon from "../assests/Asset 20@4x (1).png";
import Button from "../components/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../utilities/api";

const Login = () => {
	const navigate = useNavigate();

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email").required("field is required"),
		password: Yup.string()
			.required("Password is required")
			.min(8, "Password must be at least 8 characters long")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
				"Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
			),
	});

	const handleSubmit = (data) => {
		submitAPI(data);
		navigate("/thank-you");
	};

	return (
		<div className="login container">
			<div>
				<div className="spacer" />
				<div className="login-section">
					<div className="bg-prismary py-4">
						<img src={Lemon} alt="lemon" width="300" />
					</div>
					<div className="position-rel">
						<h1 className="text-light text-50">Log In</h1>
						<Formik
							className="login-form"
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							{({ errors, touched, values }) => (
								<Form className="login-form">
									<div className="form-group">
										<label className="text-20 text-light" htmlFor="email">
											Email Address
											<span className="required">*</span>
											<br />
											<Field
												type="email"
												id="email"
												name="email"
												className={`text-20 ${
													errors.email && touched.email && "invalidField"
												}`}
											/>
											{errors.email && touched.email && (
												<ErrorMessage
													name="email"
													componint="div"
													render={(msg) => (
														<div className="errorMsg text-light">{msg}</div>
													)}
												/>
											)}
										</label>
									</div>
									<div className="form-group">
										<label className="text-20 text-light" htmlFor="password">
											Password
											<span className="required">*</span>
											<br />
											<Field
												type="password"
												id="password"
												name="password"
												className={`text-20 ${
													errors.password && touched.password && "invalidField"
												}`}
											/>
											{errors.password && touched.password && (
												<ErrorMessage
													name="password"
													componint="div"
													render={(msg) => (
														<div className="errorMsg text-light">{msg}</div>
													)}
												/>
											)}
										</label>
									</div>
									<div className="form-group">
										<Button
											styles={{
												width: "100%",
												height: "50px",
											}}
											title="Login"
										/>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
				<div className="spacer" />
			</div>
			<div className="spacer"></div>
		</div>
	);
};

export default Login;
