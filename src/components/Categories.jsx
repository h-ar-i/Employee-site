import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Categories() {

  const [allCategories,setAllCategories] = useState([])
    const [CategoryName,setCategoryName] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setCategoryName("")
    }
    const handleShow = () => setShow(true);
    const handleAddCategory =async ()=>{
      if(CategoryName){
        const result = await addCategoryAPI({CategoryName,mail:[]})
        handleClose()
        getAllCategories()
      }else{
        alert("please fill the form completely")
      }
    }

    const getAllCategories =async ()=>{
      const result = await getCategoryAPI()
      setAllCategories(result.data)
    }
    // console.log(allCategories);
    useEffect(()=>{
      getAllCategories()
    },[])

    const handleRemoveCategory =async (cId)=>{
      await removeCategoryAPI(cId)
      getAllCategories()
    }

    const dragOverCategory = (e)=>{
      e.preventDefault()
      console.log("check dragging over category");
    }

const videoDropped = async (e,categoryId)=>{
  console.log(`video dropped with vId:${e.dataTransfer.getData("videoId")},inside category id:${categoryId}`);

  const {data} = await getAVideoAPI(videoId)
      console.log(data);

   let selectedCategory=allCategories.find(item=>item.id==categoryId)
   selectedCategory.allVideos.push(data)
   console.log(selectedCategory);
   await updateCategoryAPI(categoryId,selectedCategory)
   getAllCategories()  
   
   
}

  return (
    <>
     <div className='d-flex  justify-content-between'>
     <h3>All Categories</h3>
    <button onClick={handleShow} style={{height:'60px',width:'60px'}} className='btn btn-primary rounded-circle fs-5'>+</button>
      </div>
      
      
    
    <div className="container-fluid mt-3">
      { allCategories.length>0? allCategories.map((item,index)=>(
          <div draggable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className="border rounded p-5 m-3">
            <div className='d-flex justify-content-between'>
          <h5>{item.CategoryName}</h5>
          <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className='fa-solid fa-trash text-primary'></i></button>
          </div>
          <div className="row mt-2">
      {
        item.allVideos?.length>0 && 
        item.allVideos?.map((video,index)=>{
          <div key={index} className="col-lg-6">
            <VideoCard displayData={video}/>
          </div>
        })
      }
      </div>

      </div>
      ))
        
        :<div className='text-primary fw-bolder'> NO CATEGORIES ARE ADED YET </div>
      }
    </div>
   
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <div className='border border-primary p-3'>
              <FloatingLabel
                controlId="floatingInputCaption"
                label="Category Name"
                className="mb-3"
            >
                <Form.Control type="text" value={CategoryName} onChange={e=>setCategoryName(e.target.value)} placeholder="Category Name" />
            </FloatingLabel>
              </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Categories