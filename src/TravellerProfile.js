import React from 'react';
import './../App.css';

function TravellerProfile() {
	return (
		<div className="Profile-Qns">
			<input type ="checkbox" />
			<p>Mae</p>

			<input type ="checkbox" />
			<p>Female</p>

			<input type ="checkbox" />
			<p>Baby</p>

			<input type="button" value="Click me" onclick="msg()">
			<p> Test </p>

			<input type ="checkbox" />
			<p>Child/Toddler</p>
		</div>
		)
}

function msg() {
	alert("Hi Victoria!");
}

export default TravellerProfile;