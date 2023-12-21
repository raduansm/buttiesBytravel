import React, { useState, ChangeEvent, FormEvent } from 'react';
import './tour.css';
import Navbar from '../../components/Nav_bar';

const TourCreatePage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tourType, setTourType] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [destination, setDestination] = useState<string>('');
    const [maxParticipants, setMaxParticipants] = useState<string>('');
    const [currentParticipantsCount, setCurrentParticipantsCount] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setter(e.target.value);
        };


    return (
        <div>
            <Navbar/>
            <div className="tour-card-upload-container">
                <h2 className="tour-card-title">Create Tour</h2>
                <form onSubmit={handleSubmit} className="tour-card-form">
                    <input className="tour-input" type="text" placeholder="Title" value={title} onChange={handleChange(setTitle)} />
                    <textarea className="tour-textarea" placeholder="Description" value={description} onChange={handleChange(setDescription)}></textarea>
                    <input className="tour-input" type="text" placeholder="Tour Type" value={tourType} onChange={handleChange(setTourType)} />
                    <input className="tour-input" type="date" placeholder="Start Date" value={startDate} onChange={handleChange(setStartDate)} />
                    <input className="tour-input" type="date" placeholder="End Date" value={endDate} onChange={handleChange(setEndDate)} />
                    <input className="tour-input" type="text" placeholder="Destination" value={destination} onChange={handleChange(setDestination)} />
                    <input className="tour-input" type="number" placeholder="Max Participants" value={maxParticipants} onChange={handleChange(setMaxParticipants)} />
                    <input className="tour-input" type="number" placeholder="Current Participants Count" value={currentParticipantsCount} onChange={handleChange(setCurrentParticipantsCount)} />
                    <input className="tour-input" type="text" placeholder="Status" value={status} onChange={handleChange(setStatus)} />
                    <button className="tour-submit-button" type="submit">Create Tour</button>
                </form>
            </div>
        </div>
    );
};

export default TourCreatePage;
