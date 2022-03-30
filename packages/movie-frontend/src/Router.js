import Session from './pages/Session'
import Movie from './pages/Movie'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route, Outlet, useParams } from 'react-router-dom'
import Layout from './components/Layout'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route element={<Home />} index />
                    <Route path='session' element={<Session />} />
                    <Route path='movie' element={<Movie />} />
                    <Route path='*' element={<h1>not found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router