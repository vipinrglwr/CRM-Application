import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
// import './login.css'
import { useState, useEffect } from 'react'

const Login = () => {

        const initialValues = {
                userName: '',
                password: ''
        }

      const navigate =useNavigate()

      const [formValues,setFormValues]= useState(initialValues);

      const [formErrors,setFormErrors]= useState({});

      const [isSubmit , setIsSubmit]=useState(false);

        const handleChange=(event)=>{

            const{name,value}=event.target;
            
            setFormValues({...formValues, [name]:value});
        };

         const handleSubmit =(event)=>{
            event.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true);
   
        };
        
        const checkLogin=()=>{
                 axios.post('http://localhost:8080/checkLogin',formValues)
                 .then(responce=>responce.data)
                 .then(res=>{
                     if(res.status===200){
                         navigate('/registration')
                     }
                })
             }
        
        useEffect(() => {
            console.log(formErrors);
            if(Object.keys(formErrors).length === 0 && isSubmit){
                console.log(formValues);
            }

        },[formErrors]);

            const validate =(values)=>{
            const errors={};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

            if(!values.userName){
                errors.userName = "Email is required!";
            }else if (!regex.test(values.userName)){
                errors.userName = "This is not a valid email format!";
            }
            if(!values.password){
                errors.password= "Password is required";
            }else if (values.password.length < 7){
                errors.password =" Password must be more than 7 characters ";
            }else if (values.password.length >15){
                errors.password= "Password cannot exceed more than 15 characters "
            }
            return errors;
        };

    return (
             <form onSubmit={handleSubmit}>
            
             <div id='txt'>
            
             <p>
                Dont't have an account?<button><Link to="registration">Register here</Link></button>
            </p>

            <h2>Login</h2>
        
            <div className='container-s border border-white rounded-2  '>
            
            <div className='text-center'>
             <img src='https://thumbs.dreamstime.com/b/user-profile-icon-isolated-glassy-vibrant-sky-blue-round-button-illustration-user-profile-icon-glassy-vibrant-sky-blue-round-167324536.jpg' class="img-fluid"  alt='Responsive image' />   
            </div>

            <div className='form-floating m-3'>

                <input className='form-control' 
                placeholder='Enter userName'
                type='text' 
                name='userName' 
                value ={formValues.userName} 
                onChange={handleChange} />
                <label for='userName'>Enter userName</label>
           
            </div>

            <p>{formErrors.userName}</p>

            <div className='form-floating m-3'>

                <input className='form-control' 
                placeholder='Enter Password' 
                type='password' 
                name='password' 
                value ={formValues.password} 
                 onChange={handleChange} />            
                <label for='password'>Enter Password</label>
            </div>

            <p>{formErrors.password}</p>

            <div>

            <button className=' col-6 btn btn-success ' type='button' onClick={checkLogin}>Login</button>

            
            </div>
            <br/>
           

      </div>
     </div>
    </form>
    )

}

export default Login