import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import AlumniRegister from './pages/register';
import Members from './pages/Members';
import Companies from './pages/Companies';
import Countries from './pages/Countries';
import Achievements from './pages/Achievements';
import People from './pages/People';
import AddPerson from './pages/AddPerson';
import Dummy from './pages/dumy';
import Navbar from './components/Navbar';
import AdminAddAlumni from './pages/AdminAddAlumni';
import AddAchievement from './pages/AddAchievement ';
import AdminEvents from './pages/AdminEvents';
import AdminGiving from './pages/AdminGiving';
import AdminGallery from './pages/AdminGallery';
import AdminDashboardStats from './pages/AdminDashboardStats';
function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar/>
                <Routes>
                    <Route path='/AdminDashboardStats' element={<AdminDashboardStats/>} />
                    <Route path='/AdminGallery' element={<AdminGallery/>} />
                    <Route path='/AdminGiving' element={  < AdminGiving />} />
                    <Route path='/AdminEvents' element={< AdminEvents />} />
                    <Route path='/register' element={<AlumniRegister/>} />
                    <Route  path='/dumy' element={< AddAchievement />} />
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