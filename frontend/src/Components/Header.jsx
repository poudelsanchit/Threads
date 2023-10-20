import React, { useEffect, useState } from 'react'
import LogoLight from '../assets/light-logo.svg'
import { GoHomeFill } from 'react-icons/go'
import { BsPersonFill, BsPerson } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IoCreateOutline } from 'react-icons/io5'
import { CgMenuRight } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import userAtom from '../atoms/userAtom'
import useShowToast from '../hooks/useShowToast'
import { toast } from 'react-toastify'
import Model from './UpdateProfile'
const Header = () => {
    const setUser = useSetRecoilState(userAtom);
	const currentUser = useRecoilValue(userAtom);

    const handleLogout = async () => {
        try {

            const res = await fetch('/api/users/logout', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await res.json()
            console.log(data);
            if (data.message) {
                toast(data.message, {
                    style: { fontSize: '14px' },
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            localStorage.removeItem('user-Threads')
            setUser(null)

        } catch (err) {
            console.log(err)

        }

    }
    const [isActive, setIsActive] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light');
    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
            const html = document.querySelector('html');
            html.classList.remove('dark');
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        const html = document.querySelector('html');
        html.classList.add(localTheme)
    }, [theme])
    return (
        <div className='h-[74px] w-full  top-0 sticky flex justify-center dark:bg-dark/95 backdrop-blur-sm bg-white/30  z-10'>
            <div className='flex justify-evenly h-full sm:w-3/4 w-11/12 items-center'>
                <div className='flex items-start'>
                    <img src={LogoLight} alt="" className='h-8' />

                </div>
                <div className='flex sm:w-4/5 w-full h-full justify-center items-center '>
                    <div className='sm:flex w-2/3   items-center justify-evenly text-3xl hidden  '>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-light hover:bg-zinc-700 p-3 rounded-md transition-all duration-500' : ' text-gray-600 hover:bg-zinc-700 p-3 rounded-md transition-all duration-500'}
                        >
                            <GoHomeFill />
                        </NavLink>
                        <NavLink to={'/search'} className={({ isActive }) => isActive ? 'text-light hover:bg-zinc-700 p-3 rounded-md transition-all duration-500' : ' text-gray-600 hover:bg-zinc-700 p-3 rounded-md transition-all duration-500'}>
                            <FiSearch />
                        </NavLink>
                        <NavLink to={'/createthread'} className={({ isActive }) => isActive ? 'text-light hover:bg-zinc-700 p-3 rounded-md transition-all duration-500' : ' text-gray-600 hover:bg-zinc-700 p-3 rounded-md transition-all duration-500'}>
                            <IoCreateOutline />
                        </NavLink>
                        <NavLink to={'/notifications'} className={({ isActive }) => isActive ? 'text-light hover:bg-zinc-700 p-3 rounded-md transition-all duration-500' : ' text-gray-600 hover:bg-zinc-700 p-3 rounded-md transition-all duration-500'}>
                            <AiOutlineHeart />
                        </NavLink>
                        <NavLink to={currentUser? `/${currentUser.username}`: '/'} className={({ isActive }) => isActive ? 'text-light hover:bg-zinc-700 p-3 rounded-md transition-all duration-500' : ' text-gray-600 hover:bg-zinc-700 p-3 rounded-md transition-all duration-500'}>
                            <BsPerson />
                        </NavLink>



                    </div>



                </div>
                <NavLink className={isActive ? 'relative text-3xl text-light transition-all cursor-pointer' : 'relative text-3xl text-zinc-600 hover:text-light transition-all cursor-pointer'} onClick={() => setIsActive(prev => !prev)}>
                    <CgMenuRight />
                    {isActive ?
                        <div className=' h-24 text-light w-40 top-12 right-0 absolute rounded-md bg-[#201f1f] transition-all flex flex-col text-base transition-none'>
                            <div className='h-full flex items-center p-3 hover:bg-[#000000] rounded-t-md' onClick={handleTheme}>Switch appearance</div>
                            <div className='h-full flex items-center p-3 hover:bg-[#000000] rounded-b-md' onClick={handleLogout}>Log out</div>

                        </div>
                        : null}
                </NavLink>

            </div>
          
        </div>
    )
}

export default Header