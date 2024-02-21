import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";

function Home()
{
	const nav = useNavigate();
	const [user, setUser] = useState("");
	useEffect(() => {
		let u = localStorage.getItem("un");
		if (u == null)
		{
			nav("/login");
		}
		else
		{
			setUser(u);
		}
	});

	const lo = (event) => {
		event.preventDefault();
		const auth = getAuth();
		localStorage.clear();
		signOut(auth)
		.then(res => {
			nav("/login")
		})
		.catch(err => console.log(err.message))
	}

	return(
		<>
			<center>
				<NavBar/>
				<h1> Home Page </h1>
				<h2> Welcome {user} </h2>
				<form onSubmit={lo}>
					<input type="submit" value="Logout" />
				</form>
			</center>
		</>
	);
}

export default Home;