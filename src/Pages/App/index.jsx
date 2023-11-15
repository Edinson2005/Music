import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from '../../Context'
import Home from '../Home'
import Album from '../Album'
import Artist  from '../Artist'
import Genre from '../Genre'
import './App.css'
import Navbar from '../../Components/Navbar'

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/home', element: <Home />},
        {path: '/artist', element: <Artist/>},
        {path: '/', element: <Album />},
       {path: '/genre', element: <Genre/>},
    ])
    return routes
}
const App = ()=>{
    return (
    <CartContextProvider>
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
        
        </BrowserRouter>
    </CartContextProvider>
    )
}
export default App