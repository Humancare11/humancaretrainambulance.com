import React, { useState } from 'react';
import './VideoPlayer.css';
import thumb1 from '../assets/thumb1.jpeg';
const videos = [
  {
    id: 1,
    title: 'Humancare world wide 1',
    src: 'https://www.youtube.com/embed/IW__ERSIOCU',
    thumbnail: thumb1,
  },
  {
    id: 2,
    title: 'Humancare world wide 2',
    src: 'https://www.youtube.com/embed/IW__ERSIOCU',
    thumbnail: thumb1,
  },
  {
    id: 3,
    title: 'Humancare world wide 3',
    src: 'https://www.youtube.com/embed/IW__ERSIOCU',
    thumbnail: thumb1,
  },
];


const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="video-container">
      <div className="video-player">
        <iframe
          key={currentVideo.id}
          src={currentVideo.src}
          title={currentVideo.title}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-playlist">
        <h3>Playlist</h3>
        {videos.map((video) => (
          <div
            key={video.id}
            className={`playlist-item ${video.id === currentVideo.id ? 'active' : ''}`}
            onClick={() => setCurrentVideo(video)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <div className="video-info">
              <p className="video-title">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
