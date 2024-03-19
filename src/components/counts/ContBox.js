import './Counts.css'
function CountBox(props){
    return(
      
            <div className="count-box">

                <i class={props.icon}></i>
                <span className='count'>
                   {props.count}

                </span>
                <p><strong>{props.boldDesc}</strong>{props.desc}</p>

            </div>
       
    )
}
export default CountBox