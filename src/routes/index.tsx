import React, { FC } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider
} from 'react-router-dom';
import paths from '../config/paths';
import CreateTodo from '../views/pages/CreateTodo';
import EditTodo from '../views/pages/EditTodo';
import TodoDetail from '../views/pages/TodoDetail';
import TodoList from '../views/pages/TodoList';

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
