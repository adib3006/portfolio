import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bdacinw', 'template_wqzs6t3', form.current, 'rSjIh1ls4nDArK0p7')
            .then((result) => {
                e.target.reset();
                toast.success("Thanks for reaching out")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact'>
            <h2 className='text-center font-semibold text-3xl mt-5 mb-2'>Contact Me</h2>
            <div className='flex items-center justify-center'>
                <form className='md:w-1/2 m-4 shadow-lg border p-4 rounded' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className='w-full px-3 py-2 border rounded-md border-gray-300' type="text" name="from_name" required/>
                    <label>Email</label>
                    <input className='w-full px-3 py-2 border rounded-md border-gray-300' type="email" name="user_email" required/>
                    <label>Message</label>
                    <textarea className='w-full h-20 px-3 py-2 border rounded-md border-gray-300' name="message"  required/>
                    <div className='flex items-center justify-center'>
                        <input className='px-8 py-3 font-semibold rounded-md bg-sky-400 hover:bg-sky-500 hover:text-white text-gray-100' type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;