import { useState } from "react";
import TodoInput from "./TodoInput";

export default function TodoList() {
    const [todos, updateTodos] = useState([{ id: 1, name: "get bread" }, { id: 2, name: "walk dogs" }]);
    return <>
        <div>
            <TodoInput buttonText="add" />
        </div>
        <div>
            {todos.map(item => <TodoInput key={item.id} {...item} buttonText="remove" />)}
        </div>

    </>
}