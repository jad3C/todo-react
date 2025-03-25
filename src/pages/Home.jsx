import React, { useEffect, useState } from "react";
import "./Home.css";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import ArchiveTasks from "../components/ArchiveTasks";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const { tasks: initialTasks, archivedTasks: initialArchivedTasks } =
		useLoaderData();

	const [tasks, setTasks] = useState(initialTasks);

	const [archivedTasks, setArchivedTasks] = useState(initialArchivedTasks);

	const [filter, setFilter] = useState({
		completed: "all",
		priority: "all",
		deadline: null,
	});

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		localStorage.setItem("archivedTasks", JSON.stringify(archivedTasks));
	}, [archivedTasks]);

	const addTask = (task) => setTasks([...tasks, task]);

	const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

	const updateTask = (updatedTask) => {
		setTasks(
			tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
	};

	const archiveTask = (id) => {
		const taskToArchive = tasks.find((task) => task.id == id);
		setArchivedTasks([...archivedTasks, taskToArchive]);
		removeTask(id);
	};

	const filteredTasks = tasks.filter((task) => {
		//Filter here
		const byCompletion =
			filter.completed === "all" ||
			task.completed === (filter.completed === "true");

		const byPriority =
			filter.priority === "all" || task.priority === filter.priority;

		const byDeadline =
			!filter.deadline || new Date(task.deadline) <= new Date(filter.deadline);

		return byCompletion && byPriority && byDeadline;
	});

	const [toggle, setToggle] = useState(1);

	const updateToggle = (tab) => {
		setToggle(tab);
	};

	return (
		<main>
			<div className="container">
				<div className="app">
					<h1>To-Do List</h1>

					<TaskForm addTask={addTask} />

					<div className="filters">
						<label>
							Completion:
							<div className="custom-select">
								<select
									onChange={(e) =>
										setFilter({ ...filter, completed: e.target.value })
									}
								>
									<option value="all">All</option>
									<option value="true">Completed</option>
									<option value="false">Incomplete</option>
								</select>
								<span className="custom-arrow"></span>
							</div>
						</label>

						<label>
							Priority:
							<div className="custom-select">
								<select
									onChange={(e) =>
										setFilter({ ...filter, priority: e.target.value })
									}
								>
									<option value="all">All</option>
									<option value="high">High</option>
									<option value="medium">Medium</option>
									<option value="low">Low</option>
								</select>
								<span className="custom-arrow"></span>
							</div>
						</label>

						<label
							onChange={(e) =>
								setFilter({ ...filter, deadline: e.target.value })
							}
						>
							Deadline:
							<input type="date" />
						</label>
					</div>

					<div className="tabs">
						<ul>
							<li
								className={toggle === 1 ? "active-tab" : ""}
								onClick={() => updateToggle(1)}
							>
								Tasks
							</li>
							<li
								className={toggle === 2 ? "active-tab" : ""}
								onClick={() => updateToggle(2)}
							>
								Archived
							</li>
						</ul>
					</div>

					<div className={toggle === 1 ? "show-content" : "content"}>
						<TaskList
							archiveTask={archiveTask}
							removeTask={removeTask}
							updateTask={updateTask}
							tasks={filteredTasks}
						/>
					</div>

					<div className={toggle === 2 ? "show-content" : "content"}>
						<ArchiveTasks archivedTasks={archivedTasks} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
