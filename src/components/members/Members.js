import './Members.css'
import '../services/Services.css'
import MemberBox from './MemberBox'

function Members(){
    const memberBoxInfos=[
        {id:"1", img:"./img/members/1.jpg", name:"والتر وایت",job:"مدیر ارشد اجرایی"},
        {id:"2", img:"./img/members/2.jpg", name:"سارا جنسون",job:"مدیر تولید"},
        {id:"3", img:"./img/members/3.jpg", name:"ویلیام اندرسون",job:"CTO"},
        {id:"4", img:"./img/members/4.jpg", name:"آماندا چپسون",job:"حسابدار"},

    ]
    return(
        <div className="members">
            <div className="section-title">
                <h2 className='title'>تیم</h2>
            <p className='subtitle'>تیم ما را بررسی کنید</p>
            <div className="members-box-wrapper">
                
                <MemberBox  {...memberBoxInfos[0]}></MemberBox>
                <MemberBox {...memberBoxInfos[1]}></MemberBox>
                <MemberBox {...memberBoxInfos[2]}></MemberBox>
                <MemberBox {...memberBoxInfos[3]}></MemberBox>
                



            </div>
            </div>

        </div>
    )
}
export default Members