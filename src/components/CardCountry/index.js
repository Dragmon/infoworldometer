import React from 'react';
import styled from 'styled-components';
import { colors } from '../Styles/variables';

const CardBox = styled.div`
  transform-style: preserve-3d;
  transition: all 1s linear;
  position: relative;
  &:hover {
    transform: rotateY(180deg);
  }
`;
const FrontCard = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    font-size: 1.7rem;
    text-align: center;
  }
  & img {
    height: 50%;
  }
`;
const BackCard = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  background-color: ${colors.secondary};
  color: ${colors.white};
  display: flex;
  align-items: center;
`;

const InsideBackCard = styled.div`
  padding: 0 20px;
  & p {
    font-size: 1.3rem;
    & strong {
      color: ${colors.tertiary};
    }
  }
`;

const index = (data) => {
  const urlImages = `https://flagcdn.com/${data.dataCountry.Code}.svg`;
  return (
    <CardBox>
      <FrontCard>
        <h3>{data.dataCountry.Country}</h3>
        {data.dataCountry.Code === '' ? (
          <h4> Flag not available </h4>
        ) : (
          <img src={urlImages} alt={data.dataCountry.Country} />
        )}
      </FrontCard>
      <BackCard>
        <InsideBackCard>
          <p>
            <strong>Population: </strong> {data.dataCountry.Population}
          </p>
          <p>
            <strong>Yearly change: </strong> {data.dataCountry.Yearly_change}
          </p>
          <p>
            <strong>Net Change: </strong> {data.dataCountry.Net_Change}
          </p>
          <p>
            <strong>Density (P/km²): </strong> {data.dataCountry.Density_pkm2}
          </p>
          <p>
            <strong>Land Area (km²): </strong> {data.dataCountry.Land_Area_km2}
          </p>
        </InsideBackCard>
      </BackCard>
    </CardBox>
  );
};

export default index;
