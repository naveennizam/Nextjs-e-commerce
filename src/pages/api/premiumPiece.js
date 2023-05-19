import { premiumPieceDress, getCount } from "../../../database/productTable"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const table = 'premium_lawn'

    let count = await getCount(table)
    let data = await premiumPieceDress()
   

    res.status(200).json({data,count});


  } else {
    return res.status(405).json({ message: "Method not allowed." })
  }
}

export default handler
