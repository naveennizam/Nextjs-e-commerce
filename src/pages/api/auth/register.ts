import { hash } from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import {findUserByEmail, insertUser} from '../../../../database/user';
//import {register} from '../../../modules/sendmail/email';

const handler = async (req: NextApiRequest,res: NextApiResponse) => {

    if (req.method === 'POST') {

        

    const { name, email, password } = req.body;

    const userExists = await findUserByEmail(email);

    if (userExists)
        return res.status(422).json({ message: 'email '+email+' already exists' });

        const obj = {
            email:email,
            password: await hash(password, 12),
            name: name,
           // country: country
        };
            
        const insert = await insertUser(obj);    
        
      //  register(obj);
        
        res.status(201).json({ message: 'User created', ...insert });

    } 

}   
 
export default handler; 