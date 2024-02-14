import './Members.css'
function MemberBox({img,name,job}){
    return(
        <div className="member-box">
            <img src={img} alt="" srcset="" />
            <div class="social">
                  <a href=""><i class="fab fa-twitter    "></i></a>
                  <a href=""><i class="fab fa-facebook" aria-hidden="true"></i></a>
                  <a href=""><i class="fab fa-instagram" aria-hidden="true"></i></a>
                  <a href=""><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                </div>
            <div className="member-infos">

            <h4>{name}</h4>
            <span>{job}</span>
            </div>

        </div>
    )
}
export default MemberBox
