import styles from "./app.module.css";

import { ContainerField } from "./components/containerField/containerField";

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>Список задач</h1>
			<ContainerField id={"001"} />
			<ContainerField id={"002"} />
			<ContainerField id={"003"} />
		</div>
	);
};
