import React from 'react'
import Header from '../header/Header'
import Company from './aboutCompany/company'
import Client from './clients/Client'
import Feature from './features/Feature'
import Services from './services/Services'
import Cta from './cta/Cta'
import Portfolio from './portfolio/portfolio'
import Counts from './counts/Counts'
import Team from './teams/Teams'
import Members from './members/Members'
import ConnectUs from './conectUs/ConnectUS'
import Footer from './footer/Footer'

export default function Home() {
    return (
        <>
          <Header/>
            <Company />
            <Client />
            <Feature/>
            <Services/>
            <Cta/>
            <Portfolio/>
            <Counts/>
            <Team/>
            <Members/>
            <ConnectUs/>
            <Footer/>




        </>
    )
}
