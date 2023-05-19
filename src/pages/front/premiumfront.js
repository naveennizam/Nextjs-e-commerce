import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Paginate from '../../../Components/pagination'
import ReactPaginate from 'react-paginate';

const PremiumDress = () => {
    const [premiumPiece, setPremiumPiece] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;

    // console.log('indexOfLastPost', indexOfLastPost);

    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = premiumPiece.slice(indexOfFirstPost, indexOfLastPost);

    // console.log('currentPosts', currentPosts);

    const paginate = ({ selected }) => {

        setCurrentPage(selected + 1);
    };

    const getData = async () => {
        try {

            await fetch("/api/premiumPiece?" + new URLSearchParams({
                page: `${currentPage}`, first: `${postsPerPage}`, skip: `${currentPage * postsPerPage - postsPerPage}`
            }), {
                method: "GET",
            }).then((res) => res.json())
                .then(db => {
                    console.log(db);
                    setPremiumPiece(db)
                })
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData()

    }, [])
    console.log('premiumPiece', premiumPiece);
    return <main >
        <div className='d-flex justify-content-evenly flex-wrap'>

            {premiumPiece.length > 0 &&
                premiumPiece.map((blogitem) => {
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
            {/* <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button> */}
        </div>
    </main>

}
export default PremiumDress