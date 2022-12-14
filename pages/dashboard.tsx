import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Login from '../src/components/Login'
interface teacher {
	firstName: String
	lastName: String
	email: String
}

const dashboard = () => {
	const [data, setData] = useState([])
	const { data: session, status } = useSession()
	console.log(session)
	console.log(status)
	useEffect(() => {
		fetchData()
	}, [])
	if (status === 'unauthenticated') {
		return <p>Access Denied</p>
	}
	async function fetchData() {
		fetch('http://localhost:3000/api/getTeachers')
			.then((response) => response.json())
			.then((data) => setData(data))
	}
	console.log(data)
	return (
		<>
			<Login />
			{data.map((teacher: teacher) => {
				return <h1>{teacher.firstName}</h1>
			})}
		</>
	)
}

export default dashboard
