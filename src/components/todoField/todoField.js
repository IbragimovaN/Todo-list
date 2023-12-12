import styles from "./todoField.module.css";
import { InputField } from "../inputField/inputField";
import PropTypes from "prop-types";

export const TodoField = ({
	isArray,
	taskArray,
	onClickDeleteTask,
	onClickAddTask,
	taskText,
	isOpenInput,
	text,
	onChangeInput,
	onClickCancel,
	onClickSend,
}) => {
	console.log(taskArray);
	return (
		<div>
			{taskArray.map(({ value, id }) => {
				return (
					<div key={id} id={id}>
						{isOpenInput && (
							<div>
								<InputField
									text={text}
									onChangeInput={onChangeInput}
									onClickCancel={onClickCancel}
									onClickSend={onClickSend}
								/>
							</div>
						)}

						<div className={styles.wrapperTodo}>
							<div>{value}</div>
							<div>
								<button onClick={onClickDeleteTask}>Удалить</button>
								<button onClick={onClickAddTask}>Добавить/изменить</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

TodoField.propTypes = {
	text: PropTypes.string,
};
