import { useNavigate } from "react-router-dom";
import styles from "./back-btn.module.css";

export const BackButton = ({ setIsOpenTask }) => {
	let navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		navigate(-1);
		setIsOpenTask(false);
	};

	return (
		<button type="button" onClick={handleClick} className={styles.backBtn}>
			↶
		</button>
	);
};
