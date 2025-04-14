import "./About.css";
import profile from "../assets/bhavi-th.png";

export default function About() {
    return (
        <section id="about" className="About">
            <fieldset>
                <legend>My Profile</legend>
                <div>
                    <span className="invert-color">
                        Name
                    </span>
                    <br />
                    Bhavith.S
                </div>
                <div>
                    <span className="invert-color">
                        Email
                    </span>
                    <br />
                    bhaviths15@gmail.com
                </div>
                <div>
                    <span className="invert-color">
                        Location
                    </span>
                    <br />
                    Bengaluru, Karnataka, India
                </div>
                <div>
                    <span className="invert-color">
                        Education
                    </span>
                    <br />
                    BMS Institution of Technology and Management
                </div>
                <div>
                    <span className="invert-color">
                        Department
                    </span>
                    <br />
                    CSE
                </div>
                <div>
                    <span className="invert-color">
                        Languages
                    </span>
                    <br />
                    Kannada, English
                </div>
            </fieldset>
            <img className="about-image" alt="My Profile" src={profile} />
            <p id="intro">
                Hi there! I'm Bhavith S,
                a tech enthusiast and web developer who enjoys creating efficient and user-friendly digital experiences.
                With skills in HTML, CSS, JavaScript, and a growing interest in React.js,
                I’m constantly exploring new ways to bring ideas to life on the web.
            </p>
        </section>
    )
}
