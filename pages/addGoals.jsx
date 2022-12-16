import React from 'react'

const AddGoals = () => {
	return (
		<div>
			AddGoals
			<a href="/addNewStudent"> Go To Next Page</a>
			<form action="/student/addGoals" method="POST">
				<label htmlFor="ID">ID</label>
				<input type="text" name="ID" />
				<label htmlFor="goalGrade">Grade</label>
				<select name="goalGrade" id="">
					<option value="0">K</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
				</select>
				<label htmlFor="domain">Domain</label>
				<select name="domain" id="">
					<option value="curriculum">
						Curriculum and Learning Environment
					</option>
					<option value="socialEmotional">Social/Emotional</option>
					<option value="independentFunctioning">
						Independent Functioning
					</option>
					<option value="healthcare">Healthcare</option>
					<option value="communication">Communication</option>
				</select>
				<label htmlFor="goalText"></label>
				<textarea name="goalText" id="" cols="30" rows="10"></textarea>
				<label htmlFor="attained"></label>
				<input type="checkbox" name="attained" />
				<label htmlFor="notes"></label>
				<textarea name="notes" id="" cols="30" rows="10"></textarea>
			</form>
		</div>
	)
}

export default AddGoals
