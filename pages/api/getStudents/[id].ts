import connectDb from '../connect-db'

export default async function getTeachers(req, res) {
	const collection = await connectDb(
		req,
		res,
		'students',
		'caseManager',
		`${req.query.id}`
	)
	res.json(collection)
}
