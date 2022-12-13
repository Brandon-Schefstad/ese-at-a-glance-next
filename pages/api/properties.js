export default async function handler(req, res) {
	res.json({ hello: 'world' })
}
// Go to /api/[fileName]  <- Will return res.json (controller?)
