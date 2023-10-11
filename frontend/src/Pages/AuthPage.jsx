import React from 'react'
import LoginCard from '../Components/Logincard'
import SignUpCard from '../Components/SignUpCard'
import { useRecoilValue } from 'recoil'
import authScreenAtom from '../atoms/authatom'

const AuthPage = () => {
    const authScreenState= useRecoilValue(authScreenAtom)
    console.log(authScreenState)
    return (
        <>
        {
            authScreenState === "login"? <LoginCard/>: <SignUpCard/>
        }

        </>
    )
}

export default AuthPage