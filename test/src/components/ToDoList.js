import React, { useState } from 'react'
import Element from './Element';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import AddElement from './AddElement';



const ToDoList = () => {
    const [visible, setVisible] = useState(false);
    const initialTasks = [
        {
            id: 1,
            title: 'Tytuł 1',
            description: 'Opis 1',
            isMade: false,
        },
        {
            id: 2,
            title: 'Tytuł 2',
            description: 'Opis 2',
            isMade: true,
        }
    ];
    const [tasks, setTasks] = useState(initialTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setVisible(false);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        console.log(id);
    }
    const changeMade = (id) => {
         setTasks(tasks.map(task => 
             task.id === id ? { ...task, isMade: !task.isMade } : task
         ));
    }
  return (
    <div className='flex justify-content-center align-content-center'>
        <div className='w-7'>
            {tasks.map((task) => {return(<Element id={task.id} title={task.title} decription={task.decription} isMade={task.isMade} deleteTask={deleteTask} changeMade={changeMade} />)})}
        </div>
        <div>
        <Button icon="pi pi-plus" rounded aria-label="Filter" onClick={() => setVisible(true)} />
        <Dialog header="Dodaj zadanie" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
            <AddElement tasks={tasks} addTask={addTask}/>
        </Dialog>
        </div>
    </div>
    
  )
}

export default ToDoList