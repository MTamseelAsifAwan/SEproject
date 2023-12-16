import React, { useState } from 'react';
import "../Styles/jzt.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar copy";
const Jztworkers = () => {
  const [data, setData] = useState([
    {
      name: 'Tamseel',
      city: 'Chakwal',
      address: 'Vpo khanpur,main adda Asif Market',
      phoneNumber: '03335771292',
    },
    {
      name: 'Jane Doe',
      city: 'Los Angeles',
      address: '456 Elm St',
      phoneNumber: '987-654-3210',
    },
        {
      name: 'Jane Doe',
      city: 'Los Angeles',
      address: '456 Elm St',
      phoneNumber: '987-654-3210',
    },
        {
      name: 'Jane Doe',
      city: 'Los Angeles',
      address: '456 Elm St',
      phoneNumber: '987-654-3210',
    },
        {
      name: 'Jane Doe',
      city: 'Los Angeles',
      address: '456 Elm St',
      phoneNumber: '987-654-3210',
    },
        {
      name: 'Jane Doe',
      city: 'Los Angeles',
      address: '456 Elm St',
      phoneNumber: '987-654-3210',
    },
    
    {
      name: 'Tamseel',
      city: 'New York',
      address: '123 Main St',
      phoneNumber: '123-456-7890',
    },
    {
      name: 'John Doe',
      city: 'New York',
      address: '123 Main St',
      phoneNumber: '123-456-7890',
    },
    {
      name: 'Tamseel',
      city: 'New York',
      address: '123 Main St',
      phoneNumber: '123-456-7890',
    },
    {
      name: 'Tamseel',
      city: 'Chakwal',
      address: 'Vpo khanpur,main adda Asif Market',
      phoneNumber: '03335771292',
    },
    {
      name: 'Tamseel',
      city: 'Chakwal',
      address: 'Vpo khanpur,main adda Asif Market',
      phoneNumber: '03335771292',
    },
  ]);

  const handleAddData = () => {
    const newPerson = {
      name: '',
      city: '',
      address: '',
      phoneNumber: '',
    };
    const updatedData = [...data, newPerson];
    setData(updatedData);
  };
  
  const handleChange = (event, index) => {
    const newData = data.map((person, i) => {
      if (index === i) {
        return {
          ...person,
          [event.target.name]: event.target.value,
        };
      }
      return person;
    });
    setData(newData);
  };


  return (
    <div>
      <Navbar />
   
    <div className='jaz'    >
 
      <button
        style={{ backgroundColor: 'red', color: 'white', float: 'right', marginRight: '20px', marginTop: '10px' }}
        onClick={handleAddData}
      > 
        Add Person
      </button>
      
      <table style={{ width: '100%' }}>

        <thead>
        <h1 style={{ backgroundColor: 'transparent', borderBottom: '4px solid red', display: 'inline-block' }}>Person Details</h1>
        <tr>
    <th><span>Name</span></th>
    <th><span>City</span></th>
    <th><span>Address</span></th>
    <th><span>Phone Number</span></th>
  </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={person.name}
                  onChange={(event) => handleChange(event, index)}
                  className="fields"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="city"
                  value={person.city}
                  onChange={(event) => handleChange(event, index)}
                  className="fields"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  value={person.address}
                  onChange={(event) => handleChange(event, index)}
                  className="fields"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="phoneNumber"
                  value={person.phoneNumber}
                  onChange={(event) => handleChange(event, index)}
                  className="fields"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="legal-footer">
    <p>© 2013-2025 Thali-Care+. All rights reserved to TA Services and JZT.</p>
  </div>
    </div>
    
  
  );
};

export default Jztworkers;
