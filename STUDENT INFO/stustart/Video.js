import React from "react";

const Video = () => {
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", width: "100vw", overflow: "hidden" }}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/yFaouO1CKfY?autoplay=1&controls=0&modestbranding=1&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0 }}
      ></iframe>
    </div>
  );
};

export default Video;
