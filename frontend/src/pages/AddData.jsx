import React, { useState } from "react";
import "./AddData.css";

function AddData() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    price: "",
    image: ""
  });

  // Handle Input Change
  const handleChange = (e) => {

    if (e.target.type === "file") {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const formDataObj = new FormData();

      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("password", formData.password);
      formDataObj.append("country", formData.country);
      formDataObj.append("gender", formData.gender);
      formDataObj.append("price", formData.price);
      formDataObj.append("image", formData.image);
      
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (response.ok) {
        alert("User Registered Successfully!");

        // Clear Form
        setFormData({
          name: "",
          email: "",
          password: "",
          country: "",
          gender: "",
          price: "",
          image: ""
        });

      } else {
        alert(data.error || "Something went wrong");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Server Error");
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Country Dropdown */}
        <div className="form-group">
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        {/* Gender Radio Buttons */}
        <div className="form-group">
          <label>Gender</label>

          <div className="radio-group">

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
              Other
            </label>

          </div>
        </div>
        
        {/* Price */}
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default AddData;
