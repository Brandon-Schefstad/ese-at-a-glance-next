import { useState } from 'react'

const test = () => {
	const [data, setData] = useState('')
	return (
		<>
			<button
				onClick={() => {
					fetch('/api/test')
						.then((response) => response.json())
						.then((data) => setData(data))
				}}></button>
		</>
	)
}

export default test
