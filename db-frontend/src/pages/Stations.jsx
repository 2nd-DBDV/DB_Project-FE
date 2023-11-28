import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import MapComponent from '../components/StationMap';

const StationsContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stations = () => {
  return (
    <div>
      <Header />
      <StationsContainer>
        <MapComponent />
      </StationsContainer>
    </div>
  );
};

export default Stations;
