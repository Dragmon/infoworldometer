import React, { useState } from 'react';
import ListCountries from './components/ListCountries';
import dataAlphabet from './data/alphabet.json';
import styled from 'styled-components';

const TitleSection = styled.section`
  width: 100;
  text-align: center;
  margin: 2em 0;
`;

const FilterSection = styled.section`
  width: 100%;
  text-align: center;
  margin: 1em 0;
`;

const FilterButton = styled.button`
  font-size: 1rem;
  margin: 2px;
`;

function App() {
  const [valueFilter, updateFilter] = useState('');
  console.log('dataAlphabet', dataAlphabet);
  return (
    <div className='App'>
      <TitleSection>
        <h1>Countries in the world by population (2020)</h1>
      </TitleSection>
      <FilterSection>
        {dataAlphabet.map((data) => (
          <FilterButton key={data.id} onClick={() => updateFilter(data.letter)}>
            {data.letter}
          </FilterButton>
        ))}
        <FilterButton onClick={() => updateFilter('')}> All </FilterButton>
      </FilterSection>
      <ListCountries value={valueFilter} />
    </div>
  );
}

export default App;
