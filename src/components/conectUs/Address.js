import './ConnectUS.css'
function Address({icon,title,subtitle}){
    return(
        <div className="address">
            <i class={icon}></i>
            <div >

            <h4 >{title}</h4>
            <p>{subtitle}</p>
            </div>
            

        </div>
    )
}
export default Address