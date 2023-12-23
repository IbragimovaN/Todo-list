import { MainPage } from "./components/mainPage/mainPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./components/notFound/notFound";
import { TaskPage } from "./components/taskPage/taskPage";

import { useState } from "react";

export const App = () => {
	const [isOpenTask, setIsOpenTask] = useState(false);
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<MainPage isOpenTask={isOpenTask} setIsOpenTask={setIsOpenTask} />
					}
				/>
				<Route
					path="todo/:id"
					element={
						<TaskPage isOpenTask={isOpenTask} setIsOpenTask={setIsOpenTask} />
					}
				/>

				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</>
	);
};
