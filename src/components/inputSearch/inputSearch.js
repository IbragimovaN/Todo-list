import styles from "./inputSearch.module.css";
export const InputSearch = ({ onChangeSearch, searchValue }) => {
	return (
		<input
			className={styles.inputSearch}
			type="search"
			value={searchValue}
			onChange={({ target }) => onChangeSearch(target)}
		></input>
	);
};
