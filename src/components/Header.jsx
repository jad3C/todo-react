import React from "react";
import { Link } from "react-router-dom";
import todoIcon from "../../public/todo.svg";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="header">
					<div className="logo">
						<Link to={""}>
							<img className="todo-icon" src={todoIcon} alt="todo icon" />
							<span>To-do App</span>
						</Link>
					</div>
					<nav>
						<ul className="nav-items">
							<li className="nav-list">
								<Link to={""} className="nav-link">
									Home
								</Link>
							</li>
							<li className="nav-list">
								<Link to="dashboard" className="nav-link">
									Dashboard
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
