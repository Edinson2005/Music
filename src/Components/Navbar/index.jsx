import { NavLink } from "react-router-dom";
import 'boxicons';

const Navbar = ()=>{
    const activeStyle = 'underline-offset-4'
 return (
    
    <nav className= "flex   px-20 w-full py-8 bg-rose-700">
        
        
        <ul className="flex
          gap-16 text-xl ">

            <li >
                <NavLink to='/home'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    <box-icon name='home-alt' size='lg' animation='burst-hover'></box-icon>
                </NavLink>
            </li>
            <li >
                <button>

                </button>
            <NavLink to='/artist'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    <button className="bg-teal-800 hover:bg-black py-3 px-5
                    rounded-full text-white">
                        Artist
                    </button>
                </NavLink>
            </li>
            <li>
            <NavLink to='/genre'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    <button className="bg-teal-800 hover:bg-black py-3 px-5
                    rounded-full text-white">
                    Genre
                    </button>
                </NavLink>
            </li>
            
            <li>
            <NavLink to='/'
            
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    <button className="bg-teal-800 hover:bg-black py-3 px-5
                    rounded-full text-white">
                    Description
                    </button>
                </NavLink>
            </li>
            <div className="absolute right-0 w-20 top-5">
            <box-icon name="music" size='lg' animation='tada'></box-icon>
            </div>
        </ul>
        

    </nav>
 )
 }
 export default Navbar

