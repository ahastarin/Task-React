import { useContext, useRef, useState } from "react";
import Button from "../elements/Button";
import { TasksContext, TasksDispatchContext } from "../../context/TaskContext";

const TaskList = () => {
    const Tasks = useContext(TasksContext)
    const [isEditing, setIsEditing] = useState({
        id: 0,
        status: false
    });
    const input = useRef();
    const dispatch = useContext(TasksDispatchContext);
    return (
        < ul >
            {
                Tasks.map((task) => {
                    if (isEditing.status && isEditing.id === task.id) {
                        return (
                            < li
                                key={task.id}
                                className="flex mx-2 items-center my-4" >
                                <input
                                    className=""
                                    type="checkbox"
                                ></input>
                                <input
                                    className="mx-2 p-2 border-2"
                                    type="text"
                                    ref={input}
                                    defaultValue={task.text}
                                />
                                <Button
                                    variant="bg-green-400"
                                    onClick={() => {
                                        setIsEditing({
                                            id: 0,
                                            status: false
                                        })

                                        dispatch({
                                            type: "UPDATE",
                                            id: task.id,
                                            text: input.current.value,
                                            done: task.done
                                        })
                                    }}>save</Button>
                            </li >
                        )
                    } else {
                        return (
                            < li
                                key={task.id}
                                className="flex mx-2 items-center my-4" >

                                <input
                                    className=""
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            dispatch({
                                                type: "UPDATE",
                                                id: task.id,
                                                text: task.text,
                                                done: true
                                            })
                                        } else {
                                            dispatch({
                                                type: "UPDATE",
                                                id: task.id,
                                                text: task.text,
                                                done: false
                                            })
                                        }
                                    }}
                                    type="checkbox"
                                ></input>

                                <p className={`mx-2 ${task.done && "line-through"}`}>{task.text}</p>
                                <Button variant="bg-green-400"
                                    onClick={() => {
                                        setIsEditing({
                                            id: task.id,
                                            status: true
                                        })
                                    }}>
                                    edit
                                </Button>
                                <Button variant="bg-red-400" onClick={() => {
                                    dispatch({
                                        type: "DELETE",
                                        id: task.id
                                    })
                                }}>delete</Button>
                            </li >
                        )
                    }
                }
                )
            }
        </ul >
    )
}

export default TaskList
