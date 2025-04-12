import "./Projects.css"
import Card from "./Card.js"

export default function Projects() {
    return (
        <section id="projects" className="Projects">
            <fieldset>
                <legend>
                    Projects
                </legend>
                <Card header="Tars" desc="Tars is an voice ai assistant based on the tars robot from the movie interstellar" />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </fieldset>
        </section>
    )
}
