import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/profile.jpg'
import cr7 from '../assets/cr7.jpg'
import myself from '../assets/myself.jpg'
import tom from '../assets/tom.png'
import obito from '../assets/obito.jpg'

import { AiFillPlusCircle, AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FaRetweet } from 'react-icons/fa6'

FaRetweet
const UserPost = ({likes,commentCount,postTitle,image,userName,avatar}) => {
    const [isLiked, setIsLiked] = useState(false);

    const followUser = (event) => {

        alert("User Followed")
        event.preventDefault();
    }
    return (
        <Link to={'/poudelsanchit/post/23'}>
            <div className='w-full h-[42rem]  flex flex-col items-center mt-8 select-none'>
                <div className='sm:w-5/12 w-11/12 h-full flex flex-col border-b-[1px] border-secondary '>
                    <div className='w-full  h-14   flex  gap-4 '>
                        <div className='h-full flex items-center' >
                            <div className='relative h-10 w-10 flex '>
                                <img src={avatar? avatar: Profile} alt="" className='h-10 w-10 rounded-full  bg-slate-600 object-cover' />
                                <div className='absolute w-6 h-6 rounded-full bg-dark -bottom-1 -right-1  hover:scale-110 transition-all duration-300 cursor-pointer' onClick={followUser}>
                                    <AiFillPlusCircle className='text-2xl' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col h-full'>
                            <div className='font-sans font-bold flex items-start justify-start cursor-pointer' >{userName? userName: 'poudelsanchit'}</div>
                            <div className='text-sm h-auto'>{postTitle}</div>
                        </div>
                        <div className=' ml-auto flex items-start'>
                            <div className='flex items-center'>
                                <div className='text-secondary text-xs'>1h</div>
                                <FiMoreHorizontal className='text-3xl hover:bg-[#1e1e1e] p-1 rounded-full transition-all duration-100  	 cursor-pointer' onClick={(e) => e.preventDefault()} />
                            </div>
                        </div>

                    </div>
                    <div className='flex h-auto'>
                        <div className='w-10  flex justify-center'>
                            <div className='w-[0.14rem] h-full bg-secondary rounded-sm' />
                        </div>
                        <div className='w-full h-full flex flex-col gap-2'>
                            {image&& (
                                <div className='rounded-md'>
                                <img src={image} alt="" className='h-[32rem]  w-[90%] ml-4 rounded-md object-contain border-[0.5px] border-[#1e1e1e]' />
    
                                </div>
                            )}
                            
                            <div className='ml-4 flex gap-4 text-[2.5rem]' onClick={(e) => e.preventDefault()}>
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
                    <div className='flex gap-4'>
                        <div className='w-10 flex flex-col justify-center gap-1 items-center'>
                            <div className='flex  gap-1'>
                                <img src={myself} alt="" className='h-4 w-4 rounded-full  bg-secondary  object-contain' />

                                <img src={tom} alt="" className='h-4 w-4 rounded-full  bg-secondary  object-contain' />
                            </div>

                            <img src={obito} alt="" className='h-4 w-4 rounded-full  bg-secondary  object-contain' />

                        </div>
                        <div className='w-full flex gap-1 items-center text-secondary '>
                            <div className='hover:underline cursor-pointer'>{commentCount} replies</div>
                            <div className='h-1 w-1 rounded-full bg-secondary '></div>
                            <div className='hover:underline cursor-pointer'>{likes}</div>

                            </div>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default UserPost