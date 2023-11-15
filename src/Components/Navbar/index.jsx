import { NavLink } from "react-router-dom";
import 'boxicons';

const Navbar = ()=>{
    const activeStyle = 'underline underline-offset-4'
 return (
    
    <nav className= "flex  items-center justify-between px-20 w-full py-8 bg-rose-700">
        
        
        <ul className="text-align-center
         flex gap-3 text-xl">

            <li>
                <NavLink to='/home'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    <box-icon name='home-alt' size='lg' animation='burst-hover'></box-icon>
                </NavLink>
            </li>
            <li>
            <NavLink to='/artist'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Artist
                </NavLink>
            </li>
            <li>
            <NavLink to='/'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Album
                </NavLink>
            </li>
            
            <li>
            <NavLink to='/genre'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Genre
                </NavLink>
            </li>
            <div className="absolute right-0 w-20 top-1">
            <box-icon name="music" size='lg' animation='tada'></box-icon>
            </div>
        </ul>
        

    </nav>
 )
 }
 export default Navbar

