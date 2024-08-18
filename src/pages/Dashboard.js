import React from 'react';
import JobList from '../components/JobList';
import ButtonAppBar from '../components/AppBar';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard({jobToEdit, setJobToEdit}) {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    const onDelete = async _id => {
        const response = await fetch(`/api1/jobs/${_id}`, {method: 'DELETE'});
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
        const response = await fetch('/api1/jobs');
        var res = await response.json();
        console.log(res);
        
        var jobs = res["res"]
        console.log(jobs)
        setJobs(jobs);
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
                <Tooltip title="Allows you to add new jobs you’ve applied to so you can keep track of where you are in the candidate pipeline.">
                    <Button size="large" variant="contained" href="/add-job">Add Job</Button>
                </Tooltip>
                
            </Box>

        </Box>

        {/* <Modal> Hello </Modal> */}
        </>
    );
}

export default Dashboard;