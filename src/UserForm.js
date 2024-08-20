import React, { useState } from 'react';

function UserForm({candidateData, setCandidateData}) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidateData({
            ...candidateData,
            [name]: value,
        });
    };

    return (
        <div className="UserForm container-fluid d-flex flex-column justify-content-center mt-5 row">
            <h2 className='col-8 col-md-6 col-lg-4 align-self-center text-center'>Aday Bilgisi</h2>
            <form className='col-8 col-md-6 col-lg-4 align-self-center'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={candidateData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={candidateData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone_number"
                        name="phone_number"
                        value={candidateData.phone_number || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        value={candidateData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        value={candidateData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
        </div>
    );
}

export default UserForm;
