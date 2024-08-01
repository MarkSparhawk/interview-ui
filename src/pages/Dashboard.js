import React from 'react';
import { Link } from 'react-router-dom';
import JobList from '../components/JobList';
import ButtonAppBar from '../components/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard({jobToEdit, setJobToEdit}) {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    const onDelete = async _id => {
        const response = await fetch(`/jobs/${_id}`, {method: 'DELETE'});
        if (response.status === 200) { 
            setJobs(jobs.filter(job => job.id !== _id));
        } else {
            console.error(`Failed to delete job with _id: ${_id}, status code: ${response.status}` );
        }
    };

    const onEdit = job => {
        setJobToEdit(job);
        navigate('/edit-job');

    };

    
    const loadJobs = async () => {
        const response = await fetch('/jobs');
        const jobs = await response.json();
        console.log(jobs);
        setJobs(jobs["res"]);
    }
        
    useEffect(() => {
        loadJobs();
    }, []);
        
    return (
        <>
         <Container maxWidth={false}>
            <ButtonAppBar title="Dashboard"></ButtonAppBar>
        </Container>
        <Box sx={{ flexGrow: 1 }}>
            <JobList jobs={jobs} onDelete={onDelete} onEdit={onEdit}></JobList>
            <Box pt={10}>    
                <Button size="large" variant="contained" href="/add-job">Add Job</Button>
            </Box>

        </Box>

        </>
    );
}

export default Dashboard;