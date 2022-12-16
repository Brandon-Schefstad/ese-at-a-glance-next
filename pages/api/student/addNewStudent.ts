import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const studentFromForm = req.body
	let { firstName, lastName, idNumber, grade, primary, file } = studentFromForm
	firstName = firstName[0]
	studentFromForm.firstName = firstName
	console.log(studentFromForm)
	if (req.method === 'POST') {
		res.redirect('/addGoals')
	}
}
