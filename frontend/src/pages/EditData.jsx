import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddData.css";

function EditData() {

  const { id } = useParams();       
  const navigate = useNavigate();  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    gender: ""
  });

  // Load Old Data
  useEffect(() => {
    fetchUser();
  }, [id]); // 👈 reload if id changes

  const fetchUser = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/user/${id}`);
      const data = await res.json();

      // Safety check
      if (!data || data.error) {
        alert("User not found");
        navigate("/");
        return;
      }

      setFormData({
        name: data.name || "",
        email: data.email || "",
        password: data.password || "",
        country: data.country || "",
        gender: data.gender || ""
      });

    } catch (err) {
      console.error(err);
      alert("Server Error");
      navigate("/");
    }
  };

  // Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Update User
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/updateuser/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("User Updated Successfully!");
        navigate("/", { replace: true }); // 👈 force reload
      } else {
        alert(data.error || "Update Failed");
      }

    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="form-container">

      <h2>Edit Student</h2>

      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate("/")}
        style={{ marginBottom: "15px" }}
      >
        ← Back to Home
      </button>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Country */}
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

        {/* Gender */}
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

        {/* Button */}
        <button type="submit">Update</button>

      </form>
    </div>
  );
}

export default EditData;
