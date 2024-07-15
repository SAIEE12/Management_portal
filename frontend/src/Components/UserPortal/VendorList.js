import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await axios.get('http://localhost:8000/');
                setVendors(response.data);
            } catch (error) {
                console.error('Error fetching vendors:', error);
            }
        };

        fetchVendors();
    }, []);

    return (
        <div className='main-content'>
            <h2>Vendors List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Organization</th>
                        <th>Role</th>
                        <th style={{paddingRight:"5px"}}>Service</th>
                        <th style={{paddingRight:"5px"}}>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map(vendor => (
                        <tr key={vendor.vendor_id} >
                            <td style={{paddingRight:"10px"}}>{vendor.vendor_id}</td>
                            <td style={{paddingRight:"15px"}}>{vendor.name}</td>
                            <td style={{paddingRight:"15px"}}>{vendor.role_name}</td>
                            <td style={{paddingRight:"15px"}}>{vendor.service_name}</td>
                            <td style={{paddingRight:"15px"}}>{vendor.organization_name}</td>
                            <td style={{paddingRight:"15px"}}>{vendor.phone}</td>
                            <td>{vendor.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorList;
