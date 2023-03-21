 //import * as fs from 'fs';


// export default async function handler(req, res) {
//     let data = await fs.promises.readdir('onepiece-unstitch')

//     let myFile;
//     let myBlog = []
//     for (let index = 0; index < data.length; index++) {
//         const item = data[index]
//         myFile = await fs.promises.readFile((`onepiece-unstitch/${encodeURIComponent(item)}`), (`utf-8`));
//         myBlog.push(JSON.parse(myFile))
//     }
//     res.status(200).json(myBlog)
// }


