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
import Comment from '../Components/Comment'
const PostPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const followUser = (event) => {

    alert("User Followed")
    event.preventDefault();
  }
  return (
    <>
      <div className='w-full h-auto  flex flex-col items-center mt-8 select-none '>
        <div className='w-4/12 h-full flex flex-col  '>
          <div className='w-full  h-14   flex  gap-4 '>
            <div className='h-full flex items-center' >
              <div className='relative h-10 w-10 flex '>
                <img src={tom} alt="" className='h-10 w-10 rounded-full  bg-slate-600 object-contain' />
                <div className='absolute w-6 h-6 rounded-full bg-dark -bottom-1 -right-1  hover:scale-110 transition-all duration-300 cursor-pointer' onClick={followUser}>
                  <AiFillPlusCircle className='text-2xl' />
                </div>
              </div>
            </div>
            <div className='flex flex-col h-full'>
              <div className='font-sans font-bold flex items-start justify-start cursor-pointer' >poudelsanchit</div>
              <div className='text-sm h-auto'>Lorem ipsum dolor sit amet consecteationem?</div>
            </div>
            <div className=' ml-auto flex items-start'>
              <div className='flex items-center'>
                <div className='text-secondary text-xs'>1h</div>
                <FiMoreHorizontal className='text-3xl hover:bg-[#1e1e1e] p-1 rounded-full transition-all duration-100  	 cursor-pointer' onClick={(e) => e.preventDefault()} />
              </div>
            </div>

          </div>
          <div className='flex h-auto'>

            <div className='w-full h-full flex flex-col gap-2'>
              {tom && (
                <div className='rounded-md'>
                  <img src={tom} alt="" className='h-[32rem]  w-full rounded-md object-contain border-[0.5px] border-[#1e1e1e]' />

                </div>
              )}

              <div className='ml-4 flex gap-4 text-[2.5rem] ' onClick={(e) => e.preventDefault()}>
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
          <div className='w-full flex gap-1 items-center text-secondary border-b-[0.5px]  pb-5 border-border  '>
            <div className='hover:underline cursor-pointer'>22 replies</div>
            <div className='h-1 w-1 rounded-full bg-secondary '></div>
            <div className='hover:underline cursor-pointer'>344 likes</div>

          </div>
          <div>
            <Comment avatar={tom} likeCount={22} username={'Tommy shelby'} />
            <Comment avatar={myself} likeCount={22} username={'poudelsanchit'} />
            <Comment avatar={obito} likeCount={22} username={'Obito uchiha'} />

          </div>
          

        </div>

      </div>
    </>
  )
}

export default PostPage