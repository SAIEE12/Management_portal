import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Organizations() {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const response = await axios.get('http://localhost:8000/organizations/');
                setOrganizations(response.data);
            } catch (error) {
                console.error('Error fetching Organizations:', error);
            }
        };

        fetchOrganizations();
    }, []);

    return (
        <div className='main-content'>
            <h1 >Organizations List</h1>
          
            <div className='std-body'>
             <div className='table-data'>
            <table>
                <thead>
                    <tr>
                        <th style={{paddingRight:"30px"}}>Organization ID</th>
                        
                        <th>Organization Name</th>
                    </tr>
                </thead>
                <tbody>
                    {organizations.map((organization, index) => (
                        <tr key={organization.organization_id || index}>
                            <td style={{textIndent:"35%"}}>{organization.organization_id}</td>
                          
                            <td>{organization.organization_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
        </div>
    );
}

export default Organizations;


