import styles from "./containerField.module.css";
import { TodoField } from "../todoField/todoField";
import { Loader } from "../loader/loader";

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
	isUpdating,
	isLoading,
}) => {
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{Object.entries(currentTasks).map(([id, { value }]) => (
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
								isUpdating={isUpdating}
							/>
						</div>
					))}
				</>
			)}
		</>
	);
};
