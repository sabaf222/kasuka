import './Header.css';
import './navbar/Navbar.css';
import './headerBox/HeaderBox.css'
import Navbar from './navbar/NavBar'
import Box from './headerBox/HeaderBox';
function Header(){

    const headerBox=[
        {id:1, title:"متن نمایشی" ,icon:" fas fa-store"},
        {id:2, title:"نمودار کیفی" ,icon:" fas fa-chart-area" },
        {id:3,title:"نمونه کارها" ,icon:"fa fa-calendar"},
        {id:4, title:"اطلاعات ذخیره شده",icon:"fas fa-paint-brush" },
        {id:5 , title:"عملکردهای پایانی", icon:"fa fa-database" }
    ]
    return(
        <header>
            <div className="header-content">
                <Navbar></Navbar>
                <div className="header-main-content">
                    <h1>راه حل های دیجیتال با</h1>
                     <span >kasuka</span>
                     <h2>ما تیمی از بازاریان با استعداد دیجیتال هستیم</h2>
                     <div className="card-wrapper">

                     <Box {...headerBox[0]}></Box>
                     <Box {...headerBox[1]}></Box>
                     <Box {...headerBox[2]}></Box>
                     <Box {...headerBox[3]}></Box>
                     <Box {...headerBox[0]}></Box>
                     </div>
                </div>
            </div>
        </header>
        
    )

}
export default Header