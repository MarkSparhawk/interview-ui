import React from 'react';
import { Link } from 'react-router-dom';
import JobList from '../components/JobList';
import ButtonAppBar from '../components/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { FormControl, Input, InputLabel, FormHelperText } from '@mui/material';


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [jobs, setJobs] = useState([]);
    
    const loadJobs = async () => {
        const response = await fetch('http://127.0.0.1:5000/jobs');
        const jobs = await response.json();
        console.log(jobs);
        setJobs(jobs["res"]);
    }
        
    useEffect(() => {
        loadJobs();
    }, []);
        
    return (
        <>
        <Container maxWidth={false} disableGutters>
            <ButtonAppBar></ButtonAppBar>
        </Container>
        <Box sx={{ flexGrow: 1 }}>
            {/* <Container>
                <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
            </Container> */}
            <Box pt={10}>
                <Container>
                    <b>How Can Interview Accelerator Help You?</b>
                </Container>
                <Container>
                    We help our customers navigate the complex interview processes at multi-companies simultaneously. Never miss a key deadline, important meeting, or interview again.
                </Container>
            </Box>
            <Box pt={10}>    
                <Container>
                    <b>Why Interview Accelerator?</b>
                </Container>
                <Container>
                    Research shows that to get the best job offers, you need to have multiple competing offers. In order to get multiple competing offers you will need to apply and interview with potentially dozens of companies. Managing these complex relationships is a full time job
                </Container>
            </Box>
            <Box pt={10}>    
                <Button size="large" variant="contained" href="/create">Create Account</Button>
            </Box>
        </Box>
        </>
    );
}

export default HomePage;