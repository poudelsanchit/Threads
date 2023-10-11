import React, { useState } from 'react'
import ThreadsLogin from '../assets/threadslogin.png'
import Threads from '../assets/light-logo.svg'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState } from 'recoil';
import authScreenAtom from '../atoms/authatom';


const SignUpCard = () => {
    const setAuthScreen = useSetRecoilState(authScreenAtom);
    const [inputs, setInputs] = useState({

        name: '',
        username: '',
        email: '',
        password: '',

    })

    const handleSignUp = async () => {
        try {
            const res = await fetch("/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(inputs)

            });
            const data = await res.json();
            console.log(data)

            if (data.message) {
                toast(data.message, {
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
                return
            }
            localStorage.setItem('user-Threads',JSON.stringify(data ))



            // if (fullname == '' && username == '' && email == '' && password == '') {
            //     toast('Enter your fullname, username, email address and password.            ', {
            //         style: { fontSize: '14px' },
            //         position: "bottom-center",
            //         autoClose: 1000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "dark",
            //     });
            // }
            // else{
            //     console.log('hello')
            // }



        } catch (error) {
            console.log(error)

        }

    }
    return (
        <>
            <div className='bg-dark w-screen h-screen flex flex-col'>

                <img src={ThreadsLogin} className='h-96 w-full object-cover absolute  top-0 z-0' />

                <div className='w-full text-white flex justify-center items-center  mt-48 '>
                    <div className='sm:w-[30%] w-[95%] flex flex-col items-center text-lg font-semibold gap-2'>
                        <div>
                            Create your account for Threads</div>
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
                        <div className='flex  gap-2'>
                            <div className=' z-10 bg-[#1e1e1e]  rounded-md relative '>
                                <input value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} required type="text" className='w-full h-14  text-light z-10 focus:outline-none bg-[#1e1e1e] p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='Fullname' />

                                {inputs.name == '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}
                            </div>
                            <div className=' z-10 bg-[#1e1e1e]  rounded-md relative'>
                                <input value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} type="text" className='w-full h-14  text-light z-10 focus:outline-none bg-[#1e1e1e] p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='Username' />
                                {inputs.username == '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}

                            </div>


                        </div>
                        <div className='w-full z-10 bg-[#1e1e1e]  rounded-md relative'>
                            <input value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} type="email" className='w-full h-14  text-light z-10 bg-[#1e1e1e] focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='Email address' />
                            {inputs.email === '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}

                        </div>
                        <div className='w-full z-10 bg-[#1e1e1e]  rounded-md relative'>
                            <input value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} type="password" className='w-full h-14  text-light z-10 bg-[#1e1e1e] focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md ' placeholder='Password' />
                            {inputs.password == '' ? <div className='top-0 right-2 absolute text-red-500'>*</div> : null}

                        </div>
                        <div className='select-none flex w-full bg-light text-dark rounded-md py-3 justify-center cursor-pointer active:scale-[.97] ' onClick={handleSignUp}>
                            Sign up
                        </div>
                        <div className='text-secondary text-base font-normal cursor-pointer hover:underline'>Forgotten password?</div>
                        <div className='flex w-full items-center justify-center gap-4'>
                            <div className='h-[0.1px] w-full bg-lines' />
                            <div className='w-max text-secondary font-normal text-sm'>or</div>
                            <div className='h-[0.1px] w-full bg-lines'></div>

                        </div>
                        <div className='text-secondary text-base font-normal cursor-pointer hover:underline'>Already have an account?</div>

                        <div className='select-none flex w-full border-[0.1px] border-lines text-light rounded-md py-4 justify-center items-center cursor-pointer active:scale-[.97] ' onClick={() => setAuthScreen("login")}>

                            <div className='w-4/5 flex justify-center gap-5'>
                                <img src={Threads} alt="" className='h-8 ' />
                                <div >Log in</div></div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SignUpCard