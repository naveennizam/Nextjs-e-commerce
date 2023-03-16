import {createPool, Pool} from 'mysql2/promise';



let client: Pool | undefined = undefined;

export async function connectToDatabase(): Promise <Pool> {

  if(client)
    return client;
 
  client = await createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database : "mydb"
  });

  return client;
  
}

