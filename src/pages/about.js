import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
	return (
		<Layout pageTitle="About Me">
		    <Link to="/">Back to Home</Link>
			<p>Hi! I'm a developer trying to learn Gatsby.</p>
		</Layout>
	);
};

export default AboutPage;
