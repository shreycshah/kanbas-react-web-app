import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <button onClick={() => addTodo(todo)}
                id="wd-add-todo-click"> Add </button>
            <button onClick={() => updateTodo(todo)}
                id="wd-update-todo-click"> Update </button>
            <input defaultValue={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
        </li>
    );
}