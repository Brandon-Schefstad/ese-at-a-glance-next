import clientPromise from '../../lib/mongodb'
export default async (req, res, collection: string) => {
	try {
		const client = await clientPromise
		const db = client.db('ESE')
		return db.collection(collection).find({}).toArray()
	} catch (e) {
		console.error(e)
	}
}
