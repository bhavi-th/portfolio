import "./Footer.css";
import Github from "../assets/icon/github.svg";
import LinkedIn from "../assets/icon/linkedin.svg";
import Mail from "../assets/icon/mail.svg";
import Whatsapp from "../assets/icon/whatsapp.svg";
import GithubInverted from "../assets/icon/github-inverted.svg";
import LinkedInInverted from "../assets/icon/linkedin-inverted.svg";
import MailInverted from "../assets/icon/mail-inverted.svg";
import WhatsappInverted from "../assets/icon/whatsapp-inverted.svg";

function Footer({ theme }) {
    return (
        <footer>
            <div>
                <span id="name">Bhavith.S</span>
                <ul id="social-links" className="fade-elements">
                    <li><a href="https://github.com/bhavi-th" target="_blank" rel="noreferrer"><img src={theme ? GithubInverted : Github} alt="social links" /></a></li>
                    <li><a href="https://www.linkedin.com/in/bhavith-s/" target="_blank" rel="noreferrer"><img src={theme ? LinkedInInverted : LinkedIn} alt="social links" /></a></li>
                    <li><a href="mailto:bhaviths20@gmail.com" target="_blank" rel="noreferrer"><img src={theme ? MailInverted : Mail} alt="social links" /></a></li>
                    <li><a href="https://wa.me/919901949627" target="_blank" rel="noreferrer"><img src={theme ? WhatsappInverted : Whatsapp} alt="social links" /></a></li>
                </ul>
            </div>
            <p>
                &copy; 2025 Bhavith. All rights reserved
            </p>
        </footer>
    )
}

export default Footer;