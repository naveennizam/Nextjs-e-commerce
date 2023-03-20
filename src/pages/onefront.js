import React from 'react'
import * as fs from 'fs';
import { useState } from 'react';
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Onepiece = (props) => {
    const [blogging, setblog] = useState(props.myBlog);

    return <main >
        <div className='d-flex justify-content-evenly flex-wrap'>
            {blogging?.map((blogitem) => {
                return (
                    <div key={blogitem.slug}>
                        <Link href={`/forSlug/${blogitem.slug}`} className={styles.onefront}>
                            <div className="card my-5 mx-4 shadow-lg bg-white rounded" style={{ width: "18rem" }}>
                                <img src={blogitem.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{blogitem.name}</h5>
                                    <p className="card-text" id={styles.para}>{blogitem.code}</p>
                                    <p className="card-text" id={styles.para}>{blogitem.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    </main>

}  // one piece end parathesis


export async function getServerSideProps(context) {
    let data = await fs.promises.readdir('onepiece-unstitch');

    let myFile;
    let myBlog = [];
    for (var i = 0; i < data.length; i++) {
        const item = data[i];

        myFile = await fs.promises.readFile((`onepiece-unstitch/${encodeURIComponent(item)}`), (`utf-8`));
        myBlog.push(JSON.parse(myFile))
    }
    return { props: { myBlog } }
}

export default Onepiece