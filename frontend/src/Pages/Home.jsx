import React, { useEffect, useState } from 'react'
import UserPost from '../Components/UserPost'
import Profile from '../assets/profile.jpg'
import cr7 from '../assets/cr7.jpg'
import myself from '../assets/myself.jpg'
import tom from '../assets/tom.png'
import obito from '../assets/obito.jpg'
import Header from '../Components/Header'
import { useRecoilValue } from 'recoil'
import userAtom from '../atoms/userAtom'
const Home = () => {
  useEffect(() => {
    const html = document.querySelector('html');
    html.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  const [feeds, setFeeds] = useState([]);
  const posts = [
    {
      image: cr7,
      avatar: cr7,
      userName: 'Cristiano Ronaldo',
      postTitle: 'Great feeling to play for the national.',
      commentCount: '98k',
      likes: '1.45 m',

    }, {
      image: tom,
      avatar: tom,
      userName: 'Tommy',
      postTitle: 'Missing tom and jerry.',
      commentCount: '7k',
      likes: '344 k',

    }, {
      image: obito,
      avatar: obito,
      userName: 'Obito Uchiha',
      postTitle: 'Just a broken hero who turned villian',
      commentCount: '989k',
      likes: '3.45 m',

    }
  ]
  const user = useRecoilValue(userAtom);
  useEffect(() => {
    const getFeeds = async () => {
      try {
        const res = await fetch('/api/posts/feed', {
          method: "GET",
          headers: {
            "Content-Type": 'application/json'
          },
        });
        const data = await res.json();
        setFeeds(data);


      } catch (error) {
        console.log(error)
      }
    }
    const getUserDetails = async () => {


    }

    getFeeds();
    getUserDetails();

  }, [])

  return (
    <>
      <Header />
{/*      
      {
        posts.map(({ image, avatar, userName, postTitle, commentCount, likes }) => (
          <UserPost image={image} avatar={avatar} userName={userName} postTitle={postTitle} commentCount={commentCount} likes={likes} />

        ))
      } */}

    </>

  )
}

export default Home