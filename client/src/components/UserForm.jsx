import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
const API = import.meta.env.VITE_API_URL;

const UseForm = () => {
  const {register,handleSubmit,reset,formState:{errors}}=useForm()
  console.log(API)

  const onsubmit=async(data)=>{
    // post data
    try{
      const response=await axios.post(`${API}/userData`,data)
      alert('Feedback SUbmitted Sucessfully')
      console.log('Server response:',response.status,response.data);
      reset()
    }
    catch(error){
      console.error('Error submitting form:',error)
      alert('Something went wrong. Please try again.')
    }
    // get data
    try{
      const res =await axios.get(`${API}`)
      console.log('this is feedback data',res.data)
    }
    catch(error){
      console.error('Error while getting data',error.message)

    }

  }       

return (
  <div className="min-h-screen flex  justify-center items-center bg-gray-100 p-4">
      <form 
      className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      onSubmit={handleSubmit(onsubmit)}>
        <h1 className="text-2xl font-semibold text-blue-600">Feedback Form Submission2</h1>
       <div>
         <label>Name:</label>
        <input {...register('name',{required:'Name is required'})}
        placeholder='Enter the name'
        />
       </div>
       <div>
        <label>Email:</label>
        <input {...register('email',{required:'Email is reuired',
          pattern:{
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          }
        })}
        placeholder='Enter the Email'/>
       </div>
        {errors.email && errors.email.message}

        <div>
          <label>Message:</label>
          <textarea {...register('message',{required:'Message is required',minLength:{value:10,message:'Message must be atleast 10 characters'}})}
          placeholder='Enter message here'
          />
          <br></br>
          {errors.message && errors.message.message}
        </div>
       <div> <button type='submit'>Submit</button></div>
      </form> 
    </div>
);

};

export default UseForm
