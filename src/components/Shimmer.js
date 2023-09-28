import React from 'react'

function Shimmer() {
  return (
    <div className='shim-container'>
        {/* <h1 style={{ color: "white", paddingTop: "20px", marginLeft: "20px" }} className='test'>________ </h1> */}
        <button className='shim-btn'></button>
        <div className='card-container'>
            <div className='card-div'></div>
            <div className='card-div'></div>
            <div className='card-div'></div>
            <div className='card-div'></div>
            <div className='card-div'></div>
            <div className='card-div'></div>
            <div className='card-div'></div>
        </div>
        <div className='pagingbtn'>
        <button  className='prevbtn' >prev</button><span className='pageno'>1</span><button  className='nextbtn'>Next</button>
      </div>
    </div>
  )
}

export default Shimmer
