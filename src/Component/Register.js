import React, { useEffect, useState } from 'react'
import img1 from '../img/10.jpg'
import axios from 'axios'
// import { signUp } from '../services/user_service'

export default function Register() {


  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    contact: ''


  })

  // useEffect(()=>{
  //   console.log(data)
  //     },[data])

  const [error, setError] = useState({
    errors: {},
    isError: false
  })

  //handle change

  const handleChange = (event, property) => {
    // console.log("Name Changed ");
    // console.log(event.target.value)
    // setData({...data,name:event.target.value})

    setData({ ...data, [property]: event.target.value })

  }


  const resetData = () => {
    setData({
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      contact: ''
    })
  }


  const submitForm = (event) => {
    event.preventDefault() //to avoid default...means after refresh it willl clear the data
    console.log(data);


    axios.post('http://localhost:8080/saveUser', data)
      .then(response => response.data)
      .then(response => {
        console.log(response)
        console.log("Success Log")
      })
      .catch((error) => {
        console.log("Error Log")
      })
  }

  return (
    <div>

      {JSON.stringify(data)}
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

      <form class="mx-1 mx-md-4" onSubmit={submitForm}>

        <div class="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="text" id="form3Example1c" class="form-control"
              onChange={(e) => handleChange(e, 'firstName')}
              value={data.firstName}
            />
            <label class="form-label" for="form3Example1c">First Name</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="text" id="form3Example1c" class="form-control "
              onChange={(e) => handleChange(e, 'lastName')}
              value={data.lastName}
            />
            <label class="form-label" for="form3Example1c">Last Name</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="email" id="form3Example3c" class="form-control" onChange={(e) => handleChange(e, 'email')}
              value={data.email}

            />
            <label class="form-label" for="form3Example3c">Your Email</label>
          </div>
        </div>



        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="text" id="form3Example1c" class="form-control " onChange={(e) => handleChange(e, 'userName')}
              value={data.userName}

            />
            <label class="form-label" for="form3Example1c">User Name</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="password" id="form3Example4c" class="form-control"
              onChange={(e) => handleChange(e, 'password')}
              value={data.password}
            />
            <label class="form-label" for="form3Example4c">Password</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="password" id="form3Example4cd" class="form-control"
              onChange={(e) => handleChange(e, 'contact')}
              value={data.contact}

            />
            <label class="form-label" for="form3Example4cd">Contact</label>
          </div>
        </div>

        <div class="form-check d-flex justify-content-center mb-5">
          <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
          <label class="form-check-label" for="form2Example3">
            I agree all statements in <a href="#!">Terms of service</a>
          </label>
        </div>

        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type='submit' class="btn btn-primary btn-lg" value='Submit' >Register</button>
        </div>

        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="reset" class="btn btn-primary btn-lg" onClick={resetData}>Reset</button>
        </div>

      </form>
      <img src={img1} class="img-fluid" alt="Sample image" />
    </div>

  )
}




