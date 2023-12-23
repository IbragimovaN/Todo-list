// import styles from "./inputSearch.module.css";
// export const InputSearch = ({ onChangeSearch, searchValue }) => {
// 	return (
// 		<input
// 			className={styles.inputSearch}
// 			type="search"
// 			// value={searchValue}
// 			// onChange={({ target }) => onChangeSearch(target)}
// 			placeholder="поиск"
// 		></input>
// 	);
// };

import { useRef, useState } from "react";
import { debounce } from "./utils";
import styles from "./search.module.css";

export const Search = ({ onSearch }) => {
	const [value, setValue] = useState("");

	const debouncedOnSearch = useRef(debounce(onSearch, 1500)).current;

	const onChange = ({ target }) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		onSearch(value);
	};

	return (
		<form className={styles.formSearch} onSubmit={onSubmit}>
			<input
				type="text"
				value={value}
				placeholder="Поиск..."
				onChange={onChange}
				className={styles.inputSearch}
			/>
		</form>
	);
};
