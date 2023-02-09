import { Todo } from '../../../types/todo';

// TodoListのPropsの型を定義
export interface Props {
	todoList: Todo[] | undefined;
}
