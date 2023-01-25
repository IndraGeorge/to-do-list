import '../style/components/form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from './Button'

function Form({ addTodo }) {

    const [task, setTask] = useState(false)

    const addTask = () => {
        setTask(!task)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        const itemTask = event.currentTarget.elements.name.value
        addTodo(itemTask)

        if (itemTask !== "") {
            setTask(!task)
        }

        event.target.reset()
    }

    return (
        <div className='input'>
            {task ?
                <form onSubmit={onSubmit}>
                    <input type='text' id='name' placeholder='New task'
                    ></input>
                    <Button type='submit' className='btn-save'>Save</Button>
                </form>
                : null}
            <FontAwesomeIcon onClick={addTask} className={task ? 'invisible' : 'add'} icon={faCirclePlus} />
        </div>
    )
}

export default Form;
