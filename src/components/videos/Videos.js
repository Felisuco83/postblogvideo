import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Videos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center align-items-center">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=wsrvmNtWU4E"
            playing
            loop
            controls
            playIcon="./../../assets/images/play_icon.png"
          />
          <ReactPlayer
            url="https://www.facebook.com/Keepitfmetal/videos/728335404432252"
            loop
            controls
            playIcon="./../../assets/images/play_icon.png"
          />
        </div>
      </React.Fragment>
    );
  }
}
// https://www.youtube.com/watch?v=wsrvmNtWU4E

//https://www.facebook.com/Keepitfmetal/videos/728335404432252
