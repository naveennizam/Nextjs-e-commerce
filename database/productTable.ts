import { connectToDatabase } from "./connection"

export const findProductById = async (id) => {
    let client = await connectToDatabase()
    let table = "products"
  
    const [rows, fields] = await client.query("SELECT * FROM " + table + " WHERE ProductId = ?",[id])
  
    return rows[0]
  }

  export const onePieceDress = async () => {
    let client = await connectToDatabase()
    let table = "products"
  
    const [rows, fields] = await client.query(  "SELECT * FROM " + table  +  " WHERE  prodName = '1PC lawn Unstitch Printed'")
  
    return rows
  }



  export const twoPieceDress = async () => {
    let client = await connectToDatabase()
    let table = "products"
  
    const [rows, fields] = await client.query( "SELECT * FROM " + table  +  " WHERE  prodName = '2PC lawn Unstitch Printed'"
    )
    return rows
  }

  export const threePieceDress = async () => {
    let client = await connectToDatabase()
    let table = "products"
  
    const [rows, fields] = await client.query(  "SELECT * FROM " + table  +  " WHERE  prodName = '3PC lawn Unstitch Printed'")
  
    return rows
  }

  export const premiumPieceDress = async () => {
    let client = await connectToDatabase()
    let table = "products"
  
    const [rows, fields] = await client.query("SELECT * FROM " + table  +  " WHERE  prodName = '4PC lawn Unstitch Printed'")
  
    return rows
  }

  export const getCount = async (table) =>{
    let client = await connectToDatabase()
 

    const [ rows, field]  =await client.query(`SELECT COUNT(ProductId) AS total FROM ${table}`)
return rows
  }