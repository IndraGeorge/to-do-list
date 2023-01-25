import '../style/components/items.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

function Items(props) {

    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check)
    }

    return (
        <div className={`task ${check && 'barre'}`}  >
            <div className='block-check'>
                {check ?
                    <FontAwesomeIcon icon={faCheck} />
                    : <FontAwesomeIcon className='check' onClick={handleCheck} icon={faCircle} />
                }
                <span className='name'>{props.children}</span>
            </div>
            <button className='delete' onClick={props.remove} ><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}

export default Items;
