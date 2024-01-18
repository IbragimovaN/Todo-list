import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./sorting.module.css";

export const Sorting = () => {
	const [isEnabled, setIsEnabled] = useState(false);

	const dispatch = useDispatch();

	const onChange = ({ target }) => {
		setIsEnabled(target.checked);
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
