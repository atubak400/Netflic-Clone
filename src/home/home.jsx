import Featured from '../components/Featured/Featured'
import Navbar from '../components/navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='movies' />
    </div>
  )
}

export default Home
