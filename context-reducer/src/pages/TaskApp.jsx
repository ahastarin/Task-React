import { useContext, useReducer } from 'react'
import AddTaks from '../components/fragments/AddTask'
import TaskList from '../components/fragments/TaskList'
import { TasksContext, TasksDispatchContext } from '../context/TaskContext'

const TaskApp = () => {
    const [tasks, dispatch] = useReducer(TaskReducer, initialTask);

    return (
        <>
            <h1 className='font-bold my-4 text-2xl mx-2'>Malang Itinerary</h1>
            <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    <AddTaks></AddTaks>
                    <TaskList></TaskList>
                </TasksDispatchContext.Provider>
            </TasksContext.Provider >
        </>
    )
}

const TaskReducer = (tasks, action) => {
    switch (action.type) {
        case "ADD": {
            return [
                ...tasks, {
                    id: nextId++,
                    text: action.text,
                    done: false
                }
            ]
        } case "UPDATE": {
            const updatedTasks = []
            tasks.map((task) => {
                if (task.id === action.id) {
                    task.done = action.done
                    task.text = action.text
                }
                updatedTasks.push(task);
            })

            return updatedTasks
        } case "DELETE": {
            return tasks.filter((task) => task.id !== action.id);
        }
    }
}

let nextId = 2;
let initialTask = [
    { id: 1, text: "Mengunjugi Kampung Warna Warni Jodipan", done: false },
    { id: 2, text: "Mengunjugi Kampung Warna Warni Jodipan", done: false },
]


export default TaskApp