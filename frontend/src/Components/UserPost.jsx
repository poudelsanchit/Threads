import React, { useEffect, useState } from 'react'
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
import userAtom from '../atoms/userAtom'
import { useRecoilValue } from 'recoil'

FaRetweet
const UserPost = ({ post, likes, commentCount, postTitle, image, userName, avatar }) => {
    const loggedInUser = useRecoilValue(userAtom);
    console.log(loggedInUser._id)

    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState([]);
    const [fetchingUserData, setFetchingUserData] = useState(true);

    console.log(post)

    const followUser = (event) => {

        event.preventDefault();
    }
    useEffect(() => {
        const getUserDetails = async () => {
            try {
                setFetchingUserData(true);
                const res = await fetch(`/api/users/profile/${post.postedBy}`);
                const data = await res.json();
                setUser(data)
                console.log(data)

            } catch (err) {
                setUser([]);
                console.log(err)

            }
            finally {
                setFetchingUserData(false);
            }

        }
        getUserDetails();

    }, [])
    return (
        <>
            {
                !fetchingUserData && user.length === 0 &&
                (<h1>No user found</h1>)
            }
            {
                fetchingUserData && <h1></h1>
            }

                <div className='w-full h-auto  flex flex-col items-center mt-3 sm:mt-8  select-none'>
                    <div className='sm:w-5/12 w-11/12 pb-2 h-full flex flex-col border-b-[0.11px] border-lines '>
                        <div className='w-full  h-14   flex  gap-4 '>
                            <div className='h-full flex items-center' >
                                <div className='relative h-10 w-10 flex '>
                                    <img src={user.profilePic ? user.profilePic : Profile} alt="" className='h-10 w-10 rounded-full  bg-slate-600 object-cover' />
                                    <div className='absolute w-6 h-6 rounded-full bg-dark -bottom-1 -right-1  hover:scale-110 transition-all duration-300 cursor-pointer' onClick={followUser}>
                                        <AiFillPlusCircle className='text-2xl' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col h-full'>
                                <div className='font-sans font-bold flex items-start justify-start cursor-pointer' >{ user.username }</div>
                                <div className='text-sm h-auto'>{post.text}</div>
                            </div>
                            <div className=' ml-auto flex items-start'>
                                <div className='flex items-center'>
                                    <div className='text-secondary text-xs'>1h</div>
                                    <FiMoreHorizontal className='text-3xl hover:bg-[#1e1e1e] p-1 rounded-full transition-all duration-100  	 cursor-pointer' onClick={(e) => e.preventDefault()} />
                                </div>
                            </div>

                        </div>
                        <div className='flex h-auto'>
                            {
                                console.log(loggedInUser._id)
                            }
                                <div className='w-10  flex justify-center'>
                                    <div className='w-[0.14rem] h-full bg-lines rounded-sm' />
                                </div>
                            

                            <div className='w-full h-full flex flex-col gap-2'>
                                {post.img && (
                                    <div className='rounded-md'>
                                        <img src={post.img} alt="" className='h-auto  w-[90%] ml-4 rounded-md object-contain border-[0.5px] border-[#1e1e1e]' />

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
                            
                            <div className='w-full flex  items-center text-secondary  gap-2'>
                                <div className='hover:underline cursor-pointer'>{user.replies?user.replies : 0 } comments</div>
                                <div className='h-1 w-1 bg-lines rounded-full'></div>
                                <div className='hover:underline cursor-pointer'>{likes? likes : 0} likes</div>

                            </div>
                        </div>
                    </div>

                </div>
        </>

    )
}

export default UserPost