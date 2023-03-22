
import React from 'react'
import { useState } from "react";
import styles from '@/styles/Home.module.css'


const Slug = (props) => {
    let [icr, setInc] = useState(1);
    function incrementQty() {
        var value = document.querySelector('button').value;
        var cardQty = document.querySelector(".cartqty");
        value = isNaN(value) ? 1 : value;
        value++;
        document.querySelector('button').value = value;
       //cardQty.= value;
   
      //  cardQty.classList.add("rotate-x");
    }


    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }



    const [blog, setblog] = useState(props.data);


    return <main id={styles.maindiv} >

        <div className="card my-5 mx-4 shadow-lg bg-white rounded" style={{ width: "18rem" }} id={styles.maindiv1}>
            <img src={blog && blog.image} className="card-img-top" alt="..." />

        </div>
        <div id={styles.maindiv2}>

            <h3 className="card-text" id={styles.para}>{blog && blog.prodName}</h3>
            <h6 className="card-title">{blog && blog.prodCode}</h6>
            <p className="card-text" id={styles.price}>PKR {blog && blog.prodPrice}</p>

            <div id={styles.maindivbt}>
                <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <button id={styles.bt} type="button" onClick={decNum}>-</button>
                    <input type="text" className="form-control" id="inputPassword2" value={num} onChange={handleChange} />
                    <button id={styles.bt} type="button" onClick={incNum}>+</button>
                </div>
            </div>


              <button type="button" className="btn btn-secondary btn-lg mx-3" onClick={incrementQty}>Add To Cart</button>
        </div>

    </main>
}

export async function getServerSideProps(context) {

    const rest = await fetch("http://localhost:3000/api/getslug?slug=" + context.query.slug, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    let data = await rest.json()

    return { props: { data } }

}
export default Slug