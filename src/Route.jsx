import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tasks from './pages/Tasks'
import List from './pages/List'
import Error from './pages/Error'
import NavBar from './components/NavBar'


function Routing() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Tasks />}></Route>
                <Route path='/list' element={<List />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;

