import './Navbar.css'
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
                <li className="navbar__list-item"><a href="" className="navbar__link active">خانه</a></li>
                <li className="navbar__list-item"><a href="" className="navbar__link">درباره ی ما</a></li>
                <l className="navbar__list-item" i><a href="" className="navbar__link">خدمات</a></l>
                <li className="navbar__list-item"><a href="" className="navbar__link">نمونه کار</a></li>
                <li className="navbar__list-item"><a href="" className="navbar__link">تیم</a></li>
                <li className="navbar__list-item">
                <a href="" className="navbar__link">لیست کشویی
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="subtitle-list">
                <li><a href="" className="subtitle-link">لیست کشویی 1</a></li>
                <li><a href="" className="subtitle-link">لیست کشویی 1</a></li>
                <li><a href="" className="subtitle-link">لیست کشویی 1</a></li>
                <li><a href="" className="subtitle-link">لیست کشویی 1</a></li>
                </ul>
                </li>
                <li className="navbar__list-item"><a href="" className="navbar__link">تماس با ما</a></li>
            </ul>

            <a href="" className="navbar__start-btn">شروع</a>


        </nav>
    )
}
export default Navbar