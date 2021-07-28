import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons'
import './list.scss'
import ListItem from '../listItem/ListItem'

export default function List() {
  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch @ 54:17</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined className='sliderArrow left' />
        <div className='container'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' />
      </div>
    </div>
  )
}
