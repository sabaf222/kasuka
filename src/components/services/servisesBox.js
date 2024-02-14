import './Services.css'
function ServicesBox({icon,title,desc,}) {
    return (
        <div className="services-box">
            <div className="icon">
                <i className={icon} ></i>
            </div>
            <h4>
                <a href=""> {title}</a>
            </h4>
        

            <p>{desc}</p>


        </div>
    )
}
export default ServicesBox