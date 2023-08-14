import '../style/components/form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export function Form({ addTodo }) {

    const [task, setTask] = useState(false)

    const addTask = () => {
        setTask(!task)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const itemTask = event.currentTarget.elements.name.value
        if (itemTask !== "") {
            addTodo(itemTask)
            setTask(!task)

            event.target.reset()
        }
    }

    return (
        <div className='input'>
            {task ?
                <form onSubmit={onSubmit}>
                    <input type='text' id='name' placeholder='Nouvelle tâche'
                    ></input>
                    <button type='submit' className='btn-save'>Save</button>
                </form>
                : null}
            <FontAwesomeIcon onClick={addTask} className={task ? 'invisible' : 'add'} icon={faSquarePlus} />
        </div>
    )
}

