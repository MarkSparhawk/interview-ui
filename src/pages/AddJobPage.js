import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonAppBar from '../components/AppBar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



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
        <>
        <Container maxWidth={false}>
            <ButtonAppBar title="Add Job"></ButtonAppBar>
        </Container>
        <Box sx={{ flexGrow: 1 }}>
        <div>
            <h1>Add Job</h1>
            <div>
            
            <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={e => setCompany(e.target.value)} /> 
                <Tooltip title="Name of the company you are appliying to (e.g. Microsoft)">
                ?
                </Tooltip>

            </div>
            <div>

            <input
                type="text"
                placeholder="Job Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
                <Tooltip title="Job Title or Role Name (e.g. Sr. Software Engineer)">
                ?
                </Tooltip>

            </div>
            <div>
            <input
                type="text"
                placeholder="Website Address of Job Description (URL)"
                value={url}
                onChange={e => setURL(e.target.value)} />
                <Tooltip title="URL/Web Site Address where you found the job description so you can reference it later">
                ?
                </Tooltip>

            </div>
            <div>
            <input
                type="recruiter"
                placeholder="Recruiter's Name"
                value={recruiter}
                onChange={e => setRecruiter(e.target.value)} />
                <Tooltip title="Recruiters Name (e.g. John Smith)">
                ?
                </Tooltip>
            </div>
            <div>
            <Button
                onClick={addJob}
                variant="contained"
            >Add</Button>
            &nbsp;
            <Button
                href="/dashboard"
                variant="contained"
            >Cancel</Button>
            </div>
        </div>
        </Box>
        </>
    );
}

export default AddJobPage;