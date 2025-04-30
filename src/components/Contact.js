import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send email.");
        }
    };

    return (
        <section id="contact" className="Contact">
            <p className="fade-elements">Let’s connect and transform ideas into something extraordinary!</p>
            <form className="fade-elements" onSubmit={sendEmail}>
                <span>Contact Me</span>
                <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" cols="50" rows="8" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
