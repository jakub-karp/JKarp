import React from 'react'
import { Button } from 'primereact/button'

const Element = ({id, title, decription, isMade, deleteTask, changeMade}) => {
    
  return (
    <div className={`flex justify-content-between align-items-center ${isMade ? 'border-green-200' : 'border-blue-200'} border-2 border-round-md px-4 m-4`}>
        <div >
            <div className=''>
                <h3 style={{textDecoration: isMade ? 'line-through' : 'none'}}>{title}</h3>
            </div>
            <div className='mb-4'>
                <p style={{textDecoration: isMade ? 'line-through' : 'none'}}>{decription}</p>
            </div>
        </div>
        <div className='flex justify-content-end'>
            <div>
                <Button icon="pi pi-check" rounded text aria-label="Filter" onClick={() => changeMade(id) } />
            </div>
            <div>
                <Button icon="pi pi-trash" rounded text aria-label="Filter" onClick={() => deleteTask(id)} />
            </div>
        </div>
    </div>
  )
}

export default Element