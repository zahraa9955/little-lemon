import "./App.css";
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<ThemeProvider>
			<Header
				links={[
					{
						title: "Home",
						path: "/",
					},
					{
						title: "About",
						path: "/about",
					},
					{
						title: "Menu",
						path: "/menu",
					},
					{
						title: "Reservation",
						path: "/reservation",
					},
					{
						title: "Order online",
						path: "/order_online",
					},
					{
						title: "Login",
						path: "/login",
					},
				]}
			/>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/reservation" element={<Reservation />} />
					<Route path="/order_online" element={<OrderOnline />} />
					<Route path="/login" element={<Login />} />
					<Route path="/thank-you" element={<Confirmation />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</ThemeProvider>
	);
}
