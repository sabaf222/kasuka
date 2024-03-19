import './Members.css'
function MemberBox(props){
    return(
        <div className="member-box">
            <img src={props.img} alt="" srcset="" />
            <div class="social">
                  <a href=""><i class="fab fa-twitter    "></i></a>
                  <a href=""><i class="fab fa-facebook" aria-hidden="true"></i></a>
                  <a href=""><i class="fab fa-instagram" aria-hidden="true"></i></a>
                  <a href=""><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                </div>
            <div className="member-infos">

            <h4>{props.name}</h4>
            <span>{props.job}</span>
            </div>

        </div>
    )
}
export default MemberBox
