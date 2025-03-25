import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<small>
					Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
				</small>
			</div>
		</footer>
	);
};

export default Footer;
