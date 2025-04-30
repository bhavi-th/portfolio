import "./Contact.css";

export default function Contact() {
    return (
        <section id="contact" className="Contact">
            <p className="fade-elements">Let’s connect and transform ideas into something extraordinary!</p>
            <form className="fade-elements">
                <span>Contact Me</span>
                <input name="name" placeholder="Your Name" required />
                <input name="email" placeholder="Your Email" required />
                <textarea name="message" cols="50" rows="8" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
