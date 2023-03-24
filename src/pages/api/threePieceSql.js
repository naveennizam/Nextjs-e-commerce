import { connectToDatabase } from "../../../database/connection"

const handler = async (req, res) => {
  if (req.method === "GET") {

    let client = await connectToDatabase()
    let table = "products"

    const [rows, fields] = await client.query(
     // "SELECT * FROM " + table
     "SELECT * FROM " + table  +  " WHERE  prodName = '3PC lawn Unstitch Printed'"

    )

    res.json(rows)


  } else {
    return res.status(405).json({ message: "Method not allowed." })
  }
}

export default handler
