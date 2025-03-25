import React from "react";

const ArchiveTasks = ({ archivedTasks }) => {
	const handleClearAll = () => {
		localStorage.clear();
		setName(""); // Clear state
		console.log("Cleared all localStorage data");
	};

	return (
		<div className="archive-task">
			<h2>Archived Tasks</h2>
			<ul>
				{archivedTasks.map((task) => (
					<li key={task.id} className="task archived">
						{task.description} - {task.deadline} - {task.priority} -
						{task.completed ? "Completed" : "Incomplete"}
					</li>
				))}
			</ul>
			<button className="clear-all" onClick={handleClearAll}>
				Clear All
			</button>
		</div>
	);
};

export default ArchiveTasks;
