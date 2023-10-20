import React from 'react'
import Menu from '../Components/Menu'
import { BsInstagram } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const UserHeaderLoader = () => {
    return (
        <div className='w-full flex flex-col items-center mt-8 select-none animate-pulse'>
            <div className='md:w-5/12 w-11/12 '>
                <div className='flex justify-end items-center'>
                    <div className='w-full '>
                        <div className='flex flex-col gap-2'>
                            <div className='text-2xl font-bold bg-pulse h-6 w-full rounded-sm'></div>
                            <div className='flex items-center gap-1'>
                                <div className='text-sm h-4 w-full bg-pulse rounded-sm'></div>
                                <div className='text-xs text-[#777777] bg-[#201f1f] p-1 rounded-sm w-full h-4'></div>
                            </div>
                            <div className='text-base '></div>


                        </div>

                    </div>
                    <div className='w-full flex flex-col justify-center items-end gap-3'>
                        <div   className='h-[5.5rem] w-[5.5rem] rounded-full  bg-pulse object-contain' />
                    </div>
                </div>
                <div className='flex justify-end items-center mt-1'>
                    <div className='w-full flex items-center gap-2'>
                        <div className='sm:text-sm text-xs text-[#777777] hover:underline  w-3/12 h-3 bg-pulse rounded-sm'></div>
                        <div className='h-1 w-1 rounded-full bg-pulse' />
                        <div className='text-sm text-[#777777] hover:underline w-3/12 h-3 bg-pulse rounded-sm'/>

                    </div>
                    <div className='w-max flex justify-end gap-3  z-0 '>
                        <div className='text-4x bg-[#1e1e1e] h-6 w-6 rounded-sm transition-all duration-600  ease-in-out cursor-pointer	 ' />
                        <div className='text-4x bg-[#1e1e1e] h-6 w-6 rounded-sm transition-all duration-600  ease-in-out cursor-pointer	 ' />




                    </div>

                </div>
                <div className='flex justify-between gap-5 pt-2 '>

                    


                    <div className=' bg-pulse select-none flex w-full rounded-md py-4 justify-center items-center cursor-pointer active:scale-[.97] '/>


                    <div className=' bg-pulse select-none flex w-full rounded-md py-4 justify-center items-center cursor-pointer active:scale-[.97] '/>
                </div>
                <div className='flex w-full  text-base font-semibold mt-6'>

                    <div className='w-full flex flex-col gap-4 '>
                        <div className='flex justify-center'></div>
                        <div className='h-[0.01rem] w-full bg-pulse'></div>
                    </div>
                    <div className='w-full flex flex-col gap-4 '>
                        <div className='flex justify-center'></div>

                        <div className='h-[0.01rem] w-full bg-pulse'></div>

                    </div>
                    <div className='w-full flex flex-col gap-4 '>
                        <div className='flex justify-center'></div>

                        <div className='h-[0.01rem] w-full bg-pulse'></div>

                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>)
}

export default UserHeaderLoader