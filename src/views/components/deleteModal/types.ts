import { Modal } from '../../../types/modal';

export interface Props extends Modal {
	deleteTodo: () => void;
}
