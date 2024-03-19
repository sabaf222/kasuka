import './ConnectUS.css'
function Address(props){
    return(
        <div className="address">
            <i class={props.icon}></i>
            <div >

            <h4 >{props.title}</h4>
            <p>{props.subtitle}</p>
            </div>
            

        </div>
    )
}
export default Address