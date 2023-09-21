/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { videos } from '../utils/videos';
import VideoPlayer from './components/VideoPlayer';
import VideoPlayerSimple from './components/VideoPlayerSimple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(
    videos[Math.floor(Math.random() * videos.length)]
  );
  // console.log(videos.length);

  return (
    <>
      <div className='h-screen p-6 flex items-center justify-center'>
        <div className='flex w-full max-w-screen-xl'>
          <div className='flex flex-1 flex-col items-start space-y-4'>
            <FontAwesomeIcon
              icon={faVideo}
              size='6x'
              className='text-red-500'
            />
            <h2 className='text-3xl text-blue-500 font-semibold'>
              WDG12 React Video Player
            </h2>
            <p className='text-gray-600 text-lg font-semibold w-80'>
              WBS Coding School Web & App Development Bootcamp
            </p>
            <a href='https://github.com' target='_blank' rel='noreferrer'>
              <button className='flex items-center p-2 space-x-2 text-white bg-blue-500 rounded-xl hover:opacity-80'>
                <FontAwesomeIcon icon={faGithub} />
                <span>View On GitHub</span>
              </button>
            </a>
          </div>
          <div className='flex flex-1 items-start'>
            {/* <VideoPlayerSimple src={selectedVideo.sources} /> */}
            <VideoPlayer src={selectedVideo.sources} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
