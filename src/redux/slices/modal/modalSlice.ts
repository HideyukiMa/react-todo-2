import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface ModalState {
	deleteModalIsOpen: boolean;
}

const initialState: ModalState = {
	deleteModalIsOpen: false
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleDeleteModal: (state, action: PayloadAction<boolean>) => {
			state.deleteModalIsOpen = action.payload;
		}
	}
});

export const { toggleDeleteModal } = modalSlice.actions;

export const selectDeleteModalIsOpen = (state: RootState): boolean =>
	state.modal.deleteModalIsOpen;

export default modalSlice.reducer;
