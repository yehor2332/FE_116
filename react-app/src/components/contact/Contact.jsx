import ContactForm from "../contactForm/ContactForm";
import { useEffect } from 'react';
import '../../assets/scss/style.scss';
function Contact () {
    useEffect(() => {
        document.title = 'Contact';
    },[]);
    return (
        <div className="contact">
            <ContactForm />
        </div>

    )
}

export default Contact;