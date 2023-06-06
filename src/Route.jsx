import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Tasks } from './pages/Tasks'
import { Error } from './pages/Error'

function Routing() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Tasks />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;

