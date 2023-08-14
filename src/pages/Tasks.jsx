import '../style/style.css'
import { Form } from '../components/Form'
import { Items } from '../components/Items'
import Todo from "../assets/image.png"
import { useState, useEffect } from 'react'

export function Tasks() {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('task')) || [])
    const [image,setImage] = useState(false)

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

    useEffect(() => {
        setImage(items.length === 0)
    }, [items])

    return (
        <div className='wrapper'>
            <h1>To do list</h1>
            <div className={`tasks-list ${image ? 'center-img': ""}`}>
                { image ?
                  <img src={Todo} alt="to do list"/>
                  : ""
                }
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

