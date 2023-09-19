import React from 'react';
import { Link } from 'react-router-dom';

const EVENTS = [
    {
        id: '1',
        title: 'Event 1',
    },
    {
        id: '2',
        title: 'Event 2',
    },
];

const EventsPage = () => {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default EventsPage;
