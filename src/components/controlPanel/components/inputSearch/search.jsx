import { useRef, useState } from "react";
import { debounce } from "./utils";
import styles from "./search.module.css";
import { useSelector, useDispatch } from "react-redux";

export const Search = () => {
	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	const debouncedOnSearch = useRef(
		debounce((value) => {
			dispatch({ type: "SET_SEARCH_PHRASE", payload: value });
		}, 1500),
	).current;

	const onChange = ({ target }) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch({ type: "SET_SEARCH_PHRASE", payload: value });
		// setSearchPhrase(value);
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
