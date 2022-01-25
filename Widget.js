import React from "react";
import Nav from "./Nav";
import "./Widget.css";
import Footer from "./Footer"

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from     "react-twitter-embed";
import SchoolIcon from '@material-ui/icons/School';
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <Nav />
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer"> 
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1123176251408179200"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AKTU_Lucknow"
          options={{ height: 600 }}
        />

        <SchoolIcon
          url={"https://www.bitmerrut.edu.in/"}
          options={{ text: "#reactjs is awesome", via: "sr" }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Widgets;