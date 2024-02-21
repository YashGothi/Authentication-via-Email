import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login()
{
	
	const nav = useNavigate();
	
	useEffect( () => {
		if ( localStorage.getItem("un")!= null)
			nav("/");
	})

	const [un, setUn] = useState("");
	const [pw, setPw] = useState("");
	const [msg, setMsg] = useState("");
	const [showLinks, setShowLinks] = useState(false); // State to control the visibility of the links


	const hUn = (event) => {
		setUn(event.target.value);
		
	}

	const hPw = (event) => {
		setPw(event.target.value);
	}

	const login = (event) => {
		event.preventDefault();
		  if (!un || !pw) {
     	 	  	alert("Email or password cannot be blank.");
      		  	return;
    		}
		const auth = getAuth();
		signInWithEmailAndPassword(auth, un, pw)
		.then(res => {
			nav("/");
			localStorage.setItem("un", un);
		})
		.catch( err => setMsg("Password or username is incorrect"))
		setShowLinks(true);  // Show the links when an error occurs
	}

	return(
		<>
			<center>
				<NavBar/>
				<h1> Login Page </h1>
				<form onSubmit={login}>
				<input type="email" placeholder="enter reg email" onChange={hUn}/>
				<br/><br/>
				<input type="password" placeholder="enter password" onChange={hPw}/>
				<br/><br/>
				<input type="submit" value="Login"/>
				<br/><br/>
				</form>
				{showLinks && ( // Conditionally render the links based on the showLinks state
          			<div>
            				<a href="/signup">Sign Up</a> {/* Link to the sign-up page */}
            				<br />
            				<a href="/fp">Forgot Password?</a> {/* Link to the forgot password page */}
          			</div>
        				)}
        			{msg && <h1> {msg} </h1>}
			</center>
		</>
	);
}

export default Login;
