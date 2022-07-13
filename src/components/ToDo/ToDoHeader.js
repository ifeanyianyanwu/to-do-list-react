import NewToDo from "./NewToDo";
import "./ToDoHeader.css";

const ToDoHeader = (props) => {
    const enteredTaskHandler = (e) => {
        props.onAddToDo(e);
    };

    return (
        <div className="to-do-header">
            <h1>my to-do lists</h1>
            <NewToDo onEnterTask={enteredTaskHandler} />
        </div>
    );
};
export default ToDoHeader;
