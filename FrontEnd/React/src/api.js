import axios from 'axios'; 

const api = axios.create({
    baseURL:'http://localhost:5000/api',
});
  export function getErrorResponse (error){
    if(error&& error.response && error.response.data && error.response.data.message){
        return error.response.data.message;
    }
    if(error&&error.message){
        return error.message;
    }
    return 'something went wrong';
}
export default api;
