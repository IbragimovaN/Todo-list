import { useState } from "react";

import styles from "./sorting.module.css";

export const Sorting = ({ onSorting }) => {
	const [isEnabled, setIsEnabled] = useState(false);

	const onChange = ({ target }) => {
		setIsEnabled(target.checked);
		onSorting(target.checked);
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
