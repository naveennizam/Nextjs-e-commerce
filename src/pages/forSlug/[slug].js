import React from 'react'
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import * as fs from "fs"

const Slug = (props) => {

    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num < 1) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }



    const [blog, setblog] = useState(props.myBlog);


    return <main id={styles.maindiv} >

        <div className="card my-5 mx-4 shadow-lg bg-white rounded" style={{ width: "18rem" }} id={styles.maindiv1}>
            <img src={blog && blog.img} className="card-img-top" alt="..." />
            <div className="card-body">

            </div>
        </div>
        <div id={styles.maindiv2}>

            <h3 className="card-text" id={styles.para}>{blog && blog.name}</h3>
            <h5 className="card-title">{blog && blog.slug}</h5>
            <p className="card-text" id={styles.price}>{blog && blog.price}</p>

            <div id={styles.maindivbt}>
                <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <button id={styles.bt} type="button" onClick={decNum}>-</button>
                    <input type="text" className="form-control" id="inputPassword2" value={num} onChange={handleChange} />
                    <button id={styles.bt} type="button" onClick={incNum}>+</button>
                </div>
            </div>


            <a href='../Cart/cart'>  <button type="button" className="btn btn-secondary btn-lg mx-3">Add To Cart</button></a>
        </div>
    </main>
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "black" } },
            { params: { slug: "pink" } },
            { params: { slug: "red" } },
            { params: { slug: "white" } },

        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {

    const { slug } = context.params
    let myBlog = await fs.promises.readFile(`onepiece-unstitch/${slug}.json`, 'utf-8')
    return { props: { myBlog: JSON.parse(myBlog) } }

}

export default Slug
