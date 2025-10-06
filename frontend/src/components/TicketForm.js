import React, { useState } from 'react';

const TicketForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to submit ticket goes here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Titre' value={title} onChange={e => setTitle(e.target.value)} required />
            <textarea placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} required></textarea>
            <button type='submit'>Soumettre</button>
        </form>
    );
};

export default TicketForm;