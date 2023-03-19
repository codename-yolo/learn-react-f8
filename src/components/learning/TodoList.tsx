import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState<any>([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (!task) return;
        setTasks([...tasks, task]);
    };

    const handleDelete = (index: number) => {
        const cloneTasks = structuredClone([]);
        console.log(cloneTasks);

        const newTasks = cloneTasks.filter(
            (item: any, idx: number) => idx !== index,
        );
        // setTasks(newTasks)
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => {
                    setTask(e.target.value);
                }}
            />
            <button role="button" onClick={handleAddTask}>
                Add task
            </button>
            <ul>
                {tasks.length !== 0
                    ? tasks.map((item: any, index: number) => {
                          console.log(index);
                          return (
                              <li key={index}>
                                  {item}
                                  <button
                                      role="button"
                                      onClick={() => {
                                          handleDelete(index);
                                      }}
                                  >
                                      Delete
                                  </button>
                              </li>
                          );
                      })
                    : ''}
            </ul>
        </div>
    );
};

export default TodoList;
