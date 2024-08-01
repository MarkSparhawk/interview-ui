import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddJobPage = () => {

    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [url, setURL] = useState('');
    const [recruiter, setRecruiter] = useState('');

    const navigate = useNavigate();

    const addJob = async () => {
        const newJob = {company, title, url, recruiter};
        const response = await fetch('/jobs', {
            method: 'POST',
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            // alert('Successfully Added Exercise');
        } else {
            alert(`Failed to add exercise, status code: ${response.status}`);
        }
        navigate("/dashboard");
    };

    return (
        <div>
            <h1>Add Job</h1>
            <div>
            <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)} />
            </div>
            <div>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
            <input
                type="text"
                placeholder="Job Description URL"
                value={url}
                onChange={e => setURL(e.target.value)} />
            </div>
            <div>
            <input
                type="recruiter"
                placeholder="Recruiter"
                value={recruiter}
                onChange={e => setRecruiter(e.target.value)} />
            </div>
            <div>
            <button
                onClick={addJob}
            >Add</button>
            </div>
        </div>
    );
}

export default AddJobPage;