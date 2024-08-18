import React, {useEffect, useState} from 'react';
import { MdEdit, MdDeleteForever} from 'react-icons/md';


function Job({ job, onDelete, onEdit }) {
    const [data, setData] = useState(null);
    // Effect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount


  // Function to fetch data
  const fetchData = async () => {
    try {
      // Make a GET request using the Fetch API
      const data = {'company_name': job.company }
      const settings = {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      };
      const response =  await fetch(`/api2/company_logo`, settings);
      
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON data from the response
      const result = await response.text();

      // Update the state with the fetched data
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };


function loadIcon(company_name){ 
    const data = {'company_name': company_name }
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const response =  fetch(`/api2/company_logo`, settings).
    then((response) => {
        return response.text;
    })
    // return response.text
}

    return (
        <tr>
            <td align="left"><img height="15" src={data}></img></td>
            <td align="left">{job.company}</td>
            <td align="left"><a href={job.url}>{job.title}</a></td>
            <td align="left">{job.recruiter}</td>
            <td><MdEdit onClick={() => onEdit(job)} /></td>
            <td><MdDeleteForever onClick={() => onDelete(job.id)} /></td>            
        </tr>
    );
}

export default Job;