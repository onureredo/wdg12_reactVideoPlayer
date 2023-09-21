/* eslint-disable react/prop-types */
const VideoPlayerSimple = ({ src }) => {
  return (
    <div className='sm:h-full h-96 bg-black overflow-hidden rounded-xl'>
      <video
        className='w-full sm:h-full h-96 bg-black rounded-xl'
        src={src}
        controls
      ></video>
    </div>
  );
};

export default VideoPlayerSimple;
