/* eslint-disable react/prop-types */
const Sidebar = ({ videos, onSelectVideo }) => {
  return (
    <div className='flex overflow-x-auto mt-6 space-x-4'>
      {videos.map((video) => (
        <div
          key={video.sources}
          onClick={() => onSelectVideo(video)}
          className='cursor-pointer'
        >
          <img
            src={video.thumb}
            alt={video.title}
            className='w-32 h-18 object-cover rounded'
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
