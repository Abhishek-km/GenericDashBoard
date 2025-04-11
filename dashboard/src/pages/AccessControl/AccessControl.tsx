import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getRoles, updateRoles, addRoles, deleteRoles } from "../../api/api"; // Import only getRoles
import { useAuth } from "../../contexts/Auth"; // Import useAuth

interface Role {
  roleId: number;
  roleName: string;
  description: string;
}

export default function AccessControl() {
  const { user } = useAuth() || {}; // Access the logged-in user's data
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const [roles, setRoles] = useState<Role[]>([]); // State to store roles
  const [newRole, setNewRole] = useState({
    roleId: 0,
    roleName: "",
    description: "",
  }); // State for new/edit role form
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [isEditing, setIsEditing] = useState(false); // State to track if editing a role

  // Redirect to login if the user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/Login"); // Redirect to the login page
    }
  }, [user, navigate]);

  // Fetch roles from the API
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles(); // Call GET API to fetch roles
        setRoles(response.data);
      } catch (error) {
        alert("Error fetching roles:");
      }
    };

    fetchRoles();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRole((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for adding or editing a role
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      // Call PUT API to update the role
      if (!user) return; // Ensure user is logged in before proceeding
      const updatedRole = await updateRoles(
        newRole.roleId,
        newRole.roleName,
        newRole.description,
        Number(user.userID) // Pass the logged-in user's ID
      );
      setRoles((prev) =>
        prev.map((role) =>
          role.roleId === newRole.roleId ? { ...role, ...newRole } : role
        )
      );
    } else {
      // Call POST API to add a new role
      if (!user) return; // Ensure user is logged in before proceeding
      const newRoleData = {
        roleName: newRole.roleName,
        description: newRole.description,
        createdBy: 1, // Currently we are getting email, in the login API, so harding codeing for now
      };
      try {
        const response = await addRoles(newRoleData); // Call the API to add a new role
        console.log("Adding New Role:", response.data);
        setRoles((prev) => [...prev, response.data]); // Update the roles state with the new role
      } catch (error) {
        console.error("Error adding role:", error);
      }
    }
    setNewRole({ roleId: 0, roleName: "", description: "" }); // Reset the form
    setShowForm(false); // Hide the form
    setIsEditing(false); // Reset editing state
  };

  // Handle editing a role
  const handleEdit = (role: Role) => {
    setNewRole({
      roleId: role.roleId,
      roleName: role.roleName,
      description: role.description,
    });
    setShowForm(true);
    setIsEditing(true);
  };

  // Handle deleting a role
  const handleDelete = (roleId: number) => {
    // Call DELETE API to delete the role
    alert("Deleting Role ID:");
    const deleteRole = deleteRoles(roleId); // Call the API to delete the role
    setRoles((prev) => prev.filter((role) => role.roleId !== roleId)); // Remove the role from the table
  };

  return (
    <div className="container">
      <h1>Roles</h1>

      {/* Role Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Role ID</th>
            <th>Role Name</th>
            <th>Description</th>
            {user?.permission[0].canUpdate || user?.permission[0].canDelete ? (
              <th>Actions</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.roleId}>
              <td>{role.roleId}</td>
              <td>{role.roleName}</td>
              <td>{role.description}</td>
              {user?.permission[0].canUpdate ||
              user?.permission[0].canDelete ? (
                <td>
                  {user?.permission[0].canUpdate && (
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(role)}
                    >
                      Edit
                    </button>
                  )}
                  {user?.permission[0].canDelete && (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(role.roleId)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Role Button */}
      {user?.permission[0].canAdd && (
        <button
          className="btn btn-primary mb-3"
          onClick={() => {
            setShowForm((prev) => !prev);
            setIsEditing(false); // Reset editing state when toggling the form
            setNewRole({ roleId: 0, roleName: "", description: "" }); // Reset the form
          }}
        >
          {showForm ? "Cancel" : "Add Role"}
        </button>
      )}

      {/* Add/Edit Role Form */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="roleName" className="form-label">
              Role Name
            </label>
            <input
              type="text"
              id="roleName"
              name="roleName"
              className="form-control"
              value={newRole.roleName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-control"
              value={newRole.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            {isEditing ? "Update Role" : "Add Role"}
          </button>
        </form>
      )}
    </div>
  );
}
