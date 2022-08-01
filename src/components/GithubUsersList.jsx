import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function GithubUsersList() {
const [users, setUsers] = useState([]);
const [loading,setLoading]=useState(true);
useEffect(() => {
 axios.get('https://api.github.com/users')
    .then(res => {
        setLoading(false);
        setUsers(res.data);
    }).catch(err=>{
        setLoading(false);
console.log(err);
    })
},[])

if(loading){
    return <Loading/>
}

return (
 <div className="font-serif"> 
     <h1 className='m-3 md:m-5 text-center text-3xl  md:text-4xl lg:text-5xl  xl:text-6xl capitalize ' >github users list</h1>
    <div className='container  grid  grid-cols-1 place-items-center gap-4 md:m-4  md:grid-cols-2 md:place-items-start 
    lg:grid-cols-3 xl:text-left xl:grid-cols-4'>  
{
            users.map((user) => {const {id, login,repos_url ,avatar_url,  html_url} = user;
                return(
        <div key={id} className="h-full w-4/6  md:h-full md:w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href={avatar_url}>
                    <img className="rounded-t-lg w-full h-90 object-cover" src={avatar_url} alt="User profile"/>
                </a>
                         
            <div className="p-6">
               
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{login}</h5>
                    <a href={html_url}>
                <p className="transition duration-500 ease-in-out mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400">visit profile</p>
                </a>
                <Link to={`/GithubUserDetails/${id}`} href={repos_url}  className="transition duration-500 ease-in-out inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-indigo-900 focus:ring-4 focus:outline-none">
                
                    Read more
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                  </div>
            </div>
                )}
            )}

</div>


</div>

)}
            
export default GithubUsersList;
