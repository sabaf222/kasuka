import './Portfolio.css'
import '../services/Services.css'
import PortfolioBox from './portfolioBox'

  


import React from 'react'
 function Portfolio() {
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

    <PortfolioBox img="img/portfolio/portfolio-1.jpg"></PortfolioBox>
    <PortfolioBox  img="img/portfolio/portfolio-2.jpg"></PortfolioBox>
    <PortfolioBox img="img/portfolio/portfolio-3.jpg"></PortfolioBox>
    <PortfolioBox img="img/portfolio/portfolio-4.jpg"></PortfolioBox>
    <PortfolioBox img="img/portfolio/portfolio-5.jpg"></PortfolioBox>
    <PortfolioBox img="img/portfolio/portfolio-6.jpg"></PortfolioBox>
    <PortfolioBox img="img/portfolio/portfolio-7.jpg"></PortfolioBox>
    <PortfolioBox img="img/portfolio/portfolio-8.jpg"></PortfolioBox>
    <PortfolioBox img="img/portfolio/portfolio-9.jpg"></PortfolioBox>

    </div>



   
</div>
  )
}
export default Portfolio