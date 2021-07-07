import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import Nav from './components/Nav';

const endpoint = "https://restcountries.eu/rest/v2";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    async function iWantItAll() {
      const response = await fetch(`${endpoint}`);
      const data = await response.json();
      setCountries(data);
    }
    iWantItAll();
  }, [])

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newCountryList = countries.filter((country) => {
        return Object.values(country).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newCountryList);
    }
    else {
      setSearchResults(countries)
    };
  }
  return (
    <>
      <Header />
      <Nav country={searchTerm} searchKeyword={searchHandler} />
      <Cards countries={searchTerm.length < 1 ? countries : searchResults} country={searchTerm} searchKeyword={searchHandler} />
    </>
  );
}

export default App;
