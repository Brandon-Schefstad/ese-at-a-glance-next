import connectDb from './connect-db'

export default async function getTeachers(req, res) {
	const collection = await connectDb(req, res, 'teachers')
	res.json(collection)
}
