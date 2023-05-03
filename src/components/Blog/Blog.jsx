/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Banner/Banner";

const Blog = () => {
	return (
		<div>
			<Banner></Banner>
			<h1>Questions</h1>
			<div
				tabIndex={0}
				className="collapse collapse-arrow border-4 border-base-300 rounded-box my-5"
			>
				<div className="collapse-title text-xl font-medium">
					What are the differences between uncontrolled and controlled
					components ?
				</div>
				<div className="collapse-content">
					Controlled components derive their value from React's state, while
					uncontrolled components derive their value from the DOM. Controlled
					components provide more control and predictability, while uncontrolled
					components offer more flexibility but with potential risks of
					inconsistency.{" "}
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-arrow border-4 border-base-300 rounded-box my-5"
			>
				<div className="collapse-title text-xl font-medium">
					How to validate React props using PropTypes ?
				</div>
				<div className="collapse-content">
					To validate React props using PropTypes in React, you can import the
					PropTypes library from the 'prop-types' package and define the
					propTypes static property on your React component. This property
					specifies the expected prop types for each prop passed to the
					component, and also specifies whether the prop is required or not
					using the `.isRequired` modifier. If a prop is passed to the component
					that doesn't match its expected type or is missing a required prop,
					React will log a warning in the console. This helps catch errors early
					and ensures that components are being used correctly.{" "}
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-arrow border-4 border-base-300 rounded-box my-5"
			>
				<div className="collapse-title text-xl font-medium">
					What is the difference between nodejs and express js ?
				</div>
				<div className="collapse-content">
					Node.js is a server-side JavaScript runtime environment that allows
					developers to run JavaScript code outside of a web browser. Express.js
					is a web application framework for Node.js that provides a set of
					features and tools for building web applications, including
					middleware, routing, and templating. In short, Node.js is the
					underlying runtime, while Express.js is a framework that runs on top
					of Node.js to make it easier to build web applications.{" "}
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-arrow border-4 border-base-300 rounded-box my-5"
			>
				<div className="collapse-title text-xl font-medium">
					What is a custom hook, and why will you create a custom hook?
				</div>
				<div className="collapse-content">
					A custom hook is a function that encapsulates some reusable logic in a
					React application. It allows developers to abstract away complex logic
					and reuse it across different components. Custom hooks are useful for
					making code more modular and reusable.{" "}
				</div>
			</div>
		</div>
	);
};

export default Blog;
