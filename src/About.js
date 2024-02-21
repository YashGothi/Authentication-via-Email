import NavBar from "./NavBar";

function About()
{
	return(
		<>
			<center>
				<NavBar/>
				<h1> About Page </h1>
				<h2> <p>
					This App was made with the help of  <br/>	
						ReactJS for front-end <br/>
						ExpressJS and NodeJS for back-end <br/>
						and made use of firebase for authentication<br/>
				</p> </h2>
			</center>
		</>
	);
}

export default About;
