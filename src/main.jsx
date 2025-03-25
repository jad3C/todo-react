import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const taskLoader = async () => {
	const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
	const archivedTasks = JSON.parse(localStorage.getItem("archivedTasks")) || [];

	return { tasks: storedTasks, archivedTasks };
};
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: taskLoader,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
				loader: taskLoader,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
