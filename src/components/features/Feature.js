import './Features.css'
import Box from './Box'
import {useState} from 'react'

function Feature() {
    const [FeatureBox,setFeatureBox]=useState([
        {id:1 , icon:"fas fa-receipt " ,title:"تبلیغ سخنی است", desc:"نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"},
       
       {id:2,icon:"fa fa-cube " ,title:"کدام یک از اینهاست", desc:"کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"},
       {id:3,icon:"fas fa-images " ,title:"یا کور شده است" ,desc:"یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"}
       ,
       {id:4,icon:"fas fa-shield ", title:"حقیقت مبارک" ,desc:"آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"}
       
       
       
    ])
    return (

        <div className="features-wrapper">
            <img src="img/feat.jpg" alt="" srcset="" />
            <div className="icon-box-wrapper">
                {FeatureBox.map(box=>(

                <Box  {...box}></Box>
                ))}
               



            </div>
        </div>
    )
}
export default Feature