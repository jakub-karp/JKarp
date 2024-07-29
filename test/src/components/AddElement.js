import React, { useState } from 'react'
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { FloatLabel } from "primereact/floatlabel";
import { Button } from 'primereact/button';

const AddElement = ({tasks, addTask}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDes, setNewDes] = useState('');
    const handleAddButton = () => {
        const newTask = {
            id: tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            title: newTitle,
            description: newDes,
            isMade: false
        };
        addTask(newTask);
    };

  return (
    <div>
        <div className='m-4'>
            <FloatLabel >
                <InputText id="title" style={{width: '90%'}} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                <label htmlFor="title">Tytuł zadania</label>
            </FloatLabel>
        </div>
        <div className='m-4 my-2'>
            <FloatLabel>
                <InputTextarea id="decription" style={{width: '90%'}} value={newDes} onChange={(e) => setNewDes(e.target.value)} />
                <label htmlFor="decription">Opis zadania</label>
            </FloatLabel>
        </div>
        <div className='mt-4'>
            <Button label="Dodaj" icon="pi pi-plus" onClick={handleAddButton}/>
        </div>
    </div>
  )
}

export default AddElement