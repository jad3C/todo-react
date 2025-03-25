import React from "react";
import editIcon from "../assets/edit.svg";

const TaskList = ({ tasks, updateTask, removeTask, archiveTask }) => {
	const handleEdit = (task, field, value) => {
		const updatedTask = { ...task, [field]: value };

		updateTask(updatedTask);
	};

	return (
		<div className="edit-task">
			<h2>Active Tasks</h2>
			<ul>
				{tasks.map((task) => (
					<li
						className={`task ${task.completed ? "completed" : ""}`}
						key={task.id}
					>
						<div className="input-edit">
							<input
								type="text"
								value={task.description}
								onChange={(e) =>
									handleEdit(task, "description", e.target.value)
								}
								className="edit-input"
							/>
							<span className="custom-edit">
								<img src={editIcon} alt="edit icon" />
							</span>
						</div>
						<div className="task-details">
							<input
								type="date"
								value={task.deadline}
								onChange={(e) => handleEdit(task, "deadline", e.target.value)}
								className="edit-date"
							/>
							<div className="custom-select edit-select">
								<select
									value={task.priority}
									onChange={(e) => handleEdit(task, "priority", e.target.value)}
								>
									<option value="high">High</option>
									<option value="medium">Medium</option>
									<option value="low">Low</option>
								</select>
								<span className="custom-arrow"></span>
							</div>
							<label className="completed-checkbox">
								Completed:
								<input
									type="checkbox"
									checked={task.completed}
									onChange={(e) =>
										handleEdit(task, "completed", e.target.checked)
									}
								/>
							</label>
						</div>
						<div className="task-btns">
							<button onClick={() => removeTask(task.id)}>Delete</button>
							<button
								onClick={() => {
									archiveTask(task.id);
								}}
								id="archive-btn"
							>
								Archive
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TaskList;
