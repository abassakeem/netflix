import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss"
const Watch = () => {
    return ( 
        <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video className="video" autoplay progress controls   src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-busy-city-at-night-44690-large.mp4"
      />
        </div>
     );
}
 
export default Watch;