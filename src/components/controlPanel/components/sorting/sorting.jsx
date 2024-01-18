import { useDispatch, useSelector } from "react-redux";
import styles from "./sorting.module.css";

export const Sorting = () => {
	const dispatch = useDispatch();
	const isEnabled = useSelector((state) => state.controlPanelState.isEnabled);
	const onChange = ({ target }) => {
		dispatch({ type: "SET_IS_ENABLED", payload: target.checked });
		dispatch({ type: "SET_SORTING", payload: target.checked });
	};

	return (
		<button className={styles.sorting}>
			<input
				className={styles.checkbox}
				id="sorting-button"
				type="checkbox"
				checked={isEnabled}
				onChange={onChange}
			/>
			<label className={styles.label} htmlFor="sorting-button">
				A&darr;
			</label>
		</button>
	);
};
