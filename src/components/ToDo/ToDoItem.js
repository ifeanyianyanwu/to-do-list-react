import "./ToDoItem.css";
import { FaTrash } from "react-icons/fa";

const ToDoItem = (props) => {
    return (
        <li className="task-content">
            <input className="checkbox" type="checkbox" />
            {props.task}
            <FaTrash className="icon" />
        </li>
    );
};
export default ToDoItem;
