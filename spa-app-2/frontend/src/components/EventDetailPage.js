import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const { eventId } = useParams();

    return <>
         <h1>Event Detail Page</h1>
         <p>Event ID: <strong>{eventId}</strong></p>
    </>;
}

export default EventDetailPage;
