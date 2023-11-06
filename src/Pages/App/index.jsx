import { useRoutes, BrowserRouter } from 'react-router-dom'
import Album from '../Album'
import Artist  from '../Artist'
import Genre from '../Genre'
import './App.css'
import Navbar from '../../Components/Navbar'

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Album />},
        {path: '/artist', element: <Artist/>},
        {path: '/genre', element: <Genre/>},
    ])
    return routes
}
const App = ()=>{
    return (
    <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        
    </BrowserRouter>
    )
}
export default App