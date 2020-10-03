import React from 'react';
import CardCountry from '../CardCountry';
import data from '../../data/dataCountries.json';

const index = () => {
  const infoCountrys = data;
  console.log('infoCountrys', infoCountrys);
  return (
    <section>
      <h1>Cards</h1>
      {infoCountrys.map((data) => (
        <CardCountry key={data.id} dataCountry={data} />
      ))}
    </section>
  );
};

export default index;
