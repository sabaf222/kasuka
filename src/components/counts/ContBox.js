import './Counts.css'
function CountBox({icon,count,boldDesc,desc}){
    return(
      
            <div className="count-box">

                <i class={icon}></i>
                <span className='count'>
                   {count}

                </span>
                <p><strong>{boldDesc}</strong>{desc}</p>

            </div>
       
    )
}
export default CountBox