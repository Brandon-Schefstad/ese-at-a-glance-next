import { useState } from 'react'

interface teacher {
	firstName: String
	lastName: String
	email: String
}

const dashboard = () => {
	const [data, setData] = useState([])
	fetch('/api/test')
		.then((response) => response.json())
		.then((data) => setData(data))
	return (
		<>
			{data.map((teacher: teacher) => {
				return (
					<>
						<h1>{teacher.firstName}</h1>
						<h2>{teacher.lastName}</h2>
						<h3>{teacher.email}</h3>
					</>
				)
			})}
		</>
	)
}

export default dashboard
