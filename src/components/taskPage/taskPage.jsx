import styles from "./taskPage.module.css";
import { BackButton } from "../backBtn/back-btn";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const TaskPage = ({ todos }) => {
	const [isOpenInput, setIsOpenInput] = useState(false);

	const params = useParams();
	console.log(todos);
	console.log(params.id);

	const ff = todos.find((item) => {
		return item.id == params.id;
	});
	console.log(ff);

	let { title, completed, id } = ff;

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
	const onClickCleanText = () => {
		setInputText("");
	};
	return (
		<div className={styles.taskPage}>
			<BackButton />
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
							<button className={styles.cleanBtn} onClick={onClickCleanText}>
								⌫
							</button>
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
