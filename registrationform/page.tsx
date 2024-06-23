"use client";

import React from "react";
import "./style.css"; // Import the CSS file

const ResForm = () => {
  return (
    <>
      
      <form action="/submit-form" method="POST">
      <h3>Registration Form</h3>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" />

       
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />

     
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="120" />

        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>

      
        <label htmlFor="subscribe">Subscribe to newsletter:</label>
        <input type="checkbox" id="subscribe" name="subscribe" value="yes" />

        <label htmlFor="country">Country:</label>
        <select id="country" name="country">
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
          <option value="pakistan">Pakistan</option>
        </select>

       
        <label htmlFor="bio">Short Bio:</label>
        <textarea id="bio"></textarea>

      
        <label htmlFor="profile_pic">Upload Profile Picture:</label>
        <input type="file" id="profile_pic" name="profile_pic" />

       
        <input type="hidden" name="form_type" value="registration" />

        <input type="submit" value="Submit" />
      </form>

      
    </>
  );
};

export default ResForm;
