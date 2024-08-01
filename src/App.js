import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import {useState} from 'react';
// import AddMoviePage from './pages/AddMoviePage';
// import EditMoviePage from './pages/EditMoviePage';

function App() {
  const [jobToEdit, setJobToEdit] = useState();
  return (
    <div className="App">
      <Router>
        <div className="App-header">
		<Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/dashboard" element={<Dashboard setJobToEdit={setJobToEdit}/>}/>
          <Route path="/add-job" element={<AddJobPage />}/>
          <Route path="/edit-job" element={<EditJobPage jobToEdit={jobToEdit}/>}/>

          {/* <Route path="/add-movie" element={<AddMoviePage />}/>
          <Route path="/edit-movie" element={ <EditMoviePage />}/> */}
		  </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;