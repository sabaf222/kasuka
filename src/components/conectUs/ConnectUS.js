import './ConnectUS.css'
import '../services/Services.css'
import Address from './Address'
import { useState } from 'react'

function ConnectUs() {
    const [addressInfos, setAddressInfos] = useState([
        { id: 1, icon: "fas fa-location", title: "مکان :", subtitle: "تهران خیابان آزادی" },
        { id: 2, icon: "fa fa-envelope", title: "ایمیل :", subtitle: "info@example.com" },
        { id: 3, icon: "fa fa-phone", title: "شماره تماس :", subtitle: "012345667" },

    ])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [msg, setMessage] = useState('')
    // const [msgID,setMsgID]=useState('')

//
    const sendMessageHandler =async (event) => {
        event.preventDefault()
        
        console.log('submit');
        let newMessage = {
            name,
            email,
            title,
            msg
        }
      await  fetch(`https://kasuka-17a9e-default-rtdb.firebaseio.com/commants.json`, {
            method: 'POST',
           
            body:JSON.stringify(newMessage)
        })
                       
    }

 

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
                            {addressInfos.map(infos => (

                                <Address {...infos}></Address>
                            ))}

                        </div>
                        <form className="form" onSubmit={sendMessageHandler}>
                            <div className="">

                                <input type="text" placeholder='نام' value={name} onChange={(event)=>setName(event.target.value)} />
                                <input type="email" placeholder='ایمیل' value={email} onChange={(event)=>setEmail(event.target.value)} />
                            </div>
                            <input type="text" placeholder='عنوان' value={title} onChange={(event=>setTitle(event.target.value))} />
                            <textarea name="" placeholder='پیام' id="" value={msg} onChange={event=>setMessage(event.target.value)} ></textarea>
                            <button >ارسال  پیام</button>
                            
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )

}
export default ConnectUs