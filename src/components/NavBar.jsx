import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../style/components/navbar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <ul className='header'>

                <NavLink to='/starred'>
                    <FontAwesomeIcon className='link' style={{ color: 'yellow' }} icon={faStar} />
                </NavLink>

                <li className='link'>
                    <NavLink className='active' to='/'>
                        My tasks
                    </NavLink>
                </li>

                <li className='link show'>
                    <NavLink className='active' to='/list'>
                        Name list
                    </NavLink>
                </li>

                <li className='link'>
                    <NavLink className='active' to='/newlist'>
                        + New list
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
