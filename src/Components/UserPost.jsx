import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/profile.jpg'
import cr7 from '../assets/cr7.jpg'
import { AiFillPlusCircle, AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FaRetweet } from 'react-icons/fa6'

FaRetweet
const UserPost = () => {
    const [isLiked, setIsLiked] = useState(false);

    const followUser = () => {
        alert("User Followed")
    }
    return (
        <div className='w-full h-[40rem]  flex flex-col items-center mt-8 select-none'>
            <div className='w-5/12 h-full flex flex-col border-b-[1px] border-secondary '>
                <div className='w-full  h-14   flex  gap-4 '>
                    <div className='h-full flex items-center' >
                        <div className='relative h-10 w-10 flex '>
                            <img src={Profile} alt="" className='h-10 w-10 rounded-full  bg-slate-600 object-contain' />
                            <div className='absolute w-6 h-6 rounded-full bg-dark -bottom-1 -right-1  hover:scale-110 transition-all duration-300 cursor-pointer' onClick={followUser}>
                                <AiFillPlusCircle className='text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col h-full'>
                        <div className='font-sans font-bold flex items-start justify-start cursor-pointer' >poudelsanchit</div>
                        <div className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit, Beatae, quos.quosquos</div>
                    </div>
                    <div className=' ml-auto flex items-start'>
                        <div className='flex items-center'>
                            <div className='text-secondary text-xs'>1h</div>
                            <FiMoreHorizontal className='text-3xl hover:bg-[#1e1e1e] p-1 rounded-full transition-all duration-100  	 cursor-pointer' />
                        </div>
                    </div>

                </div>
                <div className='flex h-auto'>
                    <div className='w-10  flex justify-center'>
                        <div className='w-[0.14rem] h-full bg-secondary rounded-sm' />
                    </div>
                    <div className='w-full h-full flex flex-col gap-2'>
                        <img src={cr7} alt="" className='h-[32rem] bg-secondary w-[83%] ml-4 rounded-md object-contain' />
                        <div className='ml-4 flex gap-4 text-[2.5rem]'>
                            <div className='  hover:bg-[#1e1e1e] rounded-full active:scale-95 '>
                                {isLiked ? <AiFillHeart color='red' onClick={() => setIsLiked(false)} className=' cursor-pointer hover:bg-[#1e1e1e] rounded-full p-2' /> : < AiOutlineHeart color='white' onClick={() => setIsLiked(true)} className=' cursor-pointer hover:bg-[#1e1e1e] rounded-full p-2' />}
                            </div>
                            <div className=' hover:bg-[#1e1e1e]  rounded-full active:scale-95 duration-300 '>
                                <  BiComment className='text-white  transform -scale-x-100 cursor-pointer p-2' />
                            </div>
                            <div className='  hover:bg-[#1e1e1e] rounded-full active:scale-95'>
                                <  FaRetweet className='text-white   cursor-pointer  p-2' />
                            </div>
                            <div className='  hover:bg-[#1e1e1e] rounded-full active:scale-95 '>
                                <  FiSend className='text-white   cursor-pointer  p-2' />
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserPost