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
					{currentTasks.map(({ id, value, completed }) => (
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
								completed={completed}
							/>
						</div>
					))}
				</>
			)}
		</>
	);
};
