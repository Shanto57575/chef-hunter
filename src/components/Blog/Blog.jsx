/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
	return (
		<div>
			<div className="text-center font-serif font-extrabold my-5">
				<Pdf targetRef={ref} filename="code-example.pdf">
					{({ toPdf }) => (
						<button className="bg-white p-3 rounded-lg" onClick={toPdf}>
							Download Pdf
						</button>
					)}
				</Pdf>
				<div
					style={{
						width: 800,
						height: 500,
						position: "absolute",
						left: "-9999px",
						top: "-9999px",
					}}
					ref={ref}
				>
					<p>
						<span className="text-center my-3">Summary of the blog</span>
						Controlled components in React are managed by the parent component,
						while uncontrolled components manage their state independently.
						PropTypes is a built-in library in React that allows you to specify
						the type and shape of props that a component should receive. Node.js
						is a runtime environment for executing JavaScript code outside of a
						web browser, while Express.js is a web framework built on top of
						Node.js that simplifies the process of building web applications.
						Custom hooks are reusable functions in React that encapsulate common
						stateful logic, making it easy to reuse across multiple components,
						abstract away complex logic, and make code more modular.
					</p>
				</div>{" "}
			</div>
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
