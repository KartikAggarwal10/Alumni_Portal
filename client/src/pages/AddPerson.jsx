import React from 'react';
import './AddPerson.css';

const AddPerson = () => {
    return (
        <div className="addperson-page-container">
            <div className="form-card">
                <h2>Add Person (Management/Faculty)</h2>
                {/* 
                    Using HTML form submission because the backend expects multipart/form-data 
                    and redirects after submission. The form action uses a relative URL 
                    so it goes through Vite's proxy.
                */}
                <form action="/people" method="post" encType="multipart/form-data">
                    <input type="text" name="name" id="name" placeholder="Enter Name" required />
                    <input type="text" name="work" id="work" placeholder="Enter Work/Responsibility" required />
                    <input type="email" name="mail" id="email" placeholder="Email" required />
                    <input type="file" name="photo" id="photo" required />
                    <input type="submit" value="Add Person" />
                </form>
            </div>
        </div>
    );
};

export default AddPerson;
