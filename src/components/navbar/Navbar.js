import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import "./Navbar.scss"




const Navbar = () => {
    const[isScrolled,setIsScrolled] = useState(false);
    
    window.onscroll =() =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
        
    }
    
    return ( 
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Hot</span>
                    <span>Watchlist</span>
                </div>
                <div className="right">
                    <Search  className="icon"/>
                    <span>ABASS</span>
                    <Notifications className="icon"/>
                    <img src="https://i.pinimg.com/564x/38/22/76/3822761b2052fe9eee069d5bd9e0b4ab.jpg" />

                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;