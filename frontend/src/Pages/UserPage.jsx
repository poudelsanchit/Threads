import React, { useEffect, useState } from 'react'
import UserPost from '../Components/UserPost'
import Profile from '../assets/profile.jpg'
import cr7 from '../assets/cr7.jpg'
import myself from '../assets/myself.jpg'
import tom from '../assets/tom.png'
import obito from '../assets/obito.jpg'

import UserHeader from '../Components/UserHeader'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import Post from '../../../backend/models/postModel'
import PostLoader from '../loaders/PostLoader'
import UserHeaderLoader from '../loaders/UserHeaderLoader'
const UserPage = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [fetchingPosts, setFetchingPosts] = useState(true);
  const [fetchingUser, setFetchingUser] = useState(true);

  const { username } = useParams();


  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        setUser(data)

      } catch (err) {
        console.log(err)

      }
    };
    getUser();

    const getPosts = async () => {
      try {
        setFetchingUser(true);
        setFetchingPosts(true);
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();
        console.log(data)
        setPosts(data)
      } catch (error) {
        setPosts([]);
      }
      finally {
        setFetchingPosts(false);
        setFetchingUser(false);

      }
    }
    getPosts();

  }, [username])
  return (
    <>
      <Header />
      {
        fetchingPosts ?

          <UserHeaderLoader />
          : <UserHeader user={user} />


      }

      {
        !fetchingPosts && posts.length === 0 &&
        <div className='w-full h-[42rem]  flex flex-col items-center mt-8 select-none'>
          <div className='sm:w-5/12 w-11/12 h-full flex flex-col border-b-[1px] border-secondary '>
            No threads yet.</div>
        </div>
      }
      {
        fetchingPosts &&

        <PostLoader />

      }



      {

        posts.map((post) => (
          <UserPost post={post} />
        ))


      }

    </>
  )
}

export default UserPage