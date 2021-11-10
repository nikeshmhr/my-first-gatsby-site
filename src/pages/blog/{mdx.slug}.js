import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>{data.mdx.frontmatter.date}</p>
			<MDXRenderer>{data.mdx.body}</MDXRenderer>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				date(formatString: "MMMM D, YYYY")
				title
			}
		}
	}
`;

export default BlogPost;