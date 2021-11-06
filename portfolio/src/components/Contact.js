import React, { useState } from 'react';
import resume from '../assets/abbeyperiniresume.pdf';
import { ReactComponent as ExternalLink } from '../images/external-link.svg';
import { ReactComponent as Download } from '../images/download.svg';

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
        <section aria-label="Contact links and form" className="container_contact">
            <h1 className="section_title">Contact</h1>
            <div className="subContact">
                <p className="subContact_text">Download my <a aria-label="link to download Abbey's resume in PDF format" href={resume} download="AbbeyPeriniResume">resume<Download className="download-file" id="DownloadResumeContact" focusable="false"/></a>, connect with me on <a className="link-new-tab" aria-label="link to open Abbey's Twitter profile in a new tab" href="https://twitter.com/AbbeyPerini" target="_blank" rel="noreferrer">Twitter<ExternalLink className="external-link" id="TwitterExternalLink" focusable="false"/></a> or <a className="link-new-tab" aria-label="link to open Abbey's LinkedIn profile in a new tab" href="https://www.linkedin.com/in/abigail-perini/" target="_blank" rel="noreferrer">LinkedIn<ExternalLink className="external-link" id="LinkedInExternalLink" focusable="false"/></a>, or fill out the form to send me an email!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <p>
                        <label className="contact_name">
                            Your Name: <input type="text" name="name" onChange={handleChange} required aria-required="true" autoComplete="on" />   
                        </label>
                    </p>
                    <p>
                        <label className="contact_email">
                            Your Email: <input type="email" name="email" onChange={handleChange} required aria-required="true" autoComplete="on"></input>
                        </label>
                    </p>
                    <p>
                        <label className="message">
                            Message: <textarea name="message" onChange={handleChange} className="message_input" required aria-required="true" autoComplete="on"/>
                        </label>
                    </p>
                    <p>
                        <button type="submit" className="contact_button">Send</button>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Contact;