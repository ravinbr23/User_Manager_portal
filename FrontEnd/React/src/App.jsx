import { useState } from 'react'

import './App.css'
import api, { getErrorResponse } from './api';
import { useEffect } from 'react';
import UserTable from './UserTable';
import UserForm from './UserForm';

function App() {
const [User,setUser]=useState([]);
const [EditingUser,SetEditingUser]=useState(null);
const [Loading,setLoading]=useState(true);
const[Error,setError]=useState('');

const LoadUsers= async ()=>{

  try {
    const response =await api.get('/users');
    setUser(response.data);
    setError('');

  }
  catch(err){
    setError(getErrorResponse(err));
  }

  finally{
      setLoading(false);
  }
};
useEffect( ()=>{LoadUsers();},[]);

const handleSave = async (formData)=>{

  try{

  if (!EditingUser){
    
       await api.post('/users',formData);

    }
    else {
     
     await api.put('/users/' +EditingUser._id,formData);
     SetEditingUser(null);


    }

    setError('');
    await LoadUsers();
    return true;

  }

  catch(err){
    setError(getErrorResponse(err));
    return false ;
  }
};

const handleDelete = async (id)=>{

   const reConfirm = window.confirm('Are you sure to Delete this user ? ');
   if(!reConfirm){
    return;
   }
  try {
    await api.delete('/users/' + id);
    await LoadUsers();
  }
  catch(err){
    setError(getErrorResponse(err));
  }
}
function startEditingUser(User){
  SetEditingUser(User);
}
function cancelEditing(){
  SetEditingUser(null);
}
let errorBox=null;
if ( Error !==''){
  errorBox=(
    <div className='alert'>
      {Error}
      <button onClick ={()=>setError('')}>X</button>
    </div>
  )
}


let tableArea ;
if(Loading){
  tableArea =<p className='info'>
    Loading USers .....
  </p>
}
else {
  tableArea = (
    <UserTable users = {User}
    onEdit = {SetEditingUser}
    onDelete ={handleDelete}
></UserTable>
  );

}
  return (
    <> 
    <div className='title'>
      <h1>User Manager Table</h1>
    </div>
    {errorBox}
<div>
    <UserForm
      editingUser ={EditingUser}
      onSave ={handleSave}
      onCancel={cancelEditing}
    ></UserForm>
    {tableArea}
    </div>
    </>
  )
}

export default App
