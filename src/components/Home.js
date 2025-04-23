import "./Home.css"
import Github from "../assets/icon/github.svg";
import LinkedIn from "../assets/icon/linkedin.svg";
import Mail from "../assets/icon/mail.svg";
import Whatsapp from "../assets/icon/whatsapp.svg";
import GithubInverted from "../assets/icon/github-inverted.svg";
import LinkedInInverted from "../assets/icon/linkedin-inverted.svg";
import MailInverted from "../assets/icon/mail-inverted.svg";
import WhatsappInverted from "../assets/icon/whatsapp-inverted.svg";

function Home({ themeInverted }) {
    return (
        <section id="home" className="Home">
            <span id="name">Bhavith S</span>
            <ul id="social-links">
                {console.log(themeInverted)}
                <li><a href="https://github.com/bhavi-th" target="_blank" rel="noreferrer"><img src={themeInverted ? GithubInverted : Github} alt="social links" height="45" /></a></li>
                <li><a href="https://www.linkedin.com/in/bhavith-s/" target="_blank" rel="noreferrer"><img src={themeInverted ? LinkedInInverted : LinkedIn} alt="social links" height="45" /></a></li>
                <li><a href="mailto:bhaviths20@gmail.com" target="_blank" rel="noreferrer"><img src={themeInverted ? MailInverted : Mail} alt="social links" height="45" /></a></li>
                <li><a href="https://wa.me/919901949627" target="_blank" rel="noreferrer"><img src={themeInverted ? WhatsappInverted : Whatsapp} alt="social links" height="45" /></a></li>
            </ul>
            <p>
                Welcome! I’m passionate about bringing ideas to life through coding,
                crafting practical solutions that make a difference.
                For me, technology is a tool to simplify tasks, solve problems, and create systems that work seamlessly.
                With a focus on clarity and purpose, I’m dedicated to developing solutions that are not just functional but meaningful.
                Let’s explore how technology can make things better, one line of code at a time
            </p>
            <button>View my work</button>
        </section>
    )
}

export default Home;