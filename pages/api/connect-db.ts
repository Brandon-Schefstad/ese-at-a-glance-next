import clientPromise from '../../lib/mongodb'
const ObjectId = require('mongodb').ObjectID
export default async (
	req,
	res,
	collection: string,
	filterName,
	filterValue
) => {
	try {
		const client = await clientPromise
		const db = client.db('ESE')
		if (filterName === 'caseManager') {
			filterValue = ObjectId(filterValue)
			return await db
				.collection(collection)
				.find({ [filterName]: filterValue })
				.toArray()
		}
		return await db
			.collection(collection)
			.find({ [filterName]: `${filterValue}` })
			.toArray()
	} catch (e) {
		console.error(e)
	}
}
