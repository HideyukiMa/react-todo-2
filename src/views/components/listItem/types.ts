import { Todo } from '../../../types/todo';

export interface Props extends Todo {
	openModal?: () => void;
	onTitleClick?: (id: number) => Promise<void>;
}
