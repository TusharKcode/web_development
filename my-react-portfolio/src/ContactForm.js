import { useState } from "react";

function ContactForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,            // spread previous value
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${formData.name}, We will contact you at ${formData.email}`);
        setFormData({name: "", email: ""});         // reset
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
             />
            
            <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
             />

            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;