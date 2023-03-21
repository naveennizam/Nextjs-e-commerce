import { connectToDatabase } from "./connection"

export const findProductById = async id => {
    let client = await connectToDatabase()
    let table = "products"
  
    const [rows, fields] = await client.query(
      "SELECT * FROM " + table + " WHERE ProductId = ?",
      [id]
    )
  
    return rows[0]
  }