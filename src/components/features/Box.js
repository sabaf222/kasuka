import './Features.css'
function Box({icon,title,desc}){
    return(
        <div className="icon-box">
            <i class={icon}></i>
            <span>
            <h4>{title}</h4>
            <p>{desc}</p>
            </span>
            
        </div>
    )
}
export default Box