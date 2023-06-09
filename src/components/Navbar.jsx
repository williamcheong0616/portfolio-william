import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
// import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/signature(6).png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className='text-2xl font-bold'>
            <a href='index.js'>
                <img src={logo} alt='logo' className='w-[200px] h-[50px]' />
            </a>
        </div>

     {/* Menu */}
     
            <ul className='hidden md:flex'>
            <li> <Link  to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
            <li><Link  to="about" smooth={true} offset={50} duration={500}>About</Link></li>
            <li><Link  to="skills" smooth={true} offset={50} duration={500}>Skills</Link></li>
            <li> <Link  to="experience" smooth={true} offset={50} duration={500}>Experience</Link></li>
                <li>Blog(TBD)</li>
            </ul>

        
            {/* Hamburger menu */}
        <div onClick={handleClick} className='z-10 md:hidden'>
            {!nav? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav 
            ? 'hidden' 
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }
            >
            <li> {' '} <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
            <li>{' '}<Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>About</Link></li>
            <li>{' '}<Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>Skills</Link></li>
            <li>{' '} <Link onClick={handleClick} to="experience" smooth={true} offset={50} duration={500}>Experience</Link></li>
                <li>Blog(TBD)</li>
            </ul>
            
        {/*Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex items-center justify-between w-full text-gray-300' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/williamcwl01/'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex items-center justify-between w-full text-gray-300' target="_blank" rel="noreferrer" href='https://github.com/williamcheong0616'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex items-center justify-between w-full text-gray-300' href='/'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex items-center justify-between w-full text-gray-300' href='/'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li> */}
            </ul>
        </div>


    </div>
)
}

export default Navbar
