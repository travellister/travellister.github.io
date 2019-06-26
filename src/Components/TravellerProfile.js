import React from 'react';
import './../App.css';

function TravellerProfile() {
	return (
		<div className="Profile-Qns">
			<input className="cb" type ="checkbox" />
			<p>Male</p>

			<input className="cb" type ="checkbox" />
			<p>Female</p>

			<input className="cb" type ="checkbox" />
			<p>Baby</p>

			<input className="cb" type ="checkbox" />
			<p>Child/Toddler</p>

			<input type="button" value="Submit" onclick="msg()"/>
		</div>
		)
}

export default TravellerProfile;