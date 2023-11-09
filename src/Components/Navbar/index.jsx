import { NavLink } from "react-router-dom";
import music from '../../assets/img/music.jpg';

const Navbar = ()=>{
    const activeStyle = 'underline underline-offset-4'
 return (
    
    <nav className= "flex  items-center justify-between px-8 w-full py-8 bg-slate-700">
        
        
        <ul className="text-align-center
         flex gap-3">

            <li>
                <NavLink to='/home'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                   Home     
                </NavLink>
            </li>
            <li>
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
        <div>
            <img src={music} style={{width:'70px', height:'50px'}} />
        </div>

    </nav>
 )
 }
 export default Navbar

