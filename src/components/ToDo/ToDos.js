import ToDoContainer from "../UI/ToDoContainer";
import ToDoItem from "./ToDoItem";
const ToDos = (props) => {
    return (
        <ToDoContainer>
            {props.toDoItems.map((item, index) => (
                <ToDoItem task={item} key={index} />
            ))}
        </ToDoContainer>
    );
};
export default ToDos;
