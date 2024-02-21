import { Link } from "react-router-dom";

function NavBar()
{
	return(
		<>
			<center>
				<div class="nav">
					<Link to="/" >Home</Link>
					<Link to="/create"><b> Create Task </b></Link>
				</div>
			</center>
		</>
	);
}

export default NavBar;