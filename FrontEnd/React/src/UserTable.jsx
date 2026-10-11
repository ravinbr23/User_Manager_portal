
function UserTable({ users, onEdit, onDelete }) {
  if (users.length === 0) {
    return (<p className="info">No users yet. Add one above!</p>);
  }

 
  const rows = users.map(function (user) {
    return (
      <tr key={user._id}>
        <td>{user.Name}</td>
        <td>{user.Email}</td>
        <td>{user.Gender}</td>
        <td>{user.MobileNumber}</td>
        <td>{user.Status}</td>
        <td>
          <button onClick={() => onEdit(user)}>Edit</button>
          <button className="danger" onClick={() => onDelete(user._id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="card table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Mobile Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default UserTable;