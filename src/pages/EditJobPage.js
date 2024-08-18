import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonAppBar from '../components/AppBar';
import Button from '@mui/material/Button';


export const EditJobPage = ({jobToEdit}) => {

    const [company, setCompany] = useState(jobToEdit.company);
    const [title, setTitle] = useState(jobToEdit.title);
    const [url, setURL] = useState(jobToEdit.url);
    const [recruiter, setRecruiter] = useState(jobToEdit.recruiter);

    const navigate = useNavigate();

    const editJob = async () => {
        const editedJob = {company, title, url, recruiter};
        const response = await fetch(`/api1/jobs/${jobToEdit.id}`, {
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
        <>
        <Container maxWidth={false}>
            <ButtonAppBar title="Add Job"></ButtonAppBar>
        </Container>
        <Box sx={{ flexGrow: 1 }}>

        <div>
            <h1>Update Job</h1>
            <div>
            <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={e => setCompany(e.target.value)} />
            </div>
            <div>

            <input
                type="text"
                placeholder="Job Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
            <input
                type="text"
                placeholder="Website Address of Job Description (URL)"
                value={url}
                onChange={e => setURL(e.target.value)} />
            </div>
            <div>
            <input
                type="recruiter"
                placeholder="Recruiter's Name"
                value={recruiter}
                onChange={e => setRecruiter(e.target.value)} />
            </div>
            <div>
            <Button variant="contained"
                onClick={editJob}
            >Update
            </Button>
            &nbsp;
            <Button 
                variant="contained"
                href="/dashboard"
                >Cancel
            </Button>

            </div>
        </div>
        </Box>
        </>
    );
}

export default EditJobPage;