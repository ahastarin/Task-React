import { useContext, useRef } from "react";
import Button from "../elements/Button";
import { TasksDispatchContext } from "../../context/TaskContext";

const AddTask = () => {
    const dispatch = useContext(TasksDispatchContext);
    const text = useRef()

    return (
        <div>
            <input
                className="mx-2 p-2 border-2"
                type="text"
                placeholder="Add Your Plan"
                ref={text} />
            <Button variant="bg-blue-600"
                onClick={() => {
                    dispatch({
                        type: "ADD",
                        text: text.current.value
                    })

                }}>
                Add Task
            </Button>
        </div>
    )
}

export default AddTask