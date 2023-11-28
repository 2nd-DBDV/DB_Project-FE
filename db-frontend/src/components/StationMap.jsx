import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const { naver } = window;

    const 위도 = 37.6194277;
    const 경도 = 127.0598200;

    const location = new naver.maps.LatLng(위도, 경도);

    const mapOptions = {
      center: location,
      zoom: 17,
    };

    const map = new naver.maps.Map('map', mapOptions);

    const marker = new naver.maps.Marker({
      map,
      position: location,
    });
  }, []);

  return <div id="map" style={{ width: '700px', height: '700px' }} />;
};

export default MapComponent;
