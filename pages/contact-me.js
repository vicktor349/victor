import React, { useRef, useState } from 'react';
import { MdArrowDropDown, MdOutlineArrowRight, MdPhone } from 'react-icons/md';
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { Loader } from '@mantine/core';
import { notifications } from "@mantine/notifications"
require("dotenv").config()


const ContactMe = () =>
{
    const [isOpen, setIsOpen] = useState(true);
    const [success, setSuccess] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const toggleContacts = () =>
    {
        setIsOpen((prevOpen) => !prevOpen);
    };
    const keywords = new Set([
        'button', 'document', 'querySelector', 'message', 'name', 'email', 'message', 'addEventListener', 'form', 'send', ''
    ])
    const customWords = new Set([
        'const', "=", ">"
    ])
    const event = new Set([
        "#", "sendBtn", "click", "#sendBtn"
    ])
    const highlightCode = (code) =>
    {
        const regex = new RegExp(`\\$\\{(.*?)\\}`, 'g');

        return code.split(/\n/).map((line, index) => (
            <div key={index} style={{ whiteSpace: 'pre-wrap' }}>
                {line.split(/(\b|\s|[{}();,=>])/g).map((part, i) =>
                {
                    if (keywords.has(part))
                    {
                        return <span key={i} className="keyword">{part}</span>;
                    }
                    else if (['{', '}', '(', ')', '=>', ';'].includes(part.trim()))
                    {
                        return <span key={i} className="symbol">{part}</span>;
                    }
                    else if (customWords.has(part))
                    {
                        return <span key={i} className="customwords">{part}</span>;
                    }
                    else if (event.has(part))
                    {
                        return <span key={i} className="event">{part}</span>;
                    }
                    else if (regex.test(part))
                    {
                        return <span key={i} className="dynamic-value">{part}</span>;
                    }
                    else
                    {
                        return <span key={i}>{part}</span>;
                    }
                })}
            </div>
        ));
    };



    const code = `
1   const button = document.querySelector('#sendBtn');
2   
3   const message = {
4       name: "${formData.name}",
5       email: "${formData.email}",
6       message: "${formData.message}",
7       date: "${new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}"
8   };
9
10  button.addEventListener('click', () => {
11      form.send(message);
12  });
    `;
    const form = useRef()

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setIsSubmitting(true)

        emailjs
            .sendForm("service_ti9us81", "template_w45iafh", form.current, {
                publicKey: "UD7LwokbJKt32q4uk",
            })
            .then(
                () =>
                {
                    console.log('SUCCESS!');
                    setSuccess(true)
                    notifications.show({ title: "Success", message: "Message sent successfully", color: "green" })
                },
                (error) =>
                {
                    notifications.show({ title: "Error", message: error, color: "red", bg: "#011221" })
                    console.log('FAILED...', error.text);
                },
            );
        setIsSubmitting(false)

    };
    const handleMoreMessages = (e) =>
    {
        e.preventDefault()
        setSuccess(false)
    }

    return (
        <div className="lg:pt-[56.5px] text-primary lg:flex">
            {/* Sidebar */}
            <div className="select-none lg:border-r border-borderColor lg:h-screen w-full lg:bg-transparent text-white lg:w-[17rem] xl:w-[19rem] 2xl:w-[22.17rem] 3xl:w-96">
                {/* Mobile Header */}
                <div className="pt-[59px] flex items-center h-32 text-white ml-5 lg:hidden text-sm">
                    <p>_contact-me</p>
                </div>
                {/* Contacts Toggle */}
                <div className="lg:border-b border-borderColor bg-background lg:bg-transparent flex items-center h-9 lg:pl-5 text-sm">
                    <div className="hover:cursor-pointer w-full pl-5 lg:pl-0" onClick={toggleContacts}>
                        <div className="flex items-center">
                            {isOpen ? <MdArrowDropDown size={24} /> : <MdOutlineArrowRight size={24} />}
                            <p className="text-sm">contacts</p>
                        </div>
                    </div>
                </div>
                {/* Contact Info */}
                {isOpen && (
                    <div className="pl-3 text-sm text-primary">
                        <div className="flex items-center pl-5 space-x-2 mt-4">
                            <IoMdMail />
                            <p>ayomidevictor349</p>
                        </div>
                        <div className="flex items-center pl-5 space-x-2 mt-4">
                            <MdPhone />
                            <p>+2348154552075</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="w-full h-[calc(100vh-200px)] lg:h-screen">
                {/* Header for larger screens */}
                <div className="border-borderColor border-b w-full h-9 hidden lg:flex items-center text-sm">
                    <p className="pl-5">Contacts</p>
                    <p className="border-r border-borderColor h-full ml-12"></p>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:h-[calc(100vh-35px)]">
                    {/* Form Section */}
                    {success ?
                        <div className='text-base sm:text-lg flex flex-col justify-center items-center  lg:border-r border-borderColor space-y-4 mt-24 lg:mt-0'>
                            <p>Thank you! 🤘</p>
                            <p>Your message has been accepted. You</p>
                            <p>will recieve answer really soon!</p>
                            <button onClick={handleMoreMessages} className="text-white p-2 bg-buttonBackground rounded-lg mt-5 sm:self-start lg:self-center mx-4">
                                send-new-message
                            </button>
                        </div>
                        :
                        <form ref={form} onSubmit={handleSubmit} className="flex flex-col justify-center items-center lg:border-r border-borderColor space-y-4 mt-20 lg:mt-0">
                            <div className="flex flex-col w-full lg:w-fit px-4 sm:px-10">
                                <label htmlFor="name" className="mb-2">_name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    required
                                    onChange={handleInputChange}
                                    className="outline-none px-2 border-2 border-solid bg-cardBackground border-borderColor rounded-lg h-[41px] lg:w-[320px] xl:w-[372px] text-[#465E77]"
                                />
                            </div>
                            <div className="flex flex-col w-full lg:w-fit px-4 sm:px-10">
                                <label htmlFor="email" className="mb-2">_email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="outline-none px-2 border-2 border-solid bg-cardBackground border-borderColor rounded-lg h-[41px] lg:w-[320px] xl:w-[372px] text-[#465E77]"
                                />
                            </div>
                            <div className="flex flex-col w-full lg:w-fit px-4 sm:px-10">
                                <label htmlFor="message" className="mb-2">_message:</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="outline-none px-2 py-2 border-2 border-solid bg-cardBackground border-borderColor rounded-lg h-[145px] lg:w-[320px] xl:w-[372px] text-[#465E77]"
                                />
                            </div>
                            <button className="text-white w-48 h-10 flex items-center justify-center p-2 bg-buttonBackground rounded-lg mt-5" disabled={isSubmitting}>
                                {isSubmitting ? <Loader color="white" size={20} /> : "submit-message"}
                            </button>
                        </form>
                    }

                    {/* Code Preview */}
                    <div className="hidden lg:flex flex-col justify-center mx-auto lg:text-[0.7rem] xl:w-[28.4 rem] xl:text-sm">
                        <div className="w-[500px]">
                            {highlightCode(code)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
