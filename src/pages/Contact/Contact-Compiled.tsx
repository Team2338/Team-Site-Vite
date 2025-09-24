import './Contact.scss';
import type { FC } from 'react';
import Intro from "./Contact-Intro";
import ContactForm from "./Details/ContactForm";

const Contact: FC = () => {
    return (
        <div className="contact">
            <Intro />
            <div className="content">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;