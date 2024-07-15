import React, { useEffect, useState } from 'react';
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs"
import axios from 'axios';
import "./AdminVendorList.css";


const AdminVendorList = ({ rows, deleteRow, editRow }) => {
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
            
            <div className='table-wrapper'>

            <h2 style={{marginLeft:"210px"}}>Vendors List</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className='expand' >Name</th>
                        <th>Organization</th>
                        <th>Role</th>
                        <th >Service</th>
                        <th >Phone</th>
                        <th>Email</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {vendors.map(vendor => (
                        <tr key={vendor.vendor_id} >
                            <td >{vendor.vendor_id}</td>
                            <td >{vendor.name}</td>
                            <td >{vendor.role_name}</td>
                            <td >{vendor.service_name}</td>
                            <td >{vendor.organization_name}</td>
                            <td >{vendor.phone}</td>
                            <td>{vendor.email}</td>
                            <td>
                                <span className='actions'>
                                    <BsFillPencilFill/>
                                    <BsFillTrashFill className="delete-btn"/>
                                </span>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            
            </div>
        </div>
    );
};

export default AdminVendorList;
