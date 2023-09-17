import Logo from '../images/Rake.png'
import Home from '../images/Home.png'
import Stats from '../images/Stats.png'
import Profile from '../images/Profile.png'
import { Link } from 'react-router-dom'


function Navbar(props) {
    return (
        <>
            <div className="sticky top-0 flex justify-between items-center w-full bg-green-500  h-20">
                <div className='flex items-center h-full'>
                    <img src={Logo} className='mx-1 w-12 h-12' alt='logo'></img>
                    <span className='mx-1 font-bold'>Real-A-Scrape</span>
                </div>
                <div className='flex items-center mr-8'>
                    <Link className='flex items-center' to='/stats'>
                        <img className='mx-4 w-12  h-12' src={Stats} alt='stats'></img>
                    </Link>
                    <Link className='flex items-center' to='/'>
                        <img className='mx-4 w-12  h-12 ' src={Home} alt='Stats'></img>
                    </Link>
                    <Link className='flex items-center' to='/profile'>
                        <img className='mx-4 w-12 h-12' src={Profile} alt='Profile'></img>
                    </Link>
                </div>
            </div>
            {props.children}
        </>
    )
}



export default Navbar