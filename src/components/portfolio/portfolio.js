import './Portfolio.css'
import '../services/Services.css'
import PortfolioBox from './portfolioBox'
import { useState } from 'react'

  


import React from 'react'
 function Portfolio() {
    const [portfolioInfos,setPortfolio]=useState(
       [
        {id:1,img:"img/portfolio/portfolio-1.jpg"},
        {id:2,img:"img/portfolio/portfolio-2.jpg"},
        {id:3,img:"img/portfolio/portfolio-3.jpg"},
        {id:4,img:"img/portfolio/portfolio-4.jpg"},
        {id:5,img:"img/portfolio/portfolio-5.jpg"},
        {id:6,img:"img/portfolio/portfolio-6.jpg"},
        {id:7,img:"img/portfolio/portfolio-7.jpg"},
        {id:8,img:"img/portfolio/portfolio-8.jpg"},
        {id:9,img:"img/portfolio/portfolio-9.jpg"},
        
        


       ]
    )
  return (
    <div className='portfolio-wrapper' >
    <div className="section-title">

        <h2 className='title'>نمونه کارها</h2>
        <p className='subtitle'>نمونه کارها را بررسی کنید</p>
    </div>
    <div className="tab-bar">
        <ul >
            <li className='show' >همه</li>
            <li>برنامه</li>
            <li>محصول </li>
            <li>اینترنت</li>

        </ul>
    </div>
    <div className="profolio-item">
    {portfolioInfos.map(info=>(

    <PortfolioBox {...info}></PortfolioBox>
    ))}
   
    </div>



   
</div>
  )
}
export default Portfolio