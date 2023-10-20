import React, { useRef, useState } from 'react'
import { IoClose, IoCameraOutline } from 'react-icons/io5'
import tom from '../assets/tom.png'
import obito from '../assets/obito.jpg'
import { useRecoilState } from 'recoil'
import userAtom from '../atoms/userAtom'
import usePreviewImage from '../hooks/usePreviewImage'
import { ToastContainer, toast } from 'react-toastify'


const UpdateProfile = ({ visible, onclose }) => {

    const [user, setUser] = useRecoilState(userAtom);
    const [loader, setLoader] = useState(false);
    const [inputs, setInputs] = useState({

        name: user.name,
        username: user.username,
        email: user.email,
        bio: user.bio,
        password: '',

    })
    console.log(user._id)

    const handleUpdateProfile = async (e) => {

        e.preventDefault();
        try {
            setLoader(true);
            const res = await fetch(`/api/users/update/${user._id} `, {
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ ...inputs, profilePic: imageUrl })
            })
            const data = await res.json();
            if (data.error) {
                alert(data.error);
            }
            setUser(data);
            localStorage.setItem('user-Threads', JSON.stringify(data))
            toast("Profile Updated successfully", {
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
            setLoader(false);

            onclose()


        } catch (error) {
            console.log(error)

        }

    }
    const fileRef = useRef(null);
    const { imageUrl, handleImageChange } = usePreviewImage();
    if (!visible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50'>

            <div className="bg-[#1b1a1a] sm:h-max h-[90%] sm:w-3/6  w-5/6 rounded-md shadow-md flex flex-col pb-5 ">
                <div className='flex justify-between items-center w-full p-4 text-xl h-max'>
                    <div></div>
                    <div>Edit Profile</div>
                    <div className=' cursor-pointer hover:bg-lines rounded-sm p-1' onClick={onclose}><IoClose /></div>
                </div>
                <div className='bg-lines w-full h-[0.1px]'></div>
                <div className='w-full flex flex-col justify-center items-center gap-3 pt-3 relative'>
                    <img src={imageUrl || user.profilePic} alt="" className='h-[7rem] w-[7rem] rounded-full   object-contain opacity-90' />
                    <input type="file" className='hidden' ref={fileRef} onChange={handleImageChange} />

                    <div className='  bg-black opacity-50 hover:opacity-95 rounded-full  p-4 absolute cursor-pointer hover:scale-95' onClick={() => fileRef.current.click()}><IoCameraOutline /></div>
                </div>
                <div className='flex  w-full justify-center items-center '>
                    <div className=' flex w-3/4  flex-col gap-5'>
                        <div className='w-full z-10 bg-dark  rounded-md relative'>
                            <input value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} type="email" className='w-full h-14  text-light z-10 bg-dark focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='Full name' />
                            {inputs.name === '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}

                        </div>
                        <div className='w-full z-10 bg-dark rounded-md relative'>
                            <input value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} type="email" className='w-full h-14  text-light z-10 bg-dark focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='username' />
                            {inputs.email === '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}

                        </div>
                        <div className='w-full z-10 bg-dark  rounded-md relative'>
                            <input value={inputs.bio} onChange={(e) => setInputs({ ...inputs, bio: e.target.value })} type="email" className='w-full h-14  text-light z-10 bg-dark focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='Bio' />
                            {inputs.bio === '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}

                        </div>
                        <div className='w-full z-10 bg-dark  rounded-md relative'>
                            <input value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} type="email" className='w-full h-14  text-light z-10 bg-dark focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='Email address' />
                            {inputs.email === '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}

                        </div>
                        <div className='w-full z-10 bg-dark  rounded-md relative'>
                            <input value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} type="email" className='w-full h-14  text-light z-10 bg-dark focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='Password' />
                            {inputs.password === '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}

                        </div>
                        <div className='flex justify-between gap-5 '>
                            <div className='select-none flex w-full border-[0.1px] border-lines text-light rounded-md py-2 justify-center items-center cursor-pointer active:scale-[.97] ' onClick={onclose}>Cancel
                            </div>
                            <div className='flex select-none bg-white  w-full border-[0.1px] border-lines font-semibold text-dark rounded-md py-2 justify-center items-center cursor-pointer active:scale-[.97]  gap-5' onClick={handleUpdateProfile}>
                                <div>Update</div>
                                {loader?
                                
                           
                              <svg fill="#000000" className='animate-spin' height="20" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" /></svg>
                              
                              : null}

                            </div>
                        </div>
                    </div>

                </div>

                <ToastContainer

                    position="bottom-center"
                    autoClose={5000}
                    limit={1}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </div>
    )
}

export default UpdateProfile