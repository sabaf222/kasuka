  
  import './HeaderBox.css'
  function Box({icon,title}){
    
    return(
        <div className="card-wrapper">
            <div className="card">
                <i class={icon}></i>
                <h3>
                    <a href="">{title}</a>
                </h3>
            </div>

        </div>

    )
  }


  export default Box