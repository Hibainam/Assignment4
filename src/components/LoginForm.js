import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Use axios for making API calls

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      // API call to handle login using email and password
      const response = await axios.post('https://cf-production.up.railway.app/jwt/login', {
        username: email,
        password: password,
      });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('token', data.token); // Save the token
        window.location.href = '/StudentDashboard'; // Redirect to dashboard
      } else {
        throw new Error('Invalid credentials.');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials and try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-500 text-white text-lg font-bold py-2 px-6 rounded-full shadow-md">
            STUDENT LOGIN
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <img
            alt="Illustration of students wearing graduation caps"
            className="rounded-full border-4 border-yellow-500"
            height="150"
            src="./logohome.jpg"
            width="150"
          />
        </div>

        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email ID
            </label>
            <div className="flex items-center border-b border-yellow-500 py-2">
              <input
                aria-label="Email ID"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email ID"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="fas fa-user text-gray-500"></i>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border-b border-yellow-500 py-2">
              <input
                aria-label="Password"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fas fa-lock text-gray-500"></i>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'LOGIN'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <Link
              to="/Registration"
              className="text-yellow-500 hover:text-yellow-600 font-bold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;  