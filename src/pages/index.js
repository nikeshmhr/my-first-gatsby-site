import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<h1>Welcome to my Gatsby site!</h1>
			<Link to="/about">About</Link>
			<p>I'm making this by following the Gatsby Tutorial</p>
		</Layout>
	);
};

export default IndexPage;
