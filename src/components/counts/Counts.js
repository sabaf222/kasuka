import './Counts.css'
import CountBox from './ContBox'
function Counts() {
const countBoxInfos=[
    
    {id:"1",icon:"fas fa-smile-beam",count:65,boldDesc:"مشتریان خوشحال" ,desc:"خوشحالیم که از معمار چیزی دریافت کنیم."},
    {id:"2",icon:"fas fa-journal-whills",count:85,boldDesc:"پروژها", desc:" برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد"},
    {id:"3",icon:"fas fa-clock",count:35,boldDesc:"سال ها تجربه", desc:" یا اجازه دهید به دنبال نوعی مزیت باشد"},
    {id:"4",icon:"fas fa-award",count:20,boldDesc:"جوایز", desc:" درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند"},


]

    return (
        <div className="counts-wrapper">

            <img src="img/counts-img.jpg" alt="" srcset="" />

            <div className="counts-content">
                <div className="count-content__title">

                <h3>شایسته ترین لذت را به هر حال ارائه می دهد</h3>
                <p>
                    خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است      
                </p>
                </div>
                <div className="count-box-wrapper">

                <CountBox {...countBoxInfos[0]}></CountBox>
                <CountBox {...countBoxInfos[1]}></CountBox>
                <CountBox {...countBoxInfos[2]}></CountBox>
                <CountBox {...countBoxInfos[3]}></CountBox>

                </div>


            </div>
        </div>

    )

}
export default Counts