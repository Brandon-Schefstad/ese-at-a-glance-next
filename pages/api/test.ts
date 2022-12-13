import clientPromise from '../../lib/mongodb'
export default async (req, res) => {
	try {
		const client = await clientPromise
		const db = client.db('ESE')
		const students = await db.collection('teachers').find({}).toArray()
		res.json(students)
	} catch (e) {
		console.error(e)
	}
}
