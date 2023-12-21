import React, { useState } from 'react';
import './home.css';
import Navbar from '../../components/nav_bar';

const Home = () => {
    const tours = [
        { title: "Tour Title 1", description: "Lorem ipsum dolor sit amet...", date: "12/12/2021", destination: "Destination 1", tourType: "Adventure", maxParticipants: 12, currentParticipants: 8, status: "Open" },
        { title: "Tour Title 1", description: "Lorem ipsum dolor sit amet...", date: "12/12/2021", destination: "Destination 1", tourType: "Adventure", maxParticipants: 12, currentParticipants: 8, status: "Open" },
        { title: "Tour Title 3", description: "Lorem ipsum dolor sit amet...", date: "12/12/2021", destination: "Destination 12", tourType: "Adventure", maxParticipants: 12, currentParticipants: 8, status: "Open" },
        { title: "Tour Title 1", description: "Lorem ipsum dolor sit amet...", date: "12/12/2021", destination: "Destination 1", tourType: "Adventure", maxParticipants: 12, currentParticipants: 8, status: "Open" },
        { title: "Tour Title 1", description: "Lorem ipsum dolor sit amet...", date: "12/12/2021", destination: "Destination 1", tourType: "Adventure", maxParticipants: 12, currentParticipants: 8, status: "Open" },
    ];

    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [tourType, setTourType] = useState('');
    const [selectedTour, setSelectedTour] = useState<{ title: string; description: string; date: string; destination: string; tourType: string; maxParticipants: number; currentParticipants: number; status: string; } | null>(null); // Initialize selectedTour with the correct type

    const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDestination(event.target.value);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    const handleTourTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTourType(event.target.value);
    };

    const handleSearch = () => {
        console.log('Searching...');
        console.log('Destination:', destination);
        console.log('Date:', date);
        console.log('Tour Type:', tourType);
    };

    const handleCardClick = (tour: { title: string; description: string; date: string; destination: string; tourType: string; maxParticipants: number; currentParticipants: number; status: string; }) => {
        setSelectedTour(tour);
    };

  

         const handleJoinTour = () => {
                console.log('Joining tour:', selectedTour);
                setSelectedTour(null);
            };

    return (
        <div>
            <Navbar/>
            <div className="search-container">
                <h2 className="search-title">Search Tours</h2>
                <div className="search-input-container">
                    <input className="search-input" type="text" placeholder="Destination" value={destination} onChange={handleDestinationChange} />
                    <input className="search-input" type="date" placeholder="Date" value={date} onChange={handleDateChange} />
                    <input className="search-input" type="text" placeholder="Tour Type" value={tourType} onChange={handleTourTypeChange} />
                    <button className="search-button" onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="tour-card-container">
                <h2 className="tour-card-title">Tours</h2>
                <div className="tour-card-scroll">
                    {tours.map((tour, index) => (
                        <div key={index} className="tour-card" onClick={() => handleCardClick(tour)}>
                            <div className="tour-card-image"></div>
                            <div className="tour-card-text">
                                <h3 className="tour-card-text-title">{tour.title}</h3>
                                <p className="tour-card-text-description">{tour.description}</p>
                                <p className="tour-card-text-date">Date: {tour.date}</p>
                                <p className="tour-card-text-destination">Destination: {tour.destination}</p>
                                <p className="tour-card-text-tour-type">Tour Type: {tour.tourType}</p>
                                <p className="tour-card-text-max-participants">Max Participants: {tour.maxParticipants}</p>
                                <p className="tour-card-text-current-participants">Current Participants: {tour.currentParticipants}</p>
                                <p className="tour-card-text-status">Status: {tour.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedTour && (
                <div className="popup">
                    <div className="popup-content">
                        <h2 className="popup-title">{selectedTour.title}</h2> 
                        <p className="popup-description">{selectedTour.description}</p>
                        <p className="popup-date">Date: {selectedTour.date}</p>
                        <p className="popup-destination">Destination: {selectedTour.destination}</p>
                        <p className="popup-tour-type">Tour Type: {selectedTour.tourType}</p>
                        <p className="popup-max-participants">Max Participants: {selectedTour.maxParticipants}</p>
                        <p className="popup-current-participants">Current Participants: {selectedTour.currentParticipants}</p>
                        <p className="popup-status">Status: {selectedTour.status}</p>
                        <button className="join-button" onClick={handleJoinTour}>Join Tour</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
