import { Todo } from '../../../types/todo';

// Props is an interface that extends the Todo interface
//openModal is a function that returns void
export interface Props extends Todo {
	openModal?: () => void;
	onTitleClick?: (id: number) => Promise<void>;
}
