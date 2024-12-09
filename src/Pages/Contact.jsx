

// Instructions: 

// Create a To-Do-List: 

// Create a new page withing your current project. Make sure to link it to you other pages using react-router-dom. 

// Create an input where the user can type a task.  

// Create a button so the user can add the task to the list. 

// Each task item should have a remove button, to remove the item from the list. 



// OPTIONAL: Give each list-item 2 more buttons. The first button should move your item up one step. The second button should move your item down one step. 

// Feel free to add any CSS that you would like to your project 

import { useState } from "react";
import "../components/Contatct.css"

function Contact() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() === "") return; 
        setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
        setNewTask(""); 

    }

    function removeTask(index) {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }

    function upTask(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }

    }

    function downTask(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return (
        <>
            <div className="main">
                <div>
                    <div className="enter">
                        <input type="text"
                            placeholder="Enter your task"
                            id="taskInput"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)} />

                        <button onClick={addTask}>Add task</button>
                    </div>
                    <ul>

                        {tasks.map((task, index) =>
                            <li key={index}> {task}
                                <button onClick={() => removeTask(index)}>Remove</button>
                                <button onClick={() => upTask(index)}>Move up</button>
                                <button onClick={() => downTask(index)}>Move down</button>
                            </li>)}

                    </ul>



                </div>
            </div>
        </>
    );

}

export default Contact;