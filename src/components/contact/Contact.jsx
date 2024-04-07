import "./contact.scss"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}


const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ky5rhnm', 'template_xsneteg', formRef.current, {
                publicKey: 'ESjvh3cZcgO5gglbI',
            })
            .then(
                () => {
                    setError(false);
                    setSuccess(true);
                    console.log('SUCCESS!');
                },
                (sendError) => {
                    setError(true);
                    setSuccess(false);
                    console.log('FAILED...', sendError.text);
                },
            );
    };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <h1>Let's talk</h1>
            </motion.div>
            <motion.div className="formContainer" variants={variants}>
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name="name"></input>
                    <input type="email" required placeholder="Email" name="email"></input>
                    <textarea rows={8} placeholder="Message" name="message"></textarea>
                    <button>Submit</button>
                    {error && 'Error'}
                    {success && 'Success'}
                </form>
            </motion.div>
        </motion.div>
    )
}

export default Contact