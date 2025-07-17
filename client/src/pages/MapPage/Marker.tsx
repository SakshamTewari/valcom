import markerLocation from '../../../public/map-marker.svg';

const Marker = (props) => {
  const { myself, socketId, username, coords } = props;
  return (
    <div className='map_page_marker_container'>
      <img
        src={markerLocation}
        alt={username}
        className='mao_page_marker_img'
      />
      <p className='mao_page_marker_text'>{myself ? 'Me' : username}</p>
    </div>
  );
};

export default Marker;
