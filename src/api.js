import axios from 'axios';

const register = async (firstName, lastName, email, college, password) => {
    const response = await axios.post('http://localhost:8000/register', {
        firstName,
        lastName,
        college,
        email,
        password
    });
    return response.data;
};

export { register };