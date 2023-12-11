import ContactForm from "../contactForm/ContactForm";
import { useEffect } from 'react';
function Contact () {
    useEffect(() => {
        document.title = 'Contact';
    },[]);
    return (
        <ContactForm />
    )
}

export default Contact;