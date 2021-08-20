import './listItem.scss'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import {
  Add,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons'
import { useState } from 'react'

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer =
    'https://vod-progressive.akamaized.net/exp=1629482744~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=8d45c63d4dbdf12012a337619b8159599faaa7b35ccc43fdae28f1cedd44a781/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4'
  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src='https://www.cnet.com/a/img/lLpGOBU_3biuRzGQcBbWdKaxbRQ=/940x0/2020/07/16/b07efd60-9348-42f6-b73d-2d4adb592c70/extraction-netflix-med.jpg'
        alt=''
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrowIcon className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownAltOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              tempora ea praesentium aperiam voluptates consectetur deleniti.
            </div>
            <div className='genre'>Action</div>
          </div>
        </>
      )}
    </div>
  )
}
