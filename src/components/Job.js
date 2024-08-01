import React from 'react';
import { MdEdit, MdDeleteForever} from 'react-icons/md';

function Job({ job, onDelete, onEdit }) {
    return (
        <tr>
            <td align="left">{job.company}</td>
            <td align="left"><a href={job.url}>{job.title}</a></td>
            <td align="left">{job.recruiter}</td>
            <td><MdEdit onClick={() => onEdit(job)} /></td>
            <td><MdDeleteForever onClick={() => onDelete(job.id)} /></td>            
        </tr>
    );
}

export default Job;