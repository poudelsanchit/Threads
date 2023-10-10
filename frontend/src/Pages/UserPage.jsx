import React from 'react'
import UserPost from '../Components/UserPost'
import Profile from '../assets/profile.jpg'
import cr7 from '../assets/cr7.jpg'
import myself from '../assets/myself.jpg'
import tom from '../assets/tom.png'
import obito from '../assets/obito.jpg'

import UserHeader from '../Components/UerHeader'
const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={70} commentCount={36} postTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum.'  image={myself}/>
      <UserPost likes={90} commentCount={69} postTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum.'  image={cr7}/>
      <UserPost likes={340} commentCount={22} postTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum.' image={obito} />
      <UserPost likes={760} commentCount={23} postTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum.' image={tom} />
      <UserPost likes={760} commentCount={23} postTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum.'  />
    </>
  )
}

export default UserPage