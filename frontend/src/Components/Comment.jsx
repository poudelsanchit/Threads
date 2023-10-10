import React, { useState } from 'react'
import { AiFillPlusCircle, AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FaRetweet } from 'react-icons/fa6'
import tom from '../assets/tom.png'
import myself from '../assets/myself.jpg'

const Comment = ({ username, likeCount, avatar }) => {
    const [isLiked, setIsLiked] = useState(false);
    const followUser = (event) => {
        alert("User Followed")
        event.preventDefault();
    }
    return (
        <>
            <div className='flex flex-col pt-3 pb-3  border-[#323333] border-b-[0.1px] '>
                <div className='w-full  h-auto   flex  gap-4 '>
                    <div className='h-full flex items-center' >
                        <div className='relative h-10 w-10 flex '>
                            <img src={avatar} alt="" className='h-10 w-10 rounded-full  bg-slate-600 object-contain' />
                            <div className='absolute w-6 h-6 rounded-full bg-dark -bottom-1 -right-1  hover:scale-110 transition-all duration-300 cursor-pointer' onClick={followUser}>
                                <AiFillPlusCircle className='text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full'>
                            <div className='flex flex-col h-full'>
                                <div className='font-sans font-bold flex items-start justify-start cursor-pointer' >{username}</div>
                                <div className='text-sm h-auto'>Lorem ipsum dolor sit amet consecteationem?</div>
                            </div>
                            <div className=' ml-auto flex items-start'>
                                <div className='flex items-center'>
                                    <div className='text-secondary text-xs'>1h</div>
                                    <FiMoreHorizontal className='text-3xl hover:bg-[#1e1e1e] p-1 rounded-full transition-all duration-100  	 cursor-pointer' onClick={(e) => e.preventDefault()} />
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 text-[2.5rem] mt-1 ' onClick={(e) => e.preventDefault()}>
                            <div className=' cursor-pointer hover:bg-[#1e1e1e] rounded-full active:scale-95  flex items-center justify-center'  onClick={() => setIsLiked(prev=>!prev)}>
                                {isLiked ? <AiFillHeart color='red' className='  hover:bg-[#1e1e1e] rounded-full h-9 w-9 p-1 ' /> :
                                 < AiOutlineHeart color='white' className=' cursor-pointer hover:bg-[#1e1e1e] rounded-full h-9 w-9 p-1' />}
                            </div>
                            <div className=' hover:bg-[#1e1e1e]  rounded-full active:scale-95 duration-300  flex items-center justify-center '>
                                <  BiComment className='text-white  transform -scale-x-100 cursor-pointer h-9 w-9 p-1' />
                            </div>
                            <div className='  hover:bg-[#1e1e1e] rounded-full active:scale-95  flex items-center justify-center'>
                                <  FaRetweet className='text-white   cursor-pointer h-9 w-9 p-1' />
                            </div>
                            <div className='  hover:bg-[#1e1e1e] rounded-full active:scale-95  flex items-center justify-center '>
                                <  FiSend className='text-white   cursor-pointer  h-9 w-9 p-1' />
                            </div>


                        </div>
                        <div className='text-secondary text-sm'>12 likes</div>
                    </div>


                </div>



            </div>
        </>
    )
}

export default Comment