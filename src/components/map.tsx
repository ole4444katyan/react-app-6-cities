import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const/const';

import type { City, Location } from '../types/types';

type CityProps = {
  city: City;
  locations: Location[];
  selectedPoint: Location | null;
  place?: 'cities' | 'property';
};

const Map = ({ city, locations, selectedPoint, place = 'cities' }: CityProps) => {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        const marker = new Marker(
          {
            lat: location.latitude,
            lng: location.longitude,
          });

        // eslint-disable-next-line no-console
        console.log(map);

        marker
          .setIcon((location.latitude === selectedPoint?.latitude && location.longitude === selectedPoint?.longitude) ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, locations]);

  return (
    <section className={`${place}__map map`} ref={mapRef}></section>
  );
};

export default Map;
