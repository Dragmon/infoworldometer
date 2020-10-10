import React from 'react';
import CardCountry from '../CardCountry';
import data from '../../data/dataCountries.json';
import styled from 'styled-components';

const GridCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 250px;
  grid-gap: 8px;
  margin: 0 5%;
`;

const index = (valueFilter) => {
  const infoCountrys = data;
  console.log('infoCountrys', infoCountrys);
  console.log('valueFilter', valueFilter.value);
  const dataFilter = valueFilter.value;

  return (
    <>
      {dataFilter ? (
        <GridCards>
          {infoCountrys
            .filter((infoCountrys) =>
              infoCountrys.Country.startsWith(dataFilter)
            )
            .map((data) => (
              <CardCountry key={data.id} dataCountry={data} />
            ))}
        </GridCards>
      ) : (
        <GridCards>
          {infoCountrys.map((data) => (
            <CardCountry key={data.id} dataCountry={data} />
          ))}
        </GridCards>
      )}
    </>
  );
};

export default index;
