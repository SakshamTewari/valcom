import { useSelector } from 'react-redux';

const Label = ({ fontSize, text }) => {
  return (
    <p className='map_page_card_label' style={{ fontSize }}>
      {text}
    </p>
  );
};

const UserInfoCard = (username, userLocation, socketId) => {
  const myLocation = useSelector((state) => state.map.myLocation);
  return (
    <div className='map_page_card_container'>
      <Label text={username} fontSize='16px' />
      <Label text={'24km'} fontSize='14px' />
    </div>
  );
};

export default UserInfoCard;
