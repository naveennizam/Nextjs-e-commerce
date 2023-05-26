import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Paginate from '../../../Components/pagination'
import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';
import { useParams } from 'react-router-dom';
import { useRouter } from "next/router";
import { PaginationItem } from '@mui/material';


const PremiumDress = (props) => {
    const [premiumPiece, setPremiumPiece] = useState([]);
    const [count, setcount] = useState()
    let [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    let currentPosts = premiumPiece.slice(0, postsPerPage);

    const router = useRouter();

    // let g = (router.components);
    // let d = Object.values(g)
    // console.log(d[2].props.pageProps.page);

    const paginated = (event, value) => {

        // router.replace({
        //     pathname: '/front/premiumfront',
        //     query: { page: `${value}`, }
        // })


        setCurrentPage(value);
    };

    const getData = async () => {
        try {

            await fetch("/api/premiumPiece?" + new URLSearchParams({
                page: `${currentPage}`, limit: `${postsPerPage}`, skip: `${currentPage * postsPerPage - postsPerPage}`
            }), {
                method: "GET",
            }).then((res) => res.json())
                .then(db => {
                    setcount(db.count);
                    setPremiumPiece(db.data)
                })
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        // window.scrollTo(0, 0)
        getData()

    }, [currentPage])

    return (
        <div>
            <div className='d-flex justify-content-evenly flex-wrap' >
                {currentPosts.length > 0 &&
                    currentPosts.map((blogitem) => {
                        return (
                            <div key={blogitem.ProductId} >
                                <Link href={{
                                    pathname: `/forSlug/${blogitem.prodCode}`
                                }} className={styles.onefront}>

                                    <div className="card my-5 mx-4 shadow-lg bg-white rounded" style={{ width: "18rem" }}>
                                        <img src={blogitem.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{blogitem.prodName}</h5>
                                            <p className="card-text" id={styles.para}>{blogitem.prodCode}</p>
                                            <p className="card-text" id={styles.para}>{blogitem.slug}</p>
                                            <p className="card-text fw-bold" id={styles.para}>Rs. {blogitem.prodPrice}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
            </div>

            <div style={{ position: 'absolute', right: '100px' }}>
                <Pagination
                    onChange={paginated}
                    count={Math.ceil(count / postsPerPage)}
                    color="secondary"
                    defaultPage={1}


                />
            </div>
        </div>
    )

}
export default PremiumDress

export const getServerSideProps = async (context) => {

    const page = (context.req.headers.referer) //previous Page URL

    return { props: { page } };
};