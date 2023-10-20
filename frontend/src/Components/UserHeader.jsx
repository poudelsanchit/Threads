import React, { useEffect, useState } from 'react'
import { BsInstagram } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import tom from '../assets/tom.png'
import Profile from '../assets/profile.jpg'
import { Link, useParams } from 'react-router-dom'
import Menu from './Menu'
import UpdateProfile from './UpdateProfile'
import { useRecoilState, useRecoilValue } from 'recoil'
import userAtom from '../atoms/userAtom'
import useGetUserProfile from '../hooks/getUserDetails'
const UserHeader = ({ user }) => {
    const { username } = useParams();



    const [isMoreActive, setIsMoreActive] = useState(false);
    const [isShowModel, setIsShowModel] = useState(false);
    const currentUser = useRecoilValue(userAtom); //logged in user
    const [following, setFollowing] = useState(false);
    const handlOnClose = () => setIsShowModel(false)
    console.log(user._id)

    const handleFollowUnfollow = async () => {
        try {
            const res = await fetch(`/api/users/follow/${user._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json()
            if (data.message) {
                console.log(data.message)
                if(data.message==='User followed successfully')
                {
                    setFollowing(true)
                    console.log('User followed successflyy')
                }
                else{
                    setFollowing(false)
                    console.log('User unfollowed successflyy')

                }
                
                return;
            }

           
        } catch (error) {
            console.log(error)

        }

    }



    return (
        <div className='w-full flex flex-col items-center  select-none'>
            <div className='md:w-5/12 w-11/12 '>
                <div className='flex justify-end items-center'>
                    <div className='w-full '>
                        <div className='flex flex-col'>
                            <div className='text-2xl font-bold'>{user.name}</div>
                            <div className='flex items-center gap-1'>
                                <div className='text-sm'>{user.username}</div>
                                <div className='text-xs text-[#777777] bg-[#201f1f] p-1 rounded-md'>threads.net</div>
                            </div>
                            <div className='text-base '>{user.bio}</div>


                        </div>

                    </div>
                    <div className='w-full flex flex-col justify-center items-end gap-3'>
                        <img src={user.profilePic ? user.profilePic : Profile} alt="" className='h-[5.5rem] w-[5.5rem] rounded-full  bg-slate-600 object-contain' />
                    </div>
                </div>
                <div className='flex justify-end items-center mt-1'>
                    <div className='w-full flex items-center gap-2'>
                        <div className='sm:text-sm text-xs text-[#777777] hover:underline '>{ } Followers</div>
                        <div className='h-1 w-1 rounded-full bg-[#777777]' />
                        <Link className='text-sm text-[#777777] hover:underline'>instagram.com</Link>

                    </div>
                    <div className='w-max flex justify-end gap-3  z-0 '>
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
                <div className='flex justify-between gap-5 '>

                    {/* follow and unfollow functionality */}
                    {currentUser._id !== user._id && (
                        <div className='select-none flex w-full border-[0.1px] border-lines bg-white font-semibold text-dark rounded-md py-2 justify-center items-center cursor-pointer active:scale-[.97] ' onClick={handleFollowUnfollow}>{!following ? "Follow" : " Unfollow"}
                        </div>
                    )
                    }

                    {currentUser._id === user._id && (
                        <div className='select-none flex w-full border-[0.1px] border-lines text-light rounded-md py-2 justify-center items-center cursor-pointer active:scale-[.97] ' onClick={() => setIsShowModel(prev => !prev)}>Edit Profile
                        </div>
                    )
                    }


                    <div className='select-none flex w-full border-[0.1px] border-lines text-light rounded-md py-2 justify-center items-center cursor-pointer active:scale-[.97] ' >Share Profile
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
            <UpdateProfile visible={isShowModel} onclose={handlOnClose} />

        </div>

    )
}

export default UserHeader