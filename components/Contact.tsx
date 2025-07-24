
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setStatus('Please fill out all fields.');
            return;
        }
        
        // In a real app, you would handle form submission here (e.g., API call)
        console.log({ name, email, message });
        setStatus('Thank you for your message! We will get back to you shortly.');
        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-20 sm:py-32 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Get In <span className="text-blue-500">Touch</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to learn more? We'd love to hear from you.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                placeholder="Your Message"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-12 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30">
                                Send Message
                            </button>
                        </div>
                    </form>
                    {status && (
                        <p className="mt-6 text-center text-blue-400">{status}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
