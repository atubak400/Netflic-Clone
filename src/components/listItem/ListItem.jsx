import './listItem.scss'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import {
  Add,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons'

export default function ListItem() {
  return (
    <div className='listItem'>
      <img
        src='https://www.cnet.com/a/img/lLpGOBU_3biuRzGQcBbWdKaxbRQ=/940x0/2020/07/16/b07efd60-9348-42f6-b73d-2d4adb592c70/extraction-netflix-med.jpg'
        alt=''
      />
      <div className='itemInfo'>
        <div className='icons'>
          <PlayArrowIcon />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className='itemInfoTop'>
          <span>1 hour 14 mins</span>
          <span className='limit'>+16</span>
          <span>1999</span>
          <div className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            tempora ea praesentium aperiam voluptates consectetur deleniti.
          </div>
          <div className='genre'>Action</div>
        </div>
      </div>
    </div>
  )
}
