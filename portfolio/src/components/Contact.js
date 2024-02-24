import React, { useState } from 'react';
import SingleWrapper from "./SingleWrapper";
import { ReactComponent as ExternalLink } from '../images/external-link.svg';
import TwitterLogo from '../images/Twitter.png';
import LinkedInLogo from '../images/Linked-logo.png';
import InstagramLogo from '../images/insta-icon.png';
import ThreadsLogo from '../images/threads-logo.png';
import TikTokLogo from '../images/tiktok-logo.png';
import YouTubeLogo from '../images/YouTube.png';
import { ReactComponent as DEVLogo } from '../images/devto.svg';
import HashnodeLogo from '../images/hashnode-icon.png';

function Contact({home}) {
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
      <SingleWrapper home={home}>
        {!home && <h1 className="offscreen">Abbey Perini's Contact Info</h1>}
        <section aria-label="Contact links and form" className="flex-container container_contact">
            <h2 className="section_title" id="Contact">Contact</h2>
            <div className="contact">
                <h3 className="contact_text">Connect with me here:</h3>
                <ul className="contact_list">
                  <li><a className="link-new-tab" aria-label="link to open Abbey's Twitter profile in a new tab" href="https://twitter.com/AbbeyPerini" target="_blank" rel="noreferrer">Twitter<ExternalLink className="external-link" id="TwitterExternalLink" focusable="false"/></a><img src={TwitterLogo} alt="" className="contact-logo"/></li>
                  <li><a className="link-new-tab" aria-label="link to open Abbey's LinkedIn profile in a new tab" href="https://www.linkedin.com/in/abbey-perini/" target="_blank" rel="noreferrer">LinkedIn<ExternalLink className="external-link" id="LinkedInExternalLink" focusable="false"/></a><img src={LinkedInLogo} alt="" className="contact-logo linked-in"/></li>
                  <li><a className="link-new-tab" aria-label="link to open Abbey's Instagram profile in a new tab" href="https://www.instagram.com/abbeyperinicodes/" target="_blank" rel="noreferrer">Instagram<ExternalLink className="external-link" id="InstagramExternalLink" focusable="false"/></a><img src={InstagramLogo} alt="" className="contact-logo instagram"/></li>
                  <li><a className="link-new-tab" aria-label="link to open Abbey's Threads profile in a new tab" href="https://www.threads.net/@abbeyperinicodes/" target="_blank" rel="noreferrer">Threads<ExternalLink className="external-link" id="ThreadsExternalLink" focusable="false"/></a><img src={ThreadsLogo} alt="" className="contact-logo threads"/></li>
                  <li><a className="link-new-tab" aria-label="link to open Abbey's TikTok profile in a new tab" href="https://www.tiktok.com/@abbeyperinicodes/" target="_blank" rel="noreferrer">TikTok<ExternalLink className="external-link" id="TikTokExternalLink" focusable="false"/></a><img src={TikTokLogo} alt="" className="contact-logo tiktok"/></li>
                  <li><a className="link-new-tab" aria-label="link to open Abbey's YouTube profile in a new tab" href="https://www.youtube.com/channel/UCJYky0mE6tqM9hMDsQAIrEg" target="_blank" rel="noreferrer">YouTube<ExternalLink className="external-link" id="YouTubeExternalLink" focusable="false"/></a><img src={YouTubeLogo} alt="" className="contact-logo youtube"/></li>
                  <li><a href="https://dev.to/abbeyperini" target="_blank" rel="noreferrer" aria-label="link to Abbey's Profile on DEV">DEV</a><ExternalLink className="external-link" id="DEVExternalLink" focusable="false"/><DEVLogo className="contact-logo" focusable="false" /></li>
                  <li><a href="https://abbeyperini.hashnode.dev/" target="_blank" rel="noreferrer" aria-label="link to Abbey's Profile on Hashnode">Hashnode</a><ExternalLink className="external-link" id="HashnodeExternalLink" focusable="false"/><img src={HashnodeLogo} alt="" className="contact-logo"/></li>
                </ul>
                <h3>Fill out the form to send me an email!</h3>
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
      </SingleWrapper>
    )
}

export default Contact;