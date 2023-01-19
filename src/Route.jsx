import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tasks from './pages/Tasks'
import List from './pages/List'
import NewList from './pages/NewList'
import Starred from './pages/StarredTasks'
import Error from './pages/Error'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function Routing() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Tasks />}></Route>
                <Route path='/starred' element={<Starred />}></Route>
                <Route path='/list' element={<List />}></Route>
                <Route path='/newlist' element={<NewList />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
            <Footer />

        </BrowserRouter>
    )
}

export default Routing;
