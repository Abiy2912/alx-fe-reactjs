import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`);
  }
};

export default fetchUserData;