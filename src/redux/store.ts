import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import modalReducer from './slices/modal/modalSlice';
import todoReducer from './slices/todo/todoSlice';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		todo: todoReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
