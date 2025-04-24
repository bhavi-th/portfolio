import "./Contact.css"

export default function Contact() {
    return (
        <section id="contact" className="Contact">
            <p className="fade-elements">
                Let’s connect and transform ideas into something extraordinary!
                Whether you have questions, need support,
                or just want to share your vision,
                together we can make it a reality.
            </p>
            <form className="fade-elements">
                <span>Contact Me</span>
                <input placeholder="Your Name" />
                <input placeholder="Your Email" />
                <textarea cols="50" rows="8" placeholder="Your Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
