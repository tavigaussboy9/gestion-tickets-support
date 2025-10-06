import React, { useEffect, useState } from 'react';

const TicketList = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        // Logic to fetch tickets goes here
    }, []);

    return (
        <div>
            {tickets.map(ticket => (
                <div key={ticket._id}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TicketList;