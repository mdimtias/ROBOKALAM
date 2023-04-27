import React from 'react';
import ReactPlayer from 'react-player';

function LiveStream() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <h2 className="text-xl font-bold mb-4">Live instructional video</h2>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=8b72iru1EdU&pp=ygUHamFjayBtYQ%3D%3D"
        controls
        width="100%"
        height={250}
      />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Live video of student</h2>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=b4zuLkZGM-Y&t=20s&pp=ygUHamFjayBtYQ%3D%3D"
        controls
        width="100%"
        height={250}
      />
      </div>
    </div>
  );
}


export default LiveStream;