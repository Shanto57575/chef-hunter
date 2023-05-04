import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import SingleChef from "./components/SingleChef/SingleChef.jsx";
import Error from "./components/Error/Error.jsx";
import ShowRecipes from "./components/ShowRecipes/ShowRecipes.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Reservation from "./components/Reservation/Reservation.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/reservation",
				element: <Reservation></Reservation>,
			},
			{
				path: "/chef/:id",
				element: (
					<PrivateRoute>
						{" "}
						<SingleChef></SingleChef>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://chief-recipe-hunter-server-shanto57575.vercel.app/chef/${params.id}`
					),
			},
			{
				path: "/showRecipe",
				element: <ShowRecipes></ShowRecipes>,
			},
		],
	},
	{
		path: "*",
		element: <Error></Error>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
