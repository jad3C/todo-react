import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
	const [description, setDescription] = useState("");
	const [deadline, setDeadline] = useState("");
	const [priority, setPriority] = useState("");
	const [completed, setCompleted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTask = {
			id: Date.now(),
			description,
			deadline,
			priority,
			completed,
		};
		addTask(newTask);

		setDescription("");
		setDeadline("");
		setPriority("");
		setCompleted(false);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				type="text"
				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
				placeholder="Task Description"
				required
			/>

			<div className="task-info">
				<input
					type="date"
					value={deadline}
					onChange={(e) => {
						setDeadline(e.target.value);
					}}
					required
					className="form-input-date"
				/>

				<div className="custom-select form-select">
					<select
						value={priority}
						onChange={(e) => {
							setPriority(e.target.value);
						}}
					>
						<option style={{ display: "none" }}>Priority</option>
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
					<span className="custom-arrow"></span>
				</div>

				<button className="form-btn" type="submit">
					Add Task
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
