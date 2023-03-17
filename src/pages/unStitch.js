import Link from 'next/link'
import React from 'react'



const Unstitch = () => {



  return (
    <>

      <a href="https://www.gulahmedshop.com/unstitched-fabric" className=' py-0'>
        <img src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/wb.jpg" className="img-fluid py-0" alt="Men Unstitched" />
      </a>
      <div className=' cdz-banner py-0'>

        <div className='row d-flex justify-content-evenly flex-wrap '>
          <div className="col-md-12 hovereffect " >
          <Link href={'/onefront'}>  <img style={{ width: '49%' }} className="px-1 py-1" src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/01.jpg" alt="..." /> </Link>
          <Link href={'/'}>  <img style={{ width: '49%' }} className="px-1 py-1" src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/02.jpg" alt="..." /> </Link>
          </div>
        </div>

        <div className='row '>
          <div className="col-md-12 " >
            <img style={{ width: '50%' }} className="px-1 py-1" src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/03.jpg" alt="..." />
            <img style={{ width: '50%' }} className="px-1 py-1" src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/14_ideas_unstitched/23_02_13/06.jpg" alt="..." />
          </div>
        </div>

      </div>

 
    </>
  )
}

export default Unstitch