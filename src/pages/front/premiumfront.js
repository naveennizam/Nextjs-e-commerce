import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Paginate from '../../../Components/pagination'
import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';

const PremiumDress = () => {
    const [premiumPiece, setPremiumPiece] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = premiumPiece.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {

        setCurrentPage(selected + 1);
    };

    const getData = async () => {
        try {

            await fetch("/api/premiumPiece?" + new URLSearchParams({
                page: `${currentPage}`, limit: `${postsPerPage}`, skip: `${currentPage * postsPerPage - postsPerPage}`
            }), {
                method: "GET",
            }).then((res) => res.json())
                .then(db => {
                    console.log(db.count);  // {total: 12}
                    setPremiumPiece(db.data)
                })
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData()

    }, [])

    return <main disableDynamicMediaQueries >
        <div className='d-flex justify-content-evenly flex-wrap' >

            {currentPosts.length > 0 &&
                currentPosts.map((blogitem) => {
                    return (
                        <div key={blogitem.slug} >
                            <Link href={`/forSlug/${blogitem.prodCode}`} className={styles.onefront}>
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
            {/* <Pagination  variant="outlined"   shape="rounded" 
   onChange ={paginate}
   count = {Math.ceil(premiumPiece.length / postsPerPage)}
page= {currentPage}
   /> */}

            <ReactPaginate
                onPageChange={paginate}
                pageCount={Math.ceil(premiumPiece.length / postsPerPage)}
                previousLabel={'Prev'}
                nextLabel={'Next'}
                containerClassName={'pagination'}
                pageLinkClassName={'page-number'}
                previousLinkClassName={'page-number'}
                nextLinkClassName={'page-number'}
                activeLinkClassName={'active'}
            />

        </div>
    </main>

}
export default PremiumDress