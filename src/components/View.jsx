import React, { useEffect, useState } from 'react'
import { Row,Col} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllEmailAPI } from '../services/allAPI'



function View({uploadVideoResponse}) {


  const [email,setEmail] =useState([])
  const[deleteVideoResponse,setDeleteVideoResponse] = useState("")

  const getAllEmail= async ()=>{
     const result = await getAllEmailAPI()
    //  console.log(result);
     if(result?.status==200){
      setEmail(result?.data);
     }
  }

  useEffect(()=>{
    getAllEmail()
  },[uploadVideoResponse,deleteVideoResponse])
// console.log(email);
  return (
    <>
    <Row>
        {email?.length>0? email?.map((email,index)=>(
        <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
            <VideoCard displayData={email} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        ))
        :
          <div className='text-primary'>nothing to display</div>
        }
    </Row>

    </>
  )
}

export default View