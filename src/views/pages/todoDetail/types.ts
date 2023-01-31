import { Todo } from '../../../types/todo';

export interface Props {
	todo: Todo | undefined;
	openModal: () => void;
}
