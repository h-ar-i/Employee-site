import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI'



function VideoCard({displayData,setDeleteVideoResponse}) {

  const [show,setShow] = useState(false)

  const handleClose = ()=> setShow(false)
  const handleShow = async ()=>  {
    setShow(true)
    //get video details
    const {email,password}= displayData
    let timeData = new Date()
   
    let timeStamp=new Intl.DateTimeFormat('en-us',{
      year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
    }).format(timeData)
    console.log(timeStamp);
    await saveHistoryAPI({email,password})
  }
   
  //remove card
  const deleteVideo = async (vId)=>{
     const result = await removeVideoAPI(vId)
    setDeleteVideoResponse(result.data)
    
  }

  const dragStarted = (e,vId)=>{
    console.log(`dragging started with vieo id:${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }
    
  
  return (
    <>
     <Card  draggable onDragStart={(e)=>dragStarted(displayData.id)} className='shadow'>
      <Card.Img  variant="top" style={{height:'200px',cursor:'pointer'}} src="https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
            <p>{displayData?.email}</p>
            <button onClick={()=>deleteVideo(displayData?.id)} className='btn '><i className='fa-solid fa-trash text-primary'></i></button>
        </Card.Title>
       {/* <button className='btn btn-primary'>CHECK</button> */}
        
      </Card.Body>
    </Card>
    </>
  )
}

export default VideoCard