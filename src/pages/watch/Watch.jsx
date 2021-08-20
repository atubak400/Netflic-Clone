import { ArrowBackIosOutlined } from '@material-ui/icons'
import './watch.scss'

function watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackIosOutlined />
        Home
      </div>
      <video
        className='video'
        autoPlay
        progress
        controls
        src='https://vod-progressive.akamaized.net/exp=1629482744~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=8d45c63d4dbdf12012a337619b8159599faaa7b35ccc43fdae28f1cedd44a781/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4'
      />
    </div>
  )
}

export default watch
