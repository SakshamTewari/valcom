import { useDispatch } from 'react-redux';
import markerLocation from '../../../public/map-marker.svg';
import { setCardChosenOption } from './mapSlice';

const Marker = (props) => {
  const { myself, socketId, username, coords } = props;
  const dispatch = useDispatch();

  const handleOptionChoose = () => {
    if (!myself) {
      dispatch(
        setCardChosenOption({
          socketId,
          username,
          coords,
        }),
      );
    }
  };
  return (
    <div className='map_page_marker_container' onClick={handleOptionChoose}>
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
