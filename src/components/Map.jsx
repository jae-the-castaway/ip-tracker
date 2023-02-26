import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import { Icon } from "leaflet";

export default function Map({ user, loading, center }) {
  const icon = new Icon({
    iconUrl: "/icon-location.svg",
    iconAnchor: [12, 40],
  });

  function LocationMarker() {
    const map = useMapEvents({});
    map.flyTo(center, map.getZoom());
  }

  return (
    <MyMap center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={icon} position={center}>
        <Popup>{user.ip}</Popup>
      </Marker>
      <LocationMarker />
    </MyMap>
  );
}

const MyMap = styled(MapContainer)`
  font-size: 16px;
  font-weight: bold;

  .leaflet-popup {
    padding-bottom: 35px;
    padding-left: 65px;
  }

  p {
    font-size: 16px;
    font-weight: normal;
  }
  /*
    Any dynamic styling that will change the dynamically generated classname will remove the leaflet classnames from the container.
  */
  position: relative;
  height: 700px;
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  transform: translateY(-220px);
  z-index: 1;

  @media (min-width: 700px) {
    transform: translateY(-90px);
  }
`;
