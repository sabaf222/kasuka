import './ConnectUS.css'
import '../services/Services.css'
import Address from './Address'
function ConnectUs() {
    const addressInfos = [
        { id: 1, icon: "fas fa-location", title: "مکان :", subtitle: "تهران خیابان آزادی" },
        { id: 2, icon: "fa fa-envelope", title: "ایمیل :", subtitle: "info@example.com" },
        { id: 3, icon: "fa fa-phone", title: "شماره تماس :", subtitle: "012345667" },

    ]
    return (
        <div className="conectUs-wrapper">


            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div class="section-title">
                    <h2 className='title'>تماس با ما</h2>
                    <p className='subtitle'>با ما تماس بگیرید</p>
                </div>
                <div >

                    <iframe className='img' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>

                    <div className="row">
                        <div className="adderss">
                            <Address {...addressInfos[0]}></Address>
                            <Address {...addressInfos[1]}></Address>
                            <Address {...addressInfos[2]}></Address>

                        </div>
                        <div className="form">
                            <div className="">

                            <input type="text" placeholder='نام' />
                            <input type="email" placeholder='ایمیل' />
                            </div>
                            <input type="text" placeholder='عنوان' />
                            <textarea name="" placeholder='پیام' id="" ></textarea>
                            <button>ارسال  پیام</button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}
export default ConnectUs