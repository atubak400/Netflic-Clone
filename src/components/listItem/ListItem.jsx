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
      </div>
    </div>
  )
}
