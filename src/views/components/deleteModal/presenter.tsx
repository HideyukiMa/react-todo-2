import React, { FC } from 'react';
import Modal from 'react-modal';
import modalStyles from './modalStyles';
import { Props } from './types';
import classes from './presenter.module.scss';

const DeleteModalUI: FC<Props> = ({ modalIsOpen, closeModal, deleteTodo }) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={modalStyles}
			contentLabel="Example Modal"
			ariaHideApp={false}
		>
			<div className={classes.deleteModal}>
				<div className={classes.confirmMessage}>
					本当に削除してよろしいですか？
				</div>
				<div className={classes.buttons}>
					<button onClick={deleteTodo} className={classes.deleteButton}>
						削除する
					</button>
					<button onClick={closeModal} className={classes.cancelButton}>
						キャンセル
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteModalUI;
