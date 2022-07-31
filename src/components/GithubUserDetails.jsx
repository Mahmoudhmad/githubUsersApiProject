import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import {useParams,useNavigate} from "react-router-dom";
import Loading from "./Loading";

function GithubUserDetails() {
  const [user,setUser] =useState({});
  const [loading,setLoading]=useState(true);
  const {id}=useParams();
  const Navigate=useNavigate();

useEffect(() => {
   axios.get(`https://api.github.com/users/${id}`)
    .then((res) => {
       setLoading(false);
        setUser(res.data)
    }).catch(err=>{
       setLoading(false);
console.log(err);
  })

})
if(loading){
    return <Loading/>
}

  return (

<section className='bg-gray-700 grid place-items-center '>
      <div className="container grid place-items-center w-96 px-6 py-20">
        <img className='rounded-t-lg w-full h-90 object-cover' src={user.avatar_url} alt="" />
        {
          user.name === null ? 
<h3 className="mb-3  text-xl md:text-2xl font-bold text-center text-white">
         <span className='text-gray-400'>Name:</span> name is not specified 
      </h3>
          :
      <h3 className="mb-3 text-xl md:text-2xl font-bold text-center text-white">
         <span className='text-gray-400'>Name:</span> {user.name}
      </h3>
        }
        <h4 className="my-4  text-xl md:text-2xl font-bold text-white">
          <span className='text-gray-400'>Type:</span> {user.type}
        </h4>

       {
      user.location === null ? 
<h3 className="mb-3  text-xl md:text-2xl font-bold text-center text-white">
         <span className='text-gray-400'>Location:</span> location is not set 
      </h3>
          :
          <h3 className="mb-6 text-xl md:text-2xl  font-bold text-center text-white">
         <span className='text-gray-400'>Loaction:</span> {user.location}
        </h3>
        }
   
        
        <a href={user.repos_url}        
        className="bg-white hover:bg-gray-400 font-bold text-md md:text-lg rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
          discover repository
        </a>

        <button data-modal-toggle="defaultModal" onClick={()=>Navigate('/')} type="button" className="font-bold text-white rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider bg-blue-700 hover:bg-blue-800 ">
        back home
          </button>
        </div>
      
    </section>

  )
}

export default GithubUserDetails;