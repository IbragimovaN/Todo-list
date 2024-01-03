import { useRef, useState } from "react";
import { debounce } from "./utils";
import styles from "./search.module.css";
import { useContext } from "react";
import { AppContext } from "../../../../context";

export const Search = () => {
	const { dispatch } = useContext(AppContext);
	const [value, setValue] = useState("");

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
