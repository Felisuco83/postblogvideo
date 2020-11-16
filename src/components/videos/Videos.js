import React, { Component } from "react";
import ReactPlayer from "react-player";
import $ from "jquery";

export default class Videos extends Component {
  playEvent() {
    $("#acciones").html("Veo que tienes buen gusto, metalero");
  }
  pauseEvent() {
    $("#acciones").html("Pausando Matrix");
  }
  render() {
    return (
      <React.Fragment>
        <div className="container d-flex justify-content-center align-items-center mt-3">
          <div scope="row">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=wsrvmNtWU4E"
              loop
              controls
              onPlay={this.playEvent}
            />
            <ReactPlayer
              url="https://www.facebook.com/Keepitfmetal/videos/728335404432252"
              loop
              controls
            />
          </div>
          <div scope="row">
            <ReactPlayer
              url={[
                "https://www.youtube.com/watch?v=a8NKkco7qQM",
                "https://www.youtube.com/watch?v=Udh3Awr8y7I",
                "https://www.youtube.com/watch?v=ZmTV3GCQDiE",
                "https://www.youtube.com/watch?v=ZmTV3GCQDiE",
              ]}
              playing
              loop
              controls
              volume="0.4"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=1pAocN8K428"
              loop
              controls
              onPause={this.pauseEvent}
            />
          </div>
        </div>
        <div className="mt-3">
          <h2 id="acciones"></h2>
        </div>
      </React.Fragment>
    );
  }
}
