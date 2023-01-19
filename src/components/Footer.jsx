import '../style/components/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function Footer() {

    const [task, setTask] = useState(false)
    const [name, setName] = useState('')

    const addTask = () => {
        setTask(!task)
    }

    const valueInput = (e) => {
        setName(e.target.value)
    }

    console.log(name)

    return (
        <div className='input'>
            {task ?
                <div className='transform'>
                    <input onChange={valueInput} type='text' className='name' placeholder='New task' value={name}
                    ></input>
                    <button className='btn-save'>Save</button>
                </div>
                : null}
            <FontAwesomeIcon onClick={addTask} className={task ? 'invisible' : 'add'} icon={faCirclePlus} />
        </div>
    )
}

export default Footer;
