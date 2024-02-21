import logo from './logo.svg';
import './App.css';
import Create from "./Create";
import Home from "./Home";
import MySideNav from './MySideNav';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<MySideNav/>
			<Routes>
				<Route path="/" element={<Home/>} />	
				<Route path="/create" element={<Create/>} />	
				<Route path="*" element={<Navigate to="/" />} />	
     		</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
