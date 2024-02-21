import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp()
{
	const nav = useNavigate();
	useEffect( () => {
		if ( localStorage.getItem("un") != null)
			nav("/");
	})

	const [un, setUn] = useState("");
	const [pw1, setPw1] = useState("");
	const [pw2, setPw2] = useState("");
	const [msg, setMsg] = useState("");

	const hUn = (event) => {
		setUn(event.target.value);
	}
		
	const hPw1 = (event) => {
		setPw1(event.target.value);
	}

	const hPw2 = (event) => {
		setPw2(event.target.value);
	}
	
	const reg = (event) => {
  		event.preventDefault();
  		if (pw1 === pw2) {
 		const auth = getAuth();
    		createUserWithEmailAndPassword(auth, un, pw1)
      		.then(res => {
        	nav("/login");
      		})
      		.catch(err => {
        	// Check if the error code is for an existing user
        		if (err.code === "auth/email-already-in-use") {
        	  	alert("User already exists. Please log in.");
        		} else {
        			  // Handle other errors
        	 		 setMsg(err.message);
        			}
      			});
  		} 
		else {
		    setMsg("Passwords did not match.");
		  }
	}


	return(
		<>
			<center>
			<NavBar/>
				<h1> Sign Up Page </h1>
				<form onSubmit={reg}>
					<input type="email" placeholder="enter email" onChange={hUn}/>
					<br/><br/>
					<input type="password" placeholder="enter password" onChange={hPw1}/>
					<br/><br/>
					<input type="password" placeholder="confirm password" onChange={hPw2}/>
					<br/><br/>
					<input type="submit" value="Register" />
					<br/><br/>
				</form>	
				<h1> { msg } </h1>
			</center>
		</>
	);
}

export default SignUp;