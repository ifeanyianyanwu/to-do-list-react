import "./ToDoContainer.css";

const ToDoContainer = (props) => {
    return <ul className="container">{props.children}</ul>;
};

export default ToDoContainer;
