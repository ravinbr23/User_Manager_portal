import { useEffect, useState } from 'react';

const emptyForm = { Name: '', Email: '', Gender: '', MobileNumber: '', Status: 'Active' };

function UserForm({ editingUser, onSave, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingUser) {
      setForm({ ...emptyForm, ...editingUser });
    } else {
      setForm(emptyForm);
    }
  }, [editingUser]);

  function handleChange(e) {
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  }

  const handleSubmit = async (e, onSave) => {
    e.preventDefault();
    const worked = await onSave(form);
    if (worked) {
      setForm(emptyForm);
    }
  };

  let title = 'Add User';
//   let cancelButton = null;
  if (editingUser) {
    title = 'Edit User';
    // cancelButton = <button type="button" onClick={onCancel}>Cancel</button>;
  }

  return (
    <form className="card form" onSubmit={(e)=>handleSubmit(e,onSave)}>
      <h2>{title}</h2>

      <div className="grid">
        <input name="Name" placeholder="Name" value={form.Name} onChange={handleChange} required />
        <input name="Email" type="email" placeholder="Email" value={form.Email} onChange={handleChange} required />

        <select name="Gender" value={form.Gender} onChange={handleChange}>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input name="MobileNumber" placeholder="Mobile Number" value={form.MobileNumber} onChange={handleChange} />

        <select name="Status" value={form.Status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="actions">
        <button type="submit" className="primary">{title}</button>
        {/* {cancelButton} */}
        { editingUser ? (<button type="button" onClick={onCancel}>Cancel</button>) : ''}
      </div>
    </form>
  );
}

export default UserForm;