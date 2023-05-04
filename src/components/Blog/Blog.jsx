/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
	return (
		<div>
			{" "}
			<h1 className="text-center font-serif text-3xl text-white underline">
				Questions & Answers
			</h1>{" "}
			<div
				tabIndex={0}
				className="collapse collapse-arrow border-4 border-base-300 rounded-box my-5"
			>
				{" "}
				<div className="collapse-title text-xl font-medium">
					{" "}
					what are the differences between uncontrolled and controlled
					components ?{" "}
				</div>{" "}
				<div className="collapse-content">
					{" "}
					controlled components derive their value from react's state, while
					uncontrolled components derive their value from the dom. controlled
					components provide more control and predictability, while uncontrolled
					components offer more flexibility but with potential risks of
					inconsistency.{" "}
				</div>{" "}
			</div>{" "}
			<div
				tabIndex={0}
				className="collapse collapse-arrow border-4 border-base-300 rounded-box my-5"
			>
				{" "}
				<div className="collapse-title text-xl font-medium">
					{" "}
					how to validate react props using proptypes ?{" "}
				</div>{" "}
				<div className="collapse-content">
					{" "}
					to validate react props using proptypes in react, you can import the
					proptypes library from the 'prop-types' package and define the
					proptypes static property on your react component. this property
					specifies the expected prop types for each prop passed to the
					component, and also specifies whether the prop is required or not
					using the `.isrequired` modifier. if a prop is passed to the component
					that doesn't match its expected type or is missing a required prop,
					react will log a warning in the console. this helps catch errors early
					and ensures that components are being used correctly.{" "}
				</div>{" "}
			</div>{" "}
			<div
				tabIndex={0}
				className="collapse collapse-arrow border-4 border-base-300 rounded-box my-5"
			>
				{" "}
				<div className="collapse-title text-xl font-medium">
					{" "}
					what is the difference between nodejs and express js ?{" "}
				</div>{" "}
				<div className="collapse-content">
					{" "}
					node.js is a server-side javascript runtime environment that allows
					developers to run javascript code outside of a web browser. express.js
					is a web application framework for node.js that provides a set of
					features and tools for building web applications, including
					middleware, routing, and templating. in short, node.js is the
					underlying runtime, while express.js is a framework that runs on top
					of node.js to make it easier to build web applications.{" "}
				</div>{" "}
			</div>{" "}
			<div
				tabIndex={0}
				className="collapse collapse-arrow border-4 border-base-300 rounded-box my-5"
			>
				{" "}
				<div className="collapse-title text-xl font-medium">
					{" "}
					what is a custom hook, and why will you create a custom hook?{" "}
				</div>{" "}
				<div className="collapse-content">
					{" "}
					a custom hook is a function that encapsulates some reusable logic in a
					react application. it allows developers to abstract away complex logic
					and reuse it across different components. custom hooks are useful for
					making code more modular and reusable.{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
};

export default Blog;
