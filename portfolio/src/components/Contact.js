import React, { useState } from 'react';
import resume from '../assets/abbeyperiniresume.pdf';

function Contact() {
    const [message, setMessage] = useState({});

    const encode = (data) => {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...message})
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault();
    }

    return (
        <aside className="container_contact">
            <h1 className="section_title">Contact</h1>
            <div className="subContact">
                <p className="subContact_text">Download my <a href={resume} download="AbbeyPeriniResume">resume</a>, visit my <a href="https://abbeyperini.github.io/">personal site</a>,
                connect with me on <a href="https://twitter.com/AbbeyPerini">Twitter</a> or <a href="https://www.linkedin.com/in/abigail-perini/">LinkedIn</a>, or fill out the form below to send me an email!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <p>
                        <label>
                            Your Name: <input type="text" name="name" onChange={handleChange} required />   
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email: <input type="email" name="email" onChange={handleChange} required></input>
                        </label>
                    </p>
                    <p>
                        <label className="message">
                            Message: <textarea name="message" onChange={handleChange} className="message_input" required/>
                        </label>
                    </p>
                    <p>
                        <button type="submit" className="contact_button">Send</button>
                    </p>
                </form>
            </div>
        </aside>
    )
}

export default Contact;