import styles from "./app.module.css";
import { useState } from "react";

import { ContainerField } from "./components/containerField/containerField";
import { InputSearch } from "./components/inputSearch/inputSearch";
import { useGetSearch } from "./hooks";

export const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const [taskArr, setTaskArr] = useState([]);
	const [isSearch, setIsSearch] = useState(false);

	const onChangeSearch = (target) => {
		console.log("запускается");
		setSearchValue(target.value);
		setIsSearch(true);
	};

	const currentTaskId = useGetSearch(
		setTaskArr,
		taskArr,
		searchValue,
		isSearch,
	);
	const vva = ["003", "004"];
	console.log(currentTaskId);
	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<InputSearch onChangeSearch={onChangeSearch} searchValue={searchValue} />
			{vva && vva.includes("001") ? <ContainerField id={"001"} /> : <></>}
			<ContainerField id={"002"} />
			<ContainerField id={"003"} />
			<ContainerField id={"004"} />
			<ContainerField id={"005"} />
			<ContainerField id={"006"} />
		</div>
	);
};
