import React from "react";
import "./Sidebar.css";
import { Link} from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";




function Sidebar() {
  return (
    
    <div className="sidebar">
      <div className="back">
      

      <div className="rgt">
        <header className ="naam">CAMPUS 🤝 CONNECT</header>

        
        
        
       
    
      <img src ="" alt=" weak network "/>
   

    
      <Link to ="/Lib">
          
      <MenuBookIcon className="sidebar_twitterIcon" />
      
    
  
      </Link>
      

<Link to ="Nav">
     <SidebarOption active Icon={HomeIcon} text="Home" />

      
     </Link>
  <Link to ="/Lib">
      <SidebarOption Icon={SearchIcon} text="Library" />
      </Link>

     <Link to="/Widgets">
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications of AKTU" />

      </Link>
      <Link to="Feed">
    <SidebarOption Icon={LibraryBooksIcon} text="POSTS" />
    </Link>
  
      <Link to="Pyqs">
      <SidebarOption Icon={BookmarkBorderIcon} text =" AKTU PYQs"  />
      </Link>
      <SidebarOption Icon={ListAltIcon} text="Lists" />

      
  
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />

      
      <SidebarOption Icon={MoreHorizIcon} text="More" />

    
      

      {/* Button -> Tweet */}
      <Link to ="Feed">
      <Button variant="outlined" className="sidebar__tweet" >
        ASK IN BANSAL
      </Button>
      </Link>
      </div>
      <div className="lft">
  
      </div>
     
      </div>
    </div>
  );
}

export default Sidebar;