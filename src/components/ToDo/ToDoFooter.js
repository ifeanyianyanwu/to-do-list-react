import "./ToDoFooter.css";
const ToDoFooter = (props) => {
    return (
        <div className="to-do-footer">
            <p>{props.numOfTasks} tasks</p>
            <button>delete all</button>
        </div>
    );
};
export default ToDoFooter;
