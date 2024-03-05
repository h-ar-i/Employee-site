import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {
  const navigate= useNavigate()
  // navigate to home page
  const handleNavigate = ()=>{
    navigate('/home')
  }
  return (
    <>
        <div className="container mt-5">
          <div className="header row align-items-center">
            <div className="col-lg-5">
              <b><h3>Welcome To <span style={{color:"red"}}>Employee Portal</span> </h3></b>
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste suscipit sequi amet enim quia hic delectus consequatur inventore, ipsam mollitia error omnis perspiciatis! Aut, est non totam a natus quisquam?</p>
              <button onClick={handleNavigate} className='btn btn-warning'>Get Started</button>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <img style={{height:'300px',width:'70%'}} src="https://pulsemotivation.com/wp-content/uploads/2022/02/Pulse-Motivation-Employee-engagement-strategy%E2%80%A8.gif" alt="" />
            </div>
          </div>
          <div className="features">
            <h3 className='text-center mt-4'><b>Feature's</b></h3>
            <div className="row mt-3">
              <div className="col-lg-4">
              <Card style={{height:'400px'}}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://navi.com/blog/wp-content/uploads/2023/03/PF-Withdrawal.jpg" />
      <Card.Body>
        <Card.Title>PF</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{height:'400px'}}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://www.legalmantra.net/admin/assets/upload_image/blog/payment-of-Bonus-act.jpg" />
      <Card.Body>
        <Card.Title>Bonus</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{height:'400px'}}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2021/03/Dhirendra.jpg" />
      <Card.Body>
        <Card.Title>Health Insurance</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
              </div>
            </div>
                                                             {/* 2d */}
            <div className="row">
              <div className="col-lg-4">
              <Card style={{height:'400px'}}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://images.indianexpress.com/2022/10/Social_Security_90825-e3a14.jpg?w=414" />
      <Card.Body>
        <Card.Title>Social Secqurity</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{height:'400px'}}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://c8.alamy.com/comp/2NBMYTX/paid-vacation-icon-monochrome-simple-sign-from-employee-benefits-collection-paid-vacation-icon-for-logo-templates-web-design-and-infographics-2NBMYTX.jpg" />
      <Card.Body>
        <Card.Title>VACATION</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{height:'400px'}}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://www.shutterstock.com/image-photo/persons-hand-making-salary-word-260nw-1118988773.jpg" />
      <Card.Body>
        <Card.Title>INCREMENT</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
              </div>
            </div>
          </div>
          <div className="row video border p-5 mt-5 rounded">
              <div className="col-lg-6">
                <h3 style={{color:'red'}}>COMPANY</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nisi, necessitatibus tempora itaque iste deleniti repellendus quos harum iure doloribus, adipisci provident vel ipsa ad modi, illo aliquid magnam velit!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam incidunt necessitatibus possimus vel quibusdam debitis repellat, deserunt a eum hic quis expedita nihil voluptatem reiciendis natus quam quo tempora iste?</p>
              </div>
              <div className="col-lg-6">
              <iframe width="100%" height="400" src={`https://www.youtube.com/embed/5fX9eQubzEE?autoplay=1`} title="HR Basics: Employee Benefits"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
          </div>
        </div>
        <hr />

    </>
  )
}

export default Landing