import React from 'react'
import { AiFillHeart, AiFillPlusCircle } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa6'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'

const PostLoader = () => {
    return (
        <div className='w-full h-[42rem]  flex flex-col items-center mt-8 select-none'>
                <div className='sm:w-5/12 w-11/12 h-full flex flex-col border-b-[1px] border-lines animate-pulse'>
                    <div className='w-full  h-14   flex  gap-4 '>
                        <div className='h-full flex items-center' >
                            <div className='relative h-10 w-10 flex '>
                                <div className='h-10 w-10 rounded-full  bg-lines object-cover' />
                               
                            </div>
                        </div>
                        <div className='flex flex-col h-full w-full gap-2'>
                            <div className='font-sans font-bold flex items-start justify-start cursor-pointer h-4 bg-lines rounded-sm w-full' ></div>
                            <div className='text-sm h-4 bg-lines  rounded-sm'></div>
                        </div>
                      

                    </div>
                    <div className='flex h-auto'>
                        <div className='w-10  flex justify-center'>
                            <div className='w-[0.14rem] h-full bg-lines rounded-sm' />
                        </div>
                        <div className='w-full h-full flex flex-col gap-2'>
                            
                                <div className='rounded-md'>
                                    <div className='h-[32rem]  w-full rounded-md object-contain border-[0.5px] border-[#1e1e1e] bg-lines' />

                                </div>
                      

                        </div>
                    </div>
                 
                </div>

            </div>
    )
}

export default PostLoader