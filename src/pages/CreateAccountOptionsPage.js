import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAppBar from '../components/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { FormControl, Input, InputLabel, FormHelperText } from '@mui/material';


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccountOptionsPage() {
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
                    <b>Professional - $99/year</b>
                </Container>
                <Container>
                    Attract multiple offers and streamline the interview and offer negotiation process using our services.
                </Container>
            </Box>
            <Box pt={10}>    
                <Container>
                    <b>Academic - $1/year</b>
                </Container>
                <Container>
                    Students & New Grads are eligible to use our service for free to find internships while enrolled, and to secure their first job once they graduate.
                    We believe you will come back and use us again to find your next job when you are ready!
                </Container>
            </Box>
            <Box pt={10}>    
                <Button size="large" variant="contained" href="/create">Create Account</Button>
            </Box>
        </Box>
        </>
    );
}

export default CreateAccountOptionsPage;