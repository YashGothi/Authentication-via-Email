import NavBar from './NavBar';
import { useState, useEffect } from "react";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ChangePassword()
{
	const nav = useNavigate();
	
	const [pw1, setPw1] = useState("");
	const [pw2, setPw2] = useState("");
	const [msg, setMsg] = useState("");
	
	const hPw1 = (event) => {
		setPw1(event.target.value);
	}

	const hPw2 = (event) => {
		setPw2(event.target.value);
	}

	const changePassword = (event) => {
		event.preventDefault();
		if (pw1 == pw2)
		{
			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
			if (user) {
			updatePassword(user, pw1)
			.then(res => nav("/"))
			.catch( err => setMsg(err.mesage));
			} else {
			} });
		}
		else
		{
			setMsg("passwords did not match");
		}
	}

	return(
		<>
			<center>
			<NavBar/>
				<h1> ChangePassword </h1>
				<form onSubmit={changePassword}>
		<input type="password" placeholder="enter new password"
		onChange={hPw1}/> 		<br/><br/>
		<input type="password" placeholder="confirm new password"
		onChange={hPw2} />  	<br/><br/>
		<input type="submit" value="Change" />		<br/><br/>
				</form>
				<h1> { msg } </h1>
			</center>
		</>
	);
}

export default ChangePassword;

