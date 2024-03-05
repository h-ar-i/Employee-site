import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'


function Watch() {
  const [history,setHistory] = useState([])
const getAllHistory= async()=>{
  const result = await getHistoryAPI()
  if(result.status>200 && result.status<300){
    setHistory(result.data)
  }
}
useEffect(()=>{
  getAllHistory()
},[])

const delteteHistory = async ()=>{
  //api call dor remove
  await removeHistoryAPI(vId)
  getAllHistory()
}

  return (
    <>
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between">
      <h3>History</h3>
      <Link to={'/home'}>Back To <i className='fa-solid fa-home'></i></Link>
      </div>
      <table className='table mb-5 mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>UN</th>
            <th>PW</th>
            <th>Time Stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
        { history?.length>0? history.map((video,index)=>(
          
           <tr key={index}>
           <td>{index+1}</td>
           <td>@un</td>
           <td>password</td>
           <td>01/00/10</td>
           <td><button onClick={()=>delteteHistory(video.id)} className='btn'><i className='fa-solid fa-trash text-primary'></i></button></td>
         </tr>
        ))
         :
        <tr className='text-primary fw-bolder'>empty history</tr>  
        }
        </tbody>

      </table>
      
      </div>
    </>
  )
}

export default Watch