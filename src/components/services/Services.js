import './Services.css'
import ServicesBox from './servisesBox'


function Services() {

    const boxOnfos=[
        {id:1,icon:"fab fa-dribbble",title:'لورم اپیسوم',desc:"برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"},
        {id:2,icon:"fa fa-file",title:"اما همانطور که مشاهده می کنید",desc:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
        {id:3,icon:"fa fa-tachometer",title:"درد های بزرگ",desc:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
        {id:4,icon:"fa fa-circle",title:"هیچکس دیگر",desc:"اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم"},
        {id:5,icon:"fas fa-sliders",title:"لولا را پاک کنید",desc:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
        {id:6,icon:"fa fa-archive",title:"دیو دان",desc:"روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد"}

    ]
    return (
        
        <div className="services-wrapper">
            <div className="section-title">
                <h2 className="title">خدمات</h2>
                <p className="subtitle">خدمات ما را بررسی کنید</p>
                <div className="services-box-wrapper">
                        <ServicesBox {...boxOnfos[0]}> </ServicesBox>
                        <ServicesBox  {...boxOnfos[1]}></ServicesBox>
                        <ServicesBox {...boxOnfos[2]}></ServicesBox>
                        <ServicesBox {...boxOnfos[3]}></ServicesBox>
                        <ServicesBox {...boxOnfos[4]}></ServicesBox>
                        <ServicesBox {...boxOnfos[5]}></ServicesBox>


                </div>

            </div>
        </div>
    )
}
export default Services