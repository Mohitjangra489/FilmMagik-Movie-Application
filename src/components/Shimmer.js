import React ,{useState}from 'react';
import { useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'


function Shimmer() {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
   setProgress(50);
  setProgress(90);
   setTimeout(()=>{
    setProgress(100);
   },1500);

  },[]);
  return (
    <div className='shim-container'>
    <LoadingBar
                color='#63E4DA'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                containerClassName="loading-bar"
                height={4}
                shadow={false}
                />
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
