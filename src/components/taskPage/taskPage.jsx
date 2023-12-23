import styles from "./taskPage.module.css";
import { BackButton } from "../backBtn/back-btn";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { todoForTaskPage } from "../../api/api";
import { TodoNotFound } from "../notFound/todoNotFound";

export const TaskPage = ({ isOpenTask, setIsOpenTask }) => {
	const [isOpenInput, setIsOpenInput] = useState(false);
	const [currentTask, setCurrentTask] = useState({});

	const params = useParams();

	useEffect(() => {
		todoForTaskPage(params.id, isOpenTask).then((loadedTodos) => {
			if (loadedTodos.length === 0) {
				return <TodoNotFound />;
			} else {
				setCurrentTask(loadedTodos);
			}
		});
	}, [isOpenTask, params.id]);

	const { title, completed } = currentTask;

	const [inputText, setInputText] = useState(title);

	const onClickEditTask = () => {
		setIsOpenInput(true);
	};
	const onClickCancel = () => {
		setIsOpenInput(false);
	};
	const onChangeInput = (target) => {
		setInputText(target.value);
	};
	// const onClickCleanText = () => {
	// 	setInputText("");
	// };
	return (
		<div className={styles.taskPage}>
			<BackButton isOpenTask={isOpenTask} setIsOpenTask={setIsOpenTask} />
			<div className={styles.wrapper}>
				{isOpenInput ? (
					<form className={styles.wrapperInput}>
						<input
							className={styles.input}
							type="text"
							value={inputText}
							onChange={({ target }) => onChangeInput(target)}
						></input>
						<div className={styles.buttonsWrapper}>
							<button className={styles.cleanBtn}>⌫</button>
							<button className={styles.cancelBtn} onClick={onClickCancel}>
								↶
							</button>
							<button className={styles.sendingBtn} type="submit">
								✔
							</button>
						</div>
					</form>
				) : (
					<div className={styles.wrapperTodo}>
						<input
							className={styles.checkedTask}
							type="checkbox"
							checked={completed}
						/>
						<div className={styles.textTask}>{title}</div>
						<div className={styles.buttonWrapper}>
							<button className={styles.editBtn} onClick={onClickEditTask}>
								✎
							</button>
							<button className={styles.deleteBtn}>✖</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
