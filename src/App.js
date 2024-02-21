import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import About from './About';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ZNWyl8QWXPzaXmg7ZhbCoBVOBtrPjMQ",
  authDomain: "reactjs8aug22.firebaseapp.com",
  databaseURL: "https://reactjs8aug22-default-rtdb.firebaseio.com",
  projectId: "reactjs8aug22",
  storageBucket: "reactjs8aug22.appspot.com",
  messagingSenderId: "511738388573",
  appId: "1:511738388573:web:7e6b7aa9eb438d54436db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/> }/>
				<Route path="/login" element={<Login/> }/>
				<Route path="/signup" element={<SignUp/> }/>
				<Route path="/about" element={<About/> }/>
				<Route path="*" element={<Navigate to="/"/> }/>
				<Route path="/cp" element={<ChangePassword/>} />
				<Route path="/fp" element={<ForgotPassword/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
