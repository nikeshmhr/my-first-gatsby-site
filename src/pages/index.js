import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<h1>Welcome to my Gatsby site!</h1>
			<Link to="/about">About</Link>
			<p>I'm making this by following the Gatsby Tutorial</p>
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
				src="../images/typewriter.jpg"
			/>
		</Layout>
	);
};

export default IndexPage;
