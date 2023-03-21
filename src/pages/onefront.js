import React from 'react'


import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Onepiece = (props) => {

    return <main >
        <div className='d-flex justify-content-evenly flex-wrap'>

            {props.data.length > 0 &&
                props.data.map((blogitem) => {
                    return (
                        // <div key={blogitem.slug} >
                        <div key={blogitem.slug} >
                            <Link href={`/forSlug/${blogitem.slug}`} className={styles.onefront}>
                                <div className="card my-5 mx-4 shadow-lg bg-white rounded" style={{ width: "18rem" }}>
                                    <img src={blogitem.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{blogitem.prodName}</h5>
                                        <p className="card-text" id={styles.para}>{blogitem.prodCode}</p>
                                        <p className="card-text" id={styles.para}>{blogitem.slug}</p>
                                        <p className="card-text" id={styles.para}>{blogitem.prodPrice}</p>
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
    const rest = await fetch("http://localhost:3000/api/fetchDataSql", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    let data = await rest.json()

    return { props: { data } }
    //return { props: {data : data} }
}


export default Onepiece