import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import App from "./app.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center" id="app">
			
			<App /> 

		</div>
	);
};

export default Home;
