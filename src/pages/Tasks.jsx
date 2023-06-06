import '../style/style.css'
import { Form } from '../components/Form'
import { Items } from '../components/Items'
import { useState, useEffect } from 'react'

export function Tasks() {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('task')) || [])

    // Save data to local storage
    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(items));
    }, [items]);

    // Remove task
    const deleteTask = (index) => {
        const filterTask = items
        filterTask.splice(index, 1)
        setItems([...filterTask])
    }

    const toggleTaskCompletion = (index) => {
        const updatedItems = [...items];
        updatedItems[index].completed = !updatedItems[index].completed;
        setItems(updatedItems);
    };

    return (
        <div className='wrapper'>
            <div className='tasks-list'>
                {items.map((item, index) => (
                    <Items
                        key={index}
                        remove={() => deleteTask(index)}
                        completed={item.completed}
                        onClick={() => toggleTaskCompletion(index)}
                    >{item.name}</Items>
                ))}
            </div>

            <Form addTodo={(item) => {
                setItems((prev) => [...prev, { name: item, completed: false }])
            }} />
        </div>
    )
}

