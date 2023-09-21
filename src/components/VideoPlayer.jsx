/* eslint-disable react/prop-types */
import {
  faPause,
  faPlay,
  faUpRightAndDownLeftFromCenter,
  faVolumeLow,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';

function VideoPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [lastVolume, setLastVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);

  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      setVolume(lastVolume);
      videoRef.current.volume = lastVolume;
    } else {
      setLastVolume(videoRef.current.volume);
      videoRef.current.muted = true;
      setVolume(0);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const getVolumeIcon = () => {
    if (!videoRef.current) return faVolumeUp;
    if (videoRef.current.muted || volume === 0) return faVolumeMute;
    if (volume < 0.5 && volume > 0) return faVolumeLow;

    return faVolumeUp;
  };

  return (
    <div
      className='relative h-full overflow-hidden rounded-xl'
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        className='w-full sm:h-full h-96 rounded-xl'
        ref={videoRef}
        src={src}
        onClick={togglePlay}
      ></video>
      <div
        className={`absolute inset-0 flex justify-center items-center ${
          isPlaying ? 'hidden' : ''
        } ${showControls ? '' : 'hidden'}`}
      >
        <button
          className='text-white bg-blue-500 p-4 rounded-full hover:opacity-80'
          onClick={togglePlay}
        >
          <FontAwesomeIcon icon={faPlay} size='2x' />
        </button>
      </div>
      <div
        className={`absolute bottom-2 left-5 flex space-x-3 ${
          showControls ? '' : 'hidden'
        }`}
      >
        <button className='text-white hover:opacity-80' onClick={togglePlay}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <input
          className='w-20 opacity-70 hover:opacity-100'
          type='range'
          min='0'
          max='1'
          step='0.1'
          value={volume}
          onChange={(e) => {
            const vol = parseFloat(e.target.value);
            setVolume(vol);
            videoRef.current.volume = vol;
            if (vol > 0) videoRef.current.muted = false;
          }}
        />
        <button
          className='text-white p-1 hover:bg-blue-500 hover:rounded-md'
          onClick={toggleMute}
        >
          <FontAwesomeIcon icon={getVolumeIcon()} />
        </button>
        <button
          className='text-white p-1 hover:bg-blue-500 hover:rounded-md'
          onClick={toggleFullScreen}
        >
          <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
