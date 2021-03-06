import React, { useState } from 'react';
import { validateEmail } from '../../assets/utils/helpers';
import './Contact.css';

function ContactForm() {
    const [ formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [ errorMessage, setErrorMessage ] = useState('');
    const { name, email, message } = formState;

    function handleChange(event) {
        if(event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('Email is invalid');
            } else {
                if(!event.target.value.length) {
                    console.log("length is zero", event.target.value.length === 0)
                    setErrorMessage(`${event.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if(event.target.name ==='name') {
            if(!event.target.value.length) {
                console.log("length is zero", event.target.value.length === 0)
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value })
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h2 datatest-id='contact' id='contact-me'>Contact Me</h2>
            <h3 id='contact-info'>Phone Number: (385)695-8729</h3>
            <h3 id='contact-info'>Email: MackFoldsIII@gmail.com</h3>
            <div className='row justify-content-md-center'>
                <div className="col col-lg-8">
                    <form id='contact-form' onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name" id="form-text"><h3>Name:</h3></label>
                                <input type='text' className="form-control" name='name' defaultValue={name} onBlur={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email" id="form-text"><h3>Email:</h3></label>
                                <input type='email' className="form-control" name='email' defaultValue={email} onBlur={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="message" id="form-text"><h3>Message:</h3></label>
                                <textarea name='message' className="form-control" rows="5" defaultValue={message} onBlur={handleChange} />
                            </div>
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-message">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit" data-testid="submitButton" className='btn btn-primary btn-lg' id='form-button'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='row justify-content-md-center' id="contact-info-h1">
                <div className="col col-lg-4 justify-content-md-center">
                    <h2>My Github: <a href="https://github.com/MackFolds" target="_blank" rel='noreferrer noopener'><i className="bi bi-github"></i> Profile</a></h2>
                </div>
                <div className="col col-lg-4 justify-content-md-center">
                    <h2>My LinkedIn: <a href="www.linkedin.com/in/mack-folds" target="_blank" rel='noreferrer noopener'><i className="bi bi-linkedin"></i> Profile</a></h2>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;