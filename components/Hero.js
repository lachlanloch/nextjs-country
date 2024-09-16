import React from 'react'
import CountryDisplay from './CountryDisplay'


//font for my data
import { Balthazar } from 'next/font/google'
const balthazar = Balthazar({subsets: ["latin"], weight: ['400']})


//component that is rendered out on the page.js aka the root directory
//this component has the title and then I render the list of countries and the filter in the CountryDisplay component
//have displayed in another component so I dont needlessly use 'use client'
export default function Hero() {
  return (
    <div>

      <h1 className={'text-center text-4xl ' + balthazar.className}>
        List of Countries and their Capitals
      </h1>
      
        <CountryDisplay/>
    </div>
  )
}
