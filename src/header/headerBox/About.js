import React from 'react'
import '../../components/footer/Footer.css'
function About() {
    return (
        <div className="footer-Wrapper">
            <div className="footer-top">
                <div className="footer-top__infos">
                    <h3>
                        <img src="img/logo.png" alt="" srcset="" />
                        <p>kasuks</p>
                    </h3>
                    <ul>
                        <li>تهران خیابان آزادی</li>
                        <li>
                            <strong>تلفن :</strong>
                            09035665915
                        </li>
                        <li>
                            <strong>ایمیل :</strong>
                            info@example.com
                        </li>
                    </ul>
                    <div className="social-media">
                        <a href="">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fab fa-google-plus" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

            <div class="links">
                <h4>لینک های مفید</h4>
                <ul>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                        <a href="#">درباره ی ما</a></li>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>

                        <a href="#">خدمات</a>
                    </li>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>

                        <a href="#">خانه</a>
                    </li>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>

                        <a href="#">شرایط استفاده از خدمات</a>
                    </li>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>

                        <a href="#">سیاست حفظ حریم خصوصی</a>
                    </li>
                </ul>
            </div>
            <div class="links">
                <h4>خدمات ما</h4>
                <ul>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                        <a href="#">طراحی سایت</a></li>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>

                        <a href="#">توسعه وب</a>
                    </li>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>

                        <a href="#">مدیریت تولید</a>
                    </li>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>

                        <a href="#">بازاریابی</a>
                    </li>
                    <li>
                        <i class="fa fa-angle-left" aria-hidden="true"></i>

                        <a href="#">طراحی گرافیک</a>
                    </li>
                </ul>
            </div>
            <div className="links">
                <h4>خبرنامه ما</h4>
                <p>
                با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود
                </p>
                <form action="">
                    <input type="text"  id='text'/>
                    <input id='submit' type="submit" value="دنبال کردن" />
                </form>
            </div>
            </div>
           
        </div>
    )
}

export default About