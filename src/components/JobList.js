import React from 'react';
import Job from './Job';

function JobList({ jobs, onDelete, onEdit }) {
    return (
        <table id="jobs">
            <thead>
                <tr>
                    <th>Company</th>
                    <th>URL</th>
                    <th>Recruiter</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((job, i) => <Job job={job} 
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default JobList;
