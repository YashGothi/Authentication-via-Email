import { useState } from "react";
import db from "./fb";
import { uid } from "uid";
import { set, ref } from "firebase/database";

function Create()
{
	const [task, setTask] = useState("");
	
	const hTask = (event) => {
		setTask(event.target.value);
	}

	const save = (event) => {
		event.preventDefault();
		if (task == ""){
				alert("Enter something");
				return;
		}
		const uuid = uid();
		console.log(uuid);
		const data = {task, uuid};
		const r = ref(db, "task/" + uuid)
		set(r, data);
		alert("task saved");
		setTask("");
	}

	return(
		<>
			<center>
				<h1> Create Task </h1>
				<form onSubmit={save}>
					<textarea placeholder="enter task" rows={5} cols={30} onChange={hTask} value={task} />
					<br/><br/>
					<input type="submit" value="Save Task" />
				</form>
			</center>
		</>
	);
}

export default Create;
