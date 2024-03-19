import './Navbar.css'
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="">
                    <img src="img/logo.png" alt="logo" />
                </a>

                <h1>
                    <a href="">
                        kasuka
                    </a>
                </h1>
            </div>
            <ul className="navbar__list">
                <li className="navbar__list-item"><NavLink  to='/'  id="navbar__link active">خانه</NavLink></li>
                <li className="navbar__list-item"><NavLink className={(link)=>link.isActive ?'active':''} to='/about' id="navbar__link">درباره ی ما</NavLink></li>
                <l className="navbar__list-item" i><NavLink to='/services'  id="navbar__link">خدمات</NavLink></l>
                <li className="navbar__list-item"><NavLink to='/sample'  id="navbar__link">نمونه کار</NavLink></li>
                <li className="navbar__list-item"><NavLink to='team'  id="navbar__link">تیم</NavLink></li>
                <li className="navbar__list-item">
                <a href="" id="navbar__link">لیست کشویی
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="subtitle-list">
                <li><a href="" className="subtitle-link">لیست کشویی 1</a></li>
                <li><a href="" className="subtitle-link">لیست کشویی 1</a></li>
                <li><a href="" className="subtitle-link">لیست کشویی 1</a></li>
                <li><a href="" className="subtitle-link">لیست کشویی 1</a></li>
                </ul>
                </li>
                <li className="navbar__list-item"><NavLink to='/contact'  className="navbar__link">تماس با ما</NavLink></li>
            </ul>

            <a href="" className="navbar__start-btn">شروع</a>


        </nav>
    )
}
export default Navbar
