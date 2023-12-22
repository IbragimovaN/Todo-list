import { useNavigate } from "react-router-dom";

export const BackButton = () => {
	let navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	return (
		<button type="button" onClick={handleClick}>
			Назад
		</button>
	);
};
