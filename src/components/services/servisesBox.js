import './Services.css'
function ServicesBox(props) {
    return (
        <div className="services-box">
            <div className="icon">
                <i className={props.icon} ></i>
            </div>
            <h4>
                <a href=""> {props.title}</a>
            </h4>
        

            <p>{props.desc}</p>


        </div>
    )
}
export default ServicesBox