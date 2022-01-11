import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './Components/Chatfeed'
import LoginForm from './Components/LoginForm'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {
  const [notification, setnotification] = useState(false);

  const handlelogout = () => {
    toast.success('Logged out successfully',setnotification(true))
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    if(notification){
    window.location.reload()
    
  }
  }

  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <>
        <button className="btn" onClick={handlelogout}>Logout</button>

    <ChatEngine 
    height = "100vh"
    projectID = {process.env.REACT_APP_projectID}
    userName="Hari"
    userSecret="123456"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    {/* Craete Button on the top-right side  */}
    </>
    
  );
}

export default App;
