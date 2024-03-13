import { useRef } from "react";
import { debounce } from "./utils";
import styles from "./search.module.css";
import { useDispatch, useSelector } from "react-redux";

export const Search = () => {
	const searchInputvalue = useSelector(
		(state) => state.controlPanelState.searchInputvalue,
	);

	const dispatch = useDispatch();

	const debouncedOnSearch = useRef(
		debounce((searchInputvalue) => {
			dispatch({ type: "SET_SEARCH_PHRASE", payload: searchInputvalue });
		}, 1500),
	).current;

	const onChange = ({ target }) => {
		dispatch({ type: "SET_SEARCH_INPUT_VALUE", payload: target.value });
		debouncedOnSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch({ type: "SET_SEARCH_PHRASE", payload: searchInputvalue });
	};

	return (
		<form className={styles.formSearch} onSubmit={onSubmit}>
			<input
				type="text"
				value={searchInputvalue}
				placeholder="Поиск..."
				onChange={onChange}
				className={styles.inputSearch}
			/>
		</form>
	);
};
