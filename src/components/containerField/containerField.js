import { useState } from "react";
import styles from "./containerField.module.css";
import { TodoField } from "../todoField/todoField";

export const ContainerField = ({
	refreshTodos,
	setRefreshTodos,
	text,
	setText,
	taskArray,
	setTaskArray,
	requestUpdate,
	requestDeleting,
	currentTasks,
}) => {
	return (
		<>
			{currentTasks.map(({ id, value }) => (
				<div className={styles.wrapper} id={id} key={id}>
					<TodoField
						id={id}
						value={value}
						requestDeleting={requestDeleting}
						text={text}
						setText={setText}
						requestUpdate={requestUpdate}
						taskArray={taskArray}
						setTaskArray={setTaskArray}
						setRefreshTodos={setRefreshTodos}
						refreshTodos={refreshTodos}
					/>
				</div>
			))}
		</>
	);
};
