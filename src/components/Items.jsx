import '../style/components/items.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export function Items(props) {

    return (
        <div className={`task ${props.completed && 'barre'}`}  >
            <div className='block-check'>
                {props.completed ?
                    <FontAwesomeIcon className='check' icon={faCheck} onClick={props.onClick} />
                    : <FontAwesomeIcon className='no-check' icon={faCircle} onClick={props.onClick} />
                }
                <span className='name'>{props.children}</span>
            </div>
            <button className='delete' onClick={props.remove} ><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}

