import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Alumni from './pages/Alumni';

import Events from './pages/Events';
import Giving from './pages/Giving';

import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import DonationForm from './pages/DonationForm';
import EventRegistration from './pages/EventRegistration';

import Members from './pages/Members';
import Companies from './pages/Companies';
import Countries from './pages/Countries';
import Achievements from './pages/Achievements';
import People from './pages/People';
import AddPerson from './pages/AddPerson';
import Dummy from './pages/dumy';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route  path='/dumy' element={< Dummy />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signupt" element={<Signup />} />
                    <Route path="/alumni" element={<Alumni />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/giving" element={<Giving />} />
                    <Route path="/glr" element={<Gallery />} />
                    <Route path="/contct" element={<Contact />} />
                    <Route path="/donation" element={<DonationForm />} />
                    <Route path="/register-event" element={<EventRegistration />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/countries" element={<Countries />} />
                    <Route path="/ach" element={<Achievements />} />
                    <Route path="/peopledisp" element={<People />} />
                    <Route path="/people" element={<AddPerson />} />
                    {/* Add other routes here */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
export default App;
