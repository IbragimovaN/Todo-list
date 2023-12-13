import styles from "./inputField.module.css";
export const InputField = ({
	text,
	onClickEdit,
	onChangeInput,
	onClickCancel,
	onClickDeleteText,
}) => {
	return (
		<div className={styles.wrapperInput}>
			<input
				className={styles.input}
				type="text"
				value={text}
				onChange={({ target }) => onChangeInput(target)}
			></input>
			<div>
				<button onClick={onClickDeleteText}>Стереть</button>
				<button onClick={onClickCancel}>Отмена</button>
				<button onClick={onClickEdit} disabled={!text}>
					Отрправить
				</button>
			</div>
		</div>
	);
};
