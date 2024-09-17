import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.get(`https://api.github.com/users/${searchQuery}`);
      setUserData(response.data);
      navigate(`/user/${searchQuery}`);
    } catch (error) {
      setErrorMessage('Looks like we can\'t find the user.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      {isLoading ? <p>Loading...</p> : errorMessage && <p>{errorMessage}</p>}
      <BrowserRouter>
        <Routes>
          <Route path="/user/:username" element={<UserProfile user={userData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Search;