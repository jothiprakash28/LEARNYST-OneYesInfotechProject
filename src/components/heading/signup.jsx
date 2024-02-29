import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    instituteName: '',
    email: '',
    mobileNumber: '',
    password: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.instituteName.trim()) {
      validationErrors.instituteName = 'Institute name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!formData.mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      validationErrors.mobileNumber = 'Mobile number should be 10 digits';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    }

    if (!formData.agreeToTerms) {
      validationErrors.agreeToTerms = 'Please agree to the terms and conditions';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully');
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
        
      <div><h3 className='h1login'>Get Started with Learnyst</h3><p>Already have an Account</p>
        <label>Institute Name:</label>
        <input
          type="text"
          name="instituteName"
          placeholder="Institute Name"
          autoComplete="off"
          onChange={handleChange}
        />
        {errors.instituteName && <span>{errors.instituteName}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          autoComplete="off"
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Mobile Number:</label>
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          autoComplete="off"
          onChange={handleChange}
        />
        {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="******"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        <label>
          I agree to terms and conditions
        </label>
        {errors.agreeToTerms && <span>{errors.agreeToTerms}</span>}
      </div>
      <button type="submit">Get Started</button>
    </form>
  );
};

export default Signup;
