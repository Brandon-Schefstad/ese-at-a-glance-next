import React from 'react'

const addNewStudent = () => {
	return (
		<div>
			<h1>Add New Student Form</h1>
			<a href="/addAccommodations"> Go To Next Page</a>
			<form action="/api/student/addNewStudent" method="POST">
				<p>First Name</p>
				<input type="text" name="firstName" />
				<p>Last Name</p>
				<input type="text" name="lastName" />
				<p>ID Number</p>
				<input type="text" name="idNumber" />
				<p>Grade</p>
				<input type="number" name="grade" />
				<p>Primary Exceptionality</p>
				<input type="text" name="primary" />
				<p>IEP Due Date</p>
				<input type="date" name="firstName" />
				<p>Image</p>
				<label htmlFor="imageUpload">
					<input type="file" name="file" />
				</label>
				<input type="submit" value="Submit" />
				<input type="text" name="firstName" />
			</form>
		</div>
	)
}

export default addNewStudent
