import logo from './logo.svg';
import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';



function App() {
	if(!localStorage.getItem('username'))  return <LoginForm />

	const username = localStorage.getItem('username')
	const userSecret = localStorage.getItem('password')

  return (
  <ChatEngine
			height='100vh'
			userName={username}
			userSecret={userSecret}
			projectID='176829c0-082a-4a2f-bfe0-735e5ebb5fd6'
    	    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
		/>
  );
}

export default App;
