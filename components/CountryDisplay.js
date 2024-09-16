'use client'

import { useState, useEffect, useMemo } from 'react';

//using this font for my data
import { Balthazar } from 'next/font/google'
const balthazar = Balthazar({subsets: ["latin"], weight: ['400']})


//this is the page where the list of countries is read from an api and then displayed with a filter if it is searched for

// on page load I will have 2 variables which I am tracking in the form of state {const countries and filter} countries is filled on page load by the api
// the country state  is turned into json format and then into array from object which is then called countryArray
//country array is then mapped out and filtered using the filter state, if the state is empty it will just show all elements without a filter if the filter has values it will filter by the cpital

export default function CountryDisplay() {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
        const json = await response.json();
        setCountries(json.data);
      }
      fetchData();
    }, []);


    //function to convert the country in the form of json.data into an array
    function convertToArray(obj){
      return Object.keys(obj).map(key =>({
        key,
        ...obj[key],
      }))
    }
    const countryArray  = convertToArray(countries)


    return(
<div>
  <div className='p-2'>
  <input value={filter} className='text-indigo-400 p-2 border border-solid' placeholder='Filter By Capital!' onChange={(e) =>{
  setFilter(e.target.value)
}}/>

  </div>
          <ul className='grid grid-cols-4 gap-2 text-center'>            
              {countryArray.filter((item) =>{
                return filter.toLowerCase() === ""
                ? item.capital
                : item.capital.toLowerCase().includes(filter.toLowerCase())
              }).map(item => {
                return(  
                  <li key={item.key} className={'p-4 border border-solid border-indigo-300 bg-slate-100 ' + balthazar.className}>
                    <div  >
                    <p>Country : {item.name}</p>
                    <p>Capital : {item.capital}</p>
                    </div>            
                  </li>
                )         
              })}
              
            </ul>
            </div>      
    ) 
}
