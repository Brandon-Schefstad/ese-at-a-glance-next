import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Login from '../src/components/Login'
interface student {
	_id: String
	firstName: String
	lastName: String
	email: String
}

const dashboard = () => {
	const { push, query, isReady } = useRouter()
	const [data, setData] = useState([])
	const { data: session, status } = useSession()

	useEffect(() => {
		const id = session?.id
		fetchData(id)
	}, [session])
	console.log(session)

	if (status === 'unauthenticated') {
		return <p>Access Denied</p>
	}

	async function fetchData(id: string) {
		if (id) {
			fetch(`http://localhost:3000/api/getStudents/${id}`, {})
				.then((response) => response.json())
				.then((data) => setData(data))
		}
	}

	return (
		<>
			<Login />
			{data.map((teacher: student) => {
				return <h1 key={teacher?._id}>{teacher?.firstName}</h1>
			})}
			<a href="/addNewStudent"> Go To Next Page</a>
		</>
	)
}

export default dashboard
