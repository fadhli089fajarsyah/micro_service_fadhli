import logo from '../assets/img_layout/logo.png'
import { useState } from 'react'


function Navbar() {
    const [login, setLogin] = useState(false)

    const handleLogin = () => {
        setLogin(!login)
    }

    return (
        <>
            <nav className='bg-black flex text-white justify-between items-center py-2 px-2 md:px-9  lg:py-3 z-50 fixed w-full'>
                <div className='flex items-center w-[50%]'>
                    <img src={logo} alt="" className='w-[30px] md:w-[41px] mr-2 md:mr-4' />
                    <h3 className='text-[13px] lg:text-[24px] font-bold inter'>PEMILU PRESIDEN DUMBWAYS.ID</h3>
                </div>
                <div className='flex w-[50%] justify-end items-center'>
                    <ul className='flex pr-4'>
                        <li><a href='/' className='text-[15px] lg:text-[20px]'>Partai</a></li>
                        <li><a href='info' className='text-[15px] lg:text-[20px] border-x px-2 mx-2'>Paslon</a></li>
                        <li><a href='voting' className='text-[15px] lg:text-[20px]'>Voting</a></li>
                    </ul>
                    {login ? (
                        <h1 className='bg-white text-black rounded-full p-1 px-3' onClick={handleLogin} >Y</h1>
                    ) : (
                        <a href='login' onClick={handleLogin} className='text-[15px] lg:text-[20px] bg-white text-black font-bold rounded px-2 py-1 md:px-3 md:py-01 lg:px-6 text-center items-center flex'>Login</a>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar
