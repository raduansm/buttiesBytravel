import React, { useState } from 'react';
import './registration.css';

const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [nid, setNid] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !nid || !photo || !email || !password) {
            alert('Please fill in all fields');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            setName('');
        } else {
            setName(value);
        }
    };

    const handleNidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (isNaN(Number(value))) {
            setNid('');
        } else {
            setNid(value);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div className='parentContainer'>
            <h1>Registration</h1>
            <input
                className='I1'
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
            /><br />
            <input
                className='I1'
                type="text"
                placeholder="NID"
                value={nid}
                onChange={handleNidChange}
            /><br />
            <input
                id="fileInput"
                className="I1"
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const uploadedPhoto = event.target?.result as string;
                            setPhoto(uploadedPhoto);
                        };
                        reader.readAsDataURL(file);
                    }
                }}
                style={{ display: 'none' }}
            />
            <label htmlFor="fileInput" className="customFileInputLabel">
                Image
            </label><br />
            <input
                className='I1'
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
            /><br />
            <input
                className='I1'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br /><br />
            <button className='reg_button' onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default RegistrationPage;
