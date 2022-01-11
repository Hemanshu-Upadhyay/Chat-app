import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const projectID = process.env.REACT_APP_projectID

toast.configure()
const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notification, setnotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      toast.success('Logged in successfully', setnotification(true));
      window.location.reload()
      toast.success('Logged in successfully', setnotification(true));

      setError('');
    } catch (err) {
      toast.error('Oops, incorrect credentials.',)  
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chat</span>
            </button>
  
          </div>
        </form>
      </div>
    </div>

  );
};

export default Modal;