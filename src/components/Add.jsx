import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { uploadEmailAPI } from '../services/allAPI';


// const [show,setShow] = useState(false)

// const handleClose = ()=> setShow(false)
// const handleShow = ()=> {
//   setShow(true)
//   //get video details
//   const {email,password}= displayData
//   let timeData = new Date()
//   console.log(timeData);
// }

function Add({setUploadVideoResponse}) {
const [uploadVideo,setUploadVideo]=useState({
    email:"",password:""
})
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setUploadVideo({...uploadVideo,email:"",password:""})
    }
    const handleShow = () => setShow(true);

    // console.log(uploadVideo);

        const handleUpload= async ()=>{
            //store email in localhost 3000/email
            const {email,password}=uploadVideo
            if(email || password){
                //proceed to store email
                const result = await uploadEmailAPI(uploadVideo)
                console.log(result);
                if(result.status>=200 && result.status<300){
                    alert(`Data '${result.data.email}' uploaded sucessfully`)
                    setUploadVideoResponse(result.data)
                    handleClose()
                }else{
                    alert("API CALL FAILED ")
                }
                // alert("please check again")
            }else{
                alert("please fill the form completely")
            }
        }

  return (
    <>
    <div className="d-flex">
        <h3>Upload Details</h3>
        <button onClick={handleShow} className='btn bg-primary ms-2 rounded-circle'><i className="fa-solid fa-paper-plane"></i></button>
    </div>
    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Fil the form !! </p>
            <div className='border rounded border-primary p-3'>
        <FloatingLabel
        controlId="floatingInputCaption"
        label="Email address"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.email} onChange={e=>setUploadVideo({...uploadVideo,email:e.target.value})} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      
      
      <FloatingLabel value={uploadVideo.password} onChange={e=>setUploadVideo({...uploadVideo,password:e.target.value})}  controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="primary" onClick={handleUpload}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
