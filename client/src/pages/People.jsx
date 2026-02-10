import React, { useState, useEffect } from 'react';
import api from '../api';
import './People.css';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        try {
            const response = await api.get('/peoplein');
            const data = response.data.people || [];
            setPeople(data);
        } catch (error) {
            console.error("Error fetching people:", error);
        }
    };

    return (
        <div className="people-page-container">
            {/* Header */}
            <div className="header">
                <h1>People</h1>
                <p>Administration &amp; Faculty</p>
            </div>

            {/* People Container */}
            <div className="cont">
                {people.map((person, index) => (
                    <div key={index} className="pr">
                        <div>
                            <img
                                src={person.photo ? `/people/${person.photo}` : "https://images.hdqwalls.com/wallpapers/best-nature-image.jpg"}
                                alt={person.name}
                            />
                        </div>
                        <div className="c">
                            <div className="n"><h2><b>{person.name}</b></h2></div>
                            <div>
                                <div>
                                    <strong>Responsibility:</strong> {person.work}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="footer">
                <div>
                    <h2>Mentored by:</h2>
                    Dr. Gourav Jain <br /> Assistant Professor at IIIT Sonepat
                </div>
                <div>© 2025 IIIT Sonepat Alumni Portal</div>
                <div>
                    <h2>Created by:</h2>
                    Vineet Kumar Yadav ( 1<sup>st</sup> Year , IT ) <br />
                    Kartik Aggrawal ( 1<sup>st</sup> Year , CSE ) <br />
                    Ritik Raj Soni ( 1<sup>st</sup> Year , IT )
                </div>
            </footer>
        </div>
    );
};

export default People;
