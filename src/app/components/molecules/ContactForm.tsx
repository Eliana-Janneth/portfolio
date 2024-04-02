import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulario enviado:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nombre</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input mt-1 block w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input mt-1 block w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Mensaje</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-textarea mt-1 block w-full"
                    rows={4}
                    required
                ></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Enviar</button>
            </div>
        </form>
    );
};

export default ContactForm;
