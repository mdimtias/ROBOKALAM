import React from 'react';
import ReactPlayer from 'react-player';

const InstructionalVideo = () => {
    return (
        <ReactPlayer
        url="https://www.youtube.com/watch?v=bXGhtjezJPY&pp=ygUHamFjayBtYQ%3D%3D"
        controls
        width="100%"
        height={450}
      />
    );
};

export default InstructionalVideo;