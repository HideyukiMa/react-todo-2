import React, { FC } from 'react';
import Modal from 'react-modal';
import modalStyle from './modalStyle';
import classes from './presenter.module.scss';
import { Props } from './types';

const DeleteModalUI: FC<Props> = ({ modalIsOpen, closeModal, deleteTodo }) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={modalStyle}
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
