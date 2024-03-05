import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Categories from '../components/Categories'


function Home() {
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <Add setUploadVideoResponse={setUploadVideoResponse}/>
      <Link to={'/watch'}>view History</Link>
    </div>
    <div className="container-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
        <h3>All Details</h3>
        <View uploadVideoResponse={uploadVideoResponse}/>
      </div>
      <div className="col-lg-6">
      <Categories/>
       
      </div>
    </div>
    </>
  )
}

export default Home