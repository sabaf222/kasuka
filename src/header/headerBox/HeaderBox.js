  
  import './HeaderBox.css'
  function Box(props){
    
    return(
        <div className="card-wrapper">
            <div className="card">
                <i class={props.icon}></i>
                <h3>
                    <a href="">{props.title}</a>
                </h3>
            </div>

        </div>

    )
  }


  export default Box