import React, { useState } from 'react';

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
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        Your Name: <input type="text" name="name" onChange={handleChange} />   
                    </label>
                </p>
                <p>
                    <label>
                        Your Email: <input type="email" name="email" onChange={handleChange}></input>
                    </label>
                </p>
                <p>
                    <label>
                        Message: <textarea name="message" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </aside>
    )
}

export default Contact;