import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img
        width='100%'
        src='https://kingsleyatuba.com/wp-content/uploads/2021/05/mee-300x300.jpeg'
        alt=''
      />
    </div>
  )
}

export default Home
