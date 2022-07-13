import { useState } from "react";
import ToDoHeader from "./components/ToDo/ToDoHeader";
import ToDos from "./components/ToDo/ToDos";
import ToDoFooter from "./components/ToDo/ToDoFooter";
import "./App.css";

const TO_DO = [];

function App() {
    const [todos, setTodos] = useState(TO_DO);
    const addedToDoHandler = (e) => {
        setTodos((prevToDo) => {
            return [e, ...prevToDo];
        });
        // console.log(todos);
    };

    return (
        <div className="to-do-body">
            <ToDoHeader onAddToDo={addedToDoHandler} />
            <ToDos toDoItems={todos} />
            <ToDoFooter numOfTasks={todos.length} />
        </div>
    );
}

export default App;
