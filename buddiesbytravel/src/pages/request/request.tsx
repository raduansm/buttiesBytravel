import React, { useState } from 'react';
import './request.css';
import Navbar from '../../components/Nav_bar';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Tour {
    id: number;
    name: string;
    requests: User[];
}

const RequestPage: React.FC = () => {
    const [tours, setTours] = useState<Tour[]>([
        {
            id: 1,
            name: 'Tour 1',
            requests: [
                { id: 1, name: 'User 1', email: 'user1@example.com' },
                { id: 2, name: 'User 2', email: 'user2@example.com' },
            ],
        },
        {
            id: 2,
            name: 'Tour 2',
            requests: [
                { id: 3, name: 'User 3', email: 'user3@example.com' },
                { id: 4, name: 'User 4', email: 'user4@example.com' },
            ],
        },
    ]);

    const handleAcceptRequest = (tourId: number, userId: number) => {
        
    };

    const handleDeleteRequest = (tourId: number, userId: number) => {
        
    };

    return (
 <div>
       <Navbar/>
       <div className="request-page">
            <h1 className="request-page-title">Join Requests</h1>
            {tours.map((tour) => (
                <div key={tour.id} className="tour">
                    <h2 className="tour-title">{tour.name}</h2>
                    {tour.requests.map((user) => (
                        <div key={user.id} className="request">
                            <p className="request-detail">Name: {user.name}</p>
                            <p className="request-detail">Email: {user.email}</p>
                            <button className="request-button accept" onClick={() => handleAcceptRequest(tour.id, user.id)}>Accept</button>
                            <button className="request-button delete" onClick={() => handleDeleteRequest(tour.id, user.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            ))}
        </div></div>
    );
};

export default RequestPage;
