import './Map.css';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const myLocation = useSelector((state) => state.map.myLocation);
  const defaultMapProps = {
    center: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
    zoom: 11,
  };
  return (
    <div className='map_page_container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
