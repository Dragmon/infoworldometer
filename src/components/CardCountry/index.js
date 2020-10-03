import React from 'react';

const index = (data) => {
  console.log('data card', data);
  return (
    <div>
      <div>
        <h3>{data.dataCountry.Country}</h3>
      </div>
      <div>
        <p>Population: {data.dataCountry.Population}</p>
        <p>Yearly change: {data.dataCountry.Yearly_change}</p>
        <p>Net Change: {data.dataCountry.Net_Change}</p>
        <p>Density (P/km²): {data.dataCountry.Density_pkm2}</p>
        <p>Land Area (km²): {data.dataCountry.Land_Area_km2}</p>
      </div>
    </div>
  );
};

export default index;
