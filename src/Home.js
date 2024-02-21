import db from "./fb";
import { get, ref, child, remove } from "firebase/database";
import { useState, useEffect } from "react";

function Home()
{
	const [info, setInfo] = useState([]);

useEffect(()=>{
	const dbref = ref(db);
	get(child(dbref, "task/"))
	.then((snapshot) => {
		if (snapshot.exists() ){
		setInfo([]);
		console.log(snapshot.val());
		const data = snapshot.val()
			if (data !== null) {
		Object.values(data).map((da) => {
				setInfo((oldArray) => [...oldArray, da]);
				});
					}
			}
			else
			{
				console.log("no data");
			}
		})
	},[])

	const delTask = (id) => {
		remove( ref(db, "task/" + id))
		.then(() => {
			alert("task removed ");
			window.location.reload();
		})
		.catch( (err) => console.log(err))
	}

	return(
	<>
	<center>
	<h1>  Home Page </h1>
	<table border="2" style={{ width:"80%"}}>
		<tr>
		<th> Task Description </th>
		<th> Delete option</th>
		</tr>
		{
			info.map( (e =>
			<tr style={{ "text-align":"center"}}>
			<td> { e.task }</td>
			<td> <button onClick = { () => { if
(window.confirm('are you sure')) delTask(e.uuid) }}> Delete </button> </td>
			</tr>
				))}
	</table>
	</center>
	</>
);
}

export default Home;
	