'use client'
import React, { useState } from 'react'

export default function page() {
    const [formData, setFormData] = useState({name: '', email: '', password: ''});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target.value;
        setFormData((prevData) => ({...prevData, [name]:value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        console.log('Submitted Data ', formData);

        setFormData({name: '', email: '', password: ''});
    };




  return (
    <div>
      
    </div>
  )
}
