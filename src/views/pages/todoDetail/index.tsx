import React, { FC } from 'react';
import TodoDetailUI from './presenter';
//reduxを使用するための記述
//useAppDispatchはdispatchを使用するための記述
//toggleDeleteModalはmodalSlice.tsxで定義した関数
import { useAppDispatch } from '../../../redux/hooks';
import { toggleDeleteModal } from '../../../redux/slices/modal/modalSlice';
import sampledata from './sampleData.json'

const TodoDetail: FC = () => {
//dispatchでtoggleDeleteModalを呼び出す
const dispatch = useAppDispatch();
//openModal関数の定義
const openModal = (): void => {
	dispatch(toggleDeleteModal(true));}

	//Propsの値をTodoDetailUIに渡す
	return (
		//Propsの値をTodoDetailUIに渡す
		//sampledataはsampleData.jsonから読み込んだデータ
		
		<TodoDetailUI todo = {sampledata} openModal={openModal}
		/>
	);
};

export default TodoDetail;
