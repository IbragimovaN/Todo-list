import { MainPage } from "./components/mainPage/mainPage";
import { Routes, Route, Outlet } from "react-router-dom";
import { NotFound } from "./components/notFound/notFound";
import { TaskPage } from "./components/taskPage/taskPage";

import { useState } from "react";

export const App = () => {
	const [todos, setTodos] = useState([]);
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<MainPage todos={todos} setTodos={setTodos} />}
				/>
				<Route path="todo/:id" element={<TaskPage todos={todos} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
