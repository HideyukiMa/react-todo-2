import axios from "axios";
import { Todo } from "../../../types/todo";

// getTodoListAPIを定義
// 返り値はPromise型で、Todo型の配列を返す
// undefinedを返すこともある
export const getTodoListAPI = async (): Promise<Todo[] | undefined> => {
  try {
    // axiosでGETリクエストを送信
    const res = await axios.get("http://localhost:8080/todo/list");

    // TodoListを返す
    const todoList:Todo[]= res.data;
    return todoList;
    ;
  } catch (error) {
    console.log(error);
    alert("エラーが発生しました");
  }
}

