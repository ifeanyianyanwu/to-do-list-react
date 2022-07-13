import { useState } from "react";
import "./NewToDo.css";
const NewToDo = (props) => {
    const [task, setTask] = useState("");

    const taskChangeHandler = (e) => {
        setTask(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (task.trim() === "") {
            setTask("");
            return;
        } else {
            props.onEnterTask(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={submitHandler} action="submit" className="task-wrapper">
            <input
                onChange={taskChangeHandler}
                type="text"
                placeholder="Enter a Task"
                maxLength="42"
                value={task}
            />
            <button type="submit">Add</button>
        </form>
    );
};
export default NewToDo;
