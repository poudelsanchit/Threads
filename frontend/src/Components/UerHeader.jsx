import React, { useState } from 'react'
import { BsInstagram } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import tom from '../assets/tom.png'
import Profile from '../assets/profile.jpg'
import { Link } from 'react-router-dom'
import Menu from './Menu'
const UserHeader = () => {
    const [isMoreActive, setIsMoreActive] = useState(false);
    console.log(isMoreActive)
    return (
        <div className='w-full flex flex-col items-center mt-8 select-none'>
            <div className='w-5/12 '>
                <div className='flex justify-end items-center'>
                    <div className='w-full '>
                        <div className='flex flex-col'>
                            <div className='text-2xl font-bold'>Sanchit Poudel</div>
                            <div className='flex items-center gap-1'>
                                <div className='text-sm'>poudelsanchit</div>
                                <div className='text-xs text-[#777777] bg-[#201f1f] p-1 rounded-md'>threads.net</div>
                            </div>

                        </div>

                    </div>
                    <div className='w-full flex flex-col justify-center items-end gap-3'>
                        <img src={tom} alt="" className='h-[5.5rem] w-[5.5rem] rounded-full  bg-slate-600 object-contain' />
                    </div>
                </div>
                <div className='flex justify-end items-center mt-3'>
                    <div className='w-full flex items-center gap-2'>
                        <div className='text-sm text-[#777777] hover:underline '>200 Followers</div>
                        <div className='h-1 w-1 rounded-full bg-[#777777]' />
                        <Link className='text-sm text-[#777777] hover:underline'>instagram.com</Link>

                    </div>
                    <div className='w-full flex justify-end gap-3  z-0 '>
                        <BsInstagram className='text-4xl hover:bg-[#1e1e1e] p-2 rounded-md transition-all duration-600  ease-in-out cursor-pointer	 ' />
                        <div className='relative'>
                            <CgMoreO className='text-4xl hover:bg-[#1e1e1e] p-2 rounded-md transition-all duration-1000 	 cursor-pointer' onClick={() => setIsMoreActive(prev => !prev)} />
                            <div onClick={() => setIsMoreActive(prev => !prev)} >
                                {isMoreActive ?
                                    <Menu Data={[
                                        {
                                            id: 1,
                                            name: 'Copy link'
                                        },

                                    ]} />
                                    : null
                                }

                            </div>
                        </div>




                    </div>

                </div>
                <div className='flex w-full  text-base font-semibold mt-6'>

                    <div className='w-full flex flex-col gap-4 '>
                        <div className='flex justify-center'>Threads</div>
                        <div className='h-[0.01rem] w-full bg-white'></div>
                    </div>
                    <div className='w-full flex flex-col gap-4 '>
                        <div className='flex justify-center'>Replies</div>

                        <div className='h-[0.01rem] w-full bg-[#323333]'></div>

                    </div>
                    <div className='w-full flex flex-col gap-4 '>
                        <div className='flex justify-center'>Reposts</div>

                        <div className='h-[0.01rem] w-full bg-[#323333]'></div>

                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>

    )
}

export default UserHeader