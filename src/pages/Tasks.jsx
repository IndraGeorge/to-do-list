import '../style/pages/tasks.css'
import Form from '../components/Form'
import Items from '../components/Items'
import { useState, useEffect } from 'react'

function Tasks() {

    // On récupère les données dans le local Storage
    const data = JSON.parse(localStorage.getItem('items'))

    const [items, setItems] = useState(data || [])

    // On enregistre les données dans le local Storage
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);


    const deleteTask = (index) => {
        const filter = data.filter(element => element !== items[index])
        localStorage.setItem('items', JSON.stringify(filter));
        setItems(filter)
    }

    return (
        <div className='wrapper'>
            <div className='tasks-list'>
                {items.map((item, index) => (
                    <Items
                        key={index}
                        remove={() => deleteTask(index)}
                    >{item}</Items>
                ))}
            </div>

            <Form addTodo={(item) => {
                setItems((prev) => [...prev, item])
            }} />
        </div>
    )
}

export default Tasks;
