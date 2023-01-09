import React, { FC } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider
} from 'react-router-dom';
import paths from '../config/paths';
import CreateTodo from '../views/pages/createTodo';
import EditTodo from '../views/pages/editTodo';
import TodoDetail from '../views/pages/todoDetail';
import TodoList from '../views/pages/todoList';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path={paths.createTodo} element={<CreateTodo />} />
			<Route path={paths.todoList} element={<TodoList />} />
			<Route path={paths.todoDetail} element={<TodoDetail />} />
			<Route path={paths.editTodo} element={<EditTodo />} />
			<Route path="/*" element={<Navigate to={paths.todoList} />} />
		</>
	)
);

const AppRoutes: FC = () => {
	return <RouterProvider router={router} />;
};

export default AppRoutes;
