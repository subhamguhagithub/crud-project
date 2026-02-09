import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ViewData.css";

function ViewData() {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation(); // 👈 Detect route change

  // Load Data
  useEffect(() => {
    fetchUser();
  }, [location]); // 👈 Reload when coming back

  const fetchUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/viewer");
      const data = await res.json();

      setUser(data);

    } catch (err) {
      console.error(err);

    } finally {
      setLoading(false);
    }
  };

  // Delete User
  const handleDelete = async (id) => {

    if (!window.confirm("Are you sure?")) return;

    try {
      await fetch(`http://localhost:5000/api/deleteuser/${id}`, {
        method: "DELETE"
      });

      fetchUser(); // Reload after delete

    } catch (err) {
      console.error(err);
    }
  };

  // Edit User
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  if (loading) return <h2>Loading students...</h2>;

  return (
    <div className="users-container">

      <h1>Student Data</h1>

      <table className="users-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {user.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No Data Found
              </td>
            </tr>
          ) : (

            user.map((users) => (

              <tr key={users._id}>

                <td data-label="Name">{users.name}</td>

                <td data-label="Email">{users.email}</td>

                <td data-label="Country">{users.country}</td>

                <td data-label="Gender">{users.gender}</td>

                <td data-label="Image">
                  <img
                    src={`http://localhost:5000/uploads/${users.image}`}
                    alt="demo-image"
                    width="100px"
                    height="100px"
                  />
                </td>

                <td data-label="Actions">

                  <button
                    className="btn btn-edit"
                    onClick={() => handleEdit(users._id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(users._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default ViewData;
