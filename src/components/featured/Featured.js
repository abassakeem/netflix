import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import Logo from "../../assets/images/keem-logo.png";
import "./featured.scss"
const Featured = ({type}) => {
    return ( 
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type ==="movie" ? "Movies" : "Series"} </span>
                    <select name="genre" id="genre">
                        <option >Genre</option>
                        <option value="adventure" >Adventure</option>
                        <option value="comedy" >Comedy</option>
                        <option value="fantasy" >Fantasy</option>
                        <option value="historical" >Historical</option>
                        <option value="horror" >Horror</option>
                        <option value="romance" >Romance</option>
                        <option value="sci-fi" >Sci-fi</option>
                        <option value="thriller" >Thriller</option>
                        <option value="western" >Western</option>
                        <option value="animation" >Animation</option>
                        <option value="drama" >Drama</option>
                        <option value="documentary" >Documentary</option>
                        
                    </select>
                    
                </div>
            )}
             <img width="100%" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04fd096e-205c-4c04-bdde-7ce9bc718319/df0zvm2-0e88949f-5740-427e-90c0-f21a1732f17e.png/v1/fill/w_1920,h_2716,q_80,strp/ben_10_classic_poster_by_thehawkdown_df0zvm2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjcxNiIsInBhdGgiOiJcL2ZcLzA0ZmQwOTZlLTIwNWMtNGMwNC1iZGRlLTdjZTliYzcxODMxOVwvZGYwenZtMi0wZTg4OTQ5Zi01NzQwLTQyN2UtOTBjMC1mMjFhMTczMmYxN2UucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kgRC2WSV48m_bTqxI-QIgItTGo2elgzsFhnwrghcnnc" />
              <div className="info">
            <img src="https://wallpapers.com/images/high/purple-avengers-logo-xbyzondgld3gv3fd.webp" className="keem-logo" alt=""/>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non architecto incidunt corporis ex expedita magni exercitationem iste soluta veniam dolores.</span>
       
        <div className="buttons">
            <button classname="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
        <button className="more">
            <InfoOutlined />
            <span>Info</span>
        </button> </div>
        </div>
        </div>
       
     );
}
 
export default Featured;