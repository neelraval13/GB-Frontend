import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink,
} from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import logoImage from "../../assets/company/gb.png";
import "./Login.css";
import Login from "./Login";
import Register from "./Register";

const Landing = () => {
	return (
		<div className="login-wrapper">
			<div className="login-inner-wrapper">
				<div className="logo-wrapper">
					<img src={logoImage} alt="GB Logo" className="brand-logo" />
				</div>
				<div className="login-main">
					<div className="welcome-message">
						<h1>Welcome to the Biggest Social Network in the World</h1>
						<p>
							We are the best and biggest social network with 5 billion active
							users all around the world. Share you thoughts, write blog posts,
							show your favourite music via Stopify, earn badges and much more!
						</p>
					</div>
					<div className="login-card">
						<Router>
							<div className="tabs">
								<div className="tab">
									<NavLink exact to="/">
										<button>
											<i>
												<RiLoginBoxFill />
											</i>
										</button>
									</NavLink>
								</div>
								<div className="tab">
									<NavLink to="/register">
										<button>
											<i>
												<FaUserPlus />
											</i>
										</button>
									</NavLink>
								</div>
							</div>
							<Switch>
								<Route path="/" exact component={Login} />
								<Route path="/register" component={Register} />
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
