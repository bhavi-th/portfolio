import "./Card.css"

export default function Card(props) {
    return (
        <div className="Card">
            <img alt={props.alt} src={props.src} />
            <div>
                <span className="card-header">
                    {props.header}
                </span>
                <span className="card-desc">
                    {props.desc}
                </span>
            </div>
            <div>
                <a href={props.link}>Project </a>
            </div>
        </div>
    )
}
