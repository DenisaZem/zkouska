import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import './Sounds.css';
// Potřeba importovat ikony --> npm install react-icons

const Sounds = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 5;
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 5;
  };

  return (
    <div className="container">
      <h1>Sounds</h1>
      <audio ref={audioRef} src="/sound/Calm.mp3" />
      <div className="controls">
        <img
          className={`obrazek ${isPlaying ? 'playing' : ''}`}
          src="https://media.gettyimages.com/id/1152829238/vector/mindfulness-meditation-and-yoga-background-in-pastel-vintage-colors-with-women-sit-with.jpg?b=1&s=1024x1024&w=gi&k=20&c=_zYSpX6lWyNwsGOtaiDC49YePFSKHot86Z4Ac0mgwwc="
          alt="obrazek"
        />
        <div className="playButtons">
          <button onClick={handleBackward} className="control-button backward">
            <FaBackward />
          </button>
          <button
            onClick={togglePlayPause}
            className="control-button play-pause"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleForward} className="control-button forward">
            <FaForward />
          </button>
        </div>
      </div>

      <audio ref={audioRef} src="/sound/Calm.mp3" />
      <div className="controls">
        <img
          className={`obrazek ${isPlaying ? 'playing' : ''}`}
          src="https://cdn.dribbble.com/users/176039/screenshots/5500538/media/e2b1dd0c440b3fdba253d7d03e0e0874.gif"
          alt="obrazek"
        />
        <div className="playButtons">
          <button onClick={handleBackward} className="control-button backward">
            <FaBackward />
          </button>
          <button
            onClick={togglePlayPause}
            className="control-button play-pause"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleForward} className="control-button forward">
            <FaForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sounds;
