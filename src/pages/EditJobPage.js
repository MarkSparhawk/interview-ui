import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditJobPage = ({jobToEdit}) => {

    const [company, setCompany] = useState(jobToEdit.company);
    const [title, setTitle] = useState(jobToEdit.title);
    const [url, setURL] = useState(jobToEdit.url);
    const [recruiter, setRecruiter] = useState(jobToEdit.recruiter);

    const navigate = useNavigate();

    const editJob = async () => {
        const editedJob = {company, title, url, recruiter};
        const response = await fetch(`/jobs/${jobToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify(editedJob),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // if (response.status === 201) {
        //     alert('Successfully Updated Job');
        // } else {
        //     alert(`Failed to update job, status code: ${response.status}`);
        // }
        navigate("/dashboard");
    };

    return (
        <div>
            <h1>Update Job</h1>
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
                onClick={editJob}
            >Update</button>
            <button>Cancel</button>

            </div>
        </div>
    );
}

export default EditJobPage;