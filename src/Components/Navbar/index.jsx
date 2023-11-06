import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = ()=>{
    const activeStyle = 'underline underline-offset-4'
 return (
    
    <nav className="nav">
        
        <ul className="ul">
            <li >
                <NavLink to='/'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Album
                </NavLink>
            </li>
            <li>
            <NavLink to='/artist'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Artist
                </NavLink>
            </li>
            <li>
            <NavLink to='/genre'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Genre
                </NavLink>
            </li>
        </ul>

    </nav>
 )
 }
 export default Navbar
