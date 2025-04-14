import "./Card.css"

export default function Card(props) {
    return (
        <div className="Card">
            <img alt={props.alt} src={props.src} />
            <div className="project-details">
                <span className="card-header">
                    {props.header}
                </span>
                <span className="card-desc">
                    {props.desc}
                </span>
            </div>
            <div className="project-links">
                <a href={props.site}>Visit</a>
                <a href={props.source}>Code</a>
            </div>
        </div>
    )
}
