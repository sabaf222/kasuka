import './Features.css'
function Box(props){
    
    return(
        <div className="icon-box">
            <i class={props.icon}></i>
            <span>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            </span>
            
        </div>
    )
}
export default Box